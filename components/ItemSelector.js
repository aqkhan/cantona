import React, { Component } from 'react';

class ItemSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ringSelection: null,
            stoneSelection: null
        }
    }

    // Methods to retrun 3 boxes
    productGenerator = (items) => {
        return items.map( item => (
            <div>{item.title}</div>
        ))
    }

    // Methods for rings and stones selection

    render() {
        return(
            <div className="box">
                <h3>I am product selector component & below are my props</h3>
                {this.productGenerator(this.props.items)}
            </div>
        )
    }
}

export default ItemSelector;