// Define action types
export const SET_ACTIVE_STEP = 'SET_ACTIVE_STEP';
export const SET_COMPLETED_STEP = 'SET_COMPLETED_STEP';
export const SET_STEP_INFO = 'SET_STEP_INFO';

// Action creators
export const setActiveStep = (step) => ({
  type: SET_ACTIVE_STEP,
  payload: step,
});

export const setCompletedStep = (step) => ({
  type: SET_COMPLETED_STEP,
  payload: step,
});

export const setStepInfo = (step, info) => ({
  type: SET_STEP_INFO,
  payload: { step, info },
});
