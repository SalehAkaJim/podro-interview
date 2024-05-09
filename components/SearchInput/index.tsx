'use client'
import { useState } from 'react'
import { Button } from '../Button'
import IconSearch from '../Icons/IconSearch'
import styles from './index.module.scss'
import clsx from 'clsx'
import { useInformationStore } from '@/store/useInformationStore'

interface Props {
  apiRef: any
}

export const SearchInput = ({ apiRef }: Props) => {
  const [ip, setIp] = useState('')
  const [isError, setIsError] = useState(false)
  const infoStore = useInformationStore()

  const handleSubmit = () => {
    const ipv4_regex =
      /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm
    const ipv6_regex =
      /^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$/gm

    const validate = ip.match(ipv4_regex) || ip.match(ipv6_regex)
    const isV4orV6 = ip.match(ipv4_regex)
      ? 'IPv4'
      : ip.match(ipv6_regex)
        ? 'IPv6'
        : 'undefined'

    if (validate) {
      setIsError(false)

      apiRef
        .getInfo(ip.trim())
        .then((res: any) => {
          const data = {
            ip: res?.ip + ' | ' + isV4orV6,
            country: res?.location?.country,
            region: res?.location?.region,
            city: res?.location?.city,
            lat: res?.location?.lat,
            lng: res?.location?.lng
          }

          infoStore.addToHistory(data)
        })
        .catch((e: any) => console.log(e))
    } else {
      setIsError(true)
    }
  }

  return (
    <div className={styles.input_wrapper}>
      <div className={styles.input_icon_wrapper}>
        <div className={styles.input_icon_wrapper__icon}>
          <IconSearch />
        </div>

        <input
          className={clsx({
            [styles.input]: true,
            [styles.input__error]: isError
          })}
          value={ip}
          onChange={e => setIp(e.target.value)}
          type='text'
          placeholder='جستجو'
        />

        {isError && <p className={styles.error}>آی پی وارد شده اشتباه است</p>}
      </div>

      <Button
        onClick={handleSubmit}
        variant='primary-icon'
        icon={<IconSearch color='#fff' />}
        sx={{ borderRadius: '8px 2px 2px 8px', height: '56px' }}
      />
    </div>
  )
}
