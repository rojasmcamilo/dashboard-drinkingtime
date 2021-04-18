import React, { Component } from "react";

class ProductsPrice extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      price: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          price: data.map((data) => data.price),
        });
      });
  }

  render() {
    return <div className="Products">{}</div>;
  }
}

export default ProductsPrice;
