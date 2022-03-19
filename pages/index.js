import Menu from '../components/menu';
import Slider1 from '../components/slider1';
import Slider2 from '../components/slider2';
import Slider3 from '../components/slider3';
export default function Index() {



  return(
    <div className="site">
      <div className="site__wrapper">
      <div className="site__menu">
      <Menu />
      </div>
      <div className="site__content">
          <div id="z" className="first"><Slider1 /></div>
          <div id="x" className="second"><Slider2 /></div>
          <div id="c" className="third"><Slider3 /></div>

      </div>
      </div>
    </div>
    

  );
} 