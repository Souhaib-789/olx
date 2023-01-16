import React from 'react';
import NavigationBar from '../../navigation/Navbar';
import Image from 'react-bootstrap/Image'
import BottomImage from '../../assets/bottomImage.JPG'
import './Home.css'
import { Products } from '../../config/Products';
import ProductCard from '../../components/card';
import ImageCarousel from '../../components/Carousel';



const Home = () => {
	return (
		<div>
			<NavigationBar />
			<div className='home'>
				<ImageCarousel />

				<div className='cardSection'>
					<h3 className='mb-4'>Fresh recommendations</h3>
					<div className='cardsDiv'>
						{
							Products.map((item, index) => {
								return (
									<ProductCard
										key={index}
										name={item?.name}
										price={item?.price}
										image={item?.image}
									/>
								)
							})
						}
					</div>
				</div>


				<Image src={BottomImage} className='mainImage' />
			</div>
		</div>
	);
};

export default Home;
