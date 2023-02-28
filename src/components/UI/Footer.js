import styles from '../../Styling/Footer.module.css'

export default function Footer () {

  return (
    <>
      <div className={`footer ${styles.footer_class}`}>
        <ul>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}
