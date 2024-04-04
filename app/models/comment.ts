import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm";
import User from "#models/user";
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Car from '#models/car'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare userId: number

  @column()
  declare carId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Car)
  declare car: BelongsTo<typeof Car>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
