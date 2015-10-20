var React = require('react'),
	ReactDom = require('react-dom');

var TestComponent = React.createClass({
	render: function(){
		return (
			<h1>Test Component</h1>
		);
	}
});

var MessageBox = React.createClass({
	getInitialState: function(){
		return {
			isVisible: true,
			titleMessage: 'Hello world!'
		};
	},

	render: function(){

		var inlineStyles = {
			display: this.state.isVisible ? 'block' : 'none'
		};

		return (
			<div className="container jumbotron" style={inlineStyles}>
				<h2>{this.state.titleMessage}</h2>

				<SubMessage />
			</div>
		);
	}
});

var SubMessage = React.createClass({
	render: function(){
		return (
			<div>It is nice to see you!</div>
		);
	}
});

ReactDom.render(<MessageBox />, document.getElementById('app'));