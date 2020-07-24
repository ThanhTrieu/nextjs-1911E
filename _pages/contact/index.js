import { Helmet } from 'react-helmet'
export default function Index() {
  return(
    <>
      <Helmet
        title="Contact | Hello next.js!"
        meta={[{ property: 'og:title', content: 'contact' }]}
      />
      <h1>This is contact</h1>
    </>
  )
}