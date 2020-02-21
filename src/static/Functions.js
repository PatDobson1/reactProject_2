
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

const tester = () => {
    return "tester";
}

// -- Exported functions -------------------------------------------------------
    export { mortgageCalculation, tester };
// -----------------------------------------------------------------------------
