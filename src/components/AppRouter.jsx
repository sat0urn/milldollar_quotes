import {Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import Main from "./pages/Main.jsx";
import BuyPixelPage from "./pages/BuyPixelPage.jsx";
import Blog from "./pages/Blog.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import PixelListPage from "./pages/PixelListPage.jsx";
import Contact from "./pages/Contact.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path={'/buy_pixel'} element={<BuyPixelPage/>}/>
        <Route path={'/faq'} element={<FAQPage/>}/>
        <Route path={'/blog'} element={<Blog/>}/>
        <Route path={'/list_pixels'} element={<PixelListPage/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default AppRouter