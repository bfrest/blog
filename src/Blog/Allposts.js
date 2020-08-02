import React from 'react';
import { testPosts } from './testPosts';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostList = styled.div`
	font-size: 0.6em;
	line-height: 1em;
	height: 100vh;
	width: 100vw;
	padding-top: 50px;

	.science {
		background-color: #344c7d;
	}

	.school {
		background-color: #f67280;
	}

	.life {
		background-color: #6c5b7b;
	}

	.music {
		background-color: lightseagreen;
	}
`;

const PostItem = styled.h2`
	padding: 20px;
	color: white;
	margin: 20px;
	font-size: 1.5em;
	line-height: 1em;
	font-weight: 900;
`;

const AllPosts = () => {
	return (
		<PostList>
			{testPosts.map((item) => (
				<Link
					key={item.id}
					to={{ pathname: `/${item.id}`, state: { ...item } }}
					style={{ textDecoration: 'none' }}
				>
					<PostItem className={item.label}>{item.title}</PostItem>
				</Link>
			))}
		</PostList>
	);
};

export default AllPosts;
