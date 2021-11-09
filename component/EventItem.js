import Image from "next/image";
export default function EventItem({ evt }) {
  return (
    <div>
      <div>
        <h3>{evt.name}</h3>
        <span>
          {evt.date} at {evt.time}
        </span>
        <div>
          <Image
            src={evt.image ? evt.image : "/image/event-default.png"}
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
