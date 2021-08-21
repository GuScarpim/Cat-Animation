import styled from "styled-components";

export const Container = styled.div`
  body {
    background-color: #3d8aff;
    padding: 1.5rem;
    line-height: 1.25;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    color: #000;
    letter-spacing: 0.25rem;
    font-weight: 800;

    span {
      display: block;
      overflow: hidden;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    position: relative;
    transition: all 0.25s ease-out;

    &::before {
      content: "";
      position: absolute;
      bottom: -0.25rem;
      width: 0;
      height: 5px;
      background-color: #000;
      transition: all 0.25s ease-out;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);

      &::before {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 414px) {
    h1 {
      font-size: 3.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;

    h1 {
      font-size: 5rem;
      order: 1;
    }

    ul {
      display: block;
      font-size: 2rem;
      padding-left: 1rem;
      order: 2;

      li {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 7rem;
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  font-family: "Source Sans Pro", sans-serif;
  color: #000;
  letter-spacing: 0.1rem;
  font-size: 0.85rem;
  font-weight: 600;
  overflow: hidden;
  display: flex;
  padding-left: 0;
  margin-top: 0;

  @media screen and (min-width: 414px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;

    display: block;
    font-size: 2rem;
    padding-left: 1rem;
    order: 2;
  }
`;

export const Li = styled.li`
    padding-bottom: 0.25rem;
    margin-right: 1.5rem;

  &::before {
    content: "\200B";
  }

  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;
