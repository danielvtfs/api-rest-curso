"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// não deve existir em um sistema real
router.get('/', _loginRequired2.default, _UserController2.default.index); // Lista de usuários
router.get('/:id', _UserController2.default.show); // Lista um usuário

router.post('/', _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index -> lista todos os usuários
store/create -> cria um novo usuário
delete -> deleta um usuário
show -> lista um usuário
update -> atualiza um usuário
*/
