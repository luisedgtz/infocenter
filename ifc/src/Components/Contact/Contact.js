import React,{useState} from 'react'

import style from "./style.css"

export default function Contact() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [feed, setFeed] = useState("");

    return (
        <div className="contact-div">
            <form className="test-mailing">
                <div className="FormTitle">
                    <h4 className="bold">Contacto</h4>
                </div>
                <div className="contact-input">
                    <label>Nombre:</label>
                    <input
                        placeholder="Nombre"
                        onChange = {e => setName(e.target.value)}
                        value = {name}
                        type = "text"
                        required
                    />
                </div>
                <div className="contact-input">
                    <label>Correo Electrónico:</label>
                    <input
                        placeholder="Correo"
                        onChange = { e => setMail(e.target.value)}
                        value = {mail}
                        type = "email"
                        required
                    />
                </div>
                <div className="contact-input">
                    <label>Teléfono contacto:</label>
                    <input
                        placeholder="Teléfono"
                        onChange = {e => setPhone(e.target.value)}
                        value = {phone}
                        type = "text"
                        required
                    />
                </div>
                <div className="contact-input">
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange = {e => setFeed(e.target.value)}
                        placeholder="Escríbenos tu duda o sugerencia"
                        required
                        value = {feed}
                    />
                </div>
                <div className="btn-contact">
                    <input type="submit" value="Enviar" onClick/>
                </div>
            </form> 
        </div>
    )
}
