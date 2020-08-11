export const ADD_TODO = 'ADD_TODO';
export const TODO_TOGGLED = 'TODO_TOGGLED';
export const TODO_REMOVED = 'TODO_REMOVED';

export const add = (name) => ({
  type: ADD_TODO,
  payload: name,
});

export const toggle = (name) => ({
  type: TODO_TOGGLED,
  payload: name,
});

export const remove = (name) => ({
  type: TODO_REMOVED,
  payload: name,
});

export const asyncRemove = (name) => (dispatch) => {
  setTimeout(
    () => dispatch(remove(name)),
    2000
  )
};