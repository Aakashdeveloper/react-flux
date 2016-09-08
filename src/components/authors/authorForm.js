"use strict"
var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
	       render: function(){
              return ( 
              <form>
              	 <h1> Manage Author </h1>
              	  
              	 <Input 
              	      name = "firstName"
                           label = "firstName"
              	      onChange = {this.props.onChange}
              	      value={this.props.author.firstName}/>
              	  <br/>
              	  
              	  <Input 
                           name = "lastName"
                           label = "lastName"
                           onChange = {this.props.onChange}
                           value={this.props.author.firstName}/>
              	    <br/>
              	    <input type="submit" value="submit" className="btn btn-default" onClick={this.props.onSave} />
              	  </form>


              	);
	       }
});

module.exports = AuthorForm;