'use client'
import { useState } from 'react'
import styles from './index.module.scss'
import OtpInput from 'react-otp-input'

interface Props {}

export const OtpInputField = ({}: Props) => {
  const [otp, setOtp] = useState('')

  return (
    <OtpInput
      containerStyle={{
        width: '100%',
        gap: '18px',
        padding: '0 16px'
      }}
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<></>}
      renderInput={props => <input {...props} className={styles.input} />}
    />
  )
}
