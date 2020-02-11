const initialState = {
    test: []
  };
  
  function rootReducer(state = initialState, action) {
    console.log('reducer', state, action);
    return state;
  };
  
  export default rootReducer;