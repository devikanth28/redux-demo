export const ValueReducer = (state = 3000, action) => {
    if(action.type === "increment"){
        return state + action.payload;
    }
    else if(action.type === "decrement"){
        return state - action.payload;
    }
    else{
        return state;
    }
};

//need to implement with by using useReducer




// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }

export default ValueReducer;