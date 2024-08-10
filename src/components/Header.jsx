import {Link} from "react-router-dom";
import HeaderImg from "../assets/header_top.gif"

const Header = () => {
  return (
    <div className={"container g-0"}>
      <nav className={"navbar navbar-expand-lg py-0"}
           style={{backgroundColor: '#636562'}}>
        <div className={"d-block w-100"}>
          <div className={"d-flex align-items-center px-4 py-2"}>
            <Link to={"/"}
                  style={{textShadow: '1.5px 1.5px black'}}
                  className={"navbar-brand"}>
              <span className={"text-warning fw-bold h4"}>
                The Mill Doll Quotes
              </span>
            </Link>
            <div className={""}>
              <img src={HeaderImg}

                   alt=""/>
            </div>
          </div>
          <button className={"navbar-toggler"}
                  type={"button"}
                  data-bs-toggle={"collapse"}
                  data-bs-target={"#navbarSupportedContent"}
                  aria-controls={"navbarSupportedContent"}
                  aria-expanded={"false"}
                  aria-label={"Toggle navigation"}>
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div className={"collapse navbar-collapse bg-warning bg-gradient"}
               id={"navbarSupportedContent"}>
            <ul className={"navbar-nav mb-2 mb-lg-0 py-2 mx-auto"}>
              <li className={"nav-item"}>
                <Link to={'/'} className={"nav-link text-black p-0"}>
                  <span className={"fw-bold pe-3 border-end border-black"}
                        style={{fontSize: '14px'}}>
                    Homepage
                  </span>
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to={'/'} className={"nav-link text-black p-0"}>
                  <span className={"fw-bold px-3 py-0 border-end border-black"}
                        style={{fontSize: '14px'}}>
                    Kupipixel
                  </span>
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to={'/'} className={"nav-link text-black p-0"}>
                  <span className={"fw-bold px-3 py-0 border-end border-black"}
                        style={{fontSize: '14px'}}>
                    FUCK
                  </span>
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to={'/'} className={"nav-link text-black p-0"}>
                  <span className={"fw-bold px-3 py-0 border-end border-black"}
                        style={{fontSize: '14px'}}>
                    Blog
                  </span>
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to={'/'} className={"nav-link text-black p-0"}>
                  <span className={"fw-bold px-3 border-end border-black"}
                        style={{fontSize: '14px'}}>
                    Pixel List
                  </span>
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to={'/'} className={"nav-link text-black p-0"}>
                  <span className={"fw-bold ps-3"}
                        style={{fontSize: '14px'}}>
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header