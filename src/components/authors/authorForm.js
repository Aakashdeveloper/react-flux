"use strict"
var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
  propTypes: {
              author : React.PropTypes.object.isRequired,
              onSave: React.PropTypes.func.isRequired,
              onChange: React.PropTypes.func.isRequired,
              errors:React.PropTypes.object
          }, 
	       render: function(){
              return ( 
              <form>
              	 <h1> Manage Author </h1>
              	  
              	 <Input 
              	      name = "firstName"
                      label = "firstName"
              	      onChange = {this.props.onChange}
              	      value={this.props.author.firstName}
                      error={this.props.errors.firstName} />
              	  <br/>
              	  
              	  <Input 
                           name = "lastName"
                           label = "lastName"
                           onChange = {this.props.onChange}
                           value={this.props.author.lastName}
                           error={this.props.errors.lastName} />
              	    <br/>
              	    <input type="submit" value="submit" className="btn btn-default" onClick={this.props.onSave} />
              	  </form>


              	);
	       }
});

module.exports = AuthorForm;