import React, { useState } from "react";
import Image from "next/image";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Moment from "react-moment";
import logo from "../public/logo.png";

import Head from "next/head";

function Tatkal() {
  // DATE HOOK
  const [startDate, setStartDate] = useState();

  return (
    <>
      <div className="container">
        <Head>
          <link rel="icon" href="/logo.png" />
          <title>ticket120 - IRCTC TATKAL TICKET BOOKING DATE CALCULATOR</title>
          <meta
            name="description"
            content="अपनी बुकिंग से 120 दिन पहले की उन्नत तारीख का तुरंत पता लगाएं टिकट120 के माध्यम से रेल यात्रा।"
          />
          <meta name="keywords" content="train advanced booking date" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ticket120.toolcarton.com" />
          <meta
            property="og:title"
            content="ticket120 - IRCTC TRAIN TICKET ADVANCED BOOKING DATE CALCULATOR"
          />
          <meta
            property="og:description"
            content="अपनी बुकिंग से 120 दिन पहले की उन्नत तारीख का तुरंत पता लगाएं टिकट120 के माध्यम से रेल यात्रा।"
          />
          <meta
            property="og:image"
            content="https://ticket120.toolcarton.com/banner.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://ticket120.toolcarton.com/"
          />
          <meta
            property="twitter:title"
            content="ticket120 - IRCTC TRAIN TICKET ADVANCED BOOKING DATE CALCULATOR"
          />
          <meta
            property="twitter:description"
            content="अपनी बुकिंग से 120 दिन पहले की उन्नत तारीख का तुरंत पता लगाएं टिकट120 के माध्यम से रेल यात्रा।"
          />
          <meta
            property="twitter:image"
            content="https://ticket120.toolcarton.com/banner.png"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
          <link rel="canonical" href="https://ticket120.toolcarton.com/" />
          <meta
            name="google-site-verification"
            content="R66HnaQdQ-YIUjFUo-TcNq00hO28vxWoY_8sUoI4hks"
          />{" "}
        </Head>
        <nav>
          <Image src={logo} alt="ticket120 logo" width={50} height={10} />
          <div className="logo-box">
            <h3>
              <a href="/">Home</a>
            </h3>
            <h3>ticket120</h3>

            <img className="flag" src="./india.png" alt="" />
          </div>
        </nav>
        <main>
          <h1>🚆 IRCTC TATKAL TICKET BOOKING DATE CALCULATOR</h1>
          <p className="para2">
            AC कक्षाओं के लिए चयनित ट्रेनों के लिए तत्काल बुकिंग{" "}
            <span>एक दिन पहले </span> सुबह 10:00 बजे और Non-AC कक्षाओं के लिए
            यात्रा की तारीख से सुबह 11:00 बजे शुरू होती है। आप या तो रेलवे
            स्टेशन में काउंटर पर या आईआरसीटीसी की वेबसाइट पर तत्काल टिकट बुक कर
            सकते हैं।
          </p>
          <p className="para2">
            आप या तो रेलवे स्टेशन में काउंटर पर या IRCTC की वेबसाइट पर तत्काल
            टिकट बुक कर सकते हैं।
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
                <Moment format="D MMM YYYY" withTitle subtract={{ days: 1 }}>
                  {startDate}
                </Moment>
                - AC Train : 10:00 AM IST & Non AC: 11:00 AM
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

              <p class="para1">
                No refund will be granted on cancellation of confirmed Tatkal
                tickets. For waitlisted Tatkal ticket cancellations, charges
                will be deducted as per existing Railway rules.
              </p>
            </div>
          ) : (
            <p></p>
          )}{" "}
        </main>
      </div>
      <footer>
        <p>
          <a href="https://blogtheorem.com">&copy; blogtheorem</a> द्वारा
          निर्मित
        </p>
      </footer>
    </>
  );
}

export default Tatkal;
