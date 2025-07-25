import Header from '../content/site-vitrine/layout/Header';
import Footer from '../content/site-vitrine/layout/Footer';
import { Outlet } from 'react-router';
export default function SiteVitrine() {
  return (
    <>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
    </>
  )
}
