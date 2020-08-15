import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.less';

interface ButtonProps {
  children?: React.ReactNode;
  as?: string;
  type?: 'primary' | 'text' | 'link';
  size?: 'small' | 'default' | 'large';
  shape?: 'circle' | 'round';
  [prop: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  as: Component = 'button',
  type = 'primary',
  size = 'default',
  shape = undefined,
  className,
  ...args
}) => {
  const classes = clsx(className, styles.root, {
    [styles.typePrimary]: type === 'primary',
    [styles.typeText]: type === 'text',
    [styles.typeLink]: type === 'link',
    [styles.sizeSmall]: size === 'small',
    [styles.sizeDefault]: size === 'default',
    [styles.sizeLarge]: size === 'large',
    [styles.shapeCircle]: shape === 'circle',
    [styles.shapeRound]: shape === 'round',
  });
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Component className={classes} {...args}>
      {children}
    </Component>
  );
};

export default Button;
