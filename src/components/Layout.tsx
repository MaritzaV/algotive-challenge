import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <nav id="nav" className="basis-4/12 align-middle flex flex-row items-center">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="video-gallery">Video Gallery</Link></li>
        </ul>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;