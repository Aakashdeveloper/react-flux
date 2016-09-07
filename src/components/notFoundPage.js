"use strict"
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
	  render:function(){
		 return (
			<div className="jumbotron">
				<h1> Page not found</h1>
				
				
			    <Link to="app" className="btn btn-primary btn-lg"> Back to home </Link>
			</div>
		 );
	} 
});

module.exports = NotFoundPage;