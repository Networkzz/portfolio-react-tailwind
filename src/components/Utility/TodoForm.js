import React, { useState } from 'react';

function TodoForm(props) {
  //useState para controlar el flujo de los inputs
  const [input, setInput] = useState(props.edit ? props.edit.value : ''); //Mantiene el valor del todo previo a la hora de editar

  //funcion para controlar los cambios
  const handleChange = e => {
    setInput(e.target.value);
  };

  //funcion para prevenir el default del boton
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), //id random
      text: input
    });

    setInput('');
  };

  return (
    //formulario de la app
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
      <input
        type="text"
        placeholder="Update todo"
        value={input}
        name="text"
        className="todo-input edit"
        onChange={handleChange}
      />
      <button className="todo-button edit">Update</button>
      </>
      ) : 
      (
      <>
        <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add todo</button>
      </>
      )}
    </form>
  );
}

export default TodoForm;