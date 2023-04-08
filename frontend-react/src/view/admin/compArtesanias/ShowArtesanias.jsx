import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI ='http://localhost:8000/users/'

const CompShowArtesania =() =>{
    const [users, setUser] = useState([])
    useEffect(()=>{
        getUsers()
    },[])
    
//mostrar todos las Artesanias
const getUsers = async()=>{
    const res= await axios.get(URI)
    setUser(res.data)
}
//Borrar un artesanias
const deleteUser = async(id)=>{
    await axios.delete(`${URI} ${id}`)
    getUsers()
}
return(
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        
         
     </div>   
  
)
//editar usuario
}


export default CompShowArtesania;