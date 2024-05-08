'use client'
import { Card } from '@/components/Card'
import styles from './page.module.scss'
import { MobileInput } from '@/components/MobileInput'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { useAuthStore } from '@/store/useAuthStore'
import { useRouter } from 'next/navigation'

export default function Page() {
  const authStore = useAuthStore()
  const [mobile, setMobile] = useState<string>('')
  const [isError, setIsError] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const regex = /^((98|\+98|0098|0)*(9)[0-9]{9})+$/

    if (mobile && regex.test(mobile)) {
      setIsError(false)
      authStore.setMobile(mobile)

      router.push('/auth/otp')
    } else {
      setIsError(true)
    }
  }

  useEffect(() => {
    if (authStore) {
      setMobile(authStore?.mobile)
    }
  }, [authStore])

  return (
    <main>
      <section id='login' className={styles.login}>
        <Card size='sm'>
          <div className={styles.login__card}>
            <div className={styles.login__card_logo}>
              <img
                className={styles.login__card_logo_image}
                src='/logo/LogoType.png'
                alt='Podro Logo'
              />
            </div>

            <div className={styles.login__card_content}>
              <h2 className={styles.login__card_content_title}>
                به پنل مدیریت تسک پادرو خوش آمدید
              </h2>

              <p className={styles.login__card_content_desc}>
                برای ورود، لطفا شماره موبایل خود را وارد کنید
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.login__card_mobile}>
                <MobileInput
                  mobile={mobile}
                  setMobile={setMobile}
                  isError={isError}
                />

                <Button fullWidth text='ارسال کد تایید' />
              </div>
            </form>

            <div className={styles.login__card_register}>
              <p className={styles.login__card_register_text}>
                حساب کاربری ندارید؟
              </p>

              <Link href='#' className={styles.login__card_register_link}>
                ثبت‌نام
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </main>
  )
}
