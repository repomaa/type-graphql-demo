import { Field, ObjectType } from 'type-graphql'
import Mark from './mark'
import MarkType from './mark-type'

@ObjectType({ implements: Mark })
export default class BoldMark extends Mark {
  @Field(() => MarkType)
  type!: MarkType.Bold
}
