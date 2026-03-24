# AI Empathy + Pitch Engine

A full-stack web application that combines AI-powered empathy detection with pitch visualization capabilities. The system analyzes text input to detect emotions and generates appropriate audio responses, while also creating visual storyboards for pitch presentations.

## Features

###  Empathy Engine
- **Emotion Detection**: Uses TextBlob to analyze text sentiment and classify emotions (happy, frustrated, neutral)
- **Dynamic Voice Generation**: Generates audio responses with emotion-appropriate speech patterns:
  - Happy: Fast rate, high volume
  - Frustrated: Slow rate, low volume  
  - Neutral: Normal rate, medium volume
- **Real-time Processing**: Instant audio generation and playback

###  Pitch Visualizer
- **Text Segmentation**: Automatically breaks down input text into individual scenes using NLTK
- **Prompt Enhancement**: Intelligently enhances text prompts for better image generation
- **AI Image Generation**: Creates visual scenes using Stability AI's Stable Diffusion API
- **Storyboard Creation**: Organizes generated images into a coherent visual narrative

## Tech Stack

### Backend (Python/FastAPI)
- **FastAPI**: Modern, fast web framework for building APIs
- **TextBlob**: Natural language processing for emotion detection
- **pyttsx3**: Text-to-speech synthesis for audio generation
- **NLTK**: Natural language toolkit for text segmentation
- **Stability AI API**: AI image generation service
- **CORS**: Cross-origin resource sharing for frontend-backend communication

### Frontend (React/Vite)
- **React 19**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: HTTP client for API communication
- **React Router**: Client-side routing

## Project Structure

```
Darwix_AI/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI application entry point
│   │   ├── api/
│   │   │   └── routes/
│   │   │       ├── empathy.py   # Empathy Engine endpoints
│   │   │       └── storyboard.py # Pitch Visualizer endpoints
│   │   ├── services/
│   │   │   ├── empathy_service.py    # Emotion detection and TTS
│   │   │   ├── emotion_service.py    # TextBlob emotion analysis
│   │   │   ├── tts_service.py        # Audio generation
│   │   │   ├── pitch_service.py      # Storyboard generation orchestration
│   │   │   ├── segmentation_service.py # Text segmentation
│   │   │   ├── prompt_service.py     # Prompt enhancement
│   │   │   └── image_service.py      # AI image generation
│   │   ├── models/
│   │   │   ├── empathy_schemas.py    # Pydantic models for empathy
│   │   │   └── pitch_schemas.py      # Pydantic models for pitch
│   │   └── utils/
│   │       └── helpers.py           # Utility functions
│   ├── static/
│   │   ├── audio/                   # Generated audio files
│   │   └── images/                  # Generated storyboard images
│   └── requirements.txt             # Python dependencies
└── frontend/
    ├── src/
    │   ├── App.jsx                  # Main application component
    │   ├── main.jsx                 # React entry point
    │   ├── components/
    │   │   ├── EmpathyEngine.jsx    # Empathy Engine UI
    │   │   ├── PitchVisualizer.jsx  # Pitch Visualizer UI
    │   │   ├── AudioPlayer.jsx      # Audio playback component
    │   │   ├── StoryboardPanel.jsx  # Storyboard display component
    │   │   └── Navbar.jsx           # Navigation component
    │   ├── pages/
    │   │   └── Home.jsx             # Landing page
    │   └── services/
    │       └── api.js               # API communication layer
    ├── package.json                 # Frontend dependencies
    ├── vite.config.js              # Vite configuration
    └── README.md                   # Frontend documentation
```

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn
- Stability AI API key (for image generation)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**
   Create a `.env` file in the backend directory:
   ```
   STABILITY_API_KEY=your_stability_ai_api_key_here
   ```

4. **Run the backend server:**
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## Usage

### Empathy Engine
1. Enter text in the input field
2. Click "Generate" to process the text
3. The system will:
   - Analyze the emotion in your text
   - Generate an audio response with appropriate tone
   - Display the detected emotion and confidence score

### Pitch Visualizer
1. Enter your pitch text in the input field
2. Click "Generate" to create a storyboard
3. The system will:
   - Break down your text into individual scenes
   - Generate AI-powered visualizations for each scene
   - Display the complete storyboard with images and text

## API Endpoints

### Empathy Engine
- `POST /empathy/speak` - Process text and generate emotional audio response

### Pitch Visualizer
- `POST /storyboard/generate` - Generate visual storyboard from text

## Dependencies

### Backend Dependencies
- fastapi: Web framework
- uvicorn: ASGI server
- requests: HTTP client
- pydantic: Data validation
- Pillow: Image processing
- openai: OpenAI API client
- nltk: Natural language processing
- textblob: Sentiment analysis
- pyttsx3: Text-to-speech
- python-dotenv: Environment variables
- diffusers: AI model inference
- transformers: ML models
- torch: PyTorch framework
- elevenlabs: Alternative TTS service

### Frontend Dependencies
- react: UI library
- react-dom: DOM bindings for React
- react-router-dom: Client-side routing
- axios: HTTP client
- @tailwindcss/vite: Tailwind CSS integration
- tailwindcss: CSS framework
- vite: Build tool

## Development

### Adding New Features
1. Create new API endpoints in `backend/app/api/routes/`
2. Implement services in `backend/app/services/`
3. Add frontend components in `frontend/src/components/`
4. Update API service layer in `frontend/src/services/api.js`

### Environment Configuration
- Backend: Use `.env` file for API keys and configuration
- Frontend: Environment variables can be added to `.env` files (Vite supports this)

## Troubleshooting

### Common Issues
1. **CORS errors**: Ensure backend is running on port 8000 and frontend on a different port
2. **API key errors**: Verify your Stability AI API key is correctly set in `.env`
3. **Dependency issues**: Make sure you're using compatible versions of Python and Node.js

### Audio Generation
- Audio files are saved in `backend/static/audio/`
- Files are served via the `/static` endpoint
- Generated filenames use UUIDs for uniqueness

### Image Generation
- Images are saved in `backend/static/images/`
- Requires valid Stability AI API key
- Images are served via the `/static` endpoint

