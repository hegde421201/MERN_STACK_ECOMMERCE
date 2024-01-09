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
