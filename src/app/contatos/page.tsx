'use client'  //preciso dessa diretiva para dizer que essa pagina sera renderizada do lado servidor
import {useState} from 'react'
const Contatos=()=>{
    console.log('teste')
    const [user,setUser] = useState('Oscar Rodrigues')
    return(
        <div>
            <h1>Contatos</h1>
            <span>{user} Seja bem vindo a pagina de contatos</span>
        </div>
    )
}

export default Contatos

//api.github.com\users\devfraga\repos