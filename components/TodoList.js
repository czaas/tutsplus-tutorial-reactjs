'use strict';
var React = require('react');
var _ = require('lodash');
var ListItem = require('./ListItem');

var TodoList = React.createClass({
	deleteMessage: function(message){
		var newMessages = _.without(this.state.messages, message);

		this.setState({
			messages: newMessages
		});
	},

	handleAdd: function(e){

		e.target.action = "#"; // prevent form from refreshing page

		var newMessage = this.refs.newMessage.value;
		var newMessages = this.state.messages.concat([newMessage]);

		this.setState({
			messages: newMessages,
			value: ''
		});
	},

	getInitialState: function(){
		return {
			isVisible: true,
			titleMessage: 'Todo List',
			messages: [
				'Grocery shopping',
				'Book tickets',
				'Clean gutters',
				'... what else?'
			]
		};
	},

	handleInputChange: function(e){
		this.setState({
			value: e.target.value
		});
	},

	render: function(){

		var inlineStyles = {
			display: this.state.isVisible ? 'block' : 'none'
		};

		var messages = this.state.messages.map(function(message){
			return <ListItem message={message} onDelete={this.deleteMessage} />;
		}.bind(this));

		return (
			<div className="container jumbotron" style={inlineStyles}>
				<h2>{this.state.titleMessage}</h2>
				<form onSubmit={this.handleAdd}>
					<input type="text" ref="newMessage" value={this.state.value} onChange={this.handleInputChange} />
					<button className="btn btn-primary">Add</button>
				</form>
				{ messages }
			</div>
		);
	}
});

module.exports = TodoList;