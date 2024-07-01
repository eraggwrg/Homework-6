
import { ActionTypes, ITodo, IAction, IState } from "./types";
export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.put:
      return {
        ...state,
        todos: action.payload as ITodo[],
      };

    case ActionTypes.add:
      return {
        ...state,
        todos: [...state.todos, action.payload as ITodo],
      };
    case ActionTypes.update:
      return {
        ...state,
        todos:[...state.todos]
      }
    case ActionTypes.remove:
      return {
        ...state,
        todos: [...state.todos.filter(elm => elm.id != action.payload)]
      }
    default:
      return state;
  }
};
