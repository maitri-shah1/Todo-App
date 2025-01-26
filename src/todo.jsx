import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
let [todos, setTodos] = useState([{task:"sample Task", id: uuidv4(), isDone: false}]);
let [newTodo, setNewTodo] = useState("");
let [isDone, setIsDone] = useState("false");

let addNewTask = () =>{
    setTodos((prevTodos) => {
       return [...todos, {task:newTodo, id: uuidv4(), isDone: false}]
    });
    setNewTodo("");
}

let updateTodoValue = (event) =>{
    setNewTodo(event.target.value);
}

let deleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id != id ));
};

let markAsDone =(id) => {
    setTodos((prevTodos) => 
        prevTodos.map((todo) =>{
        if(todo.id == id){
            return {...todo, isDone: true};
    } else{
        return todo;
    }
  })
);
};

let markAllDone = () =>{
    setTodos((prevTodos) =>
        prevTodos.map((todo) =>{
            return {...todo, isDone:true};
        })
    );
};

    return(
        <div>
            <h2>TO-DO LIST</h2>
            <input type="text" placeholder="Enter your task" value={newTodo} onChange={updateTodoValue}/>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>ADD TASK</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h2>TASKS TODO</h2>
            <ul>
                {
                    todos.map((todo) => (
                            <li key={todo.id}>
                                <span style={todo.isDone ? {textDecoration:"line-through"} : {}}>
                                    {todo.task}
                                    </span>
                                &nbsp;
                                <span><button onClick={() => deleteTodo(todo.id) }>Delete</button></span>
                                <span><button onClick={() => markAsDone(todo.id) }>Mark as Done</button></span>
                            </li>
                    ))
                }
            </ul>
            <br></br>
            <br></br>
            <button onClick={markAllDone}>Mark All as Done!</button>

            
        </div>
    );
}