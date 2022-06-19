import { Component } from 'react';
import "./todo-list-item.css"

//= ({name,value, increase}) =>

class TodoListItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }
    onIncrease = () => {
        this.setState(({increase}) => ({increase : !increase}));
    }
    onLike = () => {
        this.setState(({like}) => ({
            like : !like
        }));
    }
    render () {
        const {name,value, onDelete, onToggleIncrease, onToggleRise} = this.props;
        const {increase, like} = this.state;
        let classNames = "list-group-item d-flex justify-content-between"
        if (like) {
            classNames += ' like';
        };
        if (increase) {
            classNames += ' increase';
        };
        return (
            <li className={classNames}>
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <span onClick={this.onLike} className="list-group-item-input">{value}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-cookie btn-sm" type="button" onClick={this.onIncrease}>
                        Выполнено
                    </button>
                    <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
                
        )
    }

}

export default TodoListItem;