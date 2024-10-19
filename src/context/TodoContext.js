import { createContext, useContext } from "react";

export const TodoContext = createContext({

    todo :[
        {
            id: 1,
            todos: "Todo msgg",
            completed: false,

        }
    ],
    addTodo: (todos) => {},
    updateTodo : (id, todos) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},

})

export const useTodo = () =>{

    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider 