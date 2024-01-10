import React from "react";
import { Card } from "react-bootstrap";

// Define a type for the ProductProps
type ProductProps = {
  product: {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
  };
};

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

/**
  In this component:

ProductProps is an type definition specifying the props for the Product component.

React.FC<ProductProps> is a TypeScript type for a functional component that takes ProductProps as its props.

FC => Functional component

This way, TypeScript will understand the type of the product prop.
This helps TypeScript enforce type checking and provides better tooling and documentation 
for the React components.


The <Card> component is part of the react-bootstrap library, and it is used to 
create a card-based layout for displaying content. Cards are a versatile component commonly used in
UI design to organize and present information in a visually appealing way.

className="my-3 p-3 rounded

The classes above are used to style and format the appearance of the card. 

my-3: This class adds margin to the top and bottom of the card. 
The my stands for margin on the y-axis (vertical), and 3 is a scale value indicating the size of the margin. 
In this case, it's adding a medium-sized margin.

p-3: This class adds padding to all sides of the card. 
The p stands for padding, and 3 is a scale value indicating the size of the padding.
It adds a medium-sized padding.

rounded: This class rounds the corners of the card, 
giving it a visually softer appearance.


<Card.Img> Component: This component is used to display an image within the card. In this case, 
it is used to display the product image. The src attribute specifies the image source, 
and variant="top" positions the image at the top of the card.

<a href={`/product/${product._id}`}>

The <a> element in HTML is an anchor element, commonly used to create hyperlinks. 
In the above component, 
the <a> element is used to create a hyperlink around the entire card, 
making it clickable and linking to a specific product page. 
The href attribute of the anchor (<a>) element is dynamically generated based on the product's ID.

<Card.Body> Component: This component represents the main content area of the card.
 Inside Card.Body, you can place various other components to structure the content.

<Card.Title> Component: Used to display a title within the card. 
In this case, it wraps the product name in a <strong> element to emphasize it.
 The as="div" prop is used to specify the HTML element to be rendered as. In this case, it's a div.

<Card.Text> Component: Used to display text content within the card. In this case, 
it displays the product price. The as="h3" prop is used to specify that the text should be rendered as an h3 element.

*/
