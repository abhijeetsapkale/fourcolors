import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

export default function OtpComponent() {
  
  const [OTP, setOTP] = useState("");

  return(
    <>
      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} inputClassName="otp-box" />
        
      
    </>
  )

}