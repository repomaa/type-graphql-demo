import { Field, InterfaceType } from 'type-graphql'
import ContentType from './content-type'

InterfaceType({
  resolveType({ type }: Content) {
    switch (type) {
      case ContentType.Text:
        return 'TextContent'
      case ContentType.Heading:
        return 'HeadingContent'
      case ContentType.Paragraph:
        return 'ParagraphContent'
      default:
        throw new Error(`Unsupported content type "${type}"`)
    }
  },
})
export default abstract class Content {
  @Field(() => ContentType)
  type!: ContentType
}
