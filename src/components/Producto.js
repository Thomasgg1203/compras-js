import { Component } from "react";
import Buttom from './Buttom';

const style = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        with: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        width: '100%',
    }
}

class Producto extends Component{
    render(){
        const { producto, agregarAlCarro } = this.props
        return(
            <div style={style.producto}>
                <img style={style.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Buttom
                    onClick={() => agregarAlCarro(producto)}
                >
                    Agregar al carro
                </Buttom>
            </div> 
        )
    }
}

export default Producto;
