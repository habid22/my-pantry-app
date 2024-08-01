// utils/fetchRecipe.js
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Print to verify if the API key is loaded correctly
console.log("Loaded API key:", process.env.GEMINI_API_KEY);

// Initialize the Google Gemini API client with the API key
const genAI = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY, // Ensure this matches the key in your .env file
});

// Function to fetch a recipe based on the selected items
export const fetchRecipeFromGemini = async (items) => {
  const itemNames = items.join(", ");
  const prompt = `Create a recipe using the following ingredients: ${itemNames}. Include ingredients, quantities, and detailed cooking steps.`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
    const generationConfig = {
      temperature: 0.9,
      topP: 1,
      maxOutputTokens: 2048,
      responseMimeType: "text/plain",
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error fetching recipe from Google Gemini:", error);
    console.log("API key:", process.env.GEMINI_API_KEY);
    return "There was an error generating the recipe. Please try again later.";
  }
};
