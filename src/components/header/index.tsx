import React from 'react';
import styles from './index.module.css'

interface IHeaderProps {
    name: string;
    children?: JSX.Element | JSX.Element[]
}

export default React.memo(function Header({ name, children }: IHeaderProps) {
  return (
    <header className={styles.wrapper}>
        <h1 className={styles.header}>{name}</h1>
        {children}
    </header>
  )
});