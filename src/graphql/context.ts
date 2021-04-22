import DataLoader from 'dataloader'
import Page from './schema/page'

export default interface Context {
  pageLoader: DataLoader<string, Page>
}
