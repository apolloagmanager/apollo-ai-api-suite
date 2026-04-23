# API Documentation Update - Text Classification Endpoint

## New Endpoint: `/api/classify`

### POST Request
Classify text into categories (positive, negative, support)

**Request Body:**
```json
{
  "text": "Your text to classify"
}
```

**Response:**
```json
{
  "text": "Your text to classify",
  "classification": "positive",
  "confidence": [
    { "label": "positive", "value": 0.85 },
    { "label": "negative", "value": 0.10 },
    { "label": "support", "value": 0.05 }
  ]
}
```

### Example Usage
```bash
curl -X POST https://apollo-ai-api-suite.onrender.com/api/classify \
  -H "Content-Type: application/json" \
  -d '{"text": "I need help with my account"}'
```

This endpoint provides basic text classification capabilities. The model can be extended with more training data for improved accuracy.