import axios from "axios";

const BASE_URL = "http://localhost:8000";

// Empathy Engine
export const generateAudio = (text) =>
  axios.post(`${BASE_URL}/empathy/speak`, {
    text: text
  });

// Pitch Visualizer
export const generateStoryboard = (text) =>
  axios.post(`${BASE_URL}/storyboard/generate`, {
    text: text
  });