// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------

// -----------------------------------------------------------------------------

class Logo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="logo">
                <span>Calculations</span>
            </div>
        )
    }
}

export default Logo;
