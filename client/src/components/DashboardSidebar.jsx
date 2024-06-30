import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import p1 from '../images/polo3.jpg'
import '../styles/dashboardSidebar.css'
import { useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [priceRange, setPriceRange] = useState([0, 1799]);
    const navigate = useNavigate();
    // const [values, setValues] = useSearch();
    // console.log(values);

    const toEditProfile = () => {
        console.log('toEditProfile');
        navigate('/dashboard/user');
    }

    const toCurrentOrders = () => {
        console.log('toCurrentOrders');
        navigate('/dashboard/orders');
    }

    const toPreviousOrders = () => {
        console.log('toCurrentOrders');
        navigate('/dashboard/previous_orders');
    }

    const toCartItems = () => {
        console.log('toCurrentOrders');
        navigate('/dashboard/cart_items');
    }

    const toManageProducts = () => {
        console.log('toCurrentOrders');
        navigate('/dashboard/manage_products');
    }

    const toSalesSummary = () => {
        console.log('toCurrentOrders');
        navigate('/dashboard/sales_summary');
    }

    return (
        <>
            <div className="dashboard_sidebar">
                <div className="sidebar_content">
                    <div className="sidebar_btn">
                        <button className="sidebar_text" onClick={() => toEditProfile()}>
                            <h4>Edit Profile</h4>
                        </button>
                    </div>
                    <div className="sidebar_btn">
                        <button className="sidebar_text" onClick={() => toCurrentOrders()}>
                            <h4>Orders</h4>
                        </button>
                    </div>
                    <div className="sidebar_btn">
                        <button className="sidebar_text" onClick={() => toPreviousOrders()}>
                            <h4>Previous Orders</h4>
                        </button>
                    </div>
                    <div className="sidebar_btn">
                        <button className="sidebar_text" onClick={() => toCartItems()}>
                            <h4>Cart</h4>
                        </button>
                    </div>
                    <div className="sidebar_btn">
                        <button className="sidebar_text" onClick={() => toEditProfile()}>
                            <h4>Wishlist</h4>
                        </button>
                    </div>
                    <div className="sidebar_btn">
                        <button className="sidebar_text" onClick={() => toManageProducts()}>
                            <h4>Manage Products</h4>
                        </button>
                    </div>
                    <div className="sidebar_btn">
                        <button className="sidebar_text" onClick={() => toSalesSummary()}>
                            <h4>Sales Summary</h4>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardSidebar;