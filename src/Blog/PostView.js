import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const PostViewWrap = styled.div`
	height: 100%;
	color: black;

	img {
		width: 100vw;
	}

	p {
		line-height: 1.5em;
		font-weight: 300;
	}
`;

const PostView = () => {
	let currentUrl = useLocation();
	const [currentPost, setCurrentPost] = useState(currentUrl.state);

	return (
		<PostViewWrap>
			<img src={currentPost.img} alt='placeholder' />
			<h2>
				{currentPost.title} {currentPost.id}
			</h2>
			<p>{currentPost.content}</p>
		</PostViewWrap>
	);
};

export default PostView;
