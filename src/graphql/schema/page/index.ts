import { Field, ID, ObjectType } from 'type-graphql'
import Data from './data'
import Content from './bard/content'

@ObjectType()
export default class Page {
  @Field(() => ID)
  id!: string

  @Field()
  slug!: string

  data!: Data

  @Field(() => String)
  get title(): string {
    return this.data.title
  }

  @Field(() => Content)
  get content() {
    return this.data.content ?? []
  }
}
