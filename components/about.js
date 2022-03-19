import big_image from "../img/about-img.png"
import Image from "next/image";
export default function About() {
    return(
        <div className="content__about">
            <div className="content__about_main_block">
                <div className="content__about_main_text_1">
                    <p className="about__first_text">About Halloween</p>
                    <p className="about__first_text">Night</p>
                </div>
                <div className="content__about_main_text_2">
                    <p className="about__second_text">Minim Lorem et culpa ex proident exercitation excepteur deserunt. Amet reprehenderit incididunt eiusmod dolore nulla. Voluptate proident labore ad veniam do anim. Sit in ad reprehenderit ullamco nostrud ipsum esse qui sunt est. Lorem fugiat minim nostrud tempor nulla labore. Anim ea commodo nulla et adipisicing est esse ullamco.</p>
                </div>
                <div className="content__about_main_buttons">
                    <a className="about__button_first">
                        <p className="about__button_first_in">Know more</p>
                    </a>
                </div>
            </div>
            <div className="content__about_image">
                <Image src={big_image}></Image>
            </div>
        </div>
    )
}