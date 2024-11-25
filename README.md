# Video2Text - Video Transcription Web Application

## Overview

Video2Text is a modern web application that converts video content into text transcriptions. Built with React and Flask, it offers a user-friendly interface for uploading videos and receiving accurate transcriptions powered by OpenAI's Whisper model.

Currently supports English only.

## Features

- 🎥 Drag-and-drop video upload interface
- ⏳ Real-time transcription progress monitoring
- ⏯️ Pause/Resume transcription tasks
- 📝 Edit captions before downloading
- 🎧 Audio extraction
- 🎨 Clean, modern UI with responsive design

## Tech Stack

- Frontend: React.js with SCSS
- Backend: Flask (Python)
- Speech Recognition: OpenAI Whisper
- Video Processing: MoviePy, FFmpeg
- Styling: Bootstrap 5

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python 3.8+
- FFmpeg

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/video2text.git
cd video2text
```

2. Set up the backend:

```
bash
cd Python
pip install -r requirements.txt
python main.py
```

3. Set up the frontend:

```bash
cd webapp/video2txt
npm install
npm run dev
```

### Usage

1. Open the web application (default: http://localhost:3001)
2. Drag and drop video files or click to select
3. Click the upload button to start transcription
4. Monitor progress in real-time
5. Edit transcriptions if needed (Real time update as you edit!)
6. Download in your preferred format

## Project Structure

video2text/
├── Python/ # Backend Flask application
│ ├── utils/ # Video processing utilities
│ └── main.py # Flask server
└── webapp/video2txt/ # React frontend
├── src/ # Source code
│ ├── components/ # React components
│ ├── scss/ # Styling
│ └── utils/ # Helper functions
└── public/ # Static assets

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## To be done

- [ ] More animations
- [ ] More languages support
- [ ] Embed the caption in the video

...feel free to suggest more!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenAI Whisper](https://github.com/openai/whisper) for speech recognition
- [MoviePy](https://zulko.github.io/moviepy/) for video processing
- [FFmpeg](https://ffmpeg.org/) for media handling
- [React](https://reactjs.org/) and [Flask](https://flask.palletsprojects.com/) for the framework
- [Bootstrap](https://getbootstrap.com/) for UI components

## Author

Holland Lee

## Contact

- GitHub: [@yourgithubusername](https://github.com/Holland-Ly)
- Website: [your-website.com](https://www.hollandleehl.com)
