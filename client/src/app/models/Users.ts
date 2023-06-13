
export interface User {
  nombre: string;
  apellido: string;
  cedula: string|number;
  fnacimiento?: Date;
  nacionalidad?:string;
  direccion?:string;
  ciudad?:string;
  telefono: number;
  experienciaAnos: number;
  correo: string;
  perfil: string;
  tecnologias: string;
  profesion?: string;
  empleado?: boolean;
  fingreso?: Date;
  fretiro?: Date;
  salario?: number;
}
