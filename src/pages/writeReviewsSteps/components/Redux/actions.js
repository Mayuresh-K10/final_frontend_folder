export const SET_ACTIVE_STEP = 'SET_ACTIVE_STEP';
export const SET_COMPLETED_STEP = 'SET_COMPLETED_STEP';

export const setActiveStep = (step) => ({
  type: SET_ACTIVE_STEP,
  payload: step,
});

export const setCompletedStep = (step) => ({
  type: SET_COMPLETED_STEP,
  payload: step,
});
