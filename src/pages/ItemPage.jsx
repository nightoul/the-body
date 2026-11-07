import { Suspense } from 'react'
import { useParams } from 'react-router'
import Page, { PageMessage } from '../shared/components/Page.jsx'

// The page of one quiz or path: `items` is the list to find it in by the
// address's id, `kind` names it in the messages ("quiz", "path").
function ItemPage({ items, kind }) {
  const { id } = useParams()
  const item = items.find((i) => i.id === id)
  const Content = item?.component

  return (
    <Page title={item ? item.title : `No such ${kind}`}>
      {Content ? (
        <Suspense fallback={<PageMessage>Loading…</PageMessage>}>
          <Content />
        </Suspense>
      ) : (
        <PageMessage>{item ? 'Coming soon.' : `This ${kind} does not exist.`}</PageMessage>
      )}
    </Page>
  )
}

export default ItemPage
