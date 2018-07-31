const vscode = require('vscode');
const jp = require('jsonpath');
const parser = require('@babel/parser');
const generate = require('@babel/generator');
const Range = vscode.Range;

/**
 * Return the maximum possible Range
 *
 * @returns {Range}
 */
function getMaxRange() {
  return new Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
}

/**
 * Transform the AST
 *
 * @param {Object} ast
 * @param {Function} sorter
 */
function transform(ast, sorter) {
  jp.apply(ast, '$..*[?(@.key && @.key.name==="propTypes")]', propTypes => {
    propTypes.value.properties.sort(sorter);
    return propTypes;
  });

  jp.apply(ast, '$..*[?(@.key && @.key.name==="defaultProps")]', propTypes => {
    propTypes.value.properties.sort(sorter);
    return propTypes;
  });
}

/**
 * Parse source code and return an AST represetantion
 *
 * @param {string} source
 * @returns {Object}
 */
function parseSource(source) {
  return parser.parse(source, {
    sourceType: 'module',

    plugins: ['classProperties', 'exportDefaultFrom', 'jsx', 'flow']
  });
}

function generateSource(ast, source) {
  generate(
    ast,
    {
      retainFunctionParens: false,
      compact: false,
      minified: false
    },
    source
  );
}

module.exports = {
  getMaxRange: getMaxRange,
  transform: transform,
  parseSource: parseSource,
  generateSource: generateSource,
};
