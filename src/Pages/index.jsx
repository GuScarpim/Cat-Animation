import { useEffect } from "react";

import { gsap, Power3 } from "gsap/all";

import { Container, Ul, Li } from "./styles";

export default function CatAnimation() {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.from("h1 span>span", {
      duration: 0.75,
      y: 150,
      ease: Power3.out,
      stagger: 1,
    }).from(
      "li",
      {
        duration: 0.75,
        x: 300,
        autoAlpha: 0,
        ease: "elastic.out(1, 1)",
        stagger: {
          each: 0.75,
          amount: 0.5,
        },
      },
      "+=0.25"
    );

  }, []);
  return (
    <Container>
      <Ul>
        <Li>
          <a href="#">Animation Cat</a>
        </Li>
        <Li>
          <a href="#">Some</a>
        </Li>
        <Li>
          <a href="#">Menu</a>
        </Li>
        <Li>
          <a href="#">Options</a>
        </Li>
      </Ul>
      <h1>
        <span>
          <span>Gustavo</span>
        </span>
        <span>
          <span>Scarpim</span>
        </span>
      </h1>
    </Container>
  );
}
