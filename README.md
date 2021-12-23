example of use
```javascript
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

  console.log(
    compoundInterestDecimal,
    compoundInterestPercent,
    compoundRealInterestDecimal,
    compoundRealInterestPercent,
  );

  //RESULT
  { compoundInterestDecimal: 
   [ '1050.00',
     '1102.50',
     '1157.63',
     '1215.51',
     '1276.28',
     '1340.10',
     '1407.10',
     '1477.46',
     '1551.33',
     '1628.89' ],
  compoundInterestPercent: 
   [ '1000.50',
     '1001.00',
     '1001.50',
     '1002.00',
     '1002.50',
     '1003.00',
     '1003.51',
     '1004.01',
     '1004.51',
     '1005.01' ],
  compoundRealInterestDecimal: 
   [ '1030.00',
     '1060.90',
     '1092.73',
     '1125.51',
     '1159.27',
     '1194.05',
     '1229.87',
     '1266.77',
     '1304.77',
     '1343.92' ],
  compoundRealInterestPercent: 
   [ '1000.30',
     '1000.60',
     '1000.90',
     '1001.20',
     '1001.50',
     '1001.80',
     '1002.10',
     '1002.40',
     '1002.70',
     '1003.00' ] }
```