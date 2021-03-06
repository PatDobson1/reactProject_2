// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import Menu from './Menu';
// -----------------------------------------------------------------------------

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.props.menuHandler(target);
    }
    render(){
        const date = new Date().getFullYear();
        return(
            <div className="footer">
                <Menu data={this.props.data} position="footerMenu" menuHandler={this.menuHandler} />
                <div>All content &copy;{date} Calculations</div>
            </div>
        )
    }
}

export default Footer;
