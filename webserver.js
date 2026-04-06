import express from 'express';
import fs from 'fs';

export function createWebServer(port) {
    const app = express();
    app.get('/', (req, res) => {
        res.end(fs.readFileSync('./index.html', 'utf-8'));
    });
    app.get('/client.js', (req, res) => {
         res.end(fs.readFileSync('./client.js', 'utf-8'));
    });
    app.listen(port, () => {
        console.log(`Web server is running on http://localhost:${port}`);
    });
}