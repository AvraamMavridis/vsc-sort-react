const {registerSortAlphabetically, registerSortByNameLength, registerSortByLineLength} = require('./src/commands');

function activate(context) {
    console.log('>>>>>>>>>>>>>>>>>');
    const sortAlphabetically = registerSortAlphabetically();
    context
        .subscriptions
        .push(sortAlphabetically);

    const sortByNameLength = registerSortByNameLength();
    context
        .subscriptions
        .push(sortByNameLength);

    const sortByLineLength = registerSortByLineLength();
    context
        .subscriptions
        .push(sortByLineLength);
}

exports.activate = activate;