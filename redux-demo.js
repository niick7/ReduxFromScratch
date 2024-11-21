// Initialize a redux
const redux = require("redux");

// Create a Reducer Action
// Input is a state and dispatched action from component
// Output is an object represent for a new state
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Create a store
// Input of a store is a Reducer Action
const store = redux.createStore(counterReducer);

// Define a subscriber from store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Component will subscribe the store for newest state
store.subscribe(counterSubscriber);

// Use a dispatch action to change state:
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
