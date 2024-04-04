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

// router.on('/').render('pages/home')

// router.on('/').render('pages/home')
router.get('/', [CarsController, 'index'])
