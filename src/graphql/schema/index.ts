import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import { Pages } from '../resolvers'
import BoldMark from './page/bard/bold-mark'
import HeadingContent from './page/bard/heading-content'
import ItalicMark from './page/bard/italic-mark'
import LinkMark from './page/bard/link-mark'
import ParagraphContent from './page/bard/paragraph-content'
import TextContent from './page/bard/text-content'

export default async () =>
  buildSchema({
    resolvers: [Pages],
    container: Container,
    orphanedTypes: [
      TextContent,
      ParagraphContent,
      HeadingContent,
      LinkMark,
      BoldMark,
      ItalicMark,
    ],
  })
