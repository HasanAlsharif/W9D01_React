import React from 'react';

const Component = () => {

  // ex. const name = 'jack' // const age = 30


  return (
    <>
     <div className="App">
     <h1>Compnenrt1</h1>
    </div>
    </>
  );
};




export default Component;

// then  you need to import it in (App.js)
// --> taype in: import Compnent from './components/Compente' 
// then call it inside app function -- > just type in: <Component/> 
// if you call more <Component/>  it wil repeat the text inside or whatevevr value inside


// if you have more than one func inside and you want to export just one thing (one function) and not all of this component refere to vid