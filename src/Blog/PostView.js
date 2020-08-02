import React, { useState } from 'react';
import styled from 'styled-components';
import { testPosts } from './testPosts';
import { useParams, useLocation } from 'react-router-dom';
const PostViewWrap = styled.div`
	img {
		width: 100vw;
	}
`;

const PostView = ({ match, location }) => {
	const [currentPost, setCurrentPost] = useState(testPosts[0]);
	let locationlocation = useLocation();

	return (
		<PostViewWrap>
			{console.log(locationlocation)}
			<img src='https://res.cloudinary.com/bfrest/image/upload/v1579927803/hogwarts-castle-.jpg' />
			<h2>
				{currentPost.title} {currentPost.id}
			</h2>
			<p>{currentPost.content}</p>
		</PostViewWrap>
	);
};

export default PostView;
