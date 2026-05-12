import telegram
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import json
import re
import asyncio
from utils import analyze_token, execute_trade

# Load configuration
with open('config.json') as f:
    config = json.load(f)

bot = telegram.Bot(token=config['telegram_api_key'])

def start(update, context):
    update.message.reply_text('🚀 Apollo Snipe Bot active! Monitoring for opportunities...')

def set_alert(update, context):
    """Set a price alert for a token"""
    try:
        # Parse command: /alert <token> <target_price>
        args = context.args
        if len(args) < 2:
            update.message.reply_text('Usage: /alert <token_symbol> <target_price>')
            return
            
        token = args[0].upper()
        target_price = float(args[1])
        
        # Store alert (in-memory for now, will persist later)
        if 'alerts' not in context.user_data:
            context.user_data['alerts'] = {}
        context.user_data['alerts'][token] = target_price
        
        update.message.reply_text(f'✅ Price alert set for {token} at ${target_price}')
        
    except ValueError:
        update.message.reply_text('⚠️ Invalid price format. Use numbers only.')

async def monitor_messages(update, context):
    """Monitor channels for trading opportunities"""
    message = update.message.text
    
    # Check for keywords
    if any(keyword in message.lower() for keyword in config['keywords']):
        # Extract token mentions
        tokens = re.findall(r'\$([A-Z]+)', message)
        for token in tokens:
            analysis = analyze_token(token)
            if analysis['sentiment'] == 'positive':
                execute_trade(token, config['trade_settings']['default_buy_percentage'])
                
    # Check alerts
    if 'alerts' in context.user_data:
        for token, target_price in context.user_data['alerts'].items():
            if token in message:
                # Extract current price
                price_match = re.search(f'{token}\s*[=:]?\s*\$?([\d\.]+)', message)
                if price_match:
                    current_price = float(price_match.group(1))
                    if current_price >= target_price:
                        update.message.reply_text(f'🚨 ALERT: {token} hit target price of ${target_price}! Current: ${current_price}')
                        # Remove alert after triggering
                        del context.user_data['alerts'][token]

def main():
    updater = Updater(token=config['telegram_api_key'], use_context=True)
    dp = updater.dispatcher
    
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(CommandHandler("alert", set_alert))
    dp.add_handler(MessageHandler(Filters.text, monitor_messages))
    
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()