import React from 'react';
import alt from '../alt';

import Sidebar from '../components/Sidebar';
import TopMenu from '../components/TopMenu';
import Grid from '../components/Grid';
import Settings from '../components/Settings';

import BookmrkrStore from '../stores/BookmrkrStore';
import { hideSidebar } from '../actions/BookmrkrActions';

//import FluxyMixin from 'alt/mixins/FluxyMixin'

var BookmrkrApp = React.createClass({

    _closeSidebar: function() {
        if (this.state.sidebarShown) {
            hideSidebar();
        }
    },

    getInitialState: function() {

        var initialState = BookmrkrStore.getState()

        return {
            sidebarShown: initialState.sidebarShown,
            settingsShown: initialState.settingsShown
        }
    },

    componentDidMount: function() {
        BookmrkrStore.listen(this.onChange);
    },

    componentWillUnmount: function() {
        BookmrkrStore.unlisten(this.onChange);
    },

    render: function() {
        return (
            <body>
                <Sidebar sidebarShown={this.state.sidebarShown}/>
                <div className="pusher" onClick={this._closeSidebar}>
                    <TopMenu sidebarShown={this.state.sidebarShown} settingsShown={this.state.settingsShown}/>
                    <Grid/>
                </div>
                <Settings settingsShown={this.state.settingsShown}/>
            </body>
        );
    },

    onChange: function(state) {
        this.setState(state);
    }

});

module.exports = BookmrkrApp;
