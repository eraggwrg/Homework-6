import axios from "axios"
import { ITodo } from "./types"
const URL = "http://localhost:3004/todos"

export const getAllTodos = async (): Promise<ITodo[]> => {
    const response = await axios.get(URL)
    return response.data
}


type InputTodo = Omit<ITodo, 'id'>
export const addToDo = async (obj: InputTodo): Promise<ITodo> => {
    const response = await axios.post(URL, obj)
    return response.data
}


export const putDone = async (obj: ITodo): Promise<ITodo> => {
    const response = await axios.put(URL + "/" + obj.id, obj)
    return response.data
}

export const deleteToDo = async (obj: ITodo): Promise<ITodo> => {
    const response = await axios.delete(URL + "/" + obj.id)
    return response.data
}