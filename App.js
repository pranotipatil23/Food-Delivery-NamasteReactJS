import React from 'react';
import ReactDOM from 'react-dom/client';


/*
<div id="parent">

    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2> I'm h2 tag </h1>
    </div>

</div>
if we want to achieve this we need to do following code :
**/


const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: 'child'},
        [React.createElement("h1", {}, "this is a Namaste React "), 
        React.createElement("h2", {}, "I am H2 tag"),
        ]      
    ),
    React.createElement(  
        "div",
        {id: 'child2'},
        [React.createElement("h1", {}, "I am H1 tag"), 
        React.createElement("h2", {}, "I am H2 tag"),
        ]      
    )]
);



const heading = React.createElement("h1", {
    id: "heading"
}, 
"Hello World from React!");

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);