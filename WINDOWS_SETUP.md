# 🪟 Windows Setup Guide

## ⚠️ PowerShell Execution Policy Issue

You're seeing this error because PowerShell's execution policy is blocking npm commands:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running 
scripts is disabled on this system.
```

## ✅ Solutions (Choose One)

### Solution 1: Use Command Prompt (Easiest)

Instead of PowerShell, use **Command Prompt (CMD)**:

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```cmd
   cd c:\Users\Oviya\Code\demo-bob
   ```
4. Run commands:
   ```cmd
   npm run dev
   ```

### Solution 2: Use Git Bash (Recommended)

If you have Git installed, use **Git Bash**:

1. Right-click in your project folder
2. Select "Git Bash Here"
3. Run commands:
   ```bash
   npm run dev
   ```

### Solution 3: Change PowerShell Execution Policy

**⚠️ Requires Administrator Access**

1. Open PowerShell as Administrator:
   - Press `Win + X`
   - Select "Windows PowerShell (Admin)" or "Terminal (Admin)"

2. Run this command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. Type `Y` and press Enter

4. Close and reopen PowerShell (normal, not admin)

5. Now you can run:
   ```powershell
   npm run dev
   ```

### Solution 4: Use VS Code Terminal with CMD

1. Open VS Code
2. Press `` Ctrl + ` `` (backtick) to open terminal
3. Click the dropdown arrow next to the `+` button
4. Select "Command Prompt" or "Git Bash"
5. Run commands:
   ```cmd
   npm run dev
   ```

## 🚀 Quick Commands Reference

### For Command Prompt (CMD):
```cmd
cd c:\Users\Oviya\Code\demo-bob
npm run dev
```

### For Git Bash:
```bash
cd /c/Users/Oviya/Code/demo-bob
npm run dev
```

## 🎮 Test the Game Locally

Once you've chosen a solution above:

```bash
# Start development server
npm run dev
```

Then open your browser to: http://localhost:5173

Press `Ctrl + C` to stop the server.

## 📤 Deploy to GitHub

### Using Command Prompt (CMD):
```cmd
cd c:\Users\Oviya\Code\demo-bob
git init
git add .
git commit -m "Initial commit: Sudoku game"
git remote add origin https://github.com/YOUR_USERNAME/demo-bob.git
git branch -M main
git push -u origin main
```

### Using Git Bash:
```bash
cd /c/Users/Oviya/Code/demo-bob
git init
git add .
git commit -m "Initial commit: Sudoku game"
git remote add origin https://github.com/YOUR_USERNAME/demo-bob.git
git branch -M main
git push -u origin main
```

**Remember to replace YOUR_USERNAME with your GitHub username!**

## 🔧 Troubleshooting

### Issue: "git is not recognized"
**Solution**: Install Git from https://git-scm.com/download/win

### Issue: "npm is not recognized"
**Solution**: 
1. Restart your terminal/computer
2. Verify Node.js is installed: https://nodejs.org/
3. Add Node.js to PATH (usually automatic during install)

### Issue: Port 5173 already in use
**Solution**: 
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

## 💡 Best Practice

**Use Command Prompt (CMD) or Git Bash** for running npm commands on Windows to avoid PowerShell execution policy issues.

## 📝 VS Code Terminal Setup

To set CMD as default terminal in VS Code:

1. Press `Ctrl + Shift + P`
2. Type "Terminal: Select Default Profile"
3. Select "Command Prompt"
4. Open new terminal with `` Ctrl + ` ``

## ✅ Verification

Test if everything works:

```cmd
node --version
npm --version
git --version
```

All three should show version numbers.

---

**Need more help?** See DEPLOYMENT_GUIDE.md for full deployment instructions.