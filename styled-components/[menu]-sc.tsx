import styled from 'styled-components';

export const MarvelLogoSmall = styled.div`
  font-family: MarvelRegular;
  font-size: 50px;
  width: 113px;
  background-color: red;
  p{
    position: relative;
    top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0px;
  }
`;

export const MenuLink = styled.div`
  a{
    text-decoration: none;
    color: white;
  }
  p{
    cursor: pointer;
  }
`;

export const NavLeftArrow = styled.div`
  position: fixed;
  top: 50vh;
  left: 20px;
  cursor: pointer;
  span{
    color: red;
    font-size: 50px
  }
`;

export const NavRightArrow = styled.div`
  position: fixed;
  top: 50vh;
  right: 20px;
  cursor: pointer;
  span{
    color: red;
    font-size: 50px;
  }
`;