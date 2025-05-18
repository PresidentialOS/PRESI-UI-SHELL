const { exec } = require('child_process');

function launchApp(appPath, cb) {
  exec(`"${appPath}"`, (error) => {
    if (cb) cb(error);
  });
}

module.exports = { launchApp };