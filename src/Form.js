import React from 'react';
import './Form.scss';

function Form(props) {
  const {data, index, name} = props;

  function onChange(ev) {
    const value = ev.target.value;
    const name = ev.target.name;
    props.onChange({
      ...data,
      [name]: value
    });
  }

  return (
      <div className="Form">
        <h2>{name} {index}</h2>
        <input type="text" name="code" placeholder="code" value={data.code} onChange={onChange}></input>
        <input type="text" name="title" placeholder="title" value={data.title} onChange={onChange}></input>
        <input type="text" name="subtitle" placeholder="subtitle" value={data.subtitle} onChange={onChange}></input>
      </div>
  );
}

export default Form;
