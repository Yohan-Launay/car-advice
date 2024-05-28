import type { HttpContext } from '@adonisjs/core/http'
import Car from '#models/car'

export default class CarsController {

  async index({}: HttpContext) {
    return Car.all()
  }

  async store({}: HttpContext) {}

  async show({}: HttpContext) {}

  async update({}: HttpContext) {}

  async destroy({}: HttpContext) {}
}
