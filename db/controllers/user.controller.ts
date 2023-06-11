import { Response, Request } from "express";
import { User } from "../models/user";
import { throwError } from "rxjs";


export const getUsers = async(req: Request, res: Response) => {
  const users = await User.findAll();
  res.json ( {
    users
  } )
}
export const getUser = async(req: Request, res: Response ) => {

  const { cc } = req.params;
  const user = await User.findByPk(cc);
  if (!user) {
      res.json({
          msg: 'El usuario no existe'
      })
  } else {
      res.json({
      usuario: user
      })

    }

}

export const postUser = async(req: Request, res: Response) => {

  
  const { body } = req;
  try {

    const existeEmail = await User.findOne({
      where: {
        correo: body.correo             
      }    
    });
    const existeCedula = await User.findOne({
      where: {
        cedula: body.cedula             
      }    
    });
    const existeTel = await User.findOne({
      where: {
        telefono: body.telefono             
      }
    });
    if ( existeEmail){
      res.status(400).json({
        msg: `Ya existe un usuario con el correo ${ body.correo }`
      });
    }else if ( existeCedula){
      res.status(400).json({
        msg: `Ya existe un usuario con la cédula ${ body.cedula }`
      });
    }else if ( existeTel){
      res.status(400).json({
        msg: `Ya existe un usuario con el teléfono ${ body.telefono }`
      });
    }else {
      const usuario = User.build(body);
      await usuario.save();
      res.json({
        usuario
      })
    }
  }catch (error) {
    console.error(error);
    res.status(500).json({
    error
    })
  }

}

export const putUser = async(req: Request, res: Response ) => {

  const { body } = req;
  const { cc } = req.params;

  try {
    const user = await User.findByPk(cc);

    if (!user) {
      res.status(404).json({
        msg : `No existe el usuario con número de cedula ${cc} `
      })
    } else {
      await user.update(body);
      res.json(user)
    }

  } catch (error) {

    res.status(500).json({
      msg: 'No se actualizaron los datos'
    })
  }
}

export const deleteUser = async(req: Request, res: Response ) => {

  const { cc } = req.params;
  try {
    await User.destroy(
    
      {
        where: {
          cedula: cc
        }
      }
    )
    res.json({
      msg: 'Usuarios eliminado'
    })
    
    
  } catch (error) {
    throwError
  }
  
  // User.destroy()  
}
