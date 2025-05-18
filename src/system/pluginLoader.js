const fs = require('fs');
const path = require('path');
function loadPlugins() {
  const pluginsDir = path.join(__dirname, '../../user_plugins');
  return fs.readdirSync(pluginsDir)
    .filter(f => f.endsWith('.js'))
    .map(f => require(path.join(pluginsDir, f)));
}
module.exports = { loadPlugins };