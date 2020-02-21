// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Logo from './Logo';
    import Menu from './Menu';
// -----------------------------------------------------------------------------

class Header extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.props.menuHandler(target);
    }
    render(){
        return(
            <div className="header">
                <Logo position="header" />
                <Menu data={this.props.data} menuHandler={this.menuHandler} position="headerMenu" />
            </div>
        )
    }
}

export default Header;
