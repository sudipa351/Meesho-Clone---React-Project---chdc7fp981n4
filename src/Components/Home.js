import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";
import NavBar2 from './NavBar2'

function Home() {
  const [products, setProducts] = useState("");
  
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
      setProducts(data);
    };
    fetchdata();
  }, []);

  

  return (
    <Container>
      <Navbar />
      <NavBar2/>
      <Banner>
        <img src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0b8e/6422/560a/0f5c/680f/917b/371c/9c0e/907a/803e/803e.jpeg" alt="" />
        <img src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0b8e/6422/560a/0f5c/680f/917b/371c/9c0e/907a/803e/803e.jpeg" alt="" />
      </Banner>

      <Main>
        {products &&
          products?.data.map((product) => (
            <Card
              id={product._id}
              image={product.image}
              price={product.price}
              rating={product.rating.rate}
              title={product.title}
            />
          ))}
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
export default Home;
