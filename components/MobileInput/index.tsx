import clsx from 'clsx'
import styles from './index.module.scss'

interface Props {
  mobile: string
  setMobile: (v: string) => void
  isError: boolean
}

export const MobileInput = ({ mobile, setMobile, isError }: Props) => {
  return (
    <div>
      <input
        className={clsx({
          [styles.input]: true,
          [styles.input__error]: isError
        })}
        type='number'
        value={mobile}
        onChange={e => setMobile(e.target.value)}
        placeholder='شماره موبایل'
      />

      {isError && <p className={styles.error}>شماره وارد شده اشتباه است</p>}
    </div>
  )
}
