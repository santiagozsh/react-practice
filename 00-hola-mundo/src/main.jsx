import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) =>{
  return <button>{text}</button>
}

const Text = () =>{

  return <h1>Hola Mundo</h1>

}

root.render(

  <React.Fragment>

    <Text></Text>

    <Button text="Primer Boton"></Button>
    <Button text="Segundo Boton"></Button>
    <Button text="Tercer Boton"></Button>

  </React.Fragment>

)
