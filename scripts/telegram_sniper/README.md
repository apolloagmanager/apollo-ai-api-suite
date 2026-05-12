# Apollo Snipe Bot

Telegram bot for crypto token sniping

## Features
- Monitors crypto channels for token mentions
- Executes trades based on sentiment analysis
- **NEW**: Price alert notifications

## Setup
1. Install requirements: `pip install python-telegram-bot`
2. Create `config.json` with your API keys
3. Run: `python snipe_bot.py`

## Commands
- `/start` - Activate the bot
- `/alert <token> <price>` - Set price alert (e.g. `/alert ETH 3500`)

## Configuration
Edit `config.json`:
```json
{
  "telegram_api_key": "YOUR_TELEGRAM_API_KEY",
  "exchange_api_key": "YOUR_EXCHANGE_API_KEY",
  "target_channels": ["crypto_signals", "defi_alpha"],
  "keywords": ["snip", "gem", "launch"],
  "trade_settings": {
    "default_buy_percentage": 0.5,
    "default_sell_target": 1.5
  }
}
```