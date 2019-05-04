import React from "react";
import AddForm from "./addForm";
import TodoLists from "./todoLists";

const fields = {name : "",isEdit:false, isCompleted : false}

class TodoItems extends React.Component {
    /**
   * Set initial state in constructor
   */
    constructor(props) {
        super(props);

        this.state = { todoLists: []}
    }

    setCompleted = (evt,index) => {
        let result = JSON.parse(JSON.stringify(this.state.todoLists));
        result[index].isCompleted = evt.target.checked;
        this.setState({
            todoLists: result
        }) 
    }

    editOrDelete = (index,isEdit) => {
        let result = JSON.parse(JSON.stringify(this.state.todoLists));
        if(isEdit) {
            result[index].isEdit = true;
            this.setState({
                todoLists: result
            }) 
        }else {
            result.splice(index,1)
            this.setState({
                todoLists: result
            })    
        }
    }

    setData = (value,index) => {
        let data = { ...fields}
        data.name = value;
        let result = JSON.parse(JSON.stringify(this.state.todoLists));
        if(index !== undefined) {
            data.isCompleted = result[index].isCompleted
            result[index] = data;
        }else {
            result.push(data)
        }
        this.setState({
            todoLists: result
        })
    }

    /**
     * Render the html
     */
    render() {
        return (
            <div class="main-container">
                <div className="add-task">
                    <div className="header">
                        <h3>ADD ITEM</h3>
                    </div>
                    
                    <AddForm inputValue="" setData={this.setData}/>
                </div>

                <div className="todo-task">
                    <div className="header">
                        <h3>TODO Lists</h3>
                    </div>
                    <TodoLists todoLists={this.state.todoLists} setCompleted={this.setCompleted} editOrDelete={this.editOrDelete} setData={this.setData}/>
                </div>
            </div>
        )
    }
}

export default TodoItems;