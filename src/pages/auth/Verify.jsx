import React, { useState } from 'react'
import { Link, useNavigate} from "react-router-dom";
import "./auth.css"
import { useUserData } from '../../Context/UserContext';
const Verify = () => {

    const [otp, setOtp] = useState("");
    const { btnLoading, verifyOtp } = useUserData();
    // const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        await verifyOtp(Number(otp), navigate);
      };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Verify Account</h2>
        <form onSubmit={submitHandler} >
          <label htmlFor="otp">Otp</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          {/* <ReCAPTCHA
            sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          , */}
          {/* {show && ( */}
            <button  type="submit" className="common-btn">
                Verify
              {btnLoading ? "Please Wait..." : "Verify"}
            </button>
          {/* )} */}
        </form>
        <p>
          Go to <Link to="/login">Login</Link> page
        </p>
      </div>
    </div>
  )
}

export default Verify
