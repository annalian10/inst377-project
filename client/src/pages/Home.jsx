// Home.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  const trending = [
    'Jujutsu Kaisen',
    'Attack on Titan',
    'One Piece',
    'Demon Slayer',
    'Solo Leveling'
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome to AnimeLens</h2>
      <p className="text-gray-700 mb-6">
        Discover anime and manga tailored to your interests. Create watchlists, explore recommendations, and join the community.
      </p>

      <h3 className="text-2xl font-semibold mb-3">Trending Now</h3>
      <Swiper spaceBetween={20} slidesPerView={2} breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 } 
      }}>
        {trending.map((title, idx) => (
          <SwiperSlide
            key={idx}
            className="bg-white rounded-lg shadow p-4 text-center text-lg font-medium"
          >
            {title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

