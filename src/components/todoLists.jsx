import React from "react";
import AddForm from "./addForm";

class TodoLists extends React.Component {
    /**
   * Set initial state in constructor
   */
    constructor(props) {
        super(props);
    }

    getData = () => {
        let result = [];
        result = this.props.todoLists.map((value,index) => {
            return (value.isEdit) ?
                <AddForm inputValue = {value.name} index={index} setData = { this.props.setData } />
                : <div class="todo-list" key={index}>
                    <input type="checkbox" onChange={(evt) => this.props.setCompleted(evt,index)} checked={value.isCompleted} />
                    <span className={value.isCompleted && "completed-state"}>{value.name}</span>
                    <button type="button" onClick={() => this.props.editOrDelete(index, true)} className="form-button">Edit</button>
                    <button type="button" onClick={() => this.props.editOrDelete(index, false)} className="form-button">Delete</button>
                </div>
        })

        return result;
    }

    /**
     * Render the html
     */
    render() {
        return (
            <React.Fragment>
                {Array.isArray(this.props.todoLists) && this.props.todoLists.length === 0 ?
                    <h4>Don't have TODO lists? Create new :)</h4>
                :
                    this.getData()
                }
            </React.Fragment>
        )
    }
}

export default TodoLists;