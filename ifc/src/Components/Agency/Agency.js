import React from 'react';

import style from "./style.css"




export default (props)=>{
    return(
        <div className="form-container">
            <form method="" action="">
                <div className="FormTitle">
                    <h4 className="bold">Registro Agencia</h4>
                </div>
                <div className="formInputs">
                    <div>
                        <label>Nombre de la empresa:</label><br/>
                        <input placeholder="Nombre de la empresa"></input><br/>
                    </div>
                    <div>
                        <label>Nombre comercial:</label><br/>
                        <input placeholder="Nombre comercial"></input><br/>
                    </div>
                    <div>
                        <label>RFC:</label><br/>
                        <input placeholder="RFC"></input><br/>
                    </div>
                    <div>
                        <label>Página Web:</label><br/>
                        <input placeholder="Página Web"></input><br/>
                    </div>
                    <div>
                        <label>Calle:</label><br/>
                        <input placeholder="Calle"></input><br/>
                    </div>
                    <div>
                        <label>Colonia:</label><br/>
                        <input placeholder="Colonia"></input><br/>
                    </div>
                    <div>
                        <label>Ciudad:</label><br/>
                        <input placeholder="Ciudad"></input><br/>
                    </div>
                    <div>                  
                        <label>Estado:</label><br/>
                        <input placeholder="Estado"></input><br/>
                    </div>
               
                    <div>
                        <label>No. Exterior:</label><br/>
                        <input placeholder="No. Exterior"></input><br/>
                    </div>
                    <div>
                        <label>No. Interior:</label><br/>
                        <input placeholder="No. Interior"></input><br/>
                    </div>
                    <div>
                        <label>Código Postal:</label><br/>
                        <input placeholder="Código Postal"></input><br/>
                    </div>
                    <div>
                        <label>Municipio:</label><br/>
                        <input placeholder="Municipio"></input><br/>
                    </div>
                    <div>
                        <label>País:</label><br/>
                        <input placeholder="País"></input><br/>
                    </div>
                    <div>
                        <label>Teléfono 1:</label><br/>
                        <input placeholder="Teléfono 1"></input><br/>
                    </div>
               
                    <div>
                        <label>Teléfono 2:</label><br/>
                        <input placeholder="Teléfono 2"></input><br/>
                    </div>
                </div>
                <div className="btn-agency">
                    <input type="submit" value="ENVIAR" />
                </div>
            </form>
        </div>
)
}