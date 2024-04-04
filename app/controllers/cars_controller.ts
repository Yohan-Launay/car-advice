import type { HttpContext } from '@adonisjs/core/http'
import Car from '#models/car'

export default class CarsController {
  /**
   *
   * @param view
   */
  async index({ view }: HttpContext) {
    return view.render('pages/home', { cars: await Car.all() })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({}: HttpContext) {}

  /**
   * Show individual record
   */
  async show({}: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({}: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({}: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({}: HttpContext) {}
}
