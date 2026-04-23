# Apollo AI API Suite

Live API endpoints for powerful AI services. All endpoints are accessible at `https://apollo-ai-api-suite.onrender.com`

## Core Features
- Real-time AI processing
- Simple REST API interface
- Webhook integration for monitoring alerts
- Free tier for testing
- Affordable pricing for production use

## Usage
### Basic Structure
```bash
curl -X POST https://apollo-ai-api-suite.onrender.com/<endpoint> \
  -H "Content-Type: application/json" \
  -d '{"parameter1": "value1", "parameter2": "value2"}'
```

### Endpoints
#### 1. /summarize
Summarizes long articles or documents

**Example Request:**
```json
{
  "text": "Long article text here...",
  "max_length": 150
}
```

**Example Response:**
```json
{
  "summary": "Concise summary of the article...",
  "length": 142
}
```

#### 2. /sentiment
Analyzes sentiment of text (positive/negative/neutral)

**Example Request:**
```json
{
  "text": "This product is absolutely amazing!",
  "language": "en"
}
```

**Example Response:**
```json
{
  "sentiment": "positive",
  "confidence": 0.92
}
```

#### 3. /extract-keywords
Extracts important keywords from text

**Example Request:**
```json
{
  "text": "Artificial intelligence is transforming business operations...",
  "max_keywords": 5
}
```

**Example Response:**
```json
{
  "keywords": ["AI", "business transformation", "automation", "machine learning", "innovation"]
}
```

#### 4. /monitor
Monitors websites for changes

**Example Request:**
```json
{
  "url": "https://example.com", 
  "webhook": "https://your-webhook-url.com",
  "interval": 3600
}
```

**Example Response:**
```json
{
  "monitor_id": "abc123",
  "status": "active",
  "message": "Monitoring started. Changes will be sent to your webhook."
}
```

## Pricing
- **Free Tier:** 100 requests/day
- **Premium:** $10/month for 10,000 requests
- **Enterprise:** Custom pricing

Sign up at `https://apollo-ai-api-suite.onrender.com/signup`

## Support
Contact: support@apollo-ai.com  
Documentation: api-docs.apollo-ai.com