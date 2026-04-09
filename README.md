# 🎮 Sudoku Game Project

A beautiful, feature-rich Sudoku game built with React and Vite, ready for deployment to GitHub Pages.

## 📁 Project Location

The Sudoku game is located in the `sudoku-game` directory.

## 🚀 Quick Start

```bash
# Navigate to the game directory
cd sudoku-game

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📖 Documentation

- **[Game README](sudoku-game/README.md)** - Complete game documentation and features
- **[Deployment Guide](sudoku-game/DEPLOYMENT.md)** - Step-by-step deployment instructions

## ✨ Features

- ✅ 5 Difficulty Levels (1-5)
- ✅ Time Tracking
- ✅ Hint System
- ✅ Clear/Reset Buttons
- ✅ Colorful Animations for Completed Rows/Columns/Boxes
- ✅ Error Detection
- ✅ Keyboard Support
- ✅ Responsive Design
- ✅ Victory Screen with Statistics
- ✅ GitHub Pages Deployment Ready

## 🎯 How to Deploy

1. **Update Configuration**:
   - Edit `sudoku-game/package.json` - Replace `YOUR_GITHUB_USERNAME` with your GitHub username
   
2. **Create GitHub Repository**:
   - Create a new repository named `demo-bob` on GitHub
   
3. **Push to GitHub**:
   ```bash
   cd sudoku-game
   git init
   git add .
   git commit -m "Initial commit: Sudoku game"
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/demo-bob.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as the source
   - Wait for deployment to complete

5. **Access Your Game**:
   - Visit: `https://YOUR_GITHUB_USERNAME.github.io/demo-bob/`

For detailed deployment instructions, see [DEPLOYMENT.md](sudoku-game/DEPLOYMENT.md)

## 🛠️ Technologies

- **React 19** - Modern UI framework
- **Vite** - Fast build tool
- **CSS3** - Advanced animations
- **GitHub Actions** - Automated deployment
- **GitHub Pages** - Free hosting

## 📱 Screenshots

The game features:
- Beautiful gradient backgrounds
- Smooth animations
- Color-coded completions (green for rows, blue for columns, purple for boxes)
- Responsive design for all devices

## 🎮 Game Controls

- **Click** cells to select them
- **Number keys (1-9)** to enter numbers
- **Backspace/Delete** to clear cells
- **Clear Cell** button to remove selected number
- **Reset** button to restart current puzzle
- **Hint** button to get help
- **New Game** button to generate new puzzle

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Ready to play? Navigate to the `sudoku-game` directory and start the development server!** 🎉
