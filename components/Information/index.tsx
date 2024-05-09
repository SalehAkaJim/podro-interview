'use client'
import { useInformationStore } from '@/store/useInformationStore'
import styles from './index.module.scss'

export const Information = () => {
  const infoStore = useInformationStore()

  return (
    <>
      {infoStore && (
        <>
          {infoStore.history.map((info, index) => (
            <div key={index} className={styles.info} dir='ltr'>
              <div className={styles.info__left}>
                <div className={styles.info__left_wrapper}>
                  <div className={styles.info__left_wrapper__data}>
                    <p className={styles.info__left_wrapper__data_label}>
                      Ip Address:
                    </p>

                    <p className={styles.info__left_wrapper__data_content}>
                      {info?.ip}
                    </p>
                  </div>

                  <div className={styles.info__left_wrapper__data}>
                    <p className={styles.info__left_wrapper__data_label}>
                      Country:
                    </p>

                    <p className={styles.info__left_wrapper__data_content}>
                      {info?.country}
                    </p>
                  </div>

                  <div className={styles.info__left_wrapper__data}>
                    <p className={styles.info__left_wrapper__data_label}>
                      Region:
                    </p>

                    <p className={styles.info__left_wrapper__data_content}>
                      {info?.region}
                    </p>
                  </div>

                  <div className={styles.info__left_wrapper__data}>
                    <p className={styles.info__left_wrapper__data_label}>
                      City:
                    </p>

                    <p className={styles.info__left_wrapper__data_content}>
                      {info?.city}
                    </p>
                  </div>
                </div>

                <div className={styles.info__left_wrapper}>
                  <div className={styles.info__left_wrapper__data}>
                    <p className={styles.info__left_wrapper__data_label}>
                      Latitude:
                    </p>

                    <p className={styles.info__left_wrapper__data_content}>
                      {info?.lat}
                    </p>
                  </div>

                  <div className={styles.info__left_wrapper__data}>
                    <p className={styles.info__left_wrapper__data_label}>
                      Longitude:
                    </p>

                    <p className={styles.info__left_wrapper__data_content}>
                      {info?.lng}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.info__right}>
                <img
                  src='/map.png'
                  alt=''
                  className={styles.info__right_image}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}
