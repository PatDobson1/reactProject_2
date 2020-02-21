// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { investmentCalculator } from '../static/Functions';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------

// -----------------------------------------------------------------------------

class Page_investmentCalculator extends React.Component{
    constructor(props){
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            "investment" : 1000,
            "term" : 10,
            "interestRate" : 5,
            "finalValue" : 0
        }
    }
    componentDidMount(){
        const finalValue = investmentCalculator(this.state);
        this.setState({ "finalValue" : finalValue });
    }
    changeHandler(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name] : value });
    }
    submitHandler(e){
        e.preventDefault();
        if( this.state.investment !== '' && this.state.term !== '' && this.state.interestRate !== ''){
            document.getElementById('errorMessage').style.display = 'none';
            const finalValue = investmentCalculator(this.state);
            this.setState({ "finalValue" : finalValue });
        }else{
            document.getElementById('errorMessage').style.display = 'block';
        }
    }
    render(){
        return(
            <>
                <h1>Investment Calculator</h1>
                <p>Use this calculator to work out how much your investments are going to be worth.</p>
                <form onSubmit={this.submitHandler}>
                    <p>
                        <label>How much are you investing?</label>
                        <input type="number" name="investment" value={this.state.investment} onChange={this.changeHandler} />
                    </p>
                    <p>
                        <label>How long is the investment</label>
                        <input type="number" name="term" value={this.state.term} onChange={this.changeHandler} />
                        <span>(in years)</span>
                    </p>
                    <p>
                        <label>What is the interest rate?</label>
                        <input type="number" name="interestRate" value={this.state.interestRate} onChange={this.changeHandler} />
                        <span>(% per year)</span>
                    </p>
                    <p>
                        <input type="submit" value="Calculate" />
                    </p>
                </form>
                <div className="resultsHolder">
                    <h2>Results</h2>
                    <p>
                        Your initial investment of &pound;{this.state.investment}<br />
                        will be worth &pound;{this.state.finalValue}<br />
                        after {this.state.term} years at an interestRate of {this.state.interestRate}%
                    </p>
                    <p><em>Interest applied yearly</em></p>
                    <p id="errorMessage">Please complete the form above</p>
                </div>
            </>
        )
    }
}



export default Page_investmentCalculator;
