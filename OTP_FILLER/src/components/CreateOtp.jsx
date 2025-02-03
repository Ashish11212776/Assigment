import React, { useState, useEffect } from "react";

const CreateOtp = () => {
  const [otp, setOtp] = useState(""); 
  const [otpData, setOtpData] = useState(""); 
  const [timeLeft, setTimeLeft] = useState(0); 
  function generateOTP() {
    const otpVal = Math.floor(1000 + Math.random() * 9000); 
    setOtp(otpVal);
    setTimeLeft(30);
  }

  const handleChange = (e) => {
    setOtpData(e.target.value);
  };

  const handleSubmit = () => {
    if (timeLeft === 0) {
      alert("⏳ OTP Expired! Generate a new OTP.");
    } else if (otpData === otp.toString()) {
      alert("✅ Success: OTP Verified!");
    } else {
      alert("❌ Error: Enter a valid OTP.");
    }
  };

 
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer); 
    } else {
      setOtp("");
    }
  }, [timeLeft]);

  return (
    <div className="otpgenerator">
      <button onClick={generateOTP}>Generate OTP</button>
      <p>Your OTP: <strong>{otp || "Expired"}</strong></p>
      {otp && <p>⏳ Time left: {timeLeft} sec</p>}
      <input
        type="text"
        id="inputbox"
        placeholder="Enter your OTP"
        value={otpData}
        onChange={handleChange}
        disabled={timeLeft === 0}
      />
      <button onClick={handleSubmit} disabled={timeLeft === 0}>Verify</button>
    </div>
  );
};

export default CreateOtp;
