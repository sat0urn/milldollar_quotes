import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className={"container bg-white min-vh-100 p-0"} style={{width: '1000px'}}>
      <Outlet/>
    </div>
  )
}

export default Layout