import { Field, Int, ObjectType } from 'type-graphql'

ObjectType()
export default class HeadingAttributes {
  @Field(() => Int)
  level!: number
}
