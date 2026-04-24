const { OpenAIApi, Configuration } = require('openai');
const analytics = require('./analytics');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(config);

module.exports = async (text, options = {}) => {
  // Set default options
  const { 
    style = 'paragraph', 
    length = 'medium',
    maxLength = 150
  } = options;
  
  // Validate input
  if (!text || text.trim().length < 20) {
    throw new Error('Input text must be at least 20 characters');
  }
  
  // Map length options to token counts
  const lengthMap = {
    'short': 30,
    'medium': 60,
    'long': 90
  };
  
  // Map style to prompts
  const styleMap = {
    'paragraph': 'Summarize this in a concise paragraph:',
    'bullets': 'Create bullet point summary:',
    'executive': 'Generate an executive summary highlighting key points:'
  };
  
  const prompt = `${styleMap[style] || styleMap.paragraph} ${text}`;
  
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: lengthMap[length] || 60,
    temperature: 0.3,
  });
  
  const summary = response.data.choices[0].text.trim();
  
  // Log usage to analytics
  analytics.track('summarize', {
    style,
    length,
    chars: text.length,
    tokens: response.data.usage.total_tokens
  });
  
  return summary;
};