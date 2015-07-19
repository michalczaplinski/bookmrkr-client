/**
 * Created by czapla on 7/19/15.
 */
import React, { Component } from 'react';
import BookmrkrApp from './BookmrkrApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

var App = React.createClass( {
    render() {
        return (
            <Provider redux={redux}>
                {() => <BookmrkrApp/>}
            </Provider>
        );
    }
});

module.exports = App;