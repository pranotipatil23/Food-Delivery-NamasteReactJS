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
- useState()  -- superpowerful state variables in react
- useEffect()
