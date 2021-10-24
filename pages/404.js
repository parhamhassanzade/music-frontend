import Layout from "../component/Layout";
import Link from "next/link";
import styles from "../styles/404.module.css"
import{FaFrown} from "react-icons/fa"
export default function PageNotFound() {
  return (
    <Layout>
      <div className={styles.error}>
        <h1>404<FaFrown/></h1>
        <h4>page not found</h4>
        <Link href="/">
            back to home
        </Link>
      </div>
    </Layout>
  );
}
