import React, { Component } from 'react';

class ListItem extends Component {
  Click(id){
    this.props.clicked(id);
  }

  render() {
  	const {item} = this.props;
    const List = item.map((items,index) => (
      <li key={index} onClick={this.Click.bind(this, items)}>{items}</li>
    ));

    return (
      <ul>
      	{List}
      </ul>
    );
  }
}

export default ListItem;
