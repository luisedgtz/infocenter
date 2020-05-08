import React from 'react'

export default (props)=>{
    return(
        <div className="LoginContainer">
            <div class="form-login">
			<form id="login-form" method="post" action="https://online.ifc.com.mx/auth/login">

                <div className="LoginTitle">
                    <h4>IFC Online</h4>
                </div>
				
                <div className="inputDiv">
                <div>
					<div>
						<input placeholder="Usuario" name="usuario" type="text" id="usuario" autocomplete="off" maxlength="20" onkeypress="hideAlert()"/>
					</div>
				</div>

				<div>
					<div>
						<input placeholder="Contraseña" name="password" type="password" id="password" autocomplete="off" maxlength="20" onkeypress="hideAlert()"/>
					</div>
				</div>
                </div>


				

				<div id="invalid-user" align="center">
					<span id="failed-login">Usuario o Contrase&ntilde;a Inválido</span>
				</div>

				<div id="invalid-domain" align="center">
					<span id="failed-domain">Acceso Denegado!</span>
				</div>

				<div class="submit-input" align="center">
					<input id="submit-button" type="submit" value="ENTRAR" />
				</div>

                <div id="change-div">
					<a id="resetUserAndPass" href="https://online.ifc.com.mx/auth/resetpassword">
						<label id="change-label">Recuperar contraseña</label>
					</a>
				</div>

			</form>
		</div>
        </div>
    )
}