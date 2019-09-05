import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import LoanApplication, { LoanApplication as LoanApplicationComponent} from '../LoanApplication';
import LoanApplicationForm from '../../../components/LoanApplicationForm/LoanApplicationForm';
import Review from '../../../components/Review/Review';

const buildStore = configureStore();

describe('LoanApplication', () => {
  let store;
  let wrapper;

  it('should render LoanApplication with child LoanApplicationForm Component', () => {
    const initialState = { loanApplication: null };
    store = buildStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <LoanApplication />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render LoanApplication with child LoanApplicationForm Component', () => {
    wrapper = shallow(<LoanApplicationComponent loanApplication={null} />);
    expect(wrapper.find(LoanApplicationForm)).toHaveLength(1);
  });

  it('should render LoanApplication with child Review Component', () => {
    const loanApplication = {
      firstName: 'John'
    };
    wrapper = shallow(<LoanApplicationComponent loanApplication={loanApplication} />);
    expect(wrapper.find(Review)).toHaveLength(1);
  });
});
