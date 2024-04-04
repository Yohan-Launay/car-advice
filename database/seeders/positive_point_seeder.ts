import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PositivePoint from '#models/positive_point'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await PositivePoint.createMany([
      {
        description: 'This is the first positive point',
        carId: 1,
      },
      {
        description: 'This is the second positive point',
        carId: 2,
      },
      {
        description: 'This is the third positive point',
        carId: 2,
      },
      {
        description: 'This is the fourth positive point',
        carId: 2,
      },
      {
        description: 'This is the fifth positive point',
        carId: 1,
      },
      {
        description: 'This is the sixth positive point',
        carId: 1,
      },
      {
        description: 'This is the seventh positive point',
        carId: 1,
      },
      {
        description: 'This is the eighth positive point',
        carId: 1,
      },
      {
        description: 'This is the ninth positive point',
        carId: 1,
      },
      {
        description: 'This is the tenth positive point',
        carId: 1,
      },
    ])
  }
}
