var alt = require('../alt');

class TodoActions {
    constructor() {
        this.generateActions(
            'showSidebar',
            'hideSidebar',
            'showSettings',
            'hideSettings'
        )
    }
}

module.exports = alt.createActions(TodoActions);
