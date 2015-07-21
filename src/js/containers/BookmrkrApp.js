import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import Sidebar from '../components/Sidebar';
import TopMenu from '../components/TopMenu';
import Grid from '../components/Grid';
import * as BookmrkrActions from '../actions/BookmrkrActions';

var BookmrkrApp = React.createClass({
    render() {
        return (
            <Connector select={state => ({ appState: state.bookmarks })}>
                {this.renderChild}
            </Connector>
        );
    },

    renderChild({ appState, dispatch }) {
        const actions = bindActionCreators(BookmrkrActions, dispatch);
        return (
            <div>
                <Sidebar appState={appState} />
                <div className="pusher">
                    <TopMenu toggleSidebar={actions.toggleSidebar} />
                    <Grid />
                </div>
            </div>
        );
    }
});

module.exports = BookmrkrApp;


/*
export var Container = React.createClass( {

    render: function() {
        return (
            <div>
                <Header addTodo={actions.addTodo} />
                <MainSection todos={todos} actions={actions} />
            </div>
        );
    }
});

*/
