const TAX_RATES = [
    { maxAmount: 24000, rate: 0.1 },
    { maxAmount: 32333, rate: 0.25 },
    { maxAmount: 500000, rate: 0.30 },
    { maxAmount: 800000, rate: 0.325 },
    { maxAmount: Infinity, rate: 0.35 },
  ];
  const NHIF_RATES = [150, 300, 400, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];
  const NSSF_RATE = 0.06;
  
  //User is prompted to input salary and benefits since they all undergo deductions
  const basicSalary = parseFloat(prompt("Enter your basic salary : "));
  const benefits = parseFloat(prompt("Enter your benefits : "));
  
  // The sum is calculated
  const grossSalary = basicSalary + benefits;
  
  // Calculate NHIF deductions
  let nhifDeduction;
  if (grossSalary <= 5999) {
    nhifDeduction = 150;
  }
   else if (grossSalary <= 7999) {
    nhifDeduction = 300;
  } 
  else if (grossSalary <= 11999) {
    nhifDeduction = 400;
  } 
  else if (grossSalary <= 14999) {
    nhifDeduction = 500;
  } 
  else if (grossSalary <= 19999) {
    nhifDeduction = 600;
  } 
  else if (grossSalary <= 24999) {
    nhifDeduction = 750;
  } 
  else if (grossSalary <= 29999) {
    nhifDeduction = 850;
  } 
  else if (grossSalary <= 34999) {
    nhifDeduction = 900;
  }   
  else if (grossSalary <= 39999) {
    nhifDeduction = 950;
  } 
  else if (grossSalary <= 44999) {
    nhifDeduction = 1000;
  } 
  else if (grossSalary <= 49999) {
    nhifDeduction = 1100;
  } 
  else if (grossSalary <= 59999) {
    nhifDeduction = 1200;
  } 
  else if (grossSalary <= 69999) {
    nhifDeduction = 1300;
  } 
  else if (grossSalary <= 79999) {
    nhifDeduction = 1400;
  } 
  else if (grossSalary <= 89999) {
    nhifDeduction = 1500;
  } 
  else if (grossSalary <= 99999) {
    nhifDeduction = 1600;
  } 
  else {
    nhifDeduction = 1700;
  }
  
  // Calculate NSSF deductions
  const nssfDeduction = grossSalary * NSSF_RATE;
  
  // Calculate taxable income,the 2438 is included since it's personal relief
  const taxableIncome = grossSalary - nhifDeduction - nssfDeduction - 2438;
  
  // Calculate tax (payee),it iterates over each tax bracket given at the very start of the code
  let tax = 0;
  let remainingIncome = taxableIncome;
  for (const { maxAmount, rate } of TAX_RATES) {
    if (remainingIncome <= 0) break;
    const amountTaxableIncome = Math.min(remainingIncome, maxAmount);
    tax += amountTaxableIncome * rate;
    remainingIncome -= amountTaxableIncome;
  }
  
  // Calculate net salary
  const netSalary = grossSalary - nhifDeduction - nssfDeduction - tax;
  
  // Output results
  console.log(`Payee (Tax): ${tax}`);
  console.log(`NHIF Deduction: ${nhifDeduction}`);
  console.log(`NSSF Deduction: ${nssfDeduction}`);
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`Net Salary: ${netSalary}`);

  