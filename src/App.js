import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {

  let [Item,setItem] = useState("");
  let [Itemlist,setItemList] = useState(["<- delete Item"]);

  const Add =(e)=>{
    setItem(e.target.value)
  }

  const AddToList=()=>{
    setItemList((preItems)=>{
      if( Item !==""){
        return [...preItems,Item];
      }
      else{
        return [...preItems]
      }
    })
    setItem("");
  }

  const delItem=(id)=>{
    setItemList((preItems)=>{
      return (preItems.filter((arrEle,index)=>{
        return index!==id;
      }))
    })
  }

  return (
    <>
      <div className='main'>
        <div className='box'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a Item' onChange={Add} value={Item}/>
          <button onClick={AddToList}>+</button>
          <ol>
            
            {Itemlist.map((itemVal,index)=>{
              return <TodoList 
                item={itemVal}
                id={index}
                key={index} 
                onSelect={delItem} />;
            })}
          </ol>
        </div>
      </div>
    </>
    );
}

export default App;