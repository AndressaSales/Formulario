import React from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';

class Principal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome : '',
            sobrenome : '',
            idade : '',
            vetor : []
        }
    }
    aoDigitar = (campo) => {
        this.setState({[campo.target.name] : campo.target.value});
    }
    aoClicar =  (botao) => {
        botao.preventDefault();
        var copiaVetor = [...this.state.vetor];
        copiaVetor.push({
            'nome' : this.state.nome,
            'sobrenome' : this.state.sobrenome,
            'idade' : this.state.idade
        });
        this.setState({vetor : copiaVetor});
        this.setState({
            nome : '',
            sobrenome : '',
            idade : ''
        });
    }
    render(){
        return(
            <div>
                <h1>Formulário</h1>
                <Formulario campoNome={this.state.nome} campoSobrenome={this.state.sobrenome} campoIdade={this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar}/>
                <Tabela  dados={this.state.vetor}/>
            </div>
        );
    }
}
export default Principal;