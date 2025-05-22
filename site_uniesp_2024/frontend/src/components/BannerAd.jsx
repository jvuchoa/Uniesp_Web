import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

const StyledBannerAd = styled(Box)({
  backgroundImage: `url('https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '200px',
  marginBottom: '24px',
  borderRadius: '8px',
})

const BannerAd = () => {
  return (
    <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-uchoa/" target="_blank" rel="noopener noreferrer">
      <StyledBannerAd />
    </a>
  )
}

export default BannerAd
