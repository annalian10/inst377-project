import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  const trending = [
    "Jujutsu Kaisen", "Attack on Titan", "One Piece", "Demon Slayer", "Solo Leveling"
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Anime & Manga Discovery Hub</h2>
      <p className="mb-6">Explore new anime & manga personalized to your tastes.</p>

      <h3 className="text-xl font-semibold mb-2">Trending Now</h3>
      <Swiper spaceBetween={10} slidesPerView={3}>
        {trending.map((title, idx) => (
          <SwiperSlide key={idx} className="bg-indigo-100 p-4 rounded shadow">
            {title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
