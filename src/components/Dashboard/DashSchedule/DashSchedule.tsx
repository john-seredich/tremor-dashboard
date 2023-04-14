import styles from "./DashSchedule.module.scss";
import avatar2 from "../../../assets/avatar2.jpg";
import avatar3 from "../../../assets/avatar3.jpg";
import avatar4 from "../../../assets/avatar4.jpg";
import avatar5 from "../../../assets/avatar5.jpg";
import avatar6 from "../../../assets/avatar6.jpg";
import avatar7 from "../../../assets/avatar7.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";

const scheduleData = [
  {
    title: "Call with Alan",
    date: "4 Apr | 09:00 - 10:30",
    category: "Family",
    img: avatar3,
    backgroundColor: "#e8bbee",
    color: "#d946ef",
  },
  {
    title: "Meeting with Mike",
    date: "5 Apr | 11:00 - 12:15",
    category: "Buisness",
    img: avatar5,
    backgroundColor: "#d3fcd3",
    color: "#03b903",
  },
  {
    title: "Site Inspection",
    date: "7 Apr | 09:00 - 10:30",
    category: "Travel",
    img: avatar4,
    backgroundColor: "#ffd7d7",
    color: " #eb1919",
  },
  {
    title: "Team Review",
    date: "11 Apr | 07:00 - 9:30",
    category: "Tech",
    img: avatar7,
    backgroundColor: "rgb(154, 230, 253)",
    color: "rgb(4, 168, 218)",
  },
  {
    title: "Test",
    date: "16 Apr | 02:00 - 4:30",
    category: "Family",
    img: avatar6,
    backgroundColor: "#e6d0ab",
    color: " #d38e18",
  },
];

function DashSchedule() {
  return (
    <div className={styles.dash_schedule}>
      <div className={styles.dash_schedule__header}>
        <h3>Schedule</h3>
        <button type="button">
          <BsThreeDotsVertical />
        </button>
      </div>
      <div className={styles.dash_schedule__container}>
        {scheduleData.map((data, i) => {
          return (
            <div className={styles.dash_schedule__item} key={i}>
              <div className={styles.dash_schedule__item__info}>
                <img src={data.img} alt="" />
                <div className={styles.dash_schedule__item__date}>
                  <h4>{data.title}</h4>
                  <p>{data.date}</p>
                </div>
              </div>
              <p
                className={styles.dash_schedule__item__category}
                style={{
                  backgroundColor: data.backgroundColor,
                  color: data.color,
                }}
              >
                {data.category}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashSchedule;
