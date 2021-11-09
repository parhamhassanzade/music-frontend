import Layout from "../component/Layout";

import { API_URL } from "../config";
import EventItem from "./../component/EventItem";
export default function Home({ events }) {
  console.log(events.events);
  return (
    <Layout>
      <h1>UpComing Events</h1>
      {events.length === 0 ? <h3>No Events to show</h3> : ""}

      {events.events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}
//? getStaticProps work in built time and for fix the proplem of this method in object that we return use revalidate
export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
};

//?get data wen we go to the page
// export const getServerSideProps = async () => {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();

//   return {
//     props: { events },
//   };
// };
