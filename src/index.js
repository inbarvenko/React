import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './Components/TaskList';
  
  class ToDo extends React.Component {

    toDoList = [];

    addTask(){
      let newTask = {
        title: this.title,
        done: false,
        edit: false,
        id: this.id,
      }
      
      toDoList.push(newTask);
    }

    removeTask(id){
      toDoList.forEach((item) => {
        if(item.id == id) {
          toDoList.splice(id,1);
        }
      });
    }

    editTask(id){
      toDoList.forEach((item) => {
        if(item.id == id) {
          item.edit = !item.edit;
        }
      });
    }

    completeTask(id){
      toDoList.forEach((item) => {
        if(item.id == id) {
          item.done = !item.done;
        }
      });
    }
    
    render() {
      return (
        <div className = "container__list" id="container__list">
          <ul id = "todo" className = "list__items">
            <TaskList todo_list = {toDoList}/>
          </ul>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(<ToDo />)

  const activeNum = ReactDOM.createRoot(document.getElementById("current_number"))
  activeNum.render(<NumberActive list={toDoList} />)

  const inputCon = ReactDOM.createRoot(document.getElementById("input"))
  inputCon.render(<ContainerInput />)
  