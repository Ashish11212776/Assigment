import React from 'react'
import { useState } from 'react'


const CreateOtp = () => {
    const [otp,setotp]=useState(null);

   function generateOTP() {
  const otpVal = Math.floor(   
}

console.log("Generated OTP:", generateOTP());

  return (
    <div>Otp:{otp}</div>
  )
}

export default CreateOtp