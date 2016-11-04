const defaultState = {
  isFetching: false,
  error: '',
};

function newAppReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default newAppReducer;
