import big_image from "../img/home2-img.png";
import Image from "next/image";
export default function Slider2() {
  return (
    <div className="content__slider">
      <div className="content__slider_image">
        <Image src={big_image}></Image>
      </div>
      <div className="content__slider_main_block">
        <div className="content__slider_main_text_1">
          <p className="slider__first_text">#2 top Best duo</p>
        </div>
        <div className="content__slider_main_text_2">
          <p className="slider__second_text">BRING BACK</p>
          <p className="slider__second_text">MY COTTON</p>
          <p className="slider__second_text">CANDY</p>
        </div>
        <div className="content__slider_main_text_3">
          <p className="slider__thrird_text">
            Voluptate laboris sint id exercitation aliqua velit duis Lorem
            labore fugiat. Aute non qui adipisicing aliqua irure adipisicing.
            Aute enim excepteur ullamco amet ea fugiat.
          </p>
        </div>
        <div className="content__slider_main_buttons">
          <a className="slider__button_first">
            <p className="slider__button_first_in">Buy now</p>
          </a>
          <a className="slider__button_second">
            <p className="slider__button_second_in">MORE &nbsp; &rarr;</p>
          </a>
        </div>
      </div>
    </div>
  );
}
