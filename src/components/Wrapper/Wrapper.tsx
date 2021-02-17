import React from 'react'

interface WrapperProps {
  maxWidth?: number | string
}
const Wrapper: React.FC<WrapperProps> = ({ children, maxWidth = 1440 }) => (
  <div style={{ maxWidth, margin: '0 auto', position: 'relative' }}>
    {children}
  </div>
)

export default Wrapper
