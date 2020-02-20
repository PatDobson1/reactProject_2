// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------

// -----------------------------------------------------------------------------

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="menu">
                <a>menu 1</a>
                <a>menu 2</a>
                <a>menu 3</a>
                <a>menu 4</a>
            </div>
        )
    }
}

export default Menu;
