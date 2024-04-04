import factory from '@adonisjs/lucid/factories'
import Car from '#models/car'

export const CarFactory = factory
  .define(Car, async ({ faker }) => {
    return {
      name: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      brand: faker.vehicle.type(),
      year: faker.number.int({ min: 2000, max: 2022 }),
      price: faker.number.int({ min: 10000, max: 100000 }),
      image: faker.image.urlPicsumPhotos(),
    }
  })
  .build()
