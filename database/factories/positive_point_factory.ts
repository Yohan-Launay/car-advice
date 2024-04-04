import factory from '@adonisjs/lucid/factories'
import PositivePoint from '#models/positive_point'

export const PositivePointFactory = factory
  .define(PositivePoint, async ({ faker }) => {
    return {
      description: faker.lorem.paragraph(),
    }
  })
  .build()
