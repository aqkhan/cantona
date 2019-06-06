import React, { Component } from "react";
import SingleProduct from "./SingleProduct.js";
class ItemSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ringSelection: null,
      stoneSelection: null
    };
  }

  // Methods to retrun 3 boxes
  productGenerator = items => {
    return items.map(item => <SingleProduct product={item} />);
  };

  // Methods for rings and stones selection

  render() {
    return this.productGenerator(this.props.items);
  }
}

export default ItemSelector;
