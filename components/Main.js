(function(){
	'use strict';
	
			// libraries
		var React = require('react'),
			ReactDom = require('react-dom'),

			// components
			TodoList = require('./TodoList.js'),
			ListItem = require('./ListItem.js');

	ReactDom.render(<TodoList />, document.getElementById('app'));
}());