import Menu from '../components/menu';
import SimpleSlider from '../components/slide';
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
        <SimpleSlider />
      </div>
      </div>
    </div>
    

  );
} 