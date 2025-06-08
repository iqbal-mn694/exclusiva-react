import { Outlet } from "react-router-dom";
import Navbar from "../commons/molecules/Navbar";


const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default MainLayout;