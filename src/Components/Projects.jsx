import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Projects() {
  const projectsData = [
    {
      image: "/assets/img/projects/BookMyshow.jpeg",
      title: "BookMyShow Clone",
      description:
        "A clone of BookMyshow web, Developed using HTML, CSS, JavaScript, React, Redux.",
      Hoisted_Link: "https://calm-treacle-de0aa2.netlify.app/",
    },
    {
      image: "/assets/img/projects/KBC.jpg",
      title: "Quiz application",
      description: "A quiz application it fully feels like a KBC quiz game",
      Hoisted_Link: "https://kbc-game-app.netlify.app/",
    },
    {
      image: "/assets/img/projects/Ferry.png",
      title: "Ferry products ",
      description:
        "It is a simple e-commerce website, addToCart, total amount traking, Buy and more features...",
      Hoisted_Link: "https://singular-sprite-dfccc3.netlify.app/",
    },
    {
      image: "/assets/img/projects/Quora.jpg",
      title: "Quora Clone",
      description:
        "This project performs adding questions, answering questions, and Login page Authentication",
      Hoisted_Link: "https://quora-clone-1.netlify.app/",
    },
    {
      image: "/assets/img/projects/Movix.jpg",
      title: "Movix",
      description:
        "It is a Responsive website, Searching, Sorting, Lazy loading, Genres, Trailer and more features implemented",
      Hoisted_Link: "https://blissful-stonebraker-032143.netlify.app",
    },
    {
      image: "/assets/img/projects/Car.jpg",
      title: "Car-racing Game",
      description:
        "A simple car-racing game developed using JavaScript, Html and Css.",
      Hoisted_Link: "https://the-car-race-game.netlify.app/",
    },
  ];
  return (
    <section className="project__section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">most recent work</span>
      <div className="project__container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projectsData.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="swiper-slide">
                  <div className="project__content grid">
                    <img src={item.image} alt="" className="project__img" />
                    <div className="project__data">
                      <h3 className="project__title">{item.title}</h3>
                      <p className="project__decription">{item.description}</p>
                      <a
                        href={item.Hoisted_Link}
                        target="_"
                        className="button button--flex button--small project__button"
                      >
                        check it out
                        <i className="uil uil-arrow-right button__icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
