import { combineReducers } from 'redux';
import { SET_ACTIVE_STEP, SET_COMPLETED_STEP, SET_STEP_INFO } from './actions';

// Reducer for active step
const activeStepReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_ACTIVE_STEP:
      return action.payload;
    default:
      return state;
  }
};

// Reducer for completed steps
const completedReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COMPLETED_STEP:
      return state.map((completed, index) =>
        index === action.payload ? true : completed
      );
    default:
      return state;
  }
};

// Reducer for step information
const stepInfoReducer = (state = Array.from({ length: 6 }, () => ''), action) => {
  switch (action.type) {
    case SET_STEP_INFO:
      const { step, info } = action.payload;
      return state.map((stepInfo, index) =>
        index === step ? info : stepInfo
      );
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  activeStep: activeStepReducer,
  completed: completedReducer,
  stepInfo: stepInfoReducer,
});

export default rootReducer;
