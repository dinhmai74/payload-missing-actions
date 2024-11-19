import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import { AdminViewProps } from 'payload'
import React from 'react'

const CustomViews = ({ initPageResult, params, searchParams }: AdminViewProps) => {
  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <Gutter>
        <h1>Custom Default Root View</h1>
        <br />
        <p>This view uses the Default Template.</p>
      </Gutter>
    </DefaultTemplate>
  )
}
export default CustomViews
