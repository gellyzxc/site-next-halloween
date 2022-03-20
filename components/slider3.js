import big_image from "../img/home3-img.png";
import Image from "next/image";
export default function Slider3() {
  return (
    <div className="content__slider">
      <div className="content__slider_image">
        <Image src={big_image}></Image>
      </div>
      <div className="content__slider_main_block">
        <div className="content__slider_main_text_1">
          <p className="slider__first_text">#3 Top Scariest Ghost</p>
        </div>
        <div className="content__slider_main_text_2">
          <p className="slider__second_text">RESPAWN</p>
          <p className="slider__second_text">THE SPOOKY</p>
          <p className="slider__second_text">SKULL</p>
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
            <p className="slider__button_second_in">NIGGER &nbsp; &rarr;</p>
          </a>
        </div>
      </div>
    </div>
  );
}
