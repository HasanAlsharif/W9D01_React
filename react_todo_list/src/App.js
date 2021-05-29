// 1.to install the complete package : npx create-react-app foldername (from jouzaa : clean react , just type (npm i)) and install others , axios , expres ..etc check it from pkg.json under dependenceis
// 2.turn on React (npm run start)
// 3.open on chrome (localhost:3000)
// Best practice name the cpmponnents pascal case (ex.App)


import React from 'react';
import './App.css';

// components
import List from './components/List'
import ListItem from './components/ListItem'




// =========================== APP ==========================================

const App = () => {

  // ex. const name = 'jack' // const age = 30
  

  const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]
  const age = 30
  return (
    // <span> </span> does not take whole line not like paragraph
    // <span> M </span> <span> a </span> <span> x </span> ==> Max
    // if you use map() or any llisting func , you should use a prop (key) for each elem
    // === Passing Props===
    // the props are passed here while calling the compoenent or any html attr. inside it ex. <p myAge = {age}
    // now if you passed a prop inside a component you back to that components js then add the word props inside the functio (as argument t) ex: const compnent =(props) => 
    // you can now use these props inside the (component js) by using ex: props.myAge 
    // you can use ES6 vid
    // how to return react component inside a map() vid
    <>
     
    <div className="App">
     <h1>Todo List</h1>
     <List Mytodos = {todos} />
     <ListItem todo = {'todos'} id = {'22'} />
    </div>
    </>
  );
};




export default App;
