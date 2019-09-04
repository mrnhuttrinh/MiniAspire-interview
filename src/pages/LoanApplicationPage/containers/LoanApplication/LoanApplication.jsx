import React from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as actions from '../../actions';
import { selectedLoanData } from '../../reducers/selectors';
import './LoanApplication.scss';

import Review from '../../components/Review/Review';
import LoanApplicationForm from '../../components/LoanApplicationForm/LoanApplicationForm';

const b = block('loan-application');

function LoanApplication(props) {
  const {
    updateLoanApplicationForm, loanApplication,
    updateLoadAmount,
  } = props;

  const updateLoanForm = (values) => {
    updateLoanApplicationForm(values);
  };

  if (!_.isEmpty(loanApplication)) {
    return (
      <div className={b()}>
        <div className={b('heading')}>Review Application</div>
        <Review
          loanApplication={loanApplication}
          updateLoadAmount={updateLoadAmount}
        />
      </div>
    );
  }

  return (
    <div className={b()}>
      <div className={b('heading')}>Loan Application Form</div>
      <LoanApplicationForm
        updateLoanForm={updateLoanForm}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loanApplication: selectedLoanData(state),
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplication);
