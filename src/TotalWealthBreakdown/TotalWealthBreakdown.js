import '../TotalWealthBreakdown/TotalWealthBreakdown.css';

const TotalWealthBreakdown = ({ homePrice, downPaymentContribution, dearfieldFundContribution }) => {
  const APPRECIATION_RATE = 0.05;
  const totalDownPaymentOnClosing = downPaymentContribution + dearfieldFundContribution;
  const estimatedHomeAppreciationAfterTenYears = (homePrice * (1 + APPRECIATION_RATE) ** 10) - homePrice;
  const fivePercentOfHomeAppreciation = estimatedHomeAppreciationAfterTenYears * 0.05;
  const totalRepaymentToDearfieldFund = dearfieldFundContribution + fivePercentOfHomeAppreciation;
  const myTotalWealth = estimatedHomeAppreciationAfterTenYears - downPaymentContribution - totalRepaymentToDearfieldFund;

  return (
    <div className='total-wealth-container'>
      <h4 className='total-wealth-output-title'>
        Total Down Payment Brought to Closing: 
      </h4>
      <p className='total-wealth-output-down-payment'>
        ${totalDownPaymentOnClosing.toFixed(2)}
      </p>
      <h4 className='total-wealth-output-title'>
        Estimated Home Appreciation in 10 years: 
      </h4>
      <p className='total-wealth-output-appreciation'>
        ${estimatedHomeAppreciationAfterTenYears.toFixed(2)}
      </p>
      <h4>Down Payment Assistance Repaid to The Dearfield Fund:</h4>
      <p className='total-wealth-output-repaid'>
        ${dearfieldFundContribution ? dearfieldFundContribution.toFixed(2) : '0.00'}
      </p>
      <h4>Five of My Home's 10-Year Appreciation Paid to The Dearfield Fund:</h4>
      <p className='total-wealth-output-five-percent'>
        ${fivePercentOfHomeAppreciation.toFixed(2)}
      </p>
      <h4>Wealth Reinvested to Help Future Dearfield Homeowners:</h4>
      <p className='total-wealth-output-reinvested'>
        ${totalRepaymentToDearfieldFund.toFixed(2)}
      </p>
      <h4>My Total Wealth:</h4>
      <p className='total-wealth-output-total'>
        ${myTotalWealth.toFixed(2)}
      </p>
    </div>
  );
}
export default TotalWealthBreakdown;