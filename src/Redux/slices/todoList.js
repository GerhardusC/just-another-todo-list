//Importing createSlice to store the state of the to-do list.
import { createSlice } from '@reduxjs/toolkit';
//Per the brief, this is the initial state of my reducer. This causes there by default to be one to-do on the list with meaningless content.
const initialTodoState = {
    nextId: 2,
    data:
    {
        1: {
            content: 'Content 1',
            completed: false
        }
    }
}
//This function creates the slice and defines its reducers.
export const todoSlice = createSlice({
    name: 'todoList',
    initialState: initialTodoState,
    reducers: {
        //This function allows us to add a to-do with its content initialised with the payload that comes from a textbox and the complete property set to false.
        addTodo: (currentTodos, { payload }) => {
            currentTodos.data[currentTodos.nextId] = { content: payload, completed: false }
            //We then add one to the next todo id, because a todo has been added.
            currentTodos.nextId += 1;
        },
        //This function allows us to remove the to-do. The payload here will be the id of the todo.
        removeTodo: (currentTodos, { payload }) => {
            delete currentTodos.data[payload];     
        },
        //This function allows us to toggle a to-do between complete and not by setting the value of completed to !completed.
        toggleTodoCompletion: (currentTodos, { payload }) => {
            currentTodos.data[payload].completed = !currentTodos.data[payload].completed;
        },
        //This function allows us to edit a to-do. Here I simply did userInput with a prompt instead of creating and hiding an extra input box.
        editTodo: (currentTodos, { payload }) => {
            let userInput = prompt("Type in a new name for this to-do.");
            if(userInput !== "" && userInput !== null){
                currentTodos.data[payload]['content'] = userInput;
            } else {
                alert("Your to-do description cannot be empty.")
            }
        }
    }
})
//Exporting all the actions.
export const { addTodo, removeTodo, toggleTodoCompletion, editTodo } = todoSlice.actions;

export default todoSlice.reducer;