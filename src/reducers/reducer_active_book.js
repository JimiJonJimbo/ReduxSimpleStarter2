// State argument is not application state, only the state
// this reducer is responsible for. It's set to null because
// you can't return undefined from a reducer, which would happen
// if the app just booted up and the user hadn't clicked on
// a book.
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
