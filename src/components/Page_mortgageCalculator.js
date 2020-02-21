// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { mortgageCalculation } from '../static/Functions';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------

// -----------------------------------------------------------------------------

class Page_mortgageCalculator extends React.Component{
    constructor(props){
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            'loanAmount' : '10000',
            'term' : 5,
            'interestRate' : 9,
            'monthlyPayment' : 0
        }
    }
    componentDidMount(){
        let monthlyPayment = mortgageCalculation(this.state);
        this.setState({ 'monthlyPayment' : monthlyPayment })
    }
    submitHandler(e){
        e.preventDefault();
        if( this.state.loanAmount !== '' && this.state.term !== '' && this.state.interestRate !== '' ){
            document.getElementById('errorMessage').style.display = 'none';
            let monthlyPayment = mortgageCalculation(this.state);
            this.setState({ 'monthlyPayment' : monthlyPayment })
        }else{
            document.getElementById('errorMessage').style.display = 'block';
        }
    }
    changeHandler(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name] : value });
    }
    render(){
        return(
            <>
                <h1>Mortgage Calculator</h1>
                <p>Use this calculator to work out how much you would pay every month for a mortgage.</p>
                <form onSubmit={this.submitHandler}>
                    <p>
                        <label>Amount of mortgage</label>
                        <input type="number" name="loanAmount" value={this.state.loanAmount} onChange={this.changeHandler} />
                    </p>
                    <p>
                        <label>Length of mortgage</label>
                        <input type="number" name="term" value={this.state.term} onChange={this.changeHandler}  />
                        <span>(in years)</span>
                    </p>
                    <p>
                        <label>Interest rate</label>
                        <input type="number" name="interestRate" value={this.state.interestRate} onChange={this.changeHandler} />
                        <span>(% per year)</span>
                    </p>
                    <p>
                        <input type="submit" value="Calculate" />
                    </p>
                </form>
                <div className="resultsHolder">
                    <h2>Results</h2>
                    <p>Your monthly repayment will be &pound;{this.state.monthlyPayment}</p>
                    <p id="errorMessage">Please complete the form above</p>
                </div>
            </>
        )
    }
}



export default Page_mortgageCalculator;
