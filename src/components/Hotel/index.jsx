import { Image, Rate, Divider } from "antd";
import React from "react";
import Hotel1 from "../../assets/imgs/hotel 1.jpg";
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
          <Rate className="rate" />
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
            <li>
              <span>&#x3e;</span> Close to the beach
            </li>
            <li>
              <span>&#x3e;</span> Breakfast included
            </li>
            <li>
              <span>&#x3e;</span> Free airport shuttle
            </li>
            <li>
              <span>&#x3e;</span> Free wifi in all rooms
            </li>
            <li>
              <span>&#x3e;</span> Air conditioning and heating
            </li>
            <li>
              <span>&#x3e;</span> Pets allowed
            </li>
            <li>
              <span>&#x3e;</span> We speak all languages
            </li>
            <li>
              <span>&#x3e;</span> Perfect for families
            </li>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem voluptates totam
            sequi, facilis expedita.
          </blockquote>
          <blockquote className="quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem voluptates totam
            sequi, facilis expedita.
          </blockquote>
          <a href="#" className="show">
            show all &#x2192;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
