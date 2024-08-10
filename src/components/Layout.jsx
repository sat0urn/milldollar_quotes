import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className={"container bg-white vh-100 pt-3"}>
      <Outlet/>
    </div>
  )
}

export default Layout