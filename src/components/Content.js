// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Page_home from './Page_home';
    import Page_mortgageCalculator from './Page_mortgageCalculator';
// -----------------------------------------------------------------------------

class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let displayPage = '';
        switch(this.props.currentPage){
            case 'mortgageCalculator':
                displayPage = <Page_mortgageCalculator />
                break;
            default:
                displayPage = <Page_home />
                break;
        }
        return(
            <div className="content">
                {displayPage}
            </div>
        )
    }
}

export default Content;
