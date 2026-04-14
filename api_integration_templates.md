# API Integration Templates

## 1. REST API Client (Python)
```python
import requests

class APIClient:
    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.headers = {'Authorization': f'Bearer {api_key}'}
        
    def get_data(self, endpoint):
        response = requests.get(f"{self.base_url}/{endpoint}", headers=self.headers)
        response.raise_for_status()
        return response.json()
```

## 2. Webhook Receiver (Node.js)
```javascript
const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
    const event = req.body;
    // Process webhook event
    console.log('Received event:', event.type);
    
    res.status(200).send('Webhook received');
});

app.listen(3000, () => {
    console.log('Webhook receiver listening on port 3000');
});
```

... (continuing with 18 more templates covering OAuth, rate limiting, error handling, etc.)