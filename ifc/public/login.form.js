$( document ).ready(function() {

	$("#usuario").val("");
	$("#password").val("");

	$( "#language" ).change(function() {
		switch ($("#language").val()) {
			case "es":
				label_es();
				break;
			case "en":
				label_en();
				break;
			case "pt":
				label_pt();
				break;

		}
	});

	$( "#submit-button" ).click(function( event ) {
		event.preventDefault();

		var user = $("#usuario").val();
		var pass = $("#password").val();
		var urljsonp="https://online.ifc.com.mx/auth/preauth?callback=?";
		$.ajax({
			method: "post",
			url: urljsonp,
			dataType: "jsonp",
			data: { user: user, pass: pass }
		})
		.done(function( msg ) {
			if(msg.status == '1') {
				$("#login-form").submit();
				$("#invalid-user").hide('fast');
				$("#invalid-domain").hide('fast');
			} else if(msg.status == '2') {
				$("#invalid-user").hide('fast');
				$("#invalid-domain").show('fast');
			} else {
				$("#invalid-user").show('fast');
				$("#invalid-domain").hide('fast');
			}
		});
	});
});

function label_es() {
	$("#usuario-label").html("Usuario:");
	$("#pass-label").html("Contrase&ntilde;a:");
	$("#change-label").html("&#191;Ha olvidado su usuario y/o contrase&ntilde;a?");
	$("#lang-label").html("Idioma:");
	$("#es-op").html("Espa&ntilde;ol");
	$("#en-op").html("Ingl&eacute;s");
	$("#pt-op").html("Portugu&eacute;s");
	$("#submit-button").val("Entrar");
	$("#failed-login").html("Usuario o Contrase&ntilde;a Invalido");
	$("#failed-domain").html("Acceso Denegado!");
}

function label_en() {
	$("#usuario-label").html("User:");
	$("#pass-label").html("Password:");
	$("#change-label").html("Have you forgotten your user and/or password?");
	$("#lang-label").html("Language:");
	$("#es-op").html("Spanish");
	$("#en-op").html("English");
	$("#pt-op").html("Portuguese");
	$("#submit-button").val("Login");
	$("#failed-login").html("Invalid user or password");
	$("#failed-domain").html("Access Denied!");
}

function label_pt(){
	$("#usuario-label").html("Utilizador:");
	$("#pass-label").html("Senha:");
	$("#change-label").html("Voc&ecirc; esqueceu seu usu&aacute;rio e/ou senha?");
	$("#lang-label").html("l&iacute;ngua:");
	$("#es-op").html("Espanhol");
	$("#en-op").html("Ingles");
	$("#pt-op").html("Portugues");
	$("#submit-button").val("Entrar");
	$("#failed-login").html("Usu&aacute;rio ou senha inv&aacute;lida");
	$("#failed-domain").html("Acesso Negado!");
}

function hideAlert() {
	$("#invalid-user").hide('fast');
	$("#invalid-domain").hide('fast');
}