
// -- Mortgage calculation -----------------------------------------------------
    const mortgageCalculation = data => {

        const loanAmount = data.loanAmount;
        const term = data.term * - 12;
        const interestRate = ( data.interestRate / 12 ) / 100;

        // pv : loanAmount, i : interestRate, n : timePeriods in months (ie years * 12)
        // pmt = pv x  i / (1 - (1 + i) ^ -n )

        let monthlyPayment = ( loanAmount * interestRate ) / ( 1 - Math.pow( 1 + interestRate, term ) );
        return monthlyPayment.toFixed(2);
    }
// -----------------------------------------------------------------------------

// -- Investment calculator ----------------------------------------------------
    const investmentCalculator = data => {
        const investment = parseFloat(data.investment);
        const term = parseFloat(data.term);
        const interestRate = parseFloat(data.interestRate) / 100;
        let finalValue = investment;
        for( let i = 0; i < data.term; i++ ){
            finalValue = finalValue + (finalValue * interestRate);
        }
        return finalValue.toFixed(2);
    }
// -----------------------------------------------------------------------------

// -- Exported functions -------------------------------------------------------
    export { mortgageCalculation, investmentCalculator };
// -----------------------------------------------------------------------------
