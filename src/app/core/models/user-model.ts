export interface UserRequest { 
    id:number,
    fullName :string,
    idRole :number,
    token :string 
}

export interface User{
    id:number,
    fullName :string,
    idRole :number,   
}

export interface Login{
    user: string,
    password: string
}