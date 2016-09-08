"use strict"
var React = require('react');

var Input = React.createClass({
       propTypes:{
              name :React.propTypes.string.isRequired,
              label: React.propTypes.string.isRequired,
              onChange:React.propTypes.func.isRequired,
              placeholder:React.propTypes.string,
              value: React.propTypes.string,
              error:React.propTypes.string,
       },
	       render: function(){
              var wrapperClass = 'form-group';
              if(this.props.error && this.props.error.lenght >0){
                     wrapperClass += "" + 'has-error''';
              }
              return ( 
              <div className={wrapperClass}>
              	 
              	 <label htmlfor={this.props.name}>{this.props.label}</label>
                      <div className="field">
              	 <input type="text"
              	      name = {this.props.name}
              	      className="form-control"
              	      placeholder={this.props.placeholder}
              	      ref={this.props.name}
              	      onChange = {this.props.onChange}
              	      value={this.props.value}/>
              	  <div className="input">{this.props.error}</div>
                       </div>
              </div>


              	);
	       }
});

module.exports = Input;