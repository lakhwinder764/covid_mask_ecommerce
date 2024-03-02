import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "../components/Appbar";
import { Carousel } from "react-responsive-carousel";
import Card from "../components/Card";
import Image from "next/image";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Box } from "@mui/material";
import List from "../components/List";
const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [value, setvalue] = useState("male");
  const [value1, setvalue1] = useState("normal");
  console.log("hello");
  console.log(products);
  const onChange = (e) => {
    setvalue(e.target.value);
  };
  const onChange1 = (e) => {
    setvalue1(e.target.value);
  };
  console.log(value1);
  return (
    <>
      <Navbar value="true" position="relative" />
      <Box>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              src="/c1.jpg"
              className={styles.slider_container}
              alt="image1"
            />
          </div>
          <div>
            <img
              src="/c4.jpg"
              className={styles.slider_container}
              alt="image2"
            />
          </div>
          <div>
            <img
              src="/c3.jpg"
              className={styles.slider_container}
              alt="image3"
            />
          </div>
        </Carousel>
      </Box>
      <Box display="flex" flexDirection="row" mb={4}>
        <Box sx={{ border: " 1px solid #D3D3D3" }} my={2}>
          <List onChange={onChange} onChange1={onChange1} />
        </Box>
        <Box
          display="flex"
          mt={2}
          mb={4}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ border: " 1px solid #D3D3D3" }}
          flexGrow={1}
        >
          {products
            .filter((product) => product.category === value)
            .filter((product) => product.type === value1)
            .map((product) => {
              return (
                <Box my={1} mx={1} className="MuiCard-root" flexGrow={1}>
                  <Card
                    key={product.id}
                    name={product.name}
                    image={product.image}
                    description={product.description}
                    id={product.id}
                    price={product.price}
                    product={true}
                    image1={product.image1}
                    image2={product.image2}
                    rating={product.rating}
                    views={product.views}
                  />
                </Box>
              );
            })}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
