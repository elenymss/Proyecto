//import blog
import UsersModel from "../models/UsersModel.js";

// metodos crud
// mostrar todos los registros
export const getAllUsers = async (req, res) =>{
    try{
        const users = await UsersModel.findAll()
        res.json(users)
    }catch(error){
        res.json({message: error.message})
    }
};

//mostrar un registro
export const getUser = async (req, res)=>{
    try{
        const user =await  UsersModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(user[0]);
    }catch (error){
        res.json ({message: error.message});
    }
};

//crear un registro
export const createUser = async(req, res) => {
    try{
        await  UsersModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}

//actualizar
export const updateUser= async (req, res)=>{
    try{
        await UsersModel.update(req.body,{
            where: { id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
};
//eliminar

export const deleteUser= async(req, res)=>{
    try{
        await UsersModel.destroy({
            where: { id: req.params.id}
        })
        res.json({
            "message":"registro eliminado correctamente"
        })
    }catch (error){
        res.json({ message: error.message})
    }
};