import * as React from 'react'
import styled from 'styled-components/macro'

import { Link } from '@/shared/ui/atoms'

type MenuProps = {
  className?: string
  items: { slug: string; caption: string }[]
}

export const Menu = ({ className, items }: MenuProps) => {
  return (
    <MenuContainer className={className}>
      {items.map(({ slug, caption }, key) => {
        return <MenuLink key={key} to={slug} children={caption} />
      })}
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: flex;
`

const MenuLink = styled(Link)`
  margin: 0 16px;
`
