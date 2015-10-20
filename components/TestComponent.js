var React = require('react'),
	ReactDom = require('react-dom');

var TestComponent = React.createClass({
	render: function(){
		return (
			<h1>Test Component</h1>
		);
	}
});

ReactDom.render(<TestComponent/>, document.getElementById('app'));