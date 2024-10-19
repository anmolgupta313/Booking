import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/homepage.scoped.css";
import logo from "../assets/JyotiPratishthan.png";
function Homepage() {
  const [error, setError] = useState(null);
  const [fetchApi, setFetchApi] = useState([]);
  const [buttonId, setButtonId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5002/api/waitlist"); // Replace with your API endpoint
        setFetchApi(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch activities. Please try again later.");
      }
    };

    // Fetch data immediately on mount
    fetchData();

    // Poll the API every 5 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000); // Adjust the interval as necessary

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [buttonId]); // Remove fetchApi from dependencies to prevent multiple fetches

  const sendApiRequest = async (url, method, data) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("API response:", result);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const onClick = (value) => {
    sendApiRequest(
      `http://127.0.0.1:5002/api/waitlist/update/${value}`,
      "PUT",
      { id: value }
    );
    setButtonId(value);
  };

  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      sendApiRequest(
        `http://127.0.0.1:5002/api/waitlist/complete/${value}`,
        "PUT",
        { id: value }
      );
    }
  };

  let hennaSerialNumber = 1;
  let diyaSerialNumber = 1;
  let nailSerialNumber = 1;
  let manicureSerialNumber = 1;
  let artSerialNumber = 1;
  let faceSerialNumber = 1;
  return (
    <div className="main-div">
      <img src={logo} alt="" />
      <h1>Queue Management System</h1>
      <div className="main-div-two">
        <div className="sub-div">
          <div className="sub-sub-div henna">
            <div className="heading">Henna</div>
            <div className="scroll-div henna-diya">
              {fetchApi.map((data, index) => {
                if (data.activity === "Henna (Mehndi)") {
                  return (
                    <div className="checkbox" key={data.id}>
                      <div>
                        <label>
                          {hennaSerialNumber++}
                          <input
                            value={data.id}
                            type="checkbox"
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.value,
                                e.target.checked
                              )
                            }
                          />
                          {data.name}
                        </label>
                      </div>
                      <div>
                        <button
                          className={
                            data.status === "waiting"
                              ? "waiting-btn"
                              : data.status === "ready"
                              ? "sending-btn"
                              : data.status === "sent"
                              ? "sent-btn"
                              : ""
                          }
                          onClick={() => onClick(data.id)}
                          value={data.id}
                        >
                          {data.status === "waiting"
                            ? "Send WhatsApp"
                            : data.status === "ready"
                            ? "Sending WhatsApp"
                            : data.status === "sent"
                            ? "WhatsApp Sent"
                            : ""}
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}{" "}
            </div>
          </div>

          <div className="sub-sub-div diyapainting">
            <div className="heading">Diya Painting Workshop</div>
            <div className="scroll-div henna-diya">
              {fetchApi.map((data, index) => {
                if (data.activity === "Diya Painting Workshop") {
                  return (
                    <div className="checkbox" key={data.id}>
                      <div>
                        <label>
                          {diyaSerialNumber++}
                          <input
                            type="checkbox"
                            value={data.id}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e.target.value,
                                e.target.checked
                              )
                            }
                          />
                          {data.name}
                        </label>
                      </div>
                      <div>
                        <button
                          className={
                            data.status === "waiting"
                              ? "waiting-btn"
                              : data.status === "ready"
                              ? "sending-btn"
                              : data.status === "sent"
                              ? "sent-btn"
                              : ""
                          }
                          onClick={() => onClick(data.id)}
                          value={data.id}
                        >
                          {data.status === "waiting"
                            ? "Send WhatsApp"
                            : data.status === "ready"
                            ? "Sending WhatsApp"
                            : data.status === "sent"
                            ? "WhatsApp Sent"
                            : ""}
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        <div className="sub-div sub-div-three">
          <div className="sub-div-one">
            <div className="sub-sub-div nailart">
              <div className="heading">Nail Art</div>
              <div className="scroll-div">
                {fetchApi.map((data, index) => {
                  if (data.activity === "Nail Art") {
                    return (
                      <div className="checkbox" key={data.id}>
                        <div>
                          <label>
                            {nailSerialNumber++}
                            <input
                              type="checkbox"
                              value={data.id}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.value,
                                  e.target.checked
                                )
                              }
                            />
                            {data.name}
                          </label>
                        </div>
                        <div>
                          <button
                            className={
                              data.status === "waiting"
                                ? "waiting-btn"
                                : data.status === "ready"
                                ? "sending-btn"
                                : data.status === "sent"
                                ? "sent-btn"
                                : ""
                            }
                            onClick={() => onClick(data.id)}
                            value={data.id}
                          >
                            {data.status === "waiting"
                              ? "Send WhatsApp"
                              : data.status === "ready"
                              ? "Sending WhatsApp"
                              : data.status === "sent"
                              ? "WhatsApp Sent"
                              : ""}
                          </button>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            <div className="sub-sub-div manicure">
              <div className="heading">Manicure</div>
              <div className="scroll-div">
                {fetchApi.map((data, index) => {
                  if (data.activity === "Manicure") {
                    return (
                      <div className="checkbox" key={data.id}>
                        <div>
                          <label>
                            {manicureSerialNumber++}
                            <input
                              type="checkbox"
                              value={data.id}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.value,
                                  e.target.checked
                                )
                              }
                            />
                            {data.name}
                          </label>
                        </div>
                        <div>
                          <button
                            className={
                              data.status === "waiting"
                                ? "waiting-btn"
                                : data.status === "ready"
                                ? "sending-btn"
                                : data.status === "sent"
                                ? "sent-btn"
                                : ""
                            }
                            onClick={() => onClick(data.id)}
                            value={data.id}
                          >
                            {data.status === "waiting"
                              ? "Send WhatsApp"
                              : data.status === "ready"
                              ? "Sending WhatsApp"
                              : data.status === "sent"
                              ? "WhatsApp Sent"
                              : ""}
                          </button>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>

          <div className="sub-div-one">
            <div className="sub-sub-div art">
              <div className="heading">Art & Craft Workshop</div>
              <div className="scroll-div">
                {fetchApi.map((data, index) => {
                  if (data.activity === "Art & Craft Workshop") {
                    return (
                      <div className="checkbox" key={data.id}>
                        <div>
                          {}
                          <label>
                            {artSerialNumber++}
                            <input
                              type="checkbox"
                              value={data.id}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.value,
                                  e.target.checked
                                )
                              }
                            />
                            {data.name}
                          </label>
                        </div>
                        <div>
                          <button
                            className={
                              data.status === "waiting"
                                ? "waiting-btn"
                                : data.status === "ready"
                                ? "sending-btn"
                                : data.status === "sent"
                                ? "sent-btn"
                                : ""
                            }
                            onClick={() => onClick(data.id)}
                            value={data.id}
                          >
                            {data.status === "waiting"
                              ? "Send WhatsApp"
                              : data.status === "ready"
                              ? "Sending WhatsApp"
                              : data.status === "sent"
                              ? "WhatsApp Sent"
                              : ""}
                          </button>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            <div className="sub-sub-div facepainting">
              <div className="heading">Face Painting</div>
              <div className="scroll-div">
                {fetchApi.map((data, index) => {
                  if (data.activity === "Face Painting") {
                    return (
                      <div className="checkbox" key={data.id}>
                        <div>
                          <label>
                            {faceSerialNumber++}
                            <input
                              value={data.id}
                              type="checkbox"
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.value,
                                  e.target.checked
                                )
                              }
                            />
                            {data.name}
                          </label>
                        </div>
                        <div>
                          <button
                            className={
                              data.status === "waiting"
                                ? "waiting-btn"
                                : data.status === "ready"
                                ? "sending-btn"
                                : data.status === "sent"
                                ? "sent-btn"
                                : ""
                            }
                            onClick={() => onClick(data.id)}
                            value={data.id}
                          >
                            {data.status === "waiting"
                              ? "Send WhatsApp"
                              : data.status === "ready"
                              ? "Sending WhatsApp"
                              : data.status === "sent"
                              ? "WhatsApp Sent"
                              : ""}
                          </button>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
