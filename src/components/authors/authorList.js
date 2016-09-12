"use strict"
//<td><a href={"/#authors/" +author.id}>{author.id}</a></td>
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorApi = require('../../api/authorApi');

 var AuthorList = React.createClass({
 	
	 render: function(){
	 	var createAuthorRow = function(author){
	 		return(
	 			 <tr key={author.id}>
	 			  <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
	 			  <td> {author.firstName} {author.lastName}</td>
	 			 </tr>
	 			)
	 	}
		 return (
		 		<div>
		 		 <h1>Author</h1>
                  <table className="table">
                   <thead>
                    <th>ID</th>
                    <th>Name</th>
                   </thead>
                     <tbody>
                       {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                  </table>

		 		</div>
		 	);
	 }
 });
 
 module.exports = AuthorList;
 