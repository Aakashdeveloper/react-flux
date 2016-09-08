"use strict"
var React = require('react');

var AuthorForm = React.createClass({
	       render: function(){
              return ( 
              <form>
              	 <h1> Manage Author </h1>
              	 <label htmlfor="firstName">First Name </label>
              	 <input type="text"
              	      name = "firstName"
              	      className="form-control"
              	      placeholder="First Name"
              	      ref="firstName"
              	      onChange = {this.props.onChange}
              	      value={this.props.author.firstName}/>
              	  <br/>
              	  <label htmlfor="lastName">Last Name </label>
              	  <input type="text"
              	      name = "lastName"
              	      className="form-control"
              	      placeholder="Last Name"
              	      ref="lastName"
              	      onChange = {this.props.onChange}
              	      value={this.props.author.lastName}/>
              	      
              	    <br/>
              	    <input type="submit" value="submit" className="btn btn-default"/>
              	  </form>


              	);
	       }
});

module.exports = AuthorForm;