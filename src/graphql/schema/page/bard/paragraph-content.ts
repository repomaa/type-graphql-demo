import { Field, ObjectType } from 'type-graphql'
import Content from './content'
import ContentType from './content-type'
import TextContent from './text-content'

@ObjectType({ implements: Content })
export default class ParagraphContent extends Content {
  @Field(() => ContentType)
  type!: ContentType.Paragraph

  @Field(() => [TextContent])
  content?: TextContent[]
}
