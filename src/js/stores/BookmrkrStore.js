var alt = require('../alt');
var BookmrkrActions = require('../actions/BookmrkrActions');

var BookmrkrStore = alt.createStore(class BookmrkrStore {
    constructor() {
        this.bindActions(BookmrkrActions);

        this.sidebarShown = false;
        this.settingsShown = false;

    }

    onShowSidebar() {
        this.sidebarShown = true;
    }

    onHideSidebar() {
        this.sidebarShown = false;
    }

    onShowSettings() {
        this.settingsShown = true;
    }

    onHideSettings() {
        this.settingsShown = false;
    }

});

module.exports = BookmrkrStore;