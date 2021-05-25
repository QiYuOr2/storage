const { execSync } = require('child_process');
const rimraf = require('rimraf');

/**
 * @param {String[] | String} commands
 */
function composeCommand(commands) {
  if (typeof commands === 'string') {
    return commands;
  } else if (commands.length === 1) {
    return commands[0];
  }
  return commands.join(' && ');
}

rimraf('../dist', (err) => {
  if (err) {
    console.log(err);
  }
});
execSync(composeCommand(['tsc -d']));
