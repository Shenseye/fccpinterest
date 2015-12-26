const INCREMENT = 'redux-example/counter/INCREMENT';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      const {count} = state;
      return {
        count: count + (action.incrementBy || 1)
      };
    default:
      return state;
  }
}

export function increment(incrementBy) {
  return {
    type: INCREMENT,
    incrementBy
  };
}
