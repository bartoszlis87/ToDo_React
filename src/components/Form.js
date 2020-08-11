import React, { useState } from 'react';

const Form = ({ add }) => {
  const [title, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()

    add(title)
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" id="todoName" name="todoName" value={title} onChange={onChange} />
      <button type="submit">Dodaj</button>
    </form>
  )
};

export default Form;
