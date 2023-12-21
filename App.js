import React from 'react';
import ReactDOM from 'react-dom/client';

//This is a React element written using React.
/*const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Namaste React 🚀"
);*/

// we can write this using jsx too.
// JSX is not HTML in Javascript. However it is HTML like or XML like syntax.

// the following jsx code is transpiled by babel which is in Parcel
// it convert the code to React.createElement -> ReactElement -> HTMLElement(render)
/*const jsxHeading = (<h1> 
    Namaste React using JSX 🚀 
    </h1>
);*/

// let's convert the above jsx to react functional component

const Title = () => (
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