import { registerEnumType } from 'type-graphql'

enum ContentType {
  Text = 'text',
  Heading = 'heading',
  Paragraph = 'paragraph',
}

registerEnumType(ContentType, {
  name: 'ContentType',
  description: 'The type of a bard content block',
})

export default ContentType
