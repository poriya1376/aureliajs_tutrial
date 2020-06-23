import {Todo} from './todo'
export class App {

  message = 'Hello World!';
  salam="salam iam poriya daliry";

  constructor(){
    this.todo=new Todo('clean home');
    this.todo.done=true;
    this.todolist=[];
    this.todolist.push(new Todo('hello word'));
    this.todolist.push(new Todo('hello poriya'));

    this.todolist.push(new Todo('hello ali'));
    this.new='';

  
  }
  addtodo(){
    this.todolist.push(new Todo(this.new));
    this.new='';
  }
  deletetodo(todo){
    this.todolist.splice(this.todolist.indexOf(todo),1);

  }
 
}
