import React, { useState } from "react";
import Blogsdb from "./../data/Blogpage"


const Freetheme = () => {
  const [data, setData] = useState(Blogsdb);

  return (
    <div className="container sub5">
      <div className="my-5 row">
        <div className="blog col-12">
          <p>
          Puzzle games are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. Puzzles come in various forms, with unique content from traditional paper puzzles to sophisticated digital games. The puzzle guide will walk you through the basic principles of playing different types of puzzle games, offering tips and strategies to enhance your experience.
          </p>
        </div>
        <div className="sub3 my-3 col-12">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/Puzzle1.jpeg" className="d-block w-100" alt="Jobs Website" />
                <div className="carousel-caption d-none d-md-block">
                  <h4 className="text">Puzzle Game</h4>
                  <p className="text">This Website is Gaming Website</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/Freezenova1.jpeg" className="d-block w-100" alt="News Website" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text">Freezenova Game</h5>
                  <p className="text">This Website is Gaming Website</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/Freezenova3.jpeg" className="d-block w-100" alt="Pure Coding Website" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text">Freezenova Game</h5>
                  <p className="text">This Website is Jigsaw planet</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {data.map((blog) => (
          <div className="col-lg-3 col-md-6 col-sm-12 my-4 mx-4" >
            <div className="product-grid">
              <div className="product-image my-3">
                <h3>{blog.title}</h3>
                <div >
                  <img style={{ height: "260px", width:"300px" }} className="pic-1" src={blog.image} alt={blog.title} />
                </div>
                <ul className="social">
                  <li>
                    <div data-tip="Quick View">
                      <i className="fa fa-search" />
                    </div>
                  </li>
                  <li>
                    <div  data-tip="More Details">
                      <i className="fa fa-shopping-cart" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <p className="card-text">{blog.category.slice(0, 20)}...</p>
                <div className="more-details" >
                  More Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freetheme;