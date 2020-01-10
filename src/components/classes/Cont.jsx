import React,{ Component } from "react";

export default class Cont extends Component{

    state = {
        numero: this.props.numero
    }

    increment(){
        this.setState({ numero: this.state.numero+ 1})
    }

    discrement(){
        this.setState({ numero: this.state.numero- 1})
    }
    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.discrement()}>-</button>
            </div>
        )
    }
}