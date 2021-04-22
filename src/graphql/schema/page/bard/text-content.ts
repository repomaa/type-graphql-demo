import { Field, ObjectType } from 'type-graphql'
import Content from './content'
import ContentType from './content-type'
import Mark from './mark'

@ObjectType({ implements: Content })
export default class TextContent extends Content {
  @Field()
  type!: ContentType.Text

  @Field()
  text!: string

  @Field(() => [Mark], { nullable: true })
  marks?: Mark[]
}
