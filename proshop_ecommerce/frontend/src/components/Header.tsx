import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

//font awesome icons --- fa
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart />
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

/**
 Comments --- read this carefully for learning
 
 1) <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>

  <Navbar>: This is a React component representing a Bootstrap Navbar.

bg="dark": This sets the background color of the Navbar to dark.
variant="dark": This sets the color variant of the Navbar to dark, indicating that the text and other elements in the Navbar 
will be displayed in a light color against the dark background.

expand="md": This sets the breakpoint at which the Navbar should expand. 
In this case, it it set to "md", meaning the Navbar will expand from the collapsed state to a fully expanded state 
when the screen size is equal to or larger than the medium (md) breakpoint.

collapseOnSelect: This is a Bootstrap feature that specifies that the Navbar should automatically 
collapse (close) when a navigation item is selected. This is typically used in responsive designs for smaller screens.


2)

<Container>
  <Navbar.Brand href="/">ProShop</Navbar.Brand>
</Container>

<Container>: This is a Bootstrap component that is used to contain and align the content within a specific layout. 
It helps in creating responsive designs. More precisely,  Container is used to contain and align the Navbar's content within a specific layout. 
<Navbar.Brand>: This is a Bootstrap component used within a Navbar to display the brand or logo. In this case, it shows the text "ProShop."
href="/">: This sets the link for the brand. In this case, clicking on the "ProShop" brand will navigate to the root ("/") of your application.

3)
  <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

  This toggle component creates a button that will be used to toggle the visibility of the Navbar's collapsible content.

  The aria-controls attribute is an accessibility attribute that helps to create an association between the 
  toggle button and the collapsible content it controls. 
  In this case, it specifies that the toggle button controls the element with the ID of "basic-navbar-nav."

"basic-navbar-nav": This ID corresponds to the id attribute of the <Navbar.Collapse> component. 
The id attribute uniquely identifies the collapsible content.

 So, when a screen reader encounters the toggle button, it can use the aria-controls attribute to understand
 that this button controls the collapsible content with the ID "basic-navbar-nav." 
 This association helps users with accessibility needs understand the relationship between the button and the content it affects.

4)
<Navbar.Collapse>: This component represents the collapsible content of the Navbar. 
 The id="basic-navbar-nav" attribute is used to uniquely identify this collapsible content.
 The id is referenced by the aria-controls attribute in <Navbar.Toggle> to establish the connection between
 the toggle button and the collapsible content.

 5)
 <Nav className="ms-auto">: This is a Bootstrap component representing a navigation container.
 The ms-auto class is a utility class that aligns the items to the right side of the Navbar.

 <Nav.Link>: This component represents a navigation link within the Navbar. 
 The href attribute specifies the destination of the link. In this case, there are two links - one for the "Cart" and another for "Sign In." 
 Each link includes an icon from the react-icons library (FaShoppingCart and FaUser, respectively) along with text.
 The icons in this library are referred to as font-awesome (fa) icons.
*/
