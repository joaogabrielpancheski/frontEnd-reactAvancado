import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'
import { SectionAboutUsProps } from 'types/api'
import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((author) => (
        <ProfileCard key={author.name} {...author} />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
