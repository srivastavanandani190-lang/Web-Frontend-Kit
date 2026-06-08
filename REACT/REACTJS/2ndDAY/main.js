// const element=React.createElement('h1',{id:'heading1',className:"element1",style:{color:'blue'}},'Hello World from ReactJS - 2nd Day');
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const element=<h1 id="title">hello world</h1>
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//cdn-content delivery network
//jsx-javascript xml used to write html inside javascript
//bable -transpiler convert jsx to js ,compiler for js

//jsx-->react.createElement()-->js object-->html.
//bable-->react-->reactDOM.

//REACT COMPONENT--> function or class that returns a react element.
// function App(){
//     return(
//         <div>
//             <h1 id="title">Hello World from ReactJS - 2nd Day</h1>
//             <h2>This is my first react component</h2>
//         </div>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

//JSX RULES
//1. return single element
//2. use camelCase for html attributes
//3. className instead of class
//4. close every element
//5. use parentheses for multi line html
// function App(props){
//     return(
//         <h1>{props.name} welcome to webstack world!</h1>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(App('Nandani'));
// root.render(<App name="Nandani"/>);

// props - properties used to pass data from one component to another component.

// const Age=13;
// const element=<h1>{Age>=18 ? 'You are eligible to vote' : 'You are not eligible to vote'}</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//conditional rendering - render different html based on condition.

// const courses=['HTML','CSS','JS','REACTJS'];
// function elementList(){
//     return(
//         <ul>
//             {courses.map((course)=><li>{course}</li>)
//             }
//         </ul>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(elementList());

// const element=<h1 style={{color:'white',backgroundColor:'orange'}}>Hello World</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);   

function header(props){
    return(
        <h1>{props.name}Welcome to election commission</h1>
   );
}
function content(props){
    return(<>
     <h2>Your age is {props.age} years</h2>
     <h2>{props.age>=18 ? 'You are eligible to vote' : 'You are not eligible to vote'}</h2></>
       
    );
}   
function footer(props){
    return(
     <h3>Thanks for visiting!</h3>
    );
}
function App(){
    return(
        <div>
            {header({name:'Nandani,'})} 
            {content({age:20})}
            {footer()}
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
