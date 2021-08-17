import React, { useState } from "react";
import Image from "next/image";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Moment from "react-moment";
import logo from "../public/logo.png";

function ticket() {
  // DATE HOOK
  const [startDate, setStartDate] = useState();

  return (
    <div className="wrapper">
      <div className="container">
        {/* <Head>
        <title>Ticket 120</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
        <nav>
          <Image
            src={logo}
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <h3>ticket120</h3>
        </nav>
        <main>
          <h1>🚆 IRCTC TRAIN TICKET ADVANCED BOOKING DATE CALCULATOR</h1>
          <p className="para2">
            अपनी बुकिंग से 120 दिन पहले की उन्नत तारीख का तुरंत पता लगाएं
            टिकट120 के माध्यम से रेल यात्रा। वेबसाइट का उपयोग करना बहुत आसान है,
            बस इनपुट सेक्शन से नीचे अपनी यात्रा की तारीख चुनें।
          </p>
          <h3>SELECT JOURNEY DATE </h3>
          <div className="dateContainer">
            <DatePicker
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          {startDate !== undefined ? (
            <div>
              <p>👇 इस तारीख को टिकट बुक करें 👇</p>
              <h2>
                <Moment format="D MMM YYYY" withTitle subtract={{ days: 120 }}>
                  {startDate}
                </Moment>
                - 8:00AM to 10:00AM IST
              </h2>
              <button>
                <a
                  href="https://www.irctc.co.in/nget/train-search"
                  target="_blank"
                >
                  {" "}
                  Book through IRCTC
                </a>
              </button>
              <p className="para1">
                इस तरह ऊपर बताई गई तारीख से आप अपनी बुकिंग शुरू कर सकते हैं
                वास्तविक यात्रा तिथि से 120 दिन पहले रेल यात्रा। कृपया जांचें एक
                बार आधिकारिक आईआरसीटीसी साइट से।
              </p>
            </div>
          ) : (
            <p></p>
          )}{" "}
        </main>
      </div>
      <footer>
        <p>Crafted by blogtheorem </p>
      </footer>
    </div>
  );
}

export default ticket;
