export interface ILogin {
    email: string ,
    password : string

}
export type Iregistration = {
    firstName :string ,
    lastName : string ,
    email:string ,
    password : string ,
    service : string 

}
export type IForgot = {
    email :string ,
}

export type IReset = {
    newPassword : string ,
    confirmPassword : string 

}

// type questionAndAnswerType = {
//     id : string ,
//     answer : string ,
//     question : string

// }
export interface note {
    title : string ,
    description : string
}