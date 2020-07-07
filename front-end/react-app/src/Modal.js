import React, { Component }  from 'react';
export default class Modal extends React.Component {

	render() {
		const { handleClose, desc, show, header, footer  } = this.props
		const showHideClassName = show ? 'show-div' : 'hide-div';
		console.log(this.props);
      return (
      	<div className={showHideClassName}>
      	   <div id="myModal" className="modal">

			  <div className="modal-content">
			    <div className="modal-header">
			      <span className="close" onClick={this.props.handleClose}>×</span>
			      <h2>{header}</h2>
			    </div>
			    <div className="modal-body">
			    	<p>{desc}</p> <p>Lorem Ipsum is simply dummy text
			    	of the printing and typesetting industry. Lorem
			    	Ipsum has been the industry's standard dummy text
			    	ever since the 1500s, when an unknown printer took
			    	a galley of type and scrambled it to make a type
			    	specimen book. It has survived not only five
			    	centuries, but also the leap into electronic
			    	typesetting, remaining essentially unchanged. It
			    	was popularised in the 1960s with the release of
			    	Letraset sheets containing Lorem Ipsum passages,
			    	and more recently with desktop publishing software
			    	like Aldus PageMaker including versions of Lorem
			    	Ipsum.

</p>                 </div><div className="modal-footer"><h3>{footer}</h3>
</div>               </div>

			</div>
 
		</div>
	  );
    }	
}