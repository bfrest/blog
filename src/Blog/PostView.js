import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const PostViewWrap = styled.div`
	height: 100%;
	img {
		width: 100vw;
	}

	p {
		line-height: 1.5em;
		font-weight: 300;
	}
`;

const PostView = () => {
	const [currentPost, setCurrentPost] = useState(null);
	let currentUrl = useLocation();

	useEffect(() => {
		setCurrentPost(currentUrl.pathname);
	});

	return (
		<PostViewWrap>
			<img
				src='https://res.cloudinary.com/bfrest/image/upload/v1579927803/hogwarts-castle-.jpg'
				alt='placeholder'
			/>
			<h2>
				{currentPost.title} {currentPost.id}
			</h2>
			<p>{currentPost.content}</p>
		</PostViewWrap>
	);
};

export default PostView;
