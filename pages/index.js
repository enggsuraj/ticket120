import Head from "next/head";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";

export default function Home() {
  const [startDate, setStartDate] = useState();
  const date = new Date();

  const handleClick = () => {
    console.log("Click Button");
  };

  return (
    <div>
      <Head>
        <title>Ticket 120</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-4">
        <p>Ticket 120 Date Calculator</p>
        <div>Enter Journey Date</div>
        <div>
          <DatePicker
            selected={startDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <br />
        {/* <div>
          <button className="bg-green-500 p-2 mt-2" onClick={handleClick}>
            Check Date
          </button>
        </div> */}

        <div>Book ticket on this date</div>

        {startDate !== undefined ? (
          <div>
            <Moment format="D MMM YYYY" withTitle subtract={{ days: 120 }}>
              {startDate}
            </Moment>
            - 8:00AM IST
          </div>
        ) : (
          <p></p>
        )}
      </main>
      <footer></footer>
    </div>
  );
}
