import axios from "axios";
import React, { useCallback, useState } from "react";

function CurrencyConverter() {
  const apyToken = process.env.REACT_APP_APY_TOKEN;
  console.log("Apytoken -- ", apyToken);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [conversion, setConversion] = useState("");
  const [hide, setHide] = useState(true);

  const handleAmount = useCallback((event) => {
    event.preventDefault();
    setAmount(event.target.value);
    setHide(true);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const payload = {
        source: "inr",
        target: currency,
      };

      const headers = {
        headers: {
          "Content-Type": "application/json",
          "apy-token": apyToken,
        },
      };

      const url = "https://api.apyhub.com/data/convert/currency";

      axios
        .post(url, payload, headers)
        .then((response) => {
          console.log(response);
          if (response && response.data) {
            const con = parseFloat(response.data.data);
            setConversion(amount * con);
            setHide(false);
          }
        })
        .catch((err) => {
          console.log("error -- ", err);
          alert("Error while doing coversion");
          setHide(true);
        });
    },
    [amount, currency]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "300px", margin: "20px auto" }}
      >
        {/* Number Input */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Amount in INR:
            <input
              type="number"
              value={amount}
              onChange={handleAmount}
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        {/* Currency Dropdown */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Currency:
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
              style={{ marginLeft: "10px" }}
            >
              <option value="">--Select--</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="aed">AED</option>
              <option value="sgd">SGD</option>
              <option value="jpy">JPY</option>
            </select>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <br />
      <h4 hidden={hide}>
        {" "}
        The data in INR - {amount} and currency - {currency} and conversion -{" "}
        {conversion}{" "}
      </h4>
    </>
  );
}

export default CurrencyConverter;
