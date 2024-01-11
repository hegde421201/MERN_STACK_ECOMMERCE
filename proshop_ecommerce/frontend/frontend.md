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

In every component file, I have included comments for better understanding of the code.

[Header.tsx](https://github.com/hegde421201/MERN_STACK_ECOMMERCE/blob/main/proshop_ecommerce/frontend/src/components/Header.tsx)

## Step 5: Create Footer component

Inside the components folder create a new file "Footer.tsx"

[Footer.tsx](https://github.com/hegde421201/MERN_STACK_ECOMMERCE/blob/main/proshop_ecommerce/frontend/src/components/Footer.tsx)
