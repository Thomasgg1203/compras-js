import { Component } from "react";

const style = {
    button: {
        backgroundColor: '#021',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',

    }
}

class Buttom extends Component{
    render(){
        return(
            <button 
            style={style.button}
            {...this.props}
            />
        )
    }
}

export default Buttom;