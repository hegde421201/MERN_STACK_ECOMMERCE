import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>ProShop &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

/**
  <footer>: 
  This is an HTML5 semantic element that represents the footer of a document or a section. 
  Footers typically contain metadata, copyright information, links to related resources, 
  or any other information relevant to the content of the page.

<Container>: This is a Bootstrap component that helps control the width of the content. 
It is used to contain and align the content within a specific layout. The Container component is part of the Bootstrap grid system.

<Row>: This is a Bootstrap component used to create a row within the grid system. 
Rows are used to organize and align columns horizontally.

<Col className="text-center py-3">: This is a Bootstrap component representing a column within a row. 
The className attribute is used to apply additional styling classes. 
In this case, text-center is used to center-align the content horizontally, 
and py-3 adds padding on the y-axis (top and bottom). Adjust these classes based on your styling preferences.

<p>ProShop &copy; {currentYear}</p>: This paragraph (<p>) contains the text "ProShop" 
and the copyright symbol (&copy;), followed by the dynamic insertion of the current year using 
the {currentYear} variable. This is a common practice to automatically update the copyright year.

{currentYear} is a variable that dynamically inserts the current year.
 */
