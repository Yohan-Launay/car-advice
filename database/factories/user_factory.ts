import User from '#models/user'
import Factory from '@adonisjs/lucid/factories'
import { CommentFactory } from "#database/factories/comment_factory";

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
})
  .relation('comments', () => CommentFactory)
  .build()
