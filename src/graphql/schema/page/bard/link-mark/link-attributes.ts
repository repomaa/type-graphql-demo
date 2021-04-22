import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export default class LinkAttributes {
  @Field()
  href!: string

  @Field()
  rel?: string

  @Field()
  target?: string
}
