'use client'
import styles from './index.module.scss'
import OtpInput from 'react-otp-input'

interface Props {
  otp: string
  setOtp: any
}

export const OtpInputField = ({ otp, setOtp }: Props) => {
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
