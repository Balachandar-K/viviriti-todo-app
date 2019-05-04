import React from "react";

class AddForm extends React.Component {
    /**
   * Set initial state in constructor
   */
    constructor(props) {
        super(props);

        this.state={inputValue: props.inputValue};
    }

    handleFieldChange = (evt) => {
        this.setState({
            inputValue : evt.target.value
        })
    }

    add = () => {
        if(this.state.inputValue.trim().length > 0) {
            this.props.setData(this.state.inputValue, this.props.index)
            this.setState({
                inputValue : ""
            })
        }else {
            alert("Please enter your todo")
        }
    }

    /**
     * Render the html
     */
    render() {
        return (
            <div class="addForm">
                <div className="input-group">
                    <input type="text" value={this.state.inputValue} placeholder="Enter your item" onChange={this.handleFieldChange} />
                    <button type="button" className="form-button" onClick={() => this.add()}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddForm;