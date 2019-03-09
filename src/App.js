import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './smalltalk.png';
import './App.css';
import Lerolero from './Lerolero';

class App extends Component {
    state = {
        phrase: '',
        erro: false,
        loading: false
    }

    onButtonClick = () => {
        this.setState({ loading: true });

        var myHeaders = new Headers({
            'Content-Type': 'text/json',
            'Access-Control-Allow-Origin': '*'
        });

        // fetch(`http://localhost:8000/api/v1/lerolero/pt`, myHeaders)
        fetch(`http://localhost:5000`, myHeaders)
            .then(data => data.json())
            .then(phrase => {
                this.setState({ phrase, loading: false })
            })
            .catch(erro => {
                this.setState({
                    erro: true,
                    loading: false
                })
            })
    }

    buildBlocoLeroLero = () => {
        if (this.state.erro) return "OOOps, deu erro.";
        if (this.state.loading) return "Carregando...";
        if (this.state.phrase) {
            return <Lerolero phrase={this.state.phrase} />
        }

        return <div></div>;
    }

    render() {
        const blocoLeroLero = this.buildBlocoLeroLero();

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {blocoLeroLero}
                    <button className='btn' onClick={this.onButtonClick}>Gerar LeroLero</button>
                </header>
            </div>
        );
    }
}

export default App;
