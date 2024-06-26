import { atom } from "recoil"

export interface Todo{
    index : number | null;
    title : string | null;
    description : string | null;
}
export  const todos = atom<Todo[]>({
    key: 'todos', // A unique key for your atom
    default: [{
        index : 0,
        title : "title",
        description : "description"
    }]
  });