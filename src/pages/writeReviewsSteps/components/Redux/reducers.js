import { combineReducers } from 'redux';
import { SET_ACTIVE_STEP, SET_COMPLETED_STEP } from './actions';

const activeStepReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_ACTIVE_STEP:
      return action.payload;
    default:
      return state;
  }
};

const completedReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_COMPLETED_STEP:
      return {
        ...state,
        [action.payload]: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  activeStep: activeStepReducer,
  completed: completedReducer,
});

export default rootReducer;
