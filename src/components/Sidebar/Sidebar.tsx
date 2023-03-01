import styles from "./Sidebar.module.scss";
import {
  BsPeopleFill,
  BsPersonFill,
  BsFillCalendarFill,
  BsQuestionCircleFill,
  BsFillBarChartFill,
  BsPieChartFill,
  BsHouseFill,
} from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2>Admin</h2>
      <div className={styles.sidebar__container}>
        {/* DATA */}
        <div className={styles.sidebar__item}>
          <div className={styles.sidebar__item__links}>
            <a href="/">
              <BsHouseFill />
              <span>Dashboard</span>
            </a>
          </div>
        </div>
        <div className={styles.sidebar__item}>
          <h3>DATA</h3>
          {/* Add map function later */}
          <div className={styles.sidebar__item__links}>
            <a className={styles.active} href="/">
              <BsPeopleFill />
              <span>Manage Team</span>
            </a>
            <a href="/">
              <MdPermContactCalendar />
              <span>Contact</span>
            </a>
            <a href="/">
              <FaFileInvoice />
              <span>Manage Team</span>
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className={styles.sidebar__item}>
          <h3>PAGES</h3>
          {/* Add map function later */}
          <div className={styles.sidebar__item__links}>
            <a href="/">
              <BsPersonFill />
              <span>Profile Form</span>
            </a>
            <a href="/">
              <BsFillCalendarFill />
              <span>Calendar</span>
            </a>
            <a href="/">
              <BsQuestionCircleFill />
              <span>FAQ Page</span>
            </a>
          </div>
        </div>

        {/* Charts */}
        <div className={styles.sidebar__item}>
          <h3>CHARTS</h3>
          {/* Add map function later */}
          <div className={styles.sidebar__item__links}>
            <a href="/">
              <BsFillBarChartFill />
              <span>Bar Chart</span>
            </a>
            <a href="/">
              <BsPieChartFill />
              <span>Pie Chart</span>
            </a>
            <a href="/">
              <AiOutlineRise />
              <span>Line Chart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
