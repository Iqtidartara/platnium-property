import Topbar from "@/components/topbar/topbar"
import Sidebar from "@/components/sidebar/sidebar"
import styles from "@/components/dashboard.module.css"
// import Footer from "../components/footer/footer"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div  className={styles.content}>
        <Topbar/>
        {children}
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Layout