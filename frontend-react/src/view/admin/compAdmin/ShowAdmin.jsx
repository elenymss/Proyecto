import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI ='http://localhost:8000/users/'

const CompShowAdmin =() =>{
    const [users, setUser] = useState([])
    useEffect(()=>{
        getUsers()
    },[])
    
//mostrar todos los usuarios
const getUsers = async()=>{
    const res= await axios.get(URI)
    setUser(res.data)
}
//Borrar un usuario
const deleteUser = async(id)=>{
    await axios.delete(`${URI} ${id}`)
    getUsers()
}
return(
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            
         <table className="table shadow">
            <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">user</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">email</th>
                  <th scope="col">telefono</th>
                  <th scope="col">opciones</th>
                </tr>
              </thead>
              <tbody>
                { users.map((user)=>(
                    <tr key={ user.id}>
                        <td>{ user.id}</td>
                        <td>{ user.user}</td>
                        <td>{ user.nombre_usuario}</td>
                        <td>{ user.apellido_usuario}</td>
                        <td>{ user.email_usuario}</td>
                        <td>{ user.telefono}</td>
                        <td>
                            <Link to={`/admin/aprendiz/edit/${user.id}`}className="btn btn-info m-1"><i class="bi bi-pencil-square"></i></Link>
                            <button onClick={()=>deleteUser(user.id)} className='btn btn-danger m-1'><i class="bi bi-trash-fill"></i></button>
                            
                        </td>

                        </tr>
                ))}  
              </tbody>
            </table>

            <div className='m-3'>
                <Link to={"/admin/admin/create"} className='btn btn-primary pe-4 ps-4'>Crear</Link>
            </div>
     </div>   
  
)
//editar usuario
}


export default CompShowAdmin;