import big_image from "../img/home1-img.png"
import Image from "next/image";
import Link from 'next/link'
export default function Slider1() {
    return(
        <div className="content__slider">
            <div className="content__slider_image">
                <Image src={big_image}></Image>
            </div>
            <div className="content__slider_main_block">
                <div className="content__slider_main_text_1">
                    <p className="slider__first_text">#1 TOP SCARIEST GHOST 2022</p>
                </div>
                <div className="content__slider_main_text_2">
                    <p className="slider__second_text">UOOOO</p>
                    <p className="slider__second_text">TRICK OR</p>
                    <p className="slider__second_text">TREAT!!</p>
                </div>
                <div className="content__slider_main_text_3">
                    <p className="slider__thrird_text">Voluptate laboris sint id exercitation aliqua velit duis Lorem labore fugiat. Aute non qui adipisicing aliqua irure adipisicing. Aute enim excepteur ullamco amet ea fugiat.</p>
                </div>
                <div className="content__slider_main_buttons">
                    <Link href="/about">
                    <a className="slider__button_first">
                        <p className="slider__button_first_in">Buy now</p>
                    </a>
                    </Link>
                    <Link href="/about">
                    <a className="slider__button_second">
                        <p className="slider__button_second_in">NIGGER &nbsp; &rarr;</p>
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}