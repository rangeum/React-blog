import { createStore } from 'redux';

const store = createStore(reducer);

constructor() {
  super();
  // default state
  this.state = store.getState();
  // function that will execute every time the state changes
  this.unsubscribe = store.subscribe(() => {
    this.setState(store.getState());
  });
}




const initState = {
 API_SERVER:'https://2gram.site'
}




function reducer(state= initState, action) {
  switch (action.type) {
    case 'CHANGE':
      return Object.assign({}, state, {
        API_SERVER: action.by
      })
    default:
      return state;
  }
}
