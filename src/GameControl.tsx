import { Outlet } from "react-router"
import { Navbar } from "./comps/Navbar"

export const GameControl = () => {
  return (
    <>
      <Navbar name="balls" />
      <Outlet />
    </>
  )
}
