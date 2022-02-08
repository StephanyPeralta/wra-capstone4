import React, { useState, useEffect } from 'react';

import { Autoplay, Pagination, Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import featuredBanners from '../../mocks/en-us/featured-banners.json';
import { Banner } from '../../utils/types';
import { SliderWrapper, SliderTextBox } from './Slider.styled';

function Slider() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const data = featuredBanners.results;

    const getBanners = data.map((item) => {
      const id = item.id;
      const img = item.data.main_image.url;
      const title = item.data.title;
      const description = item.data.description[0].text;
      return {
        id,
        img,
        title,
        description,
      };
    });
    setBanners(getBanners);
  }, []);

  return (
    <SliderWrapper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Virtual]}
        className="mySwiper"
        virtual
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt={item.title} />
            <SliderTextBox>
              <h1 className="banner-title">{item.title}</h1>
              <p className="banner-description">{item.description}</p>
            </SliderTextBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}

export default Slider;
