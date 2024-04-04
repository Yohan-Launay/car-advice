import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comment from '#models/comment'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Comment.createMany([
      {
        title: 'First Comment',
        description: 'This is the first comment',
        userId: 1,
        carId: 1,
      },
      {
        title: 'Second Comment',
        description: 'This is the second comment',
        userId: 2,
        carId: 1,
      },
      {
        title: 'Third Comment',
        description: 'This is the third comment',
        userId: 2,
        carId: 1,
      },
      {
        title: 'Fourth Comment',
        description: 'This is the fourth comment',
        userId: 2,
        carId: 2,
      },
      {
        title: 'Fifth Comment',
        description: 'This is the fifth comment',
        userId: 1,
        carId: 2,

      },
      {
        title: 'Sixth Comment',
        description: 'This is the sixth comment',
        userId: 9,
        carId: 3,
      },
      {
        title: 'Seventh Comment',
        description: 'This is the seventh comment',
        userId: 3,
        carId: 9,
      },
      {
        title: 'Eighth Comment',
        description: 'This is the eighth comment',
        userId: 1,
        carId: 8,
      },
      {
        title: 'Ninth Comment',
        description: 'This is the ninth comment',
        userId: 1,
        carId: 6,
      },
      {
        title: 'Tenth Comment',
        description: 'This is the tenth comment',
        userId: 1,
        carId: 4,
      },
      {
        title: 'Tenth Comment',
        description: 'This is the tenth comment',
        userId: 11,
        carId: 8,
      },
      {
        title: 'Tenth Comment',
        description: 'This is the tenth comment',
        userId: 11,
        carId: 1,
      },
      {
        title: 'Tenth Comment',
        description: 'This is the tenth comment',
        userId: 11,
        carId: 5,
      },
    ])
  }
}
