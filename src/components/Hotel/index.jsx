import { Image, Rate, Divider } from "antd";
import React from "react";
import Hotel1 from "../../assets/imgs/hotel 1.jpg";
import User from "../../assets/imgs/user.jpg";
import Hotel2 from "../../assets/imgs/hotel 2.jpg";
import Hotel3 from "../../assets/imgs/hotel 3.jpg";
import User1 from "../../assets/imgs/dahiana-waszaj-Xbe20Z_DlDs-unsplash.jpg";
import User2 from "../../assets/imgs/kirill-balobanov-2rIs8OH5ng0-unsplash.jpg";
import User3 from "../../assets/imgs/roy-javier-mAd1w3sUYHA-unsplash.jpg";
import User4 from "../../assets/imgs/sam-moghadam-khamseh-fFYgW-zVD2E-unsplash.jpg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
const Hotel = () => {
  return (
    <div className="hotel-view">
      <div className="gallery">
        <div className="gallery__img">
          <Image className="gallery__img-1" src={Hotel1} />
        </div>
        <div className="gallery__img">
          <Image className="gallery__img-2" src={Hotel2} />
        </div>
        <div className="gallery__img">
          <Image className="gallery__img-3" src={Hotel3} />
        </div>
      </div>

      <div className="hotel__heading">
        <div className="flex">
          <div className="hotel__heading-title">hotel las palmas</div>
          <Rate defaultValue={5} className="rate" />
        </div>
        <div className="flex">
          <Location />
          <a href="" className="location">
            San Francisco, California
          </a>
          <div className="votes">
            <span>8.6</span> <br />
            <span>429 votes</span>
          </div>
        </div>
      </div>
      <div className="content__wrap">
        <div className="content__wrap-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda mollitia
          voluptates nemo aut, nihil modi obcaecati magni sint explicabo. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci assumenda mollitia voluptates nemo aut, nihil modi
          obcaecati magni sint explicabo.
          <Divider />
          <ul className="lists">
            <li className="lists__item">Close to the beach</li>
            <li className="lists__item">Breakfast included</li>
            <li className="lists__item">Free airport shuttle</li>
            <li className="lists__item">Free wifi in all rooms</li>
            <li className="lists__item">Air conditioning and heating</li>
            <li className="lists__item">Pets allowed</li>
            <li className="lists__item">We speak all languages</li>
            <li className="lists__item">Perfect for families</li>
          </ul>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Lucy and 3 other frieds recommend this hotel</p>
            <div className="imgwrapper">
              <Image width={70} height={70} src={User1} alt="" className="user-img user-img-1" />
              <Image width={70} height={70} src={User2} alt="" className="user-img user-img-2" />
              <Image width={70} height={70} src={User3} alt="" className="user-img user-img-3" />
              <Image width={70} height={70} src={User4} alt="" className="user-img user-img-4" />
            </div>
          </div>
        </div>
        <div className="content__wrap-2">
          <blockquote className="quote">
            <div className="quote__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem voluptates
              totam sequi, facilis expedita.
            </div>
            <div className="flex" style={{ marginTop: "1rem", justifyContent: "space-between" }}>
              <div className="flex">
                <Image className="user-img" width={60} height={60} src={User3} />
                <div className="quote__user">
                  <div className="quote__user-name">Scott</div>
                  <div className="quote__user-date">June 25th 2022</div>
                </div>
              </div>
              <span className="quote__user-rating">9.5</span>
            </div>
          </blockquote>
          <blockquote className="quote">
            <div className="quote__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem voluptates
              totam sequi, facilis expedita.
            </div>
            <div className="flex" style={{ marginTop: "1rem", justifyContent: "space-between" }}>
              <div className="flex">
                <Image className="user-img" width={60} height={60} src={User} />
                <div className="quote__user">
                  <div className="quote__user-name">Maryam</div>
                  <div className="quote__user-date">June 21th 2022</div>
                </div>
              </div>
              <span className="quote__user-rating">9.3</span>
            </div>
          </blockquote>
          <a href="#" className="show">
            show all <span> &rarr;</span>
          </a>
        </div>
      </div>
      <div className="btn">
        <div className="btn__title">good news! we have 4 free rooms for your selected dates!</div>
        <button className="btn__button">only 4 rooms left!</button>
      </div>
    </div>
  );
};

export default Hotel;
