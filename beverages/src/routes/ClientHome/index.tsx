import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/HeaderClient/HeaderClient";

export default function ClientHome() {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  );
}
