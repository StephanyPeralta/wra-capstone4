import React from 'react';

import { Autoplay, Pagination, Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import Loader from '../Loader';
import { SliderWrapper, SliderTextBox } from './Slider.styled';

function Slider() {
  const { isLoading, data } = useFeaturedBanners();

  if (isLoading) {
    return <Loader />;
  }

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
        {data.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img src={banner.img} alt={banner.title} />
            <SliderTextBox>
              <h1 className="banner-title">{banner.title}</h1>
              <p className="banner-description">{banner.description}</p>
            </SliderTextBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}

export default Slider;
