import React, { useEffect, useState } from "react";

import "../components/homepage.scoped.css";

function Homepage() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/activities"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFetchApi(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch activities. Please try again later.");
      }
    };

    fetchData();
  }, []);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);
  const [buttonId, setButtonId] = useState(null);
  const [fetchApi, setFetchApi] = useState([
    {
      activity: "Henna",
      id: 2,
      name: "Ekta Gupta",
      number: "+16479497857",
      status: "Waiting",
    },
    {
      activity: "Nails & Manicure",
      id: 3,
      name: "Ekta Gupta",
      number: "+16479497857",
      status: "Waiting",
    },
    {
      activity: "Diya Painting",
      id: 4,
      name: "Ekta Gupta",
      number: "+16479497857",
      status: "Waiting",
    },
    {
      activity: "Art & Craft",
      id: 5,
      name: "Ekta Gupta",
      number: "+16479497857",
      status: "Waiting",
    },
    {
      activity: "Face Painting",
      id: 6,
      name: "Ekta Gupta",
      number: "+16479497857",
      status: "Waiting",
    },
    {
      activity: "Art & Craft",
      id: 7,
      name: "Anmol Gupta",
      number: "+16476365383",
      status: "Ready",
    },
    {
      activity: "Nails",
      id: 8,
      name: "Shama Gupta",
      number: "+16479497857",
      status: "Sent",
    },
    {
      activity: "Manicure",
      id: 9,
      name: "Shama Gupta",
      number: "+16479497857",
      status: "Waiting",
    },
  ]);

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

  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      // Add value to the checked values array
      setId(value);

      sendApiRequest(`https://api.example.com/update/${value}`, "PUT", {
        id: value,
      });
    }
  };

  console.log(id, "id");

  const onClick = (value) => {
    setButtonId(value);

    sendApiRequest(`https://api.example.com/update/${value}`, "PUT", {
      id: value,
    });
  };

  console.log(buttonId, "idbutton");
  return (
    <div className="main-div">
      <div className="sub-div">
        <div className="sub-sub-div henna">
          <div className="heading">Henna</div>
          {fetchApi.map((data) => {
            if (data.activity === "Henna") {
              return (
                <div className="checkbox" key={data.id}>
                  <div>
                    <label>
                      <input
                        value={data.id}
                        type="checkbox"
                        onChange={(e) =>
                          handleCheckboxChange(e.target.value, e.target.checked)
                        }
                      />
                      {data.name}
                    </label>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        onClick(e.target.value);
                      }}
                      value={data.id}
                    >
                      {data.status == "Waiting"
                        ? "send to wahtsapp"
                        : data.status == "Ready"
                        ? "sending whatsapp"
                        : data.status == "Sent"
                        ? "whatsapp sent"
                        : ""}
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="sub-sub-div manicure">
          <div className="heading">Manicure</div>
          {fetchApi.map((data) => {
            if (data.activity === "Manicure") {
              return (
                <div className="checkbox" key={data.id}>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value={data.id}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.value, e.target.checked)
                        }
                      />
                      {data.name}
                    </label>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        onClick(e.target.value);
                      }}
                      value={data.id}
                    >
                      {data.status == "Waiting"
                        ? "send to wahtsapp"
                        : data.status == "Ready"
                        ? "sending whatsapp"
                        : data.status == "Sent"
                        ? "whatsapp sent"
                        : ""}
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="sub-sub-div art">
          <div className="heading">Art & Craft Workshop</div>
          {fetchApi.map((data) => {
            if (data.activity === "Art & Craft") {
              return (
                <div className="checkbox" key={data.id}>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value={data.id}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.value, e.target.checked)
                        }
                      />
                      {data.name}
                    </label>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        onClick(e.target.value);
                      }}
                      value={data.id}
                    >
                      {data.status == "Waiting"
                        ? "send to wahtsapp"
                        : data.status == "Ready"
                        ? "sending whatsapp"
                        : data.status == "Sent"
                        ? "whatsapp sent"
                        : ""}
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="sub-sub-div facepainting">
          <div className="heading">Face Painting</div>
          {fetchApi.map((data) => {
            if (data.activity === "Face Painting") {
              return (
                <div className="checkbox" key={data.id}>
                  <div>
                    <label>
                      <input
                        value={data.id}
                        type="checkbox"
                        onChange={(e) =>
                          handleCheckboxChange(e.target.value, e.target.checked)
                        }
                      />
                      {data.name}
                    </label>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        onClick(e.target.value);
                      }}
                      value={data.id}
                    >
                      {data.status == "Waiting"
                        ? "send to wahtsapp"
                        : data.status == "Ready"
                        ? "sending whatsapp"
                        : data.status == "Sent"
                        ? "whatsapp sent"
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
      <div className="sub-div">
        <div className="sub-sub-div nailart">
          <div className="heading">Nail Art</div>
          {fetchApi.map((data) => {
            if (data.activity === "Nails") {
              return (
                <div className="checkbox" key={data.id}>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value={data.id}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.value, e.target.checked)
                        }
                      />
                      {data.name}
                    </label>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        onClick(e.target.value);
                      }}
                      value={data.id}
                    >
                      {data.status == "Waiting"
                        ? "send to wahtsapp"
                        : data.status == "Ready"
                        ? "sending whatsapp"
                        : data.status == "Sent"
                        ? "whatsapp sent"
                        : ""}
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="sub-sub-div diyapainting">
          <div className="heading">Diya Painting Workshop</div>
          {fetchApi.map((data) => {
            if (data.activity === "Diya Painting") {
              return (
                <div className="checkbox" key={data.id}>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value={data.id}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.value, e.target.checked)
                        }
                      />
                      {data.name}
                    </label>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        onClick(e.target.value);
                      }}
                      value={data.id}
                    >
                      {data.status == "Waiting"
                        ? "send to wahtsapp"
                        : data.status == "Ready"
                        ? "sending whatsapp"
                        : data.status == "Sent"
                        ? "whatsapp sent"
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
  );
}

export default Homepage;
