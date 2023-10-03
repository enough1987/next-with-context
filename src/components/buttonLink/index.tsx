import Button from '@mui/material/Button'
import Link from 'next/link'
import styles from './index.module.css'
import React from 'react';

interface IButtonLinkProps {
    name: string;
    href: string;
}

export default React.memo(function ButtonLink({ name, href }: IButtonLinkProps) {
  return (
    <Link href={href}>
      <Button className={styles.button} variant="contained">{name}</Button>
    </Link>
  )
});