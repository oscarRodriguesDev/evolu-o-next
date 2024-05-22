'use client'
import {useState} from 'react'
import Image from "next/image";
interface ownerRepoProps{
  avatar_url:string;
  name:string;
}
export function OwnerRepo({avatar_url,name}:ownerRepoProps){

    const [show,setShow]= useState<boolean>(false)
   
    return(
        <div>
        {show &&  (

            <>
             <strong>{name}</strong>
          <Image 
          src={avatar_url}
          width={34}
          height={34}
          style={{borderRadius:50}}
          alt={'imagem de perfil'}
          />
            </>
        )}
      <button onClick={()=> setShow(!show)}>{show?  'Esconder' : 'Mostrar'}</button>

        </div>
    )
}

