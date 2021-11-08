import React, { Component } from 'react';
import axios from 'axios';

export  class PruebaConexion extends Component {
    state={
        datos:[]
    }
    componentDidMount() {
    axios.get('http://localhost:5000/ofertas')
    .then(res => {
      const datos = res.data;
      this.setState({ datos })
    }).catch(error =>{
      console.error(error)
    })
   }
    render() {
        return (
            <div>

              <ul>
            {this.state.datos!==[] 
            ?
          
            
           this.state.datos.map((dato,index)=>
           <li key={index}>
             {dato.Descripcion1}

           </li>
           
           )
          
            : console.error()}
            </ul>
            </div>
        )
    }
}
