//This component uses useSelector to select the to-do by id and the useDispatch to remove, toggle completion and edit a to-do.
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompletion, editTodo } from "../Redux/slices/todoList";


function DisplayTodos() {
    //Grabbing the to-dos from redux store.
    const todos = useSelector((currentTodos) => currentTodos.todos );
    const dispatch = useDispatch();
    //Getting an array of the keys, in this case the ids of the todos.
    let currentTodosIds = Object.keys(todos['data'])

    return (
        <div className="todo-list">
            <ul>
                {/* Checking all the available ids and adding the to-dos accordingly. */}
                {currentTodosIds.map((todoId) => {
                    return(
                        <li key={todoId} className={todos['data'][todoId]['completed'] ? "complete-todo" : "incomplete-todo"}>
                            <div className="todo-content">{todos['data'][todoId]['content']}</div>
                            <div className="todo-buttons">
                                {/* Adding all the buttons and dispatching the id to each relevant reducer. */}
                                <button className="edit-button" onClick={() => dispatch(editTodo(todoId))}>Edit</button>
                                <button className="delete-button" onClick={() => dispatch(removeTodo(todoId))}>Delete</button>
                                <button className="complete-button" onClick={() => dispatch(toggleTodoCompletion(todoId))}>Complete</button>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default DisplayTodos;