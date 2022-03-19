import tikva from "../img/home1-img.png"
import Image from "next/image";
export default function Slider1() {
    return(
        <div className="content__slider">
            <div className="content__slider_image">
                <Image src={tikva} width="360" height="400"></Image>
            </div>
            <div className="content__slider_main_block">
                <div className="content__slider_main_text_1">

                </div>
                <div className="content__slider_main_text_2">
                    
                </div>
                <div className="content__slider_main_text_3">
                    
                </div>
                <div className="content__slider_main_buttons">
                    
                </div>
            </div>
        </div>
    )
}