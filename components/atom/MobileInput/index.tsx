import styles from './index.module.scss'

interface Props {}

export const MobileInput = ({}: Props) => {
  return (
    <input className={styles.input} type='number' placeholder='شماره موبایل' />
  )
}
