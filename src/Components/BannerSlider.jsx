import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
    const banners = [
        {
            id: 1,
            title: "Welcome to CritiQ",
            description: "Discover and share reviews to make informed choices.",
            image: "https://img.freepik.com/premium-photo/holiday-card-invitation_204757-1461.jpg?w=1380",
        },
        {
            id: 2,
            title: "Explore Services",
            description: "Find trusted reviews on services tailored for you.",
            image: "https://img.freepik.com/premium-photo/mobile-phone-with-empty-screen-laptop-computer-coffee-cup-notebook-purple-background-top-view_35674-13565.jpg?w=1380",
        },
        {
            id: 3,
            title: "Share Your Experience",
            description: "Empower others by sharing your honest feedback.",
            image: "https://img.freepik.com/premium-photo/customer-satisfaction-evaluation-feedback_254268-595.jpg?w=1380",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="relative">
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-[#F7F6EE] px-4">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{banner.title}</h2>
                            <p className="text-sm md:text-lg">{banner.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
