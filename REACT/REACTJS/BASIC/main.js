//React js is a javascript library used to build user interfaces specifically for single page applications.
//It is used for handling the view layer for web and mobile apps.
//React also allows us to create reusable UI components.
//react dom is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. 

const element1=React.createElement('h1',{id:'heading1',classname:"element1",style:{color:'blue'}},'Hello World from ReactJS');
const element2=React.createElement('h2',{id:'heading2',classname:"element2",style:{color:'blue'}},'This is ReactDOM');

// const container=document.getElementById('root');
// ReactDOM.render(element1,container);
// ReactDOM.render(element2,container);

const div=React.createElement('div',null,element1,element2);
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
//now both are visible because we have wrapped them inside a div element.

//render means to remove the old content and add the new content.
//To render multiple elements we need to wrap them inside

//React's job:the what -its job is only to describe what the UI should look like for a given state.it doesn't create dom elements.
//it creates lightweight js objects called "react elements"act as blueprints for the dom elements.
//ReactDOM's job:the how-its job is to take the react elements and make them appear on the screen.it figures out the most efficient way to update the browser's dom to match the react elements.
//this is the renderer.its job is to take the blueprint from react and actually build the ui for a specific platform(web,ios,android).
//React and ReactDOM work together to build and update the user interface in a efficient way.

