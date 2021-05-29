import React from 'react';
import ListItem from './components/ListItem'

const List = ({Mytodos}) => {

  // ex. const name = 'jack' // const age = 30
// console.log(props)
// console.log(props.Mytodos)
    const rendertodos = todoobject.map((elem , i)=>{
        return  <ListItem key ={i} ul = {elem} />

    })
  return (
    <>
     <div>
     <ul></ul>
    </div>
    </>
  );
};




export default List;
