import Menu from '../components/menu';
import Slider1 from '../components/slider1';
export default function Index() {
  return(
    <div className="site">
      <div className="site__wrapper">
      <div className="site__menu">
      <Menu />
      </div>
      <div className="site__content">
        <Slider1 />
      </div>
      </div>
    </div>

  );
} 