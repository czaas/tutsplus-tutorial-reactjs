'use strict';

var React = require('react');

var ListItem = React.createClass({
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
			<div className="listItem">{this.props.message}<button className="btn btn-danger" onClick={this.handleDelete}>X</button></div>
		);
	}
});

module.exports = ListItem;