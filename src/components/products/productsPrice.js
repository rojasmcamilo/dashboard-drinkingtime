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
          price: data
            .map((data) => data.price)
            .reduce(function (acum, num) {
              return acum + num;
            }),
        });
      });
  }

  render() {
    console.log(this.state.price);
    return <div className="Products">$ {this.state.price}</div>;
  }
}

export default ProductsPrice;
