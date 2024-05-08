import clsx from 'clsx'
import styles from './index.module.scss'

interface Props {
  sx?: any
  size?: 'sm' | 'lg'
  children: React.ReactNode
}

export const Card = ({ children, size = 'lg', sx = {} }: Readonly<Props>) => {
  return (
    <div
      className={clsx({
        [styles.card]: true,
        [styles.card__lg]: size === 'lg',
        [styles.card__sm]: size === 'sm'
      })}
      style={sx}
    >
      {children}
    </div>
  )
}
