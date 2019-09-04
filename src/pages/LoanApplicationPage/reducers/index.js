import {
  UPDATE_LOAN_APPLICATION_FORM,
  UPDATE_LOAN_AMOUNT,
} from '../actions';

const initialState = {
  loanApplication: null,
};

function loanApplicationReducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_LOAN_APPLICATION_FORM:
    return {
      ...state,
      loanApplication: action.payload,
    };
  case UPDATE_LOAN_AMOUNT:
    return {
      ...state,
      loanApplication: {
        ...state.loanApplication,
        amount: Number(state.loanApplication.amount) - Number(action.payload),
      },
    };
  default:
    return state;
  }
}

export default loanApplicationReducer;
