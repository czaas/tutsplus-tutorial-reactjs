(function(){
	'use strict';
	
			// libraries
		var React = require('react'),
			ReactDom = require('react-dom'),

			// components
			TodoList = require('./TodoList'),
			ListItem = require('./ListItem');

	ReactDom.render(<TodoList />, document.getElementById('app'));
}());