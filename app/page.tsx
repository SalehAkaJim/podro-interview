import { Card } from '@/components/Card'
import styles from './page.module.scss'
import { SearchInput } from '@/components/SearchInput'
import { Information } from '@/components/Information'
import { apiRef } from './(home)/_api/ApiRef'

export default function Page() {
  return (
    <div className={styles.page_background}>
      <main>
        <section id='login' className={styles.search}>
          <Card
            size='lg'
            sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <div className={styles.search__description}>
              <h1 className={styles.search__description_title}>
                آی پی مد نظر خود را پیدا کنید
              </h1>

              <p className={styles.search__description_content}>
                اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می
                توانید با استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا
                جهان پیدا کنید. چه باید کرد: آدرس IP مورد نظر خود را در کادر زیر
                وارد کنید، سپس روی "دریافت جزئیات IP" کلیک کنید.
              </p>
            </div>

            <div>
              <SearchInput apiRef={apiRef} />
            </div>

            <div className={styles.search__informations}>
              <Information />
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
