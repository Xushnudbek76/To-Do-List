import React, { useState } from 'react';
import done from './assets/done.png';
import notdone from './assets/notdone.png';

 function App() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim().length >= 1) {
      const newTodo = { val: text, isDone: false };
      setTodo([...todo, newTodo]);
      setText('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };

  const handleDeleteAll = () => {
    setTodo([]);
  };

  const handleDone = (index) => {
    const updatedTodos = todo.map((item, i) =>
      i === index ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(updatedTodos);
  };

  return (
    <div className="container">
      <div className="todo">
        <div className="input-field">
          <input
            placeholder="add a todo"
            type="text"
            onChange={handleChange}
            value={text}
          />
          <button className="add" onClick={handleAdd}>add</button>
          <button className="del-all" onClick={handleDeleteAll}>Delete All</button>
        </div>

        <div className="todos">
          {todo.map((e, i) => (
            <div key={i}>
              <div className="card">
                <h1
                  onClick={() => handleDone(i)}
                  style={{
                    textDecoration: e.isDone ? 'line-through' : 'none'
                  }}
                >
                  <img
                    src={e.isDone ? done : notdone}
                    alt="status"
                    onClick={() => handleDone(i)}
                    style={{ width: '24px', cursor: 'pointer', marginRight: '10px' }}
                  />
                  {e.val}
                </h1>
                <button className="del" onClick={() => handleDelete(i)}>delete</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <footer>
        <h3>Made with ❤️ By Xushnudbek</h3>
      </footer>
      </div>
      
    </div>
  );
}

export default App;
