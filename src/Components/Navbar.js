import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });

    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Container>
      <Inner>
        <Logo onClick={() => navigate("/")}>
          <img  src='https://etimg.etb2bimg.com/photo/87203105.cms' alt="" />
        </Logo>
        <SearchBar>
          <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" />
          <SearchIcon onClick={() => navigate("/addproduct")}>
            <img src="./searchIcon.png" alt="" />
          </SearchIcon>
        </SearchBar>
        <RightContainer>
          <NavButton
            onClick={user ? () => signOut() : () => navigate("/login")}
          >
            <p>Profile,</p>
            <p>{user ? user?.fullName : "Guest"}</p>
          </NavButton>
          <NavButton onClick={() => navigate("/orders")}>
            <p>Return</p>
            <p>& Orders</p>
          </NavButton>
          <BasketButton onClick={() => navigate("/checkout")}>
            <img src="./basket-icon.png" alt="" />
            <p>{basket?.length}</p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchbar>
        <input type="text" placeholder="Search..." />
        <SearchIcon onClick={() => navigate("/addproduct")}>
          <img src="./searchIcon.png" alt="" />
        </SearchIcon>
      </MobileSearchbar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index:2000;
  position:fixed;

  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 72px;
    margin-top: 10px;
  }
`;
const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 86%;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileSearchbar = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  background-color: rgb(244, 51, 151);
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: black;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 16px;
    }

    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  
  img {
    width: 30px;
    margin-right: 10px;
    color: blue;
  }

  p {
    color: black;
    font-weight: 500;
  }
`;
export default Navbar;
