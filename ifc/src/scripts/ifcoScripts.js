import React from 'react';
import IFConline from '../Components/IFConline/IFConline';



class ifcoScripts extends React.Component{

  constructor(props){
    super(props);
    this.state={

    }
  }

  componentDidMount(){
    const script = document.createElement("script");
    const script2 =document.createElement("script")

    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";
    script.async = true;

    script2.src = "../scripts/TravelNet/login.form.js";
    script2.async = true;

    document.head.appendChild(script)
    document.head.appendChild(script2);
  }

  
  render(){
    return(
        <IFConline></IFConline>
    )
  }
}

export default ifcoScripts;