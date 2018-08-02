const vscode = require('vscode');
const generate = require('@babel/generator').default;
const {parseSource, transform, getMaxRange} = require('./utils');
const {sortAlphabetically, sortByNameLength, sortByLineLength} = require('./sorters');

/**
 * Register a command to vs code
 *
 * @param {String} name
 * @param {Function} sorter
 * @returns {Object}
 */
function register(name, sorter) {
  return vscode
    .commands
    .registerCommand(name, function () {
      let editor = vscode.window.activeTextEditor;
      if (!editor) {
        return; // No open text editor
      }
      let text = editor
        .document
        .getText();

      try {
        const ast = parseSource(text);
        transform(ast, sorter);
        const output = generate(ast, text);
        editor.edit(convertion => convertion.replace(getMaxRange(), output.code))
      } catch (error) {
        vscode
          .window
          .showErrorMessage('There was an error', error.message || error.msg)
      }
    });
}

/**
 * Register sort alphabetically command
 *
 * @returns {object}
 */
function registerSortAlphabetically() {
  return register('sortAlphabetically', sortAlphabetically);
}

/**
 * Register sort by name length command
 *
 * @returns {object}
 */
function registerSortByNameLength() {
  return register('sortByNameLength', sortByNameLength);
}

/**
 * Register sort by line length command
 *
 * @returns {object}
 */
function registerSortByLineLength() {
  return register('sortByLineLength', sortByLineLength);
}

module.exports = {
  registerSortAlphabetically: registerSortAlphabetically,
  registerSortByNameLength: registerSortByNameLength,
  registerSortByLineLength: registerSortByLineLength
}
