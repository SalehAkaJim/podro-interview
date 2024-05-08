import styles from './index.module.scss'
import { clsx } from 'clsx'

interface Props {
  text?: string
  variant?: 'primary' | 'icon' | 'disabled'
  fullWidth?: boolean
  icon?: React.ReactElement
  onClick?: () => void
  error?: boolean
}

export const Button = ({
  text,
  variant = 'primary',
  fullWidth = false,
  icon,
  onClick,
  error
}: Props) => {
  return (
    <button
      type='submit'
      className={clsx([styles.button, styles[variant]], {
        [styles.fullWidth]: fullWidth,
        [styles.error]: error
      })}
      onClick={onClick}
      disabled={variant === 'disabled'}
    >
      {icon && icon}

      {variant !== 'icon' && text}
    </button>
  )
}
