import React from 'react';

import style from "./style.css"

export default (props)=>{
return(
<div className="FormContainer">
<div className="form-container">

<form method="post" action="">
    <div className="FormTitle">
        <h4>Registro Agencia</h4>
    </div>
    <div className="formInputs">
    <div className="inputFormDiv">
        <div className="divInputs">
            <label>Nombre de la empresa:</label><br/>
            <input className="largeInput" placeholder="Nombre de la empresa"></input><br/>
            <label>Nombre comercial:</label><br/>
            <input className="largeInput" placeholder="Nombre comercial"></input><br/>
        </div>
    </div>

    <div className="inputFormDiv">
        <div className="divInputs">
            <label>Página Web:</label><br/>
            <input className="mediumInput" placeholder="Página Web"></input><br/>
            <label>Calle:</label><br/>
            <input className="mediumInput" placeholder="Calle"></input><br/>
            <label>Colonia:</label><br/>
            <input className="mediumInput" placeholder="Colonia"></input><br/>
            <label>Ciudad:</label><br/>
            <input className="mediumInput" placeholder="Ciudad"></input><br/>
            <label>Estado:</label><br/>
            <input className="mediumInput" placeholder="Estado"></input><br/>
            <label>Teléfono 1:</label><br/>
            <input className="mediumInput" placeholder="Teléfono 1"></input><br/>
        </div>
        <div className="divInputs">
            <label>RFC:</label><br/>
            <input className="mediumInput" placeholder="RFC"></input><br/>
                <div className="middleDiv">
                    <div className="numberDiv">
                    <label>No. Exterior:</label><br/>
                    <input className="smallInput" placeholder="No. Exterior"></input><br/>
                    </div>
                    <div  className="numberDiv">
                    <label>No. Interior:</label><br/>
                    <input className="smallInput" placeholder="No. Interior"></input><br/>
                    </div>
                </div>
            <label>Código Postal:</label><br/>
            <input className="mediumInput" placeholder="Código Postal"></input><br/>
            <label>Municipio:</label><br/>
            <input className="mediumInput" placeholder="Municipio"></input><br/>
            <label>País:</label><br/>
            <input className="mediumInput" placeholder="País"></input><br/>
            <label>Teléfono 2:</label><br/>
            <input className="mediumInput" placeholder="Teléfono 2"></input><br/>
        </div>
    </div>
        <div class="submit-input" align="center">
            <input id="submit-button" type="submit" value="ENVIAR" />
        </div>
    </div>
</form>

</div>
</div>

)
}