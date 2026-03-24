from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import empathy, storyboard
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="AI Empathy + Pitch Engine")

app.mount("/static", StaticFiles(directory="static"), name="static")
#  CORS FIX
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(empathy.router, prefix="/empathy", tags=["Empathy Engine"])
app.include_router(storyboard.router, prefix="/storyboard", tags=["Pitch Visualizer"])

@app.get("/")
def home():
    return {"message": "Backend Running 🚀"}