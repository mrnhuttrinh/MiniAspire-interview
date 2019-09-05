import React from 'react';
import block from 'bem-cn';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Field, reduxForm, getFormValues,
} from 'redux-form';

import { InputField, SelectField } from '../../../../shared/reduxForm';
import {
  required, email, phoneNumber,
  minNumber, maxNumber,
} from '../../../../shared/validators';

import './LoanApplicationForm.scss';

const b = block('loan-application-form');

const zeroNumber = minNumber(0);
const billionNumber = maxNumber(1000000000);

function LoanApplicationForm(props) {
  const { handleSubmit, updateLoanForm } = props;

  const handleFormSubmit = (values) => {
    updateLoanForm(values);
  };

  return (
    <form className={b()} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="title">Contact Information</div>
      <Field
        validate={[required]}
        options={[
          { key: 'Mr', text: 'Mr'},
          { key: 'Mrs', text: 'Mrs'},
          { key: 'Ms', text: 'Ms'},
        ]}
        component={SelectField}
        name="title"
        label="Title"
      />

      <Field
        validate={[required]}
        component={InputField}
        name="firstName"
        label="First Name"
      />

      <Field
        validate={[required]}
        component={InputField}
        name="lastName"
        label="Last Name"
      />

      <Field
        validate={[required]}
        component={InputField}
        name="dateOfBirth"
        label="Date Of Birth"
        type="date"
      />

      <Field
        validate={[required]}
        options={[
          { key: 'Male', text: 'Male'},
          { key: 'Female', text: 'Female'},
          { key: 'Other', text: 'Other'},
        ]}
        component={SelectField}
        name="material"
        label="Material"
      />

      <Field
        validate={[required, phoneNumber]}
        component={InputField}
        name="phone"
        label="Phone"
      />
      
      <Field
        component={InputField}
        validate={[required, email]}
        name="email"
        label="Email"
      />

      <Field
        component={InputField}
        validate={[required]}
        name="address"
        label="Address"
      />

      <br />
      <hr />
      <div className="title">Loan Information</div>
      <Field
        component={InputField}
        validate={[required, zeroNumber, billionNumber]}
        name="amount"
        label="Amount"
        type="number"
      />

      <Field
        validate={[required]}
        options={[
          { key: 'Weekly', text: 'Weekly'},
          { key: 'Monthly', text: 'Monthly'},
          { key: 'Quarterly', text: 'Quarterly'},
          { key: 'Annually', text: 'Annually'},
        ]}
        component={SelectField}
        name="term"
        label="Term"
      />

      <div>
        <button type="submit" className="submit-button">
          Send Application Now
        </button>
      </div>
    </form>
  );
}

const LOAN_APPLICATION_FORM = 'loanApplicationForm';

const mapStateToProps = (state) => {
  return {
    values: getFormValues(LOAN_APPLICATION_FORM)(state)
  };
};

export { LoanApplicationForm };

export default compose(
  reduxForm({
    form: LOAN_APPLICATION_FORM,
    initialValues: {
      title: 'Mr',
      material: 'Male',
      term: 'Weekly'
    },
  }),
  connect(mapStateToProps),
)(LoanApplicationForm);
