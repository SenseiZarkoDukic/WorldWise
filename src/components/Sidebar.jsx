import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div>
      <Logo />
      <AppNav />

      <p>List of cities</p>
    </div>
  );
}

export default Sidebar;
