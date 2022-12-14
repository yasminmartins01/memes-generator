import React, { useState } from 'react';

import html2canvas from 'html2canvas';
import './index.css';
const App = () => {

    const [ Linea1, setLinea1 ] = useState('');
    const [ Linea2, setLinea2 ] = useState('');
    const [Imagen, setImagen] = useState('');

    const onChangeLinea1 = function(evento) {
        setLinea1(evento.target.value);
    }

    const onChangeLinea2 = function(evento) {
        setLinea2(evento.target.value)
    }

    const onChangeImagen = function(evento) {
        setImagen(evento.target.value)
    }

    const onClickExportar = function(evento){

      html2canvas(document.querySelector("#meme")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = img;
        link.click();
      });
    }
      return (
            <div className='app'>
                <div className='container'>
                    <h1 className='titulo'> Meme generator </h1>
                    <select onChange={onChangeImagen}>
                    <option value='fire'> Casa en llamas</option>
                    <option value='homero'> Homero bueno si</option>
                    <option value='bugs'> Bugs bunny comunista</option>
                    <option value='futurama'> Futurama </option>
                    <option value='mordecainervios'> Mordecai </option> 
                    <option value='philosoraptor'> Philosoraptor </option>
                    <option value='smart'> Smart guy </option>
                    </select>

                    <input onChange={onChangeLinea1} type='text' placeholder='linea superior'></input>
                    <input onChange={onChangeLinea2} type='text' placeholder='linea inferior'></input>

                    <button onClick={onClickExportar} className='button'> Descargar </button>

                </div>
                <div className='imagen' id="meme">
                   <span>{Linea1}</span><br/>
                   <span>{Linea2}</span>
                   <img src={"/img/"+Imagen+".jpg"} alt="imagen" /> 
                </div>
            
            </div>
        );
}

export default App;
