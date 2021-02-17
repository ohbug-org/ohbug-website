import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'

import styles from './MobileHeader.module.less'

interface NavItem {
  label: string
  href: string
}
interface MobileHeaderProps {
  dataSource?: NavItem[]
  children?: React.ReactNode
  logo?: React.ReactNode
  extra?: React.ReactNode
  contentClassName?: string
  [prop: string]: any
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  dataSource,
  children,
  logo,
  extra,
  contentClassName,
  className,
  ...args
}) => {
  const [toggleChecked, setToggleChecked] = React.useState(false)
  const handleToggleClick = React.useCallback(() => {
    setToggleChecked(!toggleChecked)
  }, [toggleChecked])

  return (
    <>
      <header className={clsx(className, styles.root)} {...args}>
        <Link className={styles.logo} to="/">
          {logo}
        </Link>

        <div
          className={clsx(styles.toggle, {
            [styles.toggleChecked]: toggleChecked,
          })}
          onClick={handleToggleClick}
        >
          <span className={styles.top} />
          <span className={styles.bottom} />
        </div>
      </header>

      <nav
        style={{ display: toggleChecked ? 'block' : 'none' }}
        className={clsx(contentClassName, styles.content, {
          [styles.checked]: toggleChecked,
        })}
      >
        <div className={styles.btn}>{extra}</div>
        <div className={styles.nav}>
          {children ||
            dataSource?.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
        </div>
      </nav>
    </>
  )
}

export default MobileHeader
