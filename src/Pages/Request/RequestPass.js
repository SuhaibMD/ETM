import "./RequestPass.css";

const RequestPage = ({
  requestId,
  status,
  from,
  to,
  stopName,
  SDate,
  EDate,
}) => {
  return (
    <>
      <div class="parent">
        <div class="title">
          <p>Request Id: {requestId}</p>
          <div class="status_group">
            <p class={ status == "Confirmed" ? "status_G" : "Expired"}>{status}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </div>
        </div>
        <div class="route">
          <div>
            <span class="ic1 1"></span>
            <span class="ic ic3"></span>
            <span class="ic ic4"></span>
            <span class="ic ic5"></span>

            <span class="ic2 2"> </span>
            <p class="routeP">{from}</p>
            <p class="routeP">{to}</p>
          </div>
         {status === "Confirmed" && <div>
            <button class="btn_C">Cancel</button>
          </div>}
        </div>
        <div class="details">
          <p>Bus Stop Name : {stopName}</p>
          <div class="time">
            <p>OfficeInTime : 09:00</p>
            <p>Drop: 18:45</p>
          </div>
          <div class="time">
            <p>Start Date : {SDate}</p>
            <p>End Date: {EDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestPage;
