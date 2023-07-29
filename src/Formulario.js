import React from 'react';

class Formulario extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.funcaoBotao}>
                <input type='text' value={this.props.campoNome} name='nome' placeholder='Nome' className='form-control' onChange={this.props.funcaoCampo}/>
                <input type='text' value={this.props.campoSobrenome} name='sobrenome' placeholder='Sobrenome'className='form-control'onChange={this.props.funcaoCampo}/>
                <input type='text'value={this.props.campoIdade} name='idade' placeholder='Idade' className='form-control'onChange={this.props.funcaoCampo}/>
                <input type='submit' value='cadastrar'className='btn btn-primary'/>
            </form>
        );
    }
}
export default Formulario;