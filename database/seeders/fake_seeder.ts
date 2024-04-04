import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CarFactory } from '#database/factories/car_factory'
import { UserFactory } from '#database/factories/user_factory'

export default class extends BaseSeeder {
  async run() {
    await UserFactory.createMany(10)
    await CarFactory.createMany(10)
  }
}
