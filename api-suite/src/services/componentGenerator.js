const OpenAI = require('openai');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const generateComponent = async (description) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  
  const prompt = `Generate a professional React functional component based on this description: "${description}". 
Include:
1. Functional component with appropriate props
2. JSX structure
3. Basic styling with CSS modules
4. PropTypes definition
5. Export statement`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000
    });
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Component generation error:", error);
    throw new Error("Failed to generate component");
  }
};

const verifyPremiumAccess = async (apiKey) => {
  const customer = await stripe.customers.retrieve(apiKey);
  return customer?.subscriptions?.data?.some(sub => sub.status === 'active');
};

module.exports = { generateComponent, verifyPremiumAccess };