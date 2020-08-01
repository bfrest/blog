import React from 'react';
import './App.css';
import styled from 'styled-components';

const HomeWrap = styled.div`
	width: 100vw;
	font-family: 'Poppins', sans-serif;
	font-size: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		text-decoration: none;
		color: #6c5b7b;
		font-size: 1.8em;
		transition: all 0.15s ease;
	}

	.socials {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: fixed;
		height: 100%;
		top: 0;
		right: 0;
		margin-right: 20px;
		background: white;
		padding-top: 10px;
	}

	.socials a:hover {
		text-shadow: 2px 2px 15px black;
		color: none;
		transform: scale(1.1);
		text-shadow: 2px 2px 15px black;
		color: white;
	}

	@keyframes slideUpFadeIn {
		from {
			margin-top: 150px;
			opacity: 0;
		}

		to {
			margin-top: 0;
			opacity: 1;
		}
	}

	.intro,
	.projects {
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 80px;
	}

	img {
		width: 80%;
		box-shadow: 1px 1px 10px gray;
		justify-self: center;
		margin: 20px;
	}

	.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		animation-name: slideUpFadeIn;
		animation-duration: 0.9s;
	}

	.intro p {
		margin-top: -10px;
	}

	h3 {
		text-decoration: underline;
		text-decoration-color: #6c5b7b;
	}

	.projects {
		line-height: 2.5em;
	}

	.projects img {
		margin: 85px 0 10px 0;
	}

	.projects a {
		margin: none;
		font-size: 1em;
	}

	.intro button {
		border: 2px solid #f0c77cea;
		color: #f0c77cea;
		padding: 5px;
		background: none;
		transition: all 0.1s linear;
	}

	.intro button:hover {
		cursor: pointer;
		box-shadow: 2px 2px 2px black;
	}

	@media (max-width: 700px) {
		body {
			font-size: 1.2em;
		}

		.intro {
			width: 80vw;
		}

		.socials {
			top: 93vh;
			left: 0;
			flex-direction: row;
		}
	}
`;

const Home = () => {
	return (
		<HomeWrap>
			<div className='intro'>
				<h1>Hello, I'm Brendon.</h1>
				<h3>Web Developer</h3>

				<p>I enjoy creating useful and meaningful tools.</p>
				<p>
					Some of my favorite things are being a dad, music, coffee, astronomy,
					running, hiking, Reeses Cups, Harry Potter, and video games.
				</p>

				<div className='projects'>
					<h2>Recent Projects</h2>
					<img
						src='https://res.cloudinary.com/bfrest/image/upload/v1589034545/Screen_Shot_2020-05-09_at_8.25.08_AM.png'
						alt='cache coffee site'
					/>
					{/* <!-- Link to the site https://www.cachecoffeeandmore.com/  --> */}
					<a href='https://www.cachecoffeeandmore.com/'>
						<h3 className='noAnimation'>Cache Coffee & More</h3>
					</a>
					<p>
						An e-commerce site for cache coffee & more (my favorite coffee shop)
						where I built the frontend and backend. I built a custom admin area
						where they could manage the stock and pending orders.
					</p>

					<img
						src='https://res.cloudinary.com/bfrest/image/upload/v1564713530/Screen_Shot_2019-08-01_at_8.34.58_PM.png'
						alt='app screenshot'
					/>

					<h3>Maintenance App</h3>

					<p>
						A maintenance app for a construction company to help manage oil
						changes and other services. It tracks all services and
						pre-inspections for each piece of heavy machinery. It's very
						intuative and gives you all the parts and part numbers you will need
						depending on what type of service you are doing.
					</p>
				</div>
			</div>
		</HomeWrap>
	);
};
export default Home;
