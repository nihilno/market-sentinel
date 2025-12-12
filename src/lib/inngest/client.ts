import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "stock-app",
  ai: { gemini: { apiKey: process.env.GEMINI_API_KEY } },
});
