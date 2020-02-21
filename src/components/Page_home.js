// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------

// -----------------------------------------------------------------------------

class Page_home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h1>Welcome to the Calculations website</h1>
                <p>Within this website you will find a variety of calculators that will (hopefully) help you in performing those sometimes tricky calculations that plague normal life.</p>
            </>
        )
    }
}

export default Page_home;
