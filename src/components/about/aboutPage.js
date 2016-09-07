

"use strict"
var React = require('react');
 var About = React.createClass({
 	statics: {
 		willTransitionTo: function(transition, params, query, callback){
 			if(!confirm("are you sure you want to read")){
 				transition.about();
 			} else{
 				callback();
 			}
 		},
 		willTransitionFrom: function(transition, component){
 			if(!confirm("Do you want to Leave")){
 				transition.about();
 			} 
 		}

 	},
	 render: function(){
		 return (

			<div>
				<h1> About </h1>
				<p>
					This application use the following technologies:
					<ul>

						<li> React</li>
						<li> React Router </li>
						<li> Flux </li>
						<li> Node </li>
						<li> Gulp </li>
					</ul>
				</p>
			</div>
		 );
	 }
 });
 
 module.exports = About;

