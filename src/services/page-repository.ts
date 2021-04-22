import { Service } from 'typedi'
import { PrismaClient } from '@prisma/client'
import DataLoader from 'dataloader'
import PagesArgs from 'graphql/resolvers/args/pages'
import Page from 'graphql/schema/page'

@Service()
export default class PoiRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  createLoader() {
    return new DataLoader(this.batchGet.bind(this))
  }

  async find(
    { offset, limit }: PagesArgs,
    loader?: DataLoader<string, Page>,
  ): Promise<Page[]> {
    const result: Page[] = await this.prisma.$queryRaw`
      SELECT id, slug, data FROM entries
      WHERE
        collection = 'pages'
      OFFSET ${offset}
      LIMIT ${limit};
      `

    if (loader) {
      result.forEach((page) => loader.prime(page.id, page))
    }

    return result
  }

  private async batchGet(ids: readonly string[]) {
    const result = await this.prisma.entries.findMany({
      where: {
        id: { in: [...ids] },
      },
    })

    return ids.map(
      (key) => (result.find(({ id }) => id === key) as unknown) as Page,
    )
  }
}
