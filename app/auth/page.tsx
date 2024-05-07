import { Card } from '@/components/atom/Card'
import styles from './page.module.scss'
import { MobileInput } from '@/components/atom/MobileInput'
import { Button } from '@/components/atom/Button'
import Link from 'next/link'

// import { Button } from '@/components/atom/Button'
// import IconArrowLeft from '@/components/atom/Icons/IconArrowLeft'

export default function Page() {
  return (
    <main className={styles.main}>
      <section id='login' className={styles.login}>
        <Card size='sm'>
          <div className={styles.login__card}>
            <div className={styles.login__card_logo}>
              <img
                className={styles.login__card_logo_image}
                src='/logo/LogoType.png'
                alt='Podro Logo'
              />

              {/* <Button variant='icon' icon={<IconArrowLeft />}></Button> */}
            </div>

            <div className={styles.login__card_content}>
              <h2 className={styles.login__card_content_title}>
                به پنل مدیریت تسک پادرو خوش آمدید
              </h2>

              <p className={styles.login__card_content_desc}>
                برای ورود، لطفا شماره موبایل خود را وارد کنید
              </p>
            </div>

            <div className={styles.login__card_mobile}>
              <MobileInput />

              <Button fullWidth text='ارسال کد تایید' />
            </div>

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
