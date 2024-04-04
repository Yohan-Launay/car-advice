import { BaseSeeder } from '@adonisjs/lucid/seeders'
import NegativePoint from "#models/negative_point";

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await NegativePoint.createMany([
      {
        description: 'This is the first negative point',
        carId: 1,
      },
      {
        description: 'This is the second negative point',
        carId: 2,
      },
      {
        description: 'This is the third negative point',
        carId: 2,
      },
      {
        description: 'This is the fourth negative point',
        carId: 2,
      },
      {
        description: 'This is the fifth negative point',
        carId: 1,
      },
      {
        description: 'This is the sixth negative point',
        carId: 1,
      },
      {
        description: 'This is the seventh negative point',
        carId: 1,
      },
      {
        description: 'This is the eighth negative point',
        carId: 1,
      },
      {
        description: 'This is the ninth negative point',
        carId: 1,
      },
      {
        description: 'This is the tenth negative point',
        carId: 1,
      },
    ])
  }
}
