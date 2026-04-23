# Summarization API

## Endpoint
`POST /summarize`

## Request
```json
{
  "text": "Long article text here...",
  "max_length": 150,
  "min_length": 50
}
```

## Response
```json
{
  "summary": "Concise summary text..."
}
```

## Pricing
- Free tier: 100 requests/day
- Premium: $0.01/request (10,000+ requests/month)