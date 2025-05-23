import { GoogleGenerativeAI } from '@google/generative-ai';
import Constants from 'expo-constants';

const apiKey = Constants.expoConfig?.extra?.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

export const generateContent = async (prompt: string) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent(prompt);
  return result.response.text();
  // console.log(apiKey)
};