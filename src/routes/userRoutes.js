import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deve existir em um sistema real
router.get('/', loginRequired, userController.index); // Lista de usuários
router.get('/:id', userController.show); // Lista um usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários
store/create -> cria um novo usuário
delete -> deleta um usuário
show -> lista um usuário
update -> atualiza um usuário
*/
