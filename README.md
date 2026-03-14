# City Safe - Crowd Risk Monitoring System

Live Application:
https://quirky-sentinel-city-safe.base44.app

Description:
> *"Traditional CCTV systems see only where cameras exist. Our system turns every smartphone in the crowd into a sensor — giving us coverage even in camera-blind zones, 30 seconds before a situation escalates."*

 📌 Problem Statement
Every year, hundreds of lives are lost in crowd crushes at festivals, concerts, temples, and public gatherings. Traditional CCTV-based monitoring systems have two critical failures:
- They only cover areas where cameras exist
- They react **after** a situation has already escalated
💡 Solution

CrowdSense AI is a **real-time crowd safety intelligence system** that combines:

1. **YOLO-based CCTV Analysis** — Counts people and calculates crowd density from live video feeds
2. **Social Media NLP Engine** — Scans Twitter/X and Instagram for danger keywords in real time
3. **Risk Fusion Engine** — Combines both signals into a single risk score
4. **Instant Authority Alerts** — Notifies police and event management when threshold is crossed
5. **Alternate Route Suggestions** — Automatically displays safe exit routes on a live map

 🏗️ System Architecture
CCTV / Video Feed → YOLOv8 People Counter
                                          ↘
                                           Risk Fusion Engine → FastAPI Backend → Dashboard
                                          ↗
Twitter / Instagram → NLP Keyword Engine
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| People Detection | YOLOv8 (Ultralytics) |
| Backend API | FastAPI + Uvicorn |
| NLP Analysis | Keyword Engine + Twitter API v2 |
| Frontend | HTML, CSS, JavaScript |
| Live Map | Leaflet.js + OpenStreetMap |
| Video Processing | OpenCV |
| Language | Python 3.x |

---

## 📁 Project Structure
```
crowd-alert/
├── backend/
│   ├── main.py            # FastAPI server
│   ├── yolo_model.py      # YOLO people counting
│   ├── nlp_engine.py      # Social media NLP
│   ├── risk_fusion.py     # Risk score calculator
│   ├── alert_router.py    # Alert + route logic
│   └── video_stream.py    # Live video processing
├── frontend/
│   ├── index.html         # Dashboard UI
│   ├── map.js             # Leaflet map
│   └── feed.js            # NLP feed
├── data/
│   └── crowd.mp4          # Sample crowd video
├── models/
│   └── yolov8n.pt         # YOLO weights
└── requirements.txt
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/crowd-alert.git
cd crowd-alert
```

### 2. Install dependencies
```bash
pip install fastapi uvicorn ultralytics opencv-python tweepy requests python-dotenv websockets
```

### 3. Set up environment variables
Create a `.env` file in the root directory:
```
TWITTER_BEARER_TOKEN=your_bearer_token_here
```

### 4. Run the backend
```bash
python -m uvicorn backend.main:app --reload
```

### 5. Open the dashboard
Open `frontend/index.html` with Live Server or:
```bash
cd frontend
python -m http.server 5500
```

Then visit: `http://127.0.0.1:5500`

---

## 🚀 Features

- ✅ **Real-time people counting** using YOLOv8
- ✅ **Live video loop** simulating CCTV feed
- ✅ **NLP keyword detection** — flags stampede, entry jam, crowd surge
- ✅ **Combined risk score** — CCTV + Social Media + Historical data
- ✅ **Interactive Leaflet map** with color-coded danger zones
- ✅ **Automatic alternate routes** when risk crosses threshold
- ✅ **Authority alert system** with instant notifications
- ✅ **FastAPI Swagger UI** for API testing

---

## 📊 Risk Score Formula
```
Risk Score = (CCTV Density × 0.40) +
             (Social Spike  × 0.30) +
             (Keyword Score × 0.20) +
             (Historical    × 0.10)

CRITICAL  →  Score ≥ 60
WARNING   →  Score ≥ 30
SAFE      →  Score < 30
```

---

## 📸 Screenshots

> Dashboard showing CRITICAL alert with live map and NLP feed

---

## 🌍 Real World Use Cases

- 🛕 Temple festivals (Tirupati, Kashi)
- 🎵 Concerts and music festivals
- 🏟️ Sports stadiums
- 🎆 New Year / public celebrations
- 🗳️ Political rallies

---

## 👥 Team

> Built with ❤️ at [Hackathon Name] 2025

---

## 📄 License

MIT License — Free to use and modify

---

*CrowdSense AI — See the Crowd. Save Lives.* 🚨
