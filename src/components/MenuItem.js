// -- Setup --------------------------------------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
// -----------------------------------------------------------------------------

class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.menuHandler = this.menuHandler.bind(this);
    }
    menuHandler(e){
        this.props.menuHandler(e.target.target);
    }
    render(){
        return(
            <a target={this.props.link} onClick={this.menuHandler}>{this.props.title}</a>
        )
    }
}

export default MenuItem;
