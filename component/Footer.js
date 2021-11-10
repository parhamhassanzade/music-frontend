import Link from "next/link";
import styles from "../styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <Link href="./about">
              <a>about us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        copyright &copy; &nbsp;
        <Link href="https://www.linkedin.com/in/parham-hassanzade-176910168/">
          parham.hzd
        </Link>
      </p>
    </footer>
  );
}
