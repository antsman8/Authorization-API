const Router = require('express');
const authController = require('./authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware');

const router = new Router();

router.post(
    '/registration',
    [
        check('username', 'Имя пользователя не может быть пустым').notEmpty(),
        check(
            'password',
            'Пароль должен быть больше 4 и меньше 10 символов'
        ).isLength({ min: 4, max: 10 }),
    ],
    authController.registration
);
router.post('/login', authController.login);
router.get('/users', authMiddleware, authController.getUsers);

module.exports = router;
