import { Footer, Header } from '@/ui/organisms'
import * as React from 'react'
import styled from 'styled-components'

type GenereicProps = {
  children: React.ReactNode
}

export const GenericLayout = ({ children }: GenereicProps) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

const Main = styled.main``
