import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loanApplicationReducer from './pages/LoanApplicationPage/reducers';

export default combineReducers({
  form: formReducer,
  loanApplication: loanApplicationReducer,
});
