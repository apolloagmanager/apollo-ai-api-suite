const express = require('express');
const router = express.Router();

/**
 * @api {post} /api/summarize Summarize Text
 * @apiName Summarize
 * @apiGroup AI
 * @apiDescription Summarize provided text
 * @apiParam {String} text Text to summarize
 * @apiSuccess {String} summary Generated summary
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"summary": "Condensed summary text here"}
 */
router.post('/summarize', (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Missing text parameter' });
    
    // Placeholder for real summarization logic
    const summary = text.substring(0, 100) + '... [summary]';
    
    res.status(200).json({ summary });
  } catch (error) {
    console.error('Summarization error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;