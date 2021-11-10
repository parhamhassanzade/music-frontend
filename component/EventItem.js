import Image from "next/image";
import style from "../styles/EventItem.module.css";
import Link from "next/link";
export default function EventItem({ evt }) {
  return (
    <div className={style.event_item}>
      <Image
        src={evt.image ? evt.image : "/image/event-default.png"}
        width={150}
        height={170}
      />
      <div className={style.info_Section}>
        <div className={style.textBox}>
          <h3>{evt.name}</h3>
          <span>
            {evt.date} at {evt.time}
          </span>
        </div>
        <div className={style.link}>
          <Link href={`/events/${evt.slug}`}>
            <div className="btn">Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
