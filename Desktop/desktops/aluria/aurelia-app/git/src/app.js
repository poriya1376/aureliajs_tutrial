import {Todo} from './todo';
import {index} from './index';
import {about} from './about';
import {post}from './post';
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

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: '',       name: 'index',       moduleId: 'index' },
      { route: 'about',       name: 'about',       moduleId: 'about' },
      { route: 'post/:slug',       name: 'post',       moduleId: 'view post' },

    ]);
  }

 
}
