import { Field, ObjectType } from 'type-graphql'
import Content from './content'
import ContentType from './content-type'
import HeadingAttributes from './heading-attributes'
import TextContent from './text-content'

ObjectType({ implements: Content })
export default class HeadingContent extends Content {
  @Field(() => ContentType)
  type!: ContentType.Heading

  attrs!: HeadingAttributes

  @Field(() => HeadingAttributes)
  get attributes(): HeadingAttributes {
    return this.attrs
  }

  @Field(() => [TextContent])
  content?: TextContent[]
}
