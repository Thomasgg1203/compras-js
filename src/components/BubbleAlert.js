import { Component } from "react";

const style = {
    bubbleAlert:{
        backgroundColor: '#E9722A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fondSize: '0.9rem',
        width: '20px',
    }
}

class BubbleAlert extends Component{
    getNumber(n){
        if(!n){ return '' }
        return n > 9 ? '9+' : n
    }
    render(){
        const { value } = this.props
        return(
            <span style={style.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert;
