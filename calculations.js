const InterestCalculator = require('./interestCalcClass')

const principal = 1000;
const interestRate = 0.05;
const inflationRate = 0.02;
const numOfTimes = 10;

const futures = new InterestCalculator(
  principal,
  interestRate,
  inflationRate,
  numOfTimes
);

const compoundInterestDecimal = futures.getCompoundInterestDecimal();
const compoundInterestPercent = futures.getCompoundInterestPercent();
const compoundRealInterestDecimal = futures.getRealCompoundInterestDecimal();
const compoundRealInterestPercent = futures.getRealCompoundInterestPercent();

console.log({
  compoundInterestDecimal,
  compoundInterestPercent,
  compoundRealInterestDecimal,
  compoundRealInterestPercent,
});
