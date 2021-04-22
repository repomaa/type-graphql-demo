import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export default abstract class PaginationArgs {
  @Field(() => Int)
  limit: number = 100

  @Field(() => Int)
  page: number = 1

  get offset() {
    return this.limit * (this.page - 1)
  }
}
