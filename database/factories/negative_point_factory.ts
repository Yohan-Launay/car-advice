import factory from '@adonisjs/lucid/factories'
import NegativePoint from '#models/negative_point'

export const NegativePointFactory = factory
  .define(NegativePoint, async ({ faker }) => {
    return {
      description: faker.lorem.paragraph(),
    }
  })
  .build()
