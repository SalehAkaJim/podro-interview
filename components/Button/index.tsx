import styles from './index.module.scss'
import { clsx } from 'clsx'

interface Props {
  text?: string
  variant?: 'primary' | 'icon' | 'disabled' | 'primary-icon'
  fullWidth?: boolean
  icon?: React.ReactElement
  onClick?: () => void
  error?: boolean
  sx?: any
}

export const Button = ({
  text,
  variant = 'primary',
  fullWidth = false,
  icon,
  onClick,
  error,
  sx = {}
}: Props) => {
  return (
    <button
      type='submit'
      className={clsx([styles.button, styles[variant]], {
        [styles.fullWidth]: fullWidth,
        [styles.error]: error
      })}
      style={sx}
      onClick={onClick}
      disabled={variant === 'disabled'}
    >
      {icon && icon}

      {variant !== 'icon' && text}
    </button>
  )
}
