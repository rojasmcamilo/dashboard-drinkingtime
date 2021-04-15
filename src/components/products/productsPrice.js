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
<<<<<<< HEAD
    return (
      <div className="Products">
        
      </div>
    );
=======
    console.log(this.state.price);
    return <div className="Products">{}</div>;
>>>>>>> 27e18725e2c4cae1330b5b8dc0bfd94fcb2ae7f8
  }
}

export default ProductsPrice;
