
export const UPDATE_LOAN_APPLICATION_FORM = '@@__UPDATE_LOAN_APPLICATION_FORM';

export const UPDATE_LOAN_AMOUNT = '@@__UPDATE_LOAN_AMOUNT';

export function updateLoanApplicationForm(data) {
  return {
    type: UPDATE_LOAN_APPLICATION_FORM,
    payload: data,
  };
}

export function updateLoadAmount(data) {
  return {
    type: UPDATE_LOAN_AMOUNT,
    payload: data,
  };
}
