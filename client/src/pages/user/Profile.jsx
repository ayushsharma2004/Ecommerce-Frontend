import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faMinus, faCartShopping, faShoppingCart, faArrowLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import p1 from '../../images/polo3.jpg';
import profile from '../../images/profile1e.jpg';
import '../../styles/profile.css';

const Profile = () => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate()

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setQuantity(value);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const toDashboard = () => {
        navigate('/dashboard/user');
    };

    return (
        <Layout title={'Your Profile'}>
            <div className="profile_container">
                <div className="profile_details">
                    <div className="profile_photo">
                        <img src={profile} alt="" />
                        <button className="photo_btn">Change Photo</button>
                    </div>
                    <div className="profile_info">
                        <div className="profile_name">
                            <h3>Ayush Sharma</h3>
                        </div>
                        <div className="profile_address">
                            <h4>922, Laxman Wadi, Siddharth Nagar, Korba Mithagad, Wadala East, Mumbai 400037</h4>
                        </div>
                    </div>
                    <div className="profile_btn">
                        <button className="dashboard_btn" onClick={toDashboard}>Dashboard</button>
                        <button className="logout_btn">Logout</button>
                    </div>
                </div>
                <div className="profile_order">
                    <div className="order_header">
                        <h3>Previous Orders</h3>
                        <h4 className="price_tag">Price</h4>
                    </div>
                    <div className="order_cards">
                        <div className="order_card">
                            <div className="order_img">
                                <img src={p1} alt="" />
                            </div>
                            <div className="order_details">
                                <div className="order_name">
                                    <h3>Blue Indigo Polo T-shirt</h3>
                                </div>
                                <div className="order_avail">
                                    <h5>In stock</h5>
                                </div>
                                <div className="order_rate">
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                </div>
                                <div className="order_size">
                                    <h4>Size: <span className="size-highlight">XL</span></h4>
                                </div>
                                <div className="order_color">
                                    <h4>Color: <span className="category-highlight">Black</span></h4>
                                </div>
                                <div className="order_buys">
                                    <div className="order_buy">
                                        <button className="buy_again">Buy again</button>
                                        <div className="vertical-divider"></div>
                                        <Link className="remove_text">
                                            View More
                                        </Link>
                                        <div className="vertical-divider"></div>
                                        <Link className="see_more">
                                            See more like this
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="order_price">
                                <h4>₹799.00</h4>
                            </div>
                        </div>
                        <div className="order_card">
                            <div className="order_img">
                                <img src={p1} alt="" />
                            </div>
                            <div className="order_details">
                                <div className="order_name">
                                    <h3>Blue Indigo Polo T-shirt</h3>
                                </div>
                                <div className="order_avail">
                                    <h5>In stock</h5>
                                </div>
                                <div className="order_rate">
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                </div>
                                <div className="order_size">
                                    <h4>Size: <span className="size-highlight">XL</span></h4>
                                </div>
                                <div className="order_color">
                                    <h4>Color: <span className="category-highlight">Black</span></h4>
                                </div>
                                <div className="order_buys">
                                    <div className="order_buy">
                                        <button className="buy_again">Buy again</button>
                                        <div className="vertical-divider"></div>
                                        <Link className="remove_text">
                                            View More
                                        </Link>
                                        <div className="vertical-divider"></div>
                                        <Link className="see_more">
                                            See more like this
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="order_price">
                                <h4>₹799.00</h4>
                            </div>
                        </div>
                        <div className="order_card">
                            <div className="order_img">
                                <img src={p1} alt="" />
                            </div>
                            <div className="order_details">
                                <div className="order_name">
                                    <h3>Blue Indigo Polo T-shirt</h3>
                                </div>
                                <div className="order_avail">
                                    <h5>In stock</h5>
                                </div>
                                <div className="order_rate">
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                </div>
                                <div className="order_size">
                                    <h4>Size: <span className="size-highlight">XL</span></h4>
                                </div>
                                <div className="order_color">
                                    <h4>Color: <span className="category-highlight">Black</span></h4>
                                </div>
                                <div className="order_buys">
                                    <div className="order_buy">
                                        <button className="buy_again">Buy again</button>
                                        <div className="vertical-divider"></div>
                                        <Link className="remove_text">
                                            View More
                                        </Link>
                                        <div className="vertical-divider"></div>
                                        <Link className="see_more">
                                            See more like this
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="order_price">
                                <h4>₹799.00</h4>
                            </div>
                        </div>
                        <div className="order_card">
                            <div className="order_img">
                                <img src={p1} alt="" />
                            </div>
                            <div className="order_details">
                                <div className="order_name">
                                    <h3>Blue Indigo Polo T-shirt</h3>
                                </div>
                                <div className="order_avail">
                                    <h5>In stock</h5>
                                </div>
                                <div className="order_rate">
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                </div>
                                <div className="order_size">
                                    <h4>Size: <span className="size-highlight">XL</span></h4>
                                </div>
                                <div className="order_color">
                                    <h4>Color: <span className="category-highlight">Black</span></h4>
                                </div>
                                <div className="order_buys">
                                    <div className="order_buy">
                                        <button className="buy_again">Buy again</button>
                                        <div className="vertical-divider"></div>
                                        <Link className="remove_text">
                                            View More
                                        </Link>
                                        <div className="vertical-divider"></div>
                                        <Link className="see_more">
                                            See more like this
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="order_price">
                                <h4>₹799.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;