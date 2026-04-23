const { OpenAIApi, Configuration } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(config);

module.exports = async (text, maxLength = 120) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Summarize this in under ${maxLength} characters: ${text}`,
    max_tokens: 60,
    temperature: 0.3,
  });
  return response.data.choices[0].text.trim();
};