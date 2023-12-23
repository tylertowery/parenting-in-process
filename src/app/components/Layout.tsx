import Banner from "./Banner";
import Footer from "./Footer";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {

  return (
    <div>
      <Banner />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;