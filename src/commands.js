const vscode = require('vscode');
const generate = require ('@babel/generator').default;
const { parseSource, transform, getMaxRange } = require('./utils');
const { sortAlphabetically, sortByNameLength, sortByLineLength } = require('./sorters');

function register(name, sorter){
  return vscode.commands.registerCommand(name, function () {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }
    let text = editor.document.getText();
  
    try {
        const ast = parseSource(text);
        transform(ast, sorter);
        const output = generate(ast, text);
        editor.edit(convertion => convertion.replace(getMaxRange(), output.code))
    } catch (error) {
        vscode.window.showInformationMessage(error);
    }
  });
}

function registerSortAlphabetically(){
  return register('sortAlphabetically', sortAlphabetically);
}

function registerSortByNameLength(){
  return register('sortByNameLength', sortByNameLength);
}

function registerSortByLineLength(){
  return register('sortByLineLength', sortByLineLength);
}

module.exports = {
  registerSortAlphabetically: registerSortAlphabetically,
  registerSortByNameLength: registerSortByNameLength,
  registerSortByLineLength: registerSortByLineLength,
}

