# Viral Caption Generator

A lightweight, client‑side caption generator for Twitter, TikTok, Instagram, Facebook, and Emoji posts. Generates platform-aware captions with optional hashtags and sharing.

## Features
- Platform tabs: Twitter, TikTok, Instagram, Facebook, Emoji
- User inputs: Topic, Keywords (comma separated), and Length (short/medium/long)
- Mood presets: Funny, Savage, Cute, Sarcastic
- Instagram/TikTok: Auto‑generates relevant hashtags from your topic/keywords
- One‑click: Copy or Share (Twitter intent, Facebook sharer, or Web Share API fallback)
- Remix button to quickly generate a variation with your current settings
- Recent History (last 10) and Favorites, persisted in your browser via localStorage
- Click any history/favorite to use it again; copy/remove/manage from the lists
- Twitter character counter so you can stay within 280 characters

## Usage
Open `index.html` in a browser and:
1. Pick a platform tab.
2. Enter a Topic and optional Keywords.
3. Choose Length and Mood.
4. Click "Generate Caption".
5. Copy or Share.

Note: Direct share intents are supported for Twitter and Facebook. For Instagram/TikTok, we use the Web Share API when available or copy to clipboard.
