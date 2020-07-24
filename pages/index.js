// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../_pages'
import ns0 from '../locales/vi/common.json'
import ns1 from '../locales/vi/home.json'

const namespaces = { 'common': ns0, 'home': ns1 }

export default function Page(p){
  return (
    <I18nProvider 
      lang="vi" 
      namespaces={namespaces}  
      internals={{"defaultLanguage":"vi","isStaticMode":true}}
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C && C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'vi'})
}





export * from '../_pages'
