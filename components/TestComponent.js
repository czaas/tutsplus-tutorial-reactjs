var React = require('react'),
	ReactDom = require('react-dom'),
	_ = require('lodash');

var TestComponent = React.createClass({
	render: function(){
		return (
			<h1>Test Component</h1>
		);
	}
});

var MessageBox = React.createClass({
	deleteMessage: function(message){
		var newMessages = _.without(this.state.messages, message);

		this.setState({
			messages: newMessages
		});
	},

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
			return <SubMessage message={message} onDelete={this.deleteMessage} />;
		}.bind(this));

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
	handleDelete: function(e){
		this.props.onDelete(this.props.message);
	},

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
			<div>{this.props.message}<button className="btn btn-danger" onClick={this.handleDelete}>X</button></div>
		);
	}
});

ReactDom.render(<MessageBox />, document.getElementById('app'));