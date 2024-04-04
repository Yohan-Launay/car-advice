import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.seed(await import('../fake_seeder.js'))
    await this.seed(await import('../user_seeder.js'))
    await this.seed(await import('../comment_seeder.js'))
    await this.seed(await import('../negative_point_seeder.js'))
    await this.seed(await import('../positive_point_seeder.js'))
  }
}
