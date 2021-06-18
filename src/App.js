import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { Footer } from './MyComponent/Footer';
import { Todos } from './MyComponent/Todos';
import { Addtodo } from './MyComponent/Addtodo';
import React, { useState , useEffect} from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }

  const addTodo= (title,desc)=> {
      console.log("I am adding this todo.",title,desc)
      let sno=0
      
      if(todos.length!=0)
      {
       sno=todos[todos.length-1].sno+1
      }
      const myTodo={
        sno:sno,
        title: title,
        desc : desc
      
    }
      setTodos([...todos,myTodo]);
      console.log(myTodo)
      
  }
  const onDelete= (todo) => {
      console.log("I am on Delete",todo);

      setTodos(todos.filter((e)=>{
          return e!==todo;
      }))
      localStorage.setItem("todos",JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    
  }, [todos])
    /*{
        sno: 1,
        title:  "Go to Market",
        desc: "Go to the market to this job done"
    },
    {
      sno: 2,
      title:  "Go to Dairy",
      desc: "Go to the Dairy for purchasing Milk"
  },
  {
    sno: 3,
    title:  "Online Payment",
    desc: "Bill Payment for Lightbill"
  }
  */
  
  return (
    <>
        <Header title="My ToDos List" searchbar={true}/>
        <Addtodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
    </>
  );
}

export default App;
