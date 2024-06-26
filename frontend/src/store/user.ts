import { atom } from "recoil"

interface User{
    id? : string | null
    name? : string | null,
    email : string | null 
}
export  const user = atom<User>({
    key: 'user', // A unique key for your atom
    default: {
        id : null,
        name : null,
        email : null
    },
  });