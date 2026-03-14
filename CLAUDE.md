# Plant Quiz - CLAUDE.md

## Rules
- Static site: vanilla JS/CSS/HTML, no build tools, no frameworks, no dependencies
- Hebrew RTL, all user-facing text in Hebrew
- All screens (welcome, quiz, results) must fit in a single mobile viewport — no scrolling
- Keep UI compact — avoid adding elements that push content below the fold
- Don't change GA4 tracking ID (`G-2TSYQKKDP0`)
- GA4 event names use `_plants` suffix

## Structure
- `index.html` — single file with 3 screens (welcome-screen, question-screen, results-screen)
- `app.js` — all quiz logic, game state, analytics tracking
- `style.css` — all styling, responsive design, CSS variables for earth-tone color scheme
- `images/` — plant photos (JPG)
- Font: Heebo (Google Fonts), weights 400/500/700/900

## Key details
- Questions array is called `allQuestions` (not `plants`)
- `QUESTIONS_PER_QUIZ` is dynamic — set to `allQuestions.length` (currently 11, all shown per session)
- Score is 0-100 percentage (not raw correct count). e.g. 8/11 correct = 73
- Score tiers drive dynamic content (result messages, challenge text, WhatsApp share text) at thresholds: 20, 40, 60, 70, 80
- Each question has 4 options. Both question order and option order are shuffled per session
- Question object structure: `id`, `name`, `image`, `options[]`, `correctIndex`, `explanation`, `link` (Wikipedia)
- Images are preloaded at quiz start
- Timer runs during quiz: green → orange (60s) → red (120s), with pulsing clock icon
- WhatsApp share messages include both score and time

## Screens
- 3 screens toggled via `.active` class using `showScreen(screenId)`
- After answering: image shrinks, wrong/non-selected options hide, feedback with explanation + Wikipedia link appears
- Results screen CTAs: Gal's foraging book (ravpage), WhatsApp to Gal (972512996082), Instagram (@galtravels_), Israel knowledge quiz
