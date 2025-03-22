// This is a mock API service to simulate backend calls
import OpenAI from "openai";

// Replace with your actual OpenAI API key - in a real app, use environment variables
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
//const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });

// Format product data for the OpenAI prompt
const formatProductsForPrompt = (products) => {
  return products
    .map(
      (p) =>
        `${p.name}: ${p.price} (${p.discount}) - ${p.description}`
    )
    .join("\n");
};

export const chatWithAI = async (message, history, products) => {
  try {
    // Create a simulated delay to mimic network request (500-1500ms)
    await new Promise((resolve) =>
      setTimeout(resolve, 500 + Math.random() * 1000)
    );

    // If no API key is set, return a simulated response
    if (OPENAI_API_KEY === "your-openai-api-key-here") {
      console.warn(
        "Using mock responses. Set your actual OpenAI API key for real responses."
      );
      return simulateResponse(message, products);
    }

    // System prompt with product information
    const systemPrompt = `You are a helpful assistant for IVIATU, an online shoe store.
You must help customers find products that match their needs and answer questions about our products.
Be friendly, concise, and knowledgeable. If you don't know something, just say so.

Here are the details of our products:
${formatProductsForPrompt(products)}

When users ask about products, direct them to specific shoe types based on their needs.
When mentioning prices, always include both the original price and any applicable discount.`;

    // Format chat history for OpenAI
    const formattedHistory = history.map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    // Add the user's latest message
    formattedHistory.push({ role: "user", content: message });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        ...formattedHistory,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return {
      success: true,
      message: completion.choices[0].message.content,
    };
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    return {
      success: false,
      message:
        "Sorry, I couldn't process your request. Please try again.",
    };
  }
};

// Simulate AI responses when API key isn't available
function simulateResponse(message, products) {
  const lowerMsg = message.toLowerCase();

  // Simple pattern matching for common questions
  if (lowerMsg.includes("running") || lowerMsg.includes("workout")) {
    const product = products.find(
      (p) => p.name === "Running Shoes"
    );
    return {
      success: true,
      message: `Our Running Shoes are perfect for workouts! They're currently ${product.price} with ${product.discount}. They're lightweight and designed for comfort during intensive training.`,
    };
  }

  if (lowerMsg.includes("sandal") || lowerMsg.includes("beach")) {
    const product = products.find(
      (p) => p.name === "Sandals"
    );
    return {
      success: true,
      message: `Our Sandals are ideal for beach outings! They're priced at ${product.price} with ${product.discount}. They're comfortable and perfect for casual wear.`,
    };
  }

  if (lowerMsg.includes("formal") || lowerMsg.includes("office")) {
    const product = products.find(
      (p) => p.name === "Loafers"
    );
    return {
      success: true,
      message: `For formal occasions, I'd recommend our Loafers. They're made with genuine leather and priced at ${product.price} with ${product.discount}. Perfect for office wear!`,
    };
  }

  if (
    lowerMsg.includes("price") ||
    lowerMsg.includes("cost") ||
    lowerMsg.includes("discount")
  ) {
    return {
      success: true,
      message:
        "Our current prices range from $49 for Sandals to $129 for Boots. Many items have discounts between 10-40% off. Is there a particular type of shoe you're interested in?",
    };
  }

  // Default response
  return {
    success: true,
    message:
      "I can help you find the perfect IVIATU shoes for your needs. We have Running Shoes, Sneakers, Loafers, Sandals, Boots, Canvas shoes, Slides, and Akala. What type of shoes are you looking for today?",
  };
}
