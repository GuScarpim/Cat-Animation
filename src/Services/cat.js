import { gsap, SlowMo } from "gsap/all";

export default function CatEffect() {
  const tl = gsap.timeline();

  // Lines
  tl.from("#firstLine, #secondLine", {
    duration: 1,
    scale: 0,
  })
    .from("#branchFirstFlower, #branchSecondFlower", {
      duration: 0.5,
      opacity: 0,
    })
    .from("#firstFlower, #secondFlower", {
      // Flowers
      duration: 0.5,
      opacity: 0,
    })
    .from("#branchThirdFlower, #branchFourthFlower", {
      // Flowers
      duration: 0.5,
      opacity: 0,
    })
    .from("#thirdFlower, #fourthFlower", {
      // Flowers
      duration: 0.5,
      opacity: 0,
    })
    .from("#branchQuintFlower, #branchSixFlower", {
      // Flowers
      duration: 0.5,
      opacity: 0,
    })
    .from("#quintFlower, #sixFlower", {
      // Flowers
      duration: 0.5,
      opacity: 0,
    })

  gsap.fromTo(
    "#branchFirstFlower, #branchThirdFlower",
    {
      rotate: 0,
      ease: SlowMo.ease.config(0.2, 0.2, false),
      duration: 3,
    },
    {
      ease: SlowMo.ease.config(0.2, 0.2, false),
      rotate: -1.4,
      repeat: -1,
      yoyo: true,
      duration: 3,
    },
    1
  );

  gsap.fromTo(
    "#branchSecondFlower, #branchFourthFlower",
    {
      rotate: 0,
      ease: SlowMo.ease.config(0.2, 0.2, false),
      duration: 3,
    },
    {
      rotate: -4,
      ease: SlowMo.ease.config(0.2, 0.2, false),
      repeat: -1,
      yoyo: true,
      duration: 3,
    },
    1
  );

  gsap.fromTo(
    "#firstFlower, #thirdFlower",
    {
      rotate: 0,
      ease: SlowMo.ease.config(0.2, 0.2, false),
      duration: 3,
    },
    {
      ease: SlowMo.ease.config(0.2, 0.2, false),
      rotate: -2,
      repeat: -1,
      yoyo: true,
      duration: 3,
    },
    1
  );

  gsap.fromTo(
    "#secondFlower, #fourthFlower",
    {
      rotate: .6,
      duration: 3,
    },
    {
      rotate: -5,
      repeat: -1,
      yoyo: true,
      duration: 3,
    },
    1
  );

  gsap.fromTo(
    "#branchQuintFlower, #branchSixFlower",
    {
      rotate: 0,
      ease: SlowMo.ease.config(0.2, 0.2, false),
      duration: 3,
      y: -318,
      x: -205,
    },
    {
      ease: SlowMo.ease.config(0.2, 0.2, false),
      y: -320,
      x: -208,
      rotate: 2,
      repeat: -1,
      yoyo: true,
      duration: 3,
    },
    1
  );

  gsap.fromTo(
    "#quintFlower, #sixFlower",
    {
      rotate: 0,
      ease: SlowMo.ease.config(0.2, 0.2, false),
      duration: 3,
    },
    {
      ease: SlowMo.ease.config(0.2, 0.2, false),
      rotate: 3,
      repeat: -1,
      yoyo: true,
      duration: 3,
    },
    1
  );


  // Cat
  gsap.from("#headCat, #bodyCat, #armCat, #catPaw, #nosePaw, #tailCat, #eyeRightCat, #eyeLeftCat, #cheekRightCat, #cheekLeftCat", {
    duration: 3,
    opacity: 0,
  });

  gsap.fromTo(
    "#tailCat",
    {
      y: "-320px",
      rotate: 0,
      x: "-210px",
      ease: SlowMo.ease.config(0.2, 0.2, false),
      duration: 1,
    },
    {
      ease: SlowMo.ease.config(0.2, 0.2, false),
      y: "-320px",
      rotate: -12,
      x: "-218px",
      repeat: -1,
      yoyo: true,
      duration: 1,
    },
    1
  );

  gsap.fromTo(
    "#eyeRightCat, #eyeLeftCat",
    {
      x: "0px",
      ease: SlowMo.ease.config(0.2, 0.2, false),
      duration: 3,
    },
    {
      duration: 3,
      ease: SlowMo.ease.config(0.2, 0.2, false),
      x: "20px",
      repeat: -1,
      yoyo: true,
    },
    3
  );

  gsap.fromTo(
    "#cheekRightCat, #cheekLeftCat",
    3,
    {
      dutation: 3,
      fill: "#63deff",
    },
    {
      dutation: 3,
      fill: "#ff6584",
      repeat: -1,
      yoyo: true,
    },
    3
  );
}

