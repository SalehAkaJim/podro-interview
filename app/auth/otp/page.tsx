import { Card } from '@/components/Card'
import styles from './page.module.scss'
import { Button } from '@/components/Button'
import IconArrowLeft from '@/components/Icons/IconArrowLeft'
import { OtpInputField } from '@/components/OtpInputField'
import Link from 'next/link'

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

              <Button variant='icon' icon={<IconArrowLeft />}></Button>
            </div>

            <div className={styles.login__card_content}>
              <h2 className={styles.login__card_content_title}>
                کد تایید را وارد کنید
              </h2>

              <p className={styles.login__card_content_desc}>
                کد تایید برای شماره {'091-------'} پیامک شد
              </p>
            </div>

            <div dir='ltr'>
              <OtpInputField />
            </div>

            <div className={styles.login__card_register}>
              <p className={styles.login__card_register_text}>
                کد را دریافت نکردید؟
              </p>

              <Link href='#' className={styles.login__card_register_link}>
                ارسال مجدد
              </Link>
            </div>

            <div>
              <Button fullWidth text='تایید' />
            </div>
          </div>
        </Card>
      </section>
    </main>
  )
}
