import { Field, ObjectType } from 'type-graphql'
import Mark from './mark'
import MarkType from './mark-type'

@ObjectType({ implements: Mark })
export default class ItalicMark extends Mark {
  @Field(() => MarkType)
  type!: MarkType.Italic
}
