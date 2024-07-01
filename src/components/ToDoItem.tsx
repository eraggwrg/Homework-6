
import { useContext, useState } from "react"
import { ActionTypes, ITodo } from "../lib/types"
//  import { patchDone } from "../lib/api"
import { TodoContext } from "../lib/context"
import { deleteToDo, putDone } from "../lib/api"
// import { ActionTypes } from "../lib/types"

interface IProps {
    todo: ITodo
}

//const [done,setDone] = useState(false)




export const ToDoItem: React.FC<IProps> = ({ todo }) => {

    const context = useContext(TodoContext)
    if (!context) {
        throw new Error("Out of Provider...")
    }
    const { dispatch } = context

    
    const [done, setDone] = useState(todo.completed)

    const handleDone = async (todo: ITodo) => {
        setDone(!done)
        todo.completed = !done
        const data = await putDone(todo)
        dispatch({ type: ActionTypes.update, payload: data })

    }

    const handleDelete = async (todo:ITodo) => {

        const data = await deleteToDo(todo)

        
        dispatch({type:ActionTypes.remove, payload:data.id})

    }

    if (todo.completed) {
        return <div className="item completed">
            <p>{todo.text}</p>
            <div>
                <button onClick={() => handleDone(todo)}>done</button>
                <button onClick={() => handleDelete(todo)}>delete</button>
            </div>
        </div>
    }
    else {
        return <div className="item">
            <p>{todo.text}</p>
            <div>
                <button onClick={() => handleDone(todo)}>done</button>
                <button onClick={() => handleDelete(todo)}>delete</button>
               
            </div>
        </div>
    }

}

