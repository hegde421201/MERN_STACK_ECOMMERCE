import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>

      <Row>
        {products.map((prod) => (
          <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={prod} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

/**
  import { Row, Col } from "react-bootstrap

  Imports the Row and Col components from the react-bootstrap library. 
  These components are used for creating a grid layout.

  {products.map((prod) => (...))}: 
  Maps over the products array and renders a Col for each product. 
  The prod variable represents each individual product in the iteration.


  <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>: 
  The key prop is set to the unique identifier (_id) of each product. 
  This helps React efficiently update and re-render components when the array changes. 
  The Col component specifies the column size for different screen sizes 
  (small, medium, large, extra-large) using Bootstrap's responsive grid system.

  <Product product={prod} />: Renders the Product component for each product in the array.
   The product prop is passed to the Product component to provide data for rendering.

    The Product component is used to encapsulate the display logic for individual products, promoting reusability.
 */
