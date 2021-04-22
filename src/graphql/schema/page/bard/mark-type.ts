import { registerEnumType } from 'type-graphql'

enum MarkType {
  Bold = 'bold',
  Italic = 'italic',
  Link = 'link',
}

registerEnumType(MarkType, {
  name: 'MarkType',
  description: 'The type of a mark',
})

export default MarkType
