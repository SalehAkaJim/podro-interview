import { Button } from '../Button'
import IconSearch from '../Icons/IconSearch'
import styles from './index.module.scss'

interface Props {}

export const SearchInput = ({}: Props) => {
  return (
    <div className={styles.input_wrapper}>
      <div className={styles.input_icon_wrapper}>
        <div className={styles.input_icon_wrapper__icon}>
          <IconSearch />
        </div>

        <input className={styles.input} type='number' placeholder='جستجو' />
      </div>

      <Button
        variant='primary-icon'
        icon={<IconSearch color='#fff' />}
        sx={{ borderRadius: '8px 2px 2px 8px', height: '56px' }}
      />
    </div>
  )
}
