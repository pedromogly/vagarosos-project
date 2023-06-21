import React, { Component } from 'react';
import './Painel.css';

class Painel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showLoading: false
         };
    }

    componentDidMount () {

        setTimeout(() => {
            this.setState({ showLoading: true });
        }, 500);
    }

    render() {
        const { showLoading } = this.state;

        return (
            <div className={`${showLoading ? 'fade-in' : 'fade-out'}`}>
                <h1>Olá</h1>
            </div>            
        );
    }
}

export default Painel;