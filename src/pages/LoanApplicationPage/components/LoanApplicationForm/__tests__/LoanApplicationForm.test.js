import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LoanApplicationForm } from '../LoanApplicationForm';
import {default as LoanApplicationFormConnected } from '../LoanApplicationForm';

const buildStore = configureStore();

describe('LoanApplicationForm', () => {
  it('should render LoanApplicationForm', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(
      <LoanApplicationForm handleSubmit={handleSubmit} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should render LoanApplicationForm with hoc: redux-form and connect', () => {
    const initialState = { loanApplication: null };
    const store = buildStore(initialState);
    const updateLoanForm = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <LoanApplicationFormConnected updateLoanForm={updateLoanForm} />
      </Provider>
    );

    const handleSubmit = jest.fn();
    wrapper.find('form').simulate('submit', {
      submit: handleSubmit,
    });

    expect(updateLoanForm).toHaveBeenCalled();
  });
});
