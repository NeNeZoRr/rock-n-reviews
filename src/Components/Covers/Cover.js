import React from 'react'

const Cover = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ height: '200px', objectFit: 'cover' }} />
)

export default Cover
