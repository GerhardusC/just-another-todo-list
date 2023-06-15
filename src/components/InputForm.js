//I use one little piece of state to keep track of the value of the input box.
import { useState } from 'react'
//Importing useDispatch from redux and the add-todo action from the todo-list slice.
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/slices/todoList';


function InputForm() {
    //Initiating dispatch.
    const dispatch = useDispatch();
    //Initiating state for user-input in the input-box. 
    //I don't feel like it is necessary to use global state here with redux, so I'm just doing some local state.
    const [userInput, setUserInput] = useState("")
    //This function allows you to add a to-do. We call the dispatch function with the add-todo action if the userinput is not empty.
    const createTodo = (e) => {
        e.preventDefault();
        if(userInput !== "") {
            dispatch(addTodo(userInput));
            setUserInput("");
        } else {
            alert("Enter a to-do before adding it.")
        }
    }
    //Returns a form component where the value of the input is stored in the userInput state.
    return (
        <form className='add-todo-form'>
            <h1>To-do list</h1>
            <input placeholder='To-do' value={userInput} id='new-todo-name' type='text' onChange={(e) => {setUserInput(e.target.value)}} />
            <button onClick={createTodo}>Add to-do</button>
        </form>
    )
}

export default InputForm;