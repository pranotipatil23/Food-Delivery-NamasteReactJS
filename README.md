# Namaste React 🚀

# Parcel

- Dev Team
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm which is written in C++
- Caching - Faster Builds where ? - .parcel-cache file.
- Image optimization
- Minification of files.
- Bundling all the files.
- Compressing the files.
- Consistency Hashing
- Code splitting
- Differential Bundling - To suppose older browsers.😃
- Dignostic
- Remove unused code
- Transpilation
- provides HTTPS
- Tree Shaking

//This is a React element written using React.
/_const heading = React.createElement(
"h1",
{id:"heading"},
"Namaste React 🚀"
);_/

// we can write this using jsx too.
// JSX is not HTML in Javascript. However it is HTML like or XML like syntax.

// the following jsx code is transpiled by babel which is in Parcel
// it convert the code to React.createElement -> ReactElement -> HTMLElement(render)
/\_const jsxHeading = (<h1>
Namaste React using JSX 🚀

</h1>
);_/

// let's convert the above jsx to react functional component

/\*\*const Title = () => (

<h1>
Namaste React Title Component 😃
</h1>
)

const HeadingComponent = () => (

<div id="container">
{100+200}
<Title/>
<h1 className='heading'> Namaste React Functional Component 🚀 </h1>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading)
root.render(<HeadingComponent/>)

\*/

/\*\* Food Ordering App

- Header
- -- Logo
- -- Nav Items
- Body
- -- Search Bar
- -- Restaurants Tiles
-      -- Restaurant Cart
- Footer
- -- Copywrite
- -- other links
- -- Address
- -- Contact US
  \*/

## Two types of Export/Import

- Default Export/Import

export default ComponentName
import ComponentName from "path"

- Named Export/Import

export const ComponentName/Data
import {Component/Data} from "path"

---

## React Hooks

- they are normal javascript utility functions
- written by Facebook developers
- where did they write it - in React
- useState() -- superpowerful state variables in react
- useEffect()

## Routing in WebApps

- Client Side Routing
- Server Side Routing (Network Call)

## Class based component life cycle

-- whenever a class is load or instantiated a constructor is called
-- constructor gets called first
-- render method will get called.
-- componentDidMount() will get called.
-- if a parent class has componentDidMount() then it first finishes lifecycle of child class and then
parent class's componentDidMount() will be called.
-- componentDidUpdate() will get called.

## use case of componentDidMount()

-- to call api calls
-- why do we call api in here ?
-- because we want to call api as soon as react renders the class and filled data with it and re-render the app.

# Redux Toolkit

-- Install @reduxjs/toolkit, react-redux
-- Build our store
-- Connect our store to the App
-- Create slice

# Write data to slice

-- Dispatch an action
-- call a reducer function
-- update the slice

# Read data from slice

-- subscribe the component using selector

# Types of testing (developer)

-- Unit Testing
-- Integration Testing
-- End to End - E2E Testing

# how to setup react testing library

-- react testing library uses Jest
-- install react testing library
-- install jest
-- install babel-jest, @babel/core @babel/preset-env
-- configure babel-config.js
-- configure parcel config file to disable default babel transpilation
-- jest configuration -> npx jest --init
-- install jest-environment-jsdom
-- enable jsx in the test -- @@babel/preset-react to work jsx in test cases
-- include @babel/preset-react inside babel config
-- install testing-library/jest