const { execSync } = require('child_process');

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

execSync(composeCommand(['tsc -d']));

console.log(process.argv);
