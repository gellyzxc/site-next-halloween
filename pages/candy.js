import Footer from "../components/footer";
import Menu from "../components/menu";
import tile1 from "../img/trick-treat1-img.png"
import tile2 from "../img/trick-treat2-img.png"
import tile3 from "../img/trick-treat3-img.png"
import tile4 from "../img/trick-treat4-img.png"
import tile5 from "../img/trick-treat5-img.png"
import tile6 from "../img/trick-treat6-img.png"
import Image from 'next/image'

export default function Candy() {
    return(
        <div className="site">
          <div className="site__wrapper">
          <div className="site__menu">
          <Menu />
          </div>
          <div className="site__content">
            <div className="candy_content">
                <div className="candy_big_text">
                    <p className="candy_big_text_in">Trick Or Treat</p>
                </div>
                <div className="candy_tiles">
                    <div className="candy_tiles_first_row">
                        <div className="candy_in_first">
                        <div className="candy_tile">
                        <div className="tile_in_image">
                                <Image src={tile1} height={140} width={150} />
                            </div>
                            <div className="tile_in_text_big">
                                <p className="tile_good_name">4urka</p>
                            </div>
                            <div className="tile_good_subtitle">
                                <p className="tile_good_subtitle_in">snth</p>
                            </div>
                            <div className="tile_in_cost">
                                <p className="tile_good_cost">49.99$</p>
                            </div>
                        </div>
                        </div>
                        <div className="candy_in_second">
                        <div className="candy_tile">
                        <div className="tile_in_image">
                                <Image src={tile2} height={140} width={150} />
                            </div>
                            <div className="tile_in_text_big">
                                <p className="tile_good_name">4urka</p>
                            </div>
                            <div className="tile_good_subtitle">
                                <p className="tile_good_subtitle_in">snth</p>
                            </div>
                            <div className="tile_in_cost">
                                <p className="tile_good_cost">49.99$</p>
                            </div>
                        </div>
                        </div>
                        <div className="candy_in_thrird">
                        <div className="candy_tile">
                        <div className="tile_in_image">
                                <Image src={tile3} height={140} width={150} />
                            </div>
                            <div className="tile_in_text_big">
                                <p className="tile_good_name">4urka</p>
                            </div>
                            <div className="tile_good_subtitle">
                                <p className="tile_good_subtitle_in">snth</p>
                            </div>
                            <div className="tile_in_cost">
                                <p className="tile_good_cost">49.99$</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="candy_tiles_second_row">
                        <div className="candy_in_first">
                        <div className="candy_tile">
                        <div className="tile_in_image">
                                <Image src={tile4} height={140} width={150} />
                            </div>
                            <div className="tile_in_text_big">
                                <p className="tile_good_name">4urka</p>
                            </div>
                            <div className="tile_good_subtitle">
                                <p className="tile_good_subtitle_in">snth</p>
                            </div>
                            <div className="tile_in_cost">
                                <p className="tile_good_cost">49.99$</p>
                            </div>
                        </div>
                        </div>
                        <div className="candy_in_second">
                        <div className="candy_tile">
                        <div className="tile_in_image">
                                <Image src={tile5} height={140} width={150} />
                            </div>
                            <div className="tile_in_text_big">
                                <p className="tile_good_name">4urka</p>
                            </div>
                            <div className="tile_good_subtitle">
                                <p className="tile_good_subtitle_in">snth</p>
                            </div>
                            <div className="tile_in_cost">
                                <p className="tile_good_cost">49.99$</p>
                            </div>
                        </div>
                        </div>
                        <div className="candy_in_thrird">
                        <div className="candy_tile">
                        <div className="tile_in_image">
                                <Image src={tile6} height={140} width={150} />
                            </div>
                            <div className="tile_in_text_big">
                                <p className="tile_good_name">4urka</p>
                            </div>
                            <div className="tile_good_subtitle">
                                <p className="tile_good_subtitle_in">snth</p>
                            </div>
                            <div className="tile_in_cost">
                                <p className="tile_good_cost">49.99$</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <Footer />
          </div>
        </div>
    
      );
    } 