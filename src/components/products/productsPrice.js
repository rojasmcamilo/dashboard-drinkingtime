import React, { Component } from "react";

class ProductsPrice extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  render() {
    return (
      <div className="Products">
        
      </div>
    );
  }
}

export default ProductsPrice;
