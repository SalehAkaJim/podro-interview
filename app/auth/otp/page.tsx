'use client'
import { useEffect, useState } from 'react'
import { Card } from '@/components/Card'
import styles from './page.module.scss'
import { Button } from '@/components/Button'
import IconArrowLeft from '@/components/Icons/IconArrowLeft'
import { OtpInputField } from '@/components/OtpInputField'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'
import clsx from 'clsx'
import { setCookie } from '@/helper/helperCookie'

export default function Page() {
  const [otp, setOtp] = useState('')
  const [isSubmitActive, setIsSubmitActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)
  const [isError, setIsError] = useState(false)

  const router = useRouter()
  const authStore = useAuthStore()

  const handleSubmit = () => {
    if (otp === '1111') {
      setIsError(false)
      setCookie('token', 'Something', 2)
      router.push('/')
    } else {
      setIsError(true)
    }
  }

  useEffect(() => {
    if (!timeLeft) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  useEffect(() => {
    if (otp.length === 4) {
      setIsSubmitActive(true)
    } else {
      setIsSubmitActive(false)
    }
  }, [otp])

  return (
    <main>
      {authStore && (
        <section id='login' className={styles.login}>
          <Card size='sm'>
            <div className={styles.login__card}>
              <div className={styles.login__card_logo}>
                <img
                  className={styles.login__card_logo_image}
                  src='/logo/LogoType.png'
                  alt='Podro Logo'
                />

                <Button
                  onClick={() => router.push('/auth')}
                  variant='icon'
                  icon={<IconArrowLeft />}
                ></Button>
              </div>

              <div className={styles.login__card_content}>
                <h2 className={styles.login__card_content_title}>
                  کد تایید را وارد کنید
                </h2>

                <p className={styles.login__card_content_desc}>
                  کد تایید برای شماره {authStore?.mobile} پیامک شد
                </p>

                <Link href='/auth' className={styles.login__card_content_link}>
                  تغییر شماره همراه
                </Link>
              </div>

              <div dir='ltr'>
                <OtpInputField otp={otp} setOtp={setOtp} />
              </div>

              <div className={styles.login__card_register}>
                <p className={styles.login__card_register_text}>
                  کد را دریافت نکردید؟
                </p>

                {timeLeft ? (
                  <p
                    className={clsx(
                      styles.login__card_register_link,
                      styles.login__card_register_link_disable
                    )}
                  >
                    ارسال مجدد
                  </p>
                ) : (
                  <Link href='#' className={styles.login__card_register_link}>
                    ارسال مجدد
                  </Link>
                )}
              </div>

              <div>
                {!timeLeft && !isSubmitActive ? (
                  <Button fullWidth text='ارسال مجدد' />
                ) : !isSubmitActive ? (
                  <Button
                    fullWidth
                    variant='disabled'
                    text={Math.floor(timeLeft / 60) + ':' + (timeLeft % 60)}
                  />
                ) : (
                  <Button
                    onClick={handleSubmit}
                    error={isError}
                    fullWidth
                    text='تایید'
                  />
                )}
              </div>

              {isError && (
                <div>
                  <p className={styles.error}>کد وارد شده اشتباه است</p>
                </div>
              )}
            </div>
          </Card>
        </section>
      )}
    </main>
  )
}
