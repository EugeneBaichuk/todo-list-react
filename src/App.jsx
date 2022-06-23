import './App.css';
import { Component } from 'react';
import AppInfo from './components/app-info/app-info';
import TodoList from './components/todo-list/todo-list';
import TodoAddForm from './components/todo-add-form/todo-add-form';

class App extends Component {
  constructor (props) {
    super(props);
    this.maxId = 5;
    this.state = {
      formData: {
        name: 'aaa',
        value: 'aaa'
      },
      todoData: [
        {name: 'Найти кофе', value:'Выбрать лучшую кофейню и пойти туда', id: 1},
        {name: 'Выбрать', value:'Посмотреть меню и выбрать', id: 2},
        {name: 'Выпить', value:'Насладиться ароматом и вкусом', id: 3},
        {name: 'Зарядиться', value:'Зарядиться энергией для выполнения ДЗ', id: 4},
      ]
    }
  }
  render () {
    return (
      <div className="App">
        <AppInfo/>
        <TodoList
        data={this.state.todoData}
        onDelete={this.deleteItem}
        />
        <TodoAddForm onAdd={this.addItem}/>
      </div>
    )
  }
  deleteItem = (id) => {
    this.setState(({todoData})=> {
      return {
        todoData: todoData.filter(item => item.id !== id)
      }
    });
  }
  addItem = (data) => {
    const newItem = {
      name: data.name, 
      value: data.value,
      id: this.maxId++
  }

  this.setState(({todoData}) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      }
  });

  }
}

// onValueChange = (e, targetname, targetValue) => {
//   this.setState({
//      [e.target.name]: e.target.value   
//   });
// }

export default App;
