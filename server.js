const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await ai.models.generateContent({
            model: 'gemini-3.6-flash',
            contents: message,
        });
        res.json({ reply: response.text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
});
module.exports = app;
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}