import React from "react";
import ReactDOM from 'react-dom';
import Principal from './Principal';
import './estilo.css';

class Inicio extends React.Component{
    render(){
        return(
            <div>
                <Principal />
            </div>
        );
    }
}
ReactDOM.render(<Inicio />, document.getElementById('root'));