import { Field, ObjectType } from 'type-graphql'
import Mark from '../mark'
import MarkType from '../mark-type'
import LinkAttributes from './link-attributes'

@ObjectType({ implements: Mark })
export default class LinkMark extends Mark {
  @Field(() => MarkType)
  type!: MarkType.Link

  attrs!: LinkAttributes

  @Field(() => LinkAttributes)
  get attributes(): LinkAttributes {
    return this.attrs
  }
}
