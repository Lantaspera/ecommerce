import React from 'react';
import Slider from 'react-slick';

const SlidingBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmarketplace.canva.com%2FEAFED0hv9G0%2F1%2F0%2F1600w%2Fcanva-blue-pink-modern-special-offer-sale-banner-J5VkNReQ8WA.jpg&imgrefurl=https%3A%2F%2Fwww.canva.com%2Fbanners%2F&tbnid=Do172y50_HKmUM&vet=12ahUKEwiO5JTak-38AhVYg_0HHX_KDq0QMygaegUIARCnAg..i&docid=pXPRI_CqABaF7M&w=1600&h=800&q=banners&ved=2ahUKEwiO5JTak-38AhVYg_0HHX_KDq0QMygaegUIARCnAg" alt="React Image" />
            {/* <div>
                <img src={require('./images.jpg')} alt="banner1" />
            </div> */}
            {/* <div>
                <img src={require('./banner2.jpg')} alt="banner2" />
            </div>
            <div>
                <img src={require('./banner3.jpg')} alt="banner3" />
            </div> */}
        </Slider>
    );
}

export default SlidingBanner;
