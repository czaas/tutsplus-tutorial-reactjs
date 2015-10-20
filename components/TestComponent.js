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
	handleAdd: function(e){
		var newMessage = this.refs.newMessage.getDOMNode().value;
		var newMessages = this.state.messages.concat([newMessage]);

		this.setState({
			messages: newMessages
		});
	},

	getInitialState: function(){
		return {
			isVisible: true,
			titleMessage: 'Hello world!',
			messages: [
				'Hello you!',
				'This weather has be crazy, right?',
				'Fine, dont answer me.',
				'I dont want to talk to you anyways.'
			]
		};
	},

	render: function(){

		var inlineStyles = {
			display: this.state.isVisible ? 'block' : 'none'
		};

		var messages = this.state.messages.map(function(message){
			return <SubMessage message={message} />;
		});

		return (
			<div className="container jumbotron" style={inlineStyles}>
				<h2>{this.state.titleMessage}</h2>
				<input type="text" ref="newMessage" />
				<button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
				{ messages }
			</div>
		);
	}
});

var SubMessage = React.createClass({

	propTypes: {
		message: React.PropTypes.string.isRequired // validation of sorts: This must be a string and it IS required.
	},

	getDefaultProps: function(){
		return {
			message: 'It is good to see you.'
		};
	},

	render: function(){
		return (
			<div>{this.props.message}</div>
		);
	}
});

ReactDom.render(<MessageBox />, document.getElementById('app'));