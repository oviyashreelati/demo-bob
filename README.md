# 🎮 Sudoku Game

A beautiful, feature-rich Sudoku game built with React and Vite, ready for deployment to GitHub Pages.

## ✨ Features

- ✅ **5 Difficulty Levels** (1-5) - Easy to Master
- ✅ **Time Tracking** - Displays in MM:SS format, shows final time
- ✅ **Hint System** - Get help when stuck (tracks hints used)
- ✅ **Clear/Reset Buttons** - Clear cell or restart puzzle
- ✅ **Colorful Animations** - Green (rows), Blue (columns), Purple (boxes), Rainbow (multiple)
- ✅ **Error Detection** - Red highlighting for invalid numbers
- ✅ **Keyboard Support** - Number keys (1-9), Backspace, Delete
- ✅ **Victory Screen** - Shows completion time, difficulty, and hints used
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **GitHub Pages Ready** - Automatic deployment via GitHub Actions

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:5173 to play the game!

### Build for Production

```bash
npm run build
```

## 🎯 How to Play

1. **Select Difficulty**: Choose a difficulty level (1-5) before starting a new game
2. **Click a Cell**: Click on any empty cell to select it
3. **Enter Numbers**: 
   - Click number buttons (1-9) or use keyboard
   - Press Backspace/Delete to clear a cell
4. **Use Controls**:
   - **Clear Cell**: Remove number from selected cell
   - **Reset**: Start over with the same puzzle
   - **Hint**: Get a hint (fills one random empty cell)
   - **New Game**: Generate a new puzzle
5. **Complete the Puzzle**: Fill all cells correctly to win!

## 🎨 Color Animations

- **Green**: Completed row
- **Blue**: Completed column  
- **Purple**: Completed 3x3 box
- **Rainbow**: Multiple completions (row + column + box)

## 📁 Project Structure

```
demo-bob/
├── src/
│   ├── components/
│   │   ├── SudokuGame.jsx      # Main game component
│   │   └── SudokuGame.css      # Game styles and animations
│   ├── utils/
│   │   └── sudokuGenerator.js  # Sudoku logic and algorithms
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Global styles
│   ├── index.css               # Base styles
│   └── main.jsx                # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/                     # Static assets
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `demo-bob`
2. Make it **Public** (required for free GitHub Pages)
3. Do NOT initialize with README

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Sudoku game"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/demo-bob.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Wait for the workflow to complete (check the **Actions** tab)

### Step 4: Access Your Game

Your game will be live at:
```
https://YOUR_USERNAME.github.io/demo-bob/
```

Example: `https://johndoe.github.io/demo-bob/`

## 🛠️ Technologies

- **React 19** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **CSS3** - Advanced animations and responsive design
- **GitHub Actions** - Automated CI/CD deployment
- **GitHub Pages** - Free static site hosting

## 🎮 Game Controls

### Mouse/Touch
- Click cells to select them
- Click number buttons to enter numbers
- Click control buttons for actions

### Keyboard
- **1-9**: Enter numbers
- **Backspace/Delete/0**: Clear cell
- **Arrow keys**: Navigate cells (future enhancement)

## 📊 Performance

- **Build Size**: ~196KB JS (gzipped: 61.84KB)
- **CSS Size**: 6.86KB (gzipped: 1.83KB)
- **Build Time**: ~350ms
- **Load Time**: < 1 second

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: React components in `src/components/`
- **Utils**: Game logic in `src/utils/`
- **Styles**: CSS files co-located with components
- **Assets**: Static files in `public/`

## 🐛 Troubleshooting

### Issue: GitHub Pages shows 404

**Solution**: 
- Ensure GitHub Pages is enabled in Settings > Pages
- Check that "GitHub Actions" is selected as the source
- Wait a few minutes for deployment to complete

### Issue: Game doesn't load

**Solution**:
- Check browser console for errors
- Verify all files were pushed to GitHub
- Clear browser cache and reload

### Issue: Build fails

**Solution**:
- Run `npm install` to ensure all dependencies are installed
- Check for syntax errors in code
- Review the Actions tab on GitHub for error details

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 🎯 Future Enhancements

- [ ] Save/Load game progress (localStorage)
- [ ] Multiple themes (dark mode, color schemes)
- [ ] Sound effects and music
- [ ] Leaderboard system
- [ ] Daily challenges
- [ ] Statistics tracking
- [ ] Undo/Redo functionality
- [ ] Pencil marks (candidate numbers)

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Enjoy playing Sudoku!** 🎉

Built with ❤️ using React and Vite
