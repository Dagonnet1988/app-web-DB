import { DataTypes } from "sequelize";
import { db } from "../db";


export const User = db.define('User', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cedula: {
    type: DataTypes.BIGINT,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
  fnacimiento: {
    type: DataTypes.DATEONLY
  },
  nacionalidad: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  ciudad: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true
  },
  correo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  profesion: {
    type: DataTypes.STRING
  },
  experienciaAnos: {
    type: DataTypes.INTEGER
  },
  perfil: {
    type: DataTypes.STRING
  },
  tecnologias: {
    type: DataTypes.STRING
  },
  empleado: {
    type: DataTypes.BOOLEAN
  },
  salario: {
    type: DataTypes.INTEGER
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  fingreso: {
    type: DataTypes.DATEONLY
  },
  fretiro: {
    type: DataTypes.DATEONLY
  },  
})

