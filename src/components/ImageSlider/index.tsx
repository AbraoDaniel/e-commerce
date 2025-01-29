import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { Image } from 'antd'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IImageSlider {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[]
}
const ImageSlider: React.FC<IImageSlider> = ({images}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  }
  
  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };


  return (
    <div className="image-slider-container">
      <div className="thumbnail-slider">
        <div className="arrow-button-up" onClick={goToPrev}>
          <UpOutlined />
        </div>
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {images?.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${selectedIndex === index ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
            >
              <Image preview={false} src={image.path} width={150} height={150} />
            </div>
          ))}
        </Slider>
        <div className="arrow-button-down" onClick={goToNext}>
          <DownOutlined />
        </div>
      </div>
    </div>
  )
}

export default ImageSlider