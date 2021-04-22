import { Field, InterfaceType } from 'type-graphql'
import MarkType from './mark-type'

InterfaceType({
  resolveType({ type }: Mark) {
    switch (type) {
      case MarkType.Bold:
        return 'Bold'
      case MarkType.Italic:
        return 'Italic'
      case MarkType.Link:
        return 'LinkMark'
      default:
        throw new Error(`Unsupported mark type "${type}"`)
    }
  },
})
abstract class Mark {
  @Field(() => MarkType)
  type!: MarkType
}

export default Mark
