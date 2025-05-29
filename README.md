Turtle Soup Game

A web-based turtle soup game where users can select from multiple turtle soups, each with a story, image, and audio. Users can ask questions to uncover the hidden backstory.

## Directory Structure

```
turtle_soup_project/
├── backend/              # Flask backend
├── frontend/             # Vue.js frontend
└── README.md
```

## Setup

### Backend

1. Navigate to `backend/`.

2. Create a virtual environment and install dependencies:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Place image and audio files in `backend/static/images/` and `backend/static/audio/`.

4. Run the Flask app:

   ```bash
   python app.py
   ```

### Frontend

1. Navigate to `frontend/`.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

## Usage

- Open `http://localhost:5173` in your browser.
- Select a turtle soup from the main menu.
- Read the story, view the image, control the audio, and ask questions to uncover the backstory.
- Click "投降" to reveal the answer.

## Notes

- Ensure the backend is running on `http://localhost:5000`.
- The frontend uses Vite and Vue 3 with Vue Router.
- Static files (images, audio) are served from the backend.
- The `SiliconFlow` library is assumed to be available for the backend LLM calls.

123