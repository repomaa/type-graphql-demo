/* eslint-disable class-methods-use-this */
import { Arg, Args, Ctx, ID, Query, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import PageRepository from 'services/page-repository'
import Context from 'graphql/context'
import PagesArgs from './args/pages'
import Page from '../schema/page'

@Service()
@Resolver(() => Page)
export default class Pages {
  constructor(private readonly pageRepository: PageRepository) {}

  @Query(() => [Page])
  async pages(
    @Args()
    args: PagesArgs,
    @Ctx() { pageLoader }: Context,
  ): Promise<Page[]> {
    return this.pageRepository.find(args, pageLoader)
  }

  @Query(() => Page, { nullable: true })
  async page(
    @Arg('id', () => ID) id: string,
    @Ctx() { pageLoader }: Context,
  ): Promise<Page | undefined> {
    return pageLoader.load(id)
  }
}
