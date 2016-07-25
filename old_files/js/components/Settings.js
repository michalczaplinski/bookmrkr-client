var React = require('react');
import { hideSettings } from '../actions/BookmrkrActions.js'

var Settings = React.createClass({

    propTypes: {
        settingsShown: React.PropTypes.bool.isRequired
    },

    componentDidUpdate: function () {
        var self = React.findDOMNode(this);
        if (this.props.settingsShown) {
            $(self).modal({
                'detachable': false,

                onHide: function() {
                    hideSettings();
                    console.log('hidden');
                }

            }).modal('show')
        }
    },

    render: function() {
        return (
            <div className="ui small modal">
                <i className="close icon"></i>
                <div className="header">
                    Settings
                </div>
                <div className="ui content">
                    <div className="ui relaxed divided link items">
                        <div className="ui item button">
                            <i className="ui user icon large"></i> Account settings
                        </div>
                        <div className="ui item button">
                            <i className="cloud download icon large"></i> Import bookmarks
                        </div>
                        <div className="ui item button">
                            <i className="cloud upload icon large"></i> Export bookmarks
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui negative red labeled button">
                        Cancel
                    </div>
                    <div className="ui positive right labeled button">
                        OK
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Settings;