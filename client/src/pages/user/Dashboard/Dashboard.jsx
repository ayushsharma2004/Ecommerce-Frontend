import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout.jsx";
import { useSearch } from "../../../context/search.js";
import ReactSlider from "react-slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import p1 from '../../../images/polo3.jpg'
import '../../../styles/dashboard.css'
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../../../components/DashboardSidebar.jsx";

const Dashboard = () => {
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [priceRange, setPriceRange] = useState([0, 1799]);
    const navigate = useNavigate();
    // const [values, setValues] = useSearch();
    // console.log(values);

    const handlePriceChange = (newValue) => {
        setPriceRange(newValue);
    };

    const toggleOption = (dropdownId) => {
        setOpenDropdowns((prevState) => ({
            ...prevState,
            [dropdownId]: !prevState[dropdownId]
        }));
    }

    return (
        <Layout title={"Search results"}>
            <div className="dashboard_container">
                <DashboardSidebar />
                <div className="dashboard_content">
                    <div className="edit_profile">
                        <div className="edit_profile_nav">
                            <h3>Your Profile</h3>
                        </div>
                        <form className="pro_form" action="">
                            <div className="display_name">
                                <div className="inpbar">
                                    <h4>First Name</h4>
                                    <input
                                        id='fname'
                                        type="text"
                                        placeholder='' />
                                </div>
                                <div className="inpbar">
                                    <h4>Last Name</h4>
                                    <input
                                        id='lname'
                                        type="text"
                                        placeholder='' />
                                </div>
                            </div>
                            <div className="address">
                                <div className="addressbar">
                                    <h4>Address</h4>
                                    <textarea
                                        id='address'
                                        type="text"
                                        placeholder='' />
                                </div>
                            </div>
                            <div className="phone_number">
                                <div className="inpbar">
                                    <h4>Phone Number</h4>
                                    <input
                                        id='phone'
                                        type="tel"
                                        pattern='[0-9]{10}'
                                        placeholder='' />
                                </div>
                                <div className="otpbar">
                                    <h4>OTP</h4>
                                    <input
                                        id='otp'
                                        type="text"
                                        pattern='[0-9]{6}'
                                        placeholder='' />
                                </div>
                                <div id='recaptcha'></div>
                            </div>
                            <div className="update_btn_container">
                                <button className="update_btn">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;