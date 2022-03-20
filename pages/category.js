import Menu from "../components/menu";
import Footer from "../components/footer";
import Image from 'next/image'
import pic1 from "../img/category1-img.png"
import pic2 from "../img/category2-img.png"
import pic3 from "../img/category3-img.png"

export default function Category() {
  return(
    <div className="site">
      <div className="site__wrapper">
      <div className="site__menu">
      <Menu />
      </div>
      <div className="site__content">
        <div className="content__category">
          <div className="content__category_text">
          <p className="content__category_text_first">Favourite Scare</p>
          <p className="content__category_text_first">Category</p>
          </div>
          <div className="content__category_images">
            <div className="content__category_image_1">
              <Image src={pic1} height="200px" width="200px"></Image>
            </div>
            <div className="content__category_image_2">
              <Image src={pic2} height="200px" width="200px"></Image>
            </div>
            <div className="content__category_image_3">
              <Image src={pic3} height="200px" width="200px"></Image>
            </div>

          </div>
          <div className="content__category_text_small">
          <div className="content__category_text_1">
              <p className="content__category_image_undertext">Ghosts</p>
              <p className="content__category_image_undertext_sm">Chose the ghosts,</p>
              <p className="content__category_image_undertext_sm">the scariest there are.</p>
              </div>
              <div className="content__category_text_2">
              <p className="content__category_image_undertext">Pumpkins</p>
              <p className="content__category_image_undertext_sm">You look at the scariest</p>
              <p className="content__category_image_undertext_sm">pumpkins there is.</p>
              </div>
              <div className="content__category_text_2">
              <p className="content__category_image_undertext">Witch Hat</p>
              <p className="content__category_image_undertext_sm">Pick the most stylish</p>
              <p className="content__category_image_undertext_sm">witch hats out there.</p>
              </div>
          
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </div>

  );
} 