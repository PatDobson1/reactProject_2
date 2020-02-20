// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
    import MenuItem from './MenuItem';
// -----------------------------------------------------------------------------

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(target){
        this.props.menuHandler(target);
    }
    render(){
        const menuItems = [];
        const pageData = this.props.data.pages;
        Object.keys(pageData).forEach(key=>{
            menuItems.push(
                <MenuItem key={key} link={pageData[key].link} title={pageData[key].title} menuHandler={this.menuHandler} />
            )
            console.log(pageData[key].title);
        })
        console.log(this.props.data);
        return(
            <div className="menu">
                {menuItems}
            </div>
        )
    }
}

export default Menu;
