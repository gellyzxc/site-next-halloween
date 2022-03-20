import Footer from "../components/footer";
import Menu from "../components/menu";
import SimpleSlider from "../components/slide";
export default function Index() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <SimpleSlider />
        </div>
        <Footer />
      </div>
    </div>
  );
}
