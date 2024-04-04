import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from "#models/user";

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'admin',
        email: 'yohandeveloppe@gmail.com',
        password: 'secret',
      },
      {
        username: 'user',
        email: 'user@exemple.fr',
        password: 'user',
      },
    ])
  }
}
