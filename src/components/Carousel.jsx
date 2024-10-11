import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Carousel = ({images = []}) => {
  return (
    <Slide>
        {
            images.map((img, idx) => (
                <div key={idx} className="each-slide-effect">
                    <img src={img} alt={`Image ${idx}`} />
                </div>
            ))
        }
    </Slide>
  );
};

export default Carousel;
