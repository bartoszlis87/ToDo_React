import React from "react";

import { useParams } from 'react-router-dom';

const List = ({ todos, toggle, remove, asyncRemove }) => {
  const { filter } = useParams();

  return (
    <div>
      <ul>
        {
          todos &&
          todos.map &&
          todos
            .filter(({ done }) => {
              if (filter === 'done') {
                return done === true
              } else if (filter === 'not-done') {
                return done === false
              } else {
                return true
              }
            })
            .map(({ title, done }, i) => {
              return (
                <li
                  key={`${i}-${title}`}
                  style={done ? { textDecoration: 'line-through' } : {}}
                >
                  <span
                    onClick={() => toggle(title)}
                  >
                    {title}
                  </span>
                  <button
                    onClick={() => remove(title)}
                  >
                    Usuń
                  </button>
                  <button
                    onClick={() => asyncRemove(title)}
                  >
                    Usuń po 2s
                  </button>
                </li>
              )
            })
        }
      </ul>
    </div>
  )
};

export default List;
