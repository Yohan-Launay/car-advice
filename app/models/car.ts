import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import NegativePoint from '#models/negative_point'
import PositivePoint from '#models/positive_point'
import Comment from '#models/comment'

export default class Car extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare model: string

  @column()
  declare brand: string

  @column()
  declare year: number

  @column()
  declare price: number

  @column()
  declare image: string

  @hasOne(() => NegativePoint)
  declare negativePoint: HasOne<typeof NegativePoint>

  @hasOne(() => PositivePoint)
  declare positivePoint: HasOne<typeof PositivePoint>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
