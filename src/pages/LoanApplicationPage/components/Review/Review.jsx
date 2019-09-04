import React, { useState } from 'react';
import block from 'bem-cn';

import './Review.scss';

const b = block('loan-application-review');

function Review({ loanApplication, updateLoadAmount }) {
  const [repayAmount, setRepayAmount] = useState(0);

  const handleRepayOnChange = (e) => {
    const numberValue = Number(e.target.value);
    setRepayAmount(numberValue);
  };

  const handleRepayButtonClick = () => {
    if (repayAmount > 0 && repayAmount <= Number(loanApplication.amount)) {
      updateLoadAmount(repayAmount);
      setRepayAmount('');
    }
  };

  return (
    <div className={b()}>
      <div className="field-data">
        <label>Title</label>
        <span>{loanApplication.title}</span>
      </div>
      <div className="field-data">
        <label>First Name</label>
        <span>{loanApplication.firstName}</span>
      </div>
      <div className="field-data">
        <label>Last Name</label>
        <span>{loanApplication.lastName}</span>
      </div>
      <div className="field-data">
        <label>Date Of Birth</label>
        <span>{loanApplication.dateOfBirth}</span>
      </div>
      <div className="field-data">
        <label>Phone</label>
        <span>{loanApplication.phone}</span>
      </div>
      <div className="field-data">
        <label>Email</label>
        <span>{loanApplication.email}</span>
      </div>
      <div className="field-data">
        <label>Address</label>
        <span>{loanApplication.address}</span>
      </div>

      <br />
      <hr />
      <div className="field-data">
        <label>Amount</label>
        <span>{loanApplication.amount}</span>
      </div>

      <div className="field-data">
        <label>Term</label>
        <span>{loanApplication.term}</span>
      </div>

      <br />
      <hr />

      <div className="title">Repayment</div>
      {
        loanApplication.amount ? (
          <>
            <div className="field">
              <label className="label">Repayment amount</label>
              <div className={'input'}>
                <input
                  className="input--control"
                  placeholder="Repayment amount"
                  value={repayAmount}
                  onChange={handleRepayOnChange}
                  type="number"
                />
                {repayAmount < 0 && <span className="input--error">Repayment Amount must be greater than 0</span>}
                {repayAmount > Number(loanApplication.amount) && <span className="input--error">Repayment Amount must be less than {loanApplication.amount}</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="submit-button"
                disabled={repayAmount < 0 || repayAmount > Number(loanApplication.amount)}
                onClick={handleRepayButtonClick}
              >
                Repayment
              </button>
            </div>
          </>
        ) : 'You have payment successufully'
      }
    </div>
  );
}

export default Review;
