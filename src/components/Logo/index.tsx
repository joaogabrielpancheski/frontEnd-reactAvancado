import React from 'react'

import { Image } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ url, alternativeText }: Image) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
