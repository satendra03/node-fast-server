const fs = require("fs");
const path = require("path");

/**
 * Recursively create `.gitkeep` in empty directories
 * @param {string} dir - Directory to start from
 */
function addGitkeepToEmptyDirs(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let hasNonGitkeep = false;

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      addGitkeepToEmptyDirs(fullPath);
    } else if (entry.name !== '.gitkeep') {
      hasNonGitkeep = true;
    }
  });

  // If folder is empty or only has .gitkeep, add .gitkeep if not already there
  if (entries.length === 0 || !hasNonGitkeep) {
    const gitkeepPath = path.join(dir, '.gitkeep');
    if (!fs.existsSync(gitkeepPath)) {
      fs.writeFileSync(gitkeepPath, '');
      console.log(`Created: ${gitkeepPath}`);
    }
  }
}

// Start from current directory
addGitkeepToEmptyDirs(process.cwd());
