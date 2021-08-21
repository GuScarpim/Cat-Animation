import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Content = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Href = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  display: flex;
  align-items: center;
  transition: all .5s;
  
  svg {
    transform: scale(1.2);
    margin-right: 5px;
  }

  &:hover {
    color: #46b2d2;
  }
`

export const Strong = styled.strong`

`
