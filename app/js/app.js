var React = require('react');

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>Really cool react class</h1>
            </div>
        );
    }
});

function render() {
    React.renderComponent(
        <App />,
        document.getElementById('content'));
}

render();
