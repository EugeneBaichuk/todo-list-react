import { Component } from "react";
import "./todo-add-form.css";

class TodoAddForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            value: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value   
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.onAdd(this.state);
        this.setState({
            name: '',
            value: ''
        })
    }

    render () {
            return (
                <div className="app-add-form">
                <h3>Добавьте новое дело</h3>
                <form
                    onSubmit = {this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Название"
                        onChange={this.onValueChange}
                        name="name" 
                        value={this.state.name}          
                        />
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Описание" 
                        onChange={this.onValueChange}
                        name="value"
                        value={this.state.value}
                        />
        
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default TodoAddForm;