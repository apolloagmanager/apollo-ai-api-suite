const express = require('express');
const router = express.Router();
const summarize = require('../lib/summarize');

/**
 * @api {post} /api/summarize Summarize Text
 * @apiName Summarize
 * @apiGroup AI
 * @apiDescription Summarize provided text with various styles and lengths
 * @apiParam {String} text Text to summarize (min 20 chars)
 * @apiParam {Object} [options] Optional settings
 * @apiParam {String="paragraph","bullets","executive"} [options.style="paragraph"] Summary style
 * @apiParam {String="short","medium","long"} [options.length="medium"] Summary length
 * @apiSuccess {String} summary Generated summary
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"summary": "Condensed summary text here"}
 * @apiError {String} error Error message
 */
router.post('/summarize', async (req, res) => {
  try {
    const { text, options = {} } = req.body;
    
    // Validate input
    if (!text || text.trim().length < 20) {
      return res.status(400).json({ error: 'Text must be at least 20 characters' });
    }
    
    // Generate summary
    const summary = await summarize(text, options);
    
    res.status(200).json({ summary });
  } catch (error) {
    console.error('Summarization error:', error);
    res.status(500).json({ 
      error: error.message || 'Internal server error' 
    });
  }
});

module.exports = router;