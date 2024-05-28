/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CarsController = () => import('#controllers/cars_controller')
const AuthController = () => import('#controllers/auth_controller')

// router.on('/').render('pages/home')

// router.on('/').render('pages/home')
router.group(() => {
    router.post('/register', [AuthController, 'register'])
    router.post('/login', [AuthController, 'login'])
    router.get('/cars', [CarsController, 'index'])
}).prefix('/api')

