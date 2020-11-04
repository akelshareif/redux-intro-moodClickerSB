const INITIAL_STATE = { mood: '' };

const moodReducer = (state = INITIAL_STATE, action) => {
    if (action.type) {
        return { ...state, mood: action.payload };
    }
    return state;
};

const store = Redux.createStore(moodReducer);
