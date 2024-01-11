## Step 1: create typescript app for react

The command template to achieve this is -
npx create-react-app frontend --template typescript

## Step 2:

Focus on the file App.tsx in the src folder inside the "frontend" project.
Delete the contents of this file and type

```typescript
import React from "react";

const App = () => {
  return <div>Welcome Proshop</div>;
};

export default App;
```

Type in the command "npm start" inside the "frontend" folder. You will see the
broswer pop up with the URL
http://localhost:3000/

The app is ready for further changes!

## Step 3: Install bootstrap dependencies for UI

Use the command npm install react-bootstrap bootstrap react-icons

Go to the src folder and make changes in the index.tsx file
Include this import statement at the top of the file ---
import "bootstrap/dist/css/bootstrap.min.css";

## Step 4: Create Header component

Create a new folder inside src and name it as "components".
Inside the components folder create a new file "Header.tsx"

Include the two import statements above for bootstrap and icons.

In every component file, I have included comments for better understanding of the code. Click on the link below

[Header.tsx](https://github.com/hegde421201/MERN_STACK_ECOMMERCE/blob/main/proshop_ecommerce/frontend/src/components/Header.tsx)

## Step 5: Create Footer component

Inside the components folder create a new file "Footer.tsx". Click on the link below

[Footer.tsx](https://github.com/hegde421201/MERN_STACK_ECOMMERCE/blob/main/proshop_ecommerce/frontend/src/components/Footer.tsx)

## Step 6: Add the header and footer components to the App.tsx

Check out the addition of Header and Footer components created in step 4 and step 5 above in the App.tsx file. Click the link below.

[App.tsx](https://github.com/hegde421201/MERN_STACK_ECOMMERCE/blob/main/proshop_ecommerce/frontend/src/App.tsx)

Go the project folder and run the command : npm start. Check the Header and Footer developed so far in the browser.

## Step 7: Add the HomeScreen component

[HomeScreen.tsx](https://github.com/hegde421201/MERN_STACK_ECOMMERCE/blob/main/proshop_ecommerce/frontend/src/screens/HomeScreen.tsx)

Here we use the Grid layout concepts from the React Bootstrap UI library.

Read the comments section below the code to understand better.

This component populates each product in the grid defined using the Product.tsx file as discussed in step 8.

## Step 8: Add the Product component

[Product.tsx](https://github.com/hegde421201/MERN_STACK_ECOMMERCE/blob/main/proshop_ecommerce/frontend/src/components/Product.tsx)

Here we use the typescript style of defining the product prop.

The Card component is part of the react-bootstrap library, and it is used to
create a card-based layout for displaying content.

## Step 9:
