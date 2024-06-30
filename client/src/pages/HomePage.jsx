import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout.jsx";
import toast from "react-hot-toast";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import banner1 from '../images/banner4hd.jpeg'
import p1 from '../images/tshirt2.png'
import p2 from '../images/tshirt3.png'
import '../styles/home.css'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [list, setList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [products, setProducts] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getAllProductPaginate = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get_product?pagesize=10&page_no=1`
      );
      console.log(data);
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong while getting category');
    }
  }

  const getBestSeller = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get_bestseller`
      );
      console.log(data);
      if (data) {
        setBestSeller(data);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong while getting category');
    }
  }

  const getTopRated = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get_toprated`
      );
      console.log(data);
      if (data) {
        setTopRated(data);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong while getting category');
    }
  }

  const toProductDetails = async (pid) => {
    navigate(`/product/${pid}`)
  }

  useEffect(() => {
    // getAllCategories();
    getAllProductPaginate();
  }, []);

  return (
    <Layout title={"ALl Products - Best offers "}>
      <div className="home">
        <img className="banner" src={banner1} alt="" />
        <div className="product_list">
          <h2>BEST SELLERS</h2>
          <div className="cards">
            {list?.map((l) => (
              <>
                <div className="card">
                  <div className="crdimg">
                    <img src={p1} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{'Blue Indigo Polo T-Shirt'}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{'799.00'}</p>
                  </div>
                </div>
              </>
            ))}
            {bestSeller?.map((bs) => (
              <>
                <div className="card">
                  <div className="crdimg">
                    <img src={bs.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{bs.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{bs.price}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="product_list">
          <h2>Top Rated</h2>
          <div className="cards">
            {list?.map((l) => (
              <>
                <div className="card">
                  <div className="crdimg">
                    <img src={p2} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{'Blue Indigo Polo T-Shirt'}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{'799.00'}</p>
                  </div>
                </div>
              </>
            ))}
            {topRated?.map((tr) => (
              <>
                <div className="card">
                  <div className="crdimg">
                    <img src={tr.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{tr.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{tr.price}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="product_list">
          <h2>All Products</h2>
          <div className="cards">
            {products?.map((p) => (
              <>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
                <div className="card" key={p.pid} onClick={() => toProductDetails(p.pid)}>
                  <div className="crdimg">
                    <img src={p.imgurl} alt="" />
                  </div>
                  <div className="crd_content">
                    <h3 className="crd_name">{p.name}</h3>
                    <div className="crd_rating">
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                      <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                    <p className="crd_price">₹{p.price + '.00'}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;