# 🤖 ChitChat AI - Responsive AI Chatbot

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![HTML5/CSS3/JS](https://img.shields.io/badge/Frontend-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Marked.js](https://img.shields.io/badge/Marked.js-000000?style=for-the-badge&logo=markdown&logoColor=white)

A full-stack AI chatbot application. Built with a Node.js/Express backend to securely interface with the **Google Gemini API (gemini-3.6-flash)**. The frontend features a beautiful, modern **Glassmorphism** design with animated gradients and rich text Markdown support.

---

## ✨ Features

- 🎨 **Modern Glassmorphism UI:** Features an animated, shifting color-gradient background with frosted-glass chat containers and colorful asymmetric chat bubbles.
- 📝 **Rich Text Formatting:** Integrated with `marked.js` to perfectly render Markdown (bold text, bullet points, and code blocks) from the AI's responses.
- 📱 **Fully Responsive:** Adapts to a full-screen mobile view or a sleek, floating desktop card layout.
- 🧠 **Powered by Gemini 3.6:** Utilizes the updated Google `gemini-3.6-flash` model for fast, intelligent, and highly capable responses.
- 🔒 **Secure Architecture:** API keys are safely stored in the backend environment, never exposed to the client.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- A [Google Gemini API Key](https://aistudio.google.com/)

---

## 🚀 Local Installation & Setup

**1. Clone or Download the Project**
Navigate to the project folder in your terminal:
```bash
cd ai-chatbot
```

**2. Install Dependencies**
Install the required packages (Express, CORS, dotenv, and the Gemini SDK):
```bash
npm install #(if this give error then do the next one) 
```
 
Initialize the project (if you haven't) and install the required packages:
```bash
npm init -y
npm install express cors dotenv @google/genai
```

**3. Configure Environment Variables**
Create a `.env` file in the root directory and add your API key:
```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=3000
```

**4. Start the Server**
Boot up the backend server:
```bash
node server.js
```

**5. View the App**
Open your web browser and navigate to:
```text
http://localhost:3000
```

---

## 📂 Project Structure

```text
ai-chatbot/
│
├── public/               # Frontend Files
│   ├── index.html        # Chat interface (includes Marked.js CDN)
│   ├── style.css         # Glassmorphism styling and Markdown CSS
│   └── script.js         # Frontend logic, Markdown parsing, and API calls
│
├── .env                  # Environment variables (DO NOT SHARE)
├── package.json          # Project metadata and dependencies
└── server.js             # Express backend API and Gemini 3.6 integration
```

---

## ☁️ Deployment

This project is ready to be deployed to free hosting platforms like **Render**. 

1. Ensure your `package.json` has a start script: `"start": "node server.js"`
2. Add a `.gitignore` file containing `node_modules/` and `.env`.
3. Push your code to GitHub.
4. Connect your repository to Render (Web Service).
5. Add `GEMINI_API_KEY` to your host's **Environment Variables** dashboard.
6. Deploy and start chatting!
