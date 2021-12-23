export type TodoId = string;


export type Todo = {
    id: TodoId,
    userId: Number,
    title: String,
    completed: Boolean,
}


export enum testStatus {
    idle = 'idle',
    pending = 'pending',
    failed = 'failed'
}


export interface TestState {
    list: [],
    status: ''
}