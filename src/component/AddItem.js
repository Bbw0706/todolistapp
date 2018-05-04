import React, { Component } from 'react';

class AddItem extends Component {
	constructor(props){
		super(props);

		this.Submit = this.Submit.bind(this);
	}

	Submit(e){
		e.preventDefault();
		this.props.handleSubmit(e.target.inp.value);
		e.target.inp.value = ""
	}

  render() {
    return (
    	<form onSubmit={this.Submit}>
          	<input type="text" name="inp" placeholder="Add Item"/>
          	<button type="submit">Submit</button>
    	</form>
    );
  }
}

export default AddItem;
