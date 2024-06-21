import * as React from 'react'

import { Text } from '@/shared/ui/atoms'
import { Seo } from '@/shared/ui/organisms'
import { GenericLayout } from '@/shared/ui/templates'

export default () => {
  return (
    <GenericLayout>
      <Seo />
      <Text translateId="content" />
    </GenericLayout>
  )
}
