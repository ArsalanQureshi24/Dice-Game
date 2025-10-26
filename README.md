# Dice Game (React + Vite)

A small dice-guessing game built with React, Vite and Redux Toolkit. Choose a number (1–6), roll the dice and earn or lose points depending on your guess.

This README describes how to run the project, game rules, project structure and a few developer notes.

## Demo / How to play

- Choose any number between 1 and 6 by clicking a button.
- Click the dice to roll it. The dice rolls with a short animation.
- After the dice finishes rolling the final number is set and the score updates:
	- If your guessed number equals the dice number → add guessed number to Total Score.
	- If your guess is wrong → subtract 2 points from Total Score.
- You can reset the score with the Reset button.

## Features

- Built with React + Vite for fast development.
- State management using Redux Toolkit (game logic lives in `src/redux/slices/gameSlice.js`).
- Responsive layout and mobile-friendly controls.
- Small UI animations (dice roll, rules slide-in, selected-number pulse).

## Project structure (important files)

- `src/` — application source
	- `src/components/` — React components (Header, DiceContainer, Rules, GamePage, etc.)
	- `src/redux/slices/gameSlice.js` — Redux slice that stores `guessedNumber`, `diceNumber`, `totalScore`, and `showRules`. Contains reducers: `guessNumber`, `diceNumber`, `updateScore`, `resetGuessNumber`, `resetScore`, `markShowRules`.
	- `src/components/responsive.css` — responsive styles and small animations.
	- `src/App.jsx` — app entry where responsive CSS is imported.

## Setup & run (Windows / PowerShell)

1. Install dependencies (run once):

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

4. Preview production build locally:

```powershell
npm run preview
```

Open the site in your browser (Vite will print the local URL). Use the browser device toolbar or a real phone to test responsive behavior.

## Notes for developers

- Score update timing: score is updated only after the dice roll animation completes (see `DiceContainer.jsx`). This ensures the UI shows the final dice face and then updates the score.
- Score rules are defined in `gameSlice.updateScore`:
	- If `guessedNumber == diceNumber`: `totalScore += Number(guessedNumber)`
	- Else: `totalScore -= 2`
- If you want a different penalty or behaviour (e.g., subtract guessed number instead of fixed 2 points), update `updateScore` in `src/redux/slices/gameSlice.js`.

## Troubleshooting

- If changes don't appear after editing CSS, try a hard refresh (Ctrl+F5) or clear the browser cache.
- If Bootstrap or other global styles override the layout, inspect elements in devtools and increase selector specificity in `responsive.css` (for example `.nav.nav-pills.my-guess-numbers > .nav-item { ... }`).
- If dev server fails to start, check the terminal for errors. Make sure Node.js and npm are installed and the working directory is the project root.

## Contributing

- Feel free to open issues or submit PRs to add features (sound effects, animations, leaderboards).

## License

This project is provided as-is for learning and personal use. Add a license file if you plan to publish it.

---

If you want, I can also:
- add screenshots to this README,
- change the score rules (e.g., subtract guessed number instead of -2), or
- improve mobile layout further (larger tap targets, better spacing).
Tell me which one and I'll update the code and README accordingly.
