"use strict"
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	  render:function(){
		 return (
			<div className="jumbotron">
				<h1> I am doing react</h1>
				
				<p> we are making  author quiz </p>
			    <Link to="about" className="btn btn-primary btn-lg"> Learn More </Link>
			</div>
		 );
	} 
});

module.exports = Home;