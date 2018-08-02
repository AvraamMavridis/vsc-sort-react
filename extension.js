const {registerSortAlphabetically, registerSortByNameLength, registerSortByLineLength} = require('./src/commands');

const sortAlphabetically = registerSortAlphabetically();
const sortByNameLength = registerSortByNameLength();
const sortByLineLength = registerSortByLineLength();

function activate(context) {
    context
        .subscriptions
        .push(sortAlphabetically, sortByNameLength, sortByLineLength);
}

exports.activate = activate;