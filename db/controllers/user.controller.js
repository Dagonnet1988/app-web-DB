"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = require("../models/user");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.User.findAll();
    res.json({
        users
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cc } = req.params;
    const usuario = yield user_1.User.findByPk(cc);
    if (!usuario) {
        res.json({
            msg: 'El usuario no existe'
        });
    }
    else {
        res.json({
            usuario
        });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield user_1.User.findOne({
            where: {
                correo: body.correo
            }
        });
        if (existeEmail) {
            res.status(400).json({
                msg: `Ya existe un usuario con el correo ${body.correo}`
            });
        }
        else {
            const usuario = user_1.User.build(body);
            yield usuario.save();
            res.json(usuario);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { cc } = req.params;
    try {
        const user = yield user_1.User.findByPk(cc);
        if (!user) {
            res.status(404).json({
                msg: `No existe el usuario con número de cedula ${cc} `
            });
        }
        else {
            yield user.update(body);
            res.json(user);
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'No se actualizaron los datos'
        });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cc } = req.params;
    const user = yield user_1.User.findByPk(cc);
    try {
        if (!user) {
            res.status(404).json({
                msg: `No existe el usuario con número de cedula ${cc} `
            });
        }
        else {
            yield user.update({ "estado": 0 });
            res.json({ user });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deleteUser = deleteUser;
