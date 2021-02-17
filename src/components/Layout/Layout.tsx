import React from 'react'

interface LayoutProps {
  [key: string]: any
}
const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <main {...props}>{children}</main>
)

export default Layout
