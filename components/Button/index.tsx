import styles from './index.module.scss'
import { clsx } from 'clsx'

interface Props {
  text?: string
  variant?: 'primary' | 'icon'
  fullWidth?: boolean
  icon?: React.ReactElement
}

export const Button = ({
  text,
  variant = 'primary',
  fullWidth = false,
  icon
}: Props) => {
  return (
    <button
      type='submit'
      className={clsx([styles.button, styles[variant]], {
        [styles.fullWidth]: fullWidth
      })}
    >
      {icon && icon}

      {variant !== 'icon' && text}
    </button>
  )
}
