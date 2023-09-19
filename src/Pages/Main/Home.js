import RequestPage from "../Request/RequestPass";
import Header from "./Header";

const Home = () => {
  const request = [
    {
      requestId: 634759,
      status: "Confirmed",
      from: "Kovur, Tamilnadu",
      to: "Siruseri",

      stopName: "Kundrathur",
      SDate: "2023-09-1",
      EDate: "2023 - 09 - 30",
    },
    {
      requestId: 305478,
      status: "Expired",
      from: "Kovur, Tamilnadu",
      to: "Siruseri",

      stopName: "Kundrathur",
      SDate: "2023-09-1",
      EDate: "2023 - 09 - 30",
    },
  ];
  return (
    <>
      <Header />
      {request.map((element) => (
        <RequestPage {...element} />
      ))}
    </>
  );
};

export default Home;
