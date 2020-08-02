import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavWrap = styled.nav`
	width: 100vw;
	display: flex;
	flex-direction: row;
	position: fixed;
	justify-content: space-evenly;
	align-content: center;
	bottom: 0;
	left: 0;
	background: #6c5b7b;
	padding: 10px 0 0 0;

	svg {
		justify-self: center;
		border-radius: 10px;
		padding: 10px;
		transition: all 0.2s;
	}

	.current {
		box-shadow: inset 0px 0px 10px 4px rgba(0, 0, 0, 0.15);
	}
`;

const Navbar = () => {
	const currentUrl = useLocation();
	const homeSvg = useRef(null);
	const blogSvg = useRef(null);
	const fillColor = 'white';

	// handles the "active" styles in the nav
	if (blogSvg.current && homeSvg.current) {
		if (currentUrl.pathname === '/') {
			// add 'current' classname to home and remove it from blogSvg
			blogSvg.current.classList.remove('current');
			homeSvg.current.classList.add('current');
		} else if (currentUrl.pathname === '/blog') {
			// add 'current' classname to blog and remove it from homeSvg
			homeSvg.current.classList.remove('current');
			blogSvg.current.classList.add('current');
		}
	}

	return (
		<NavWrap>
			<Link to='/' style={{ textDecoration: 'none', color: '#f8b195' }}>
				<svg
					ref={homeSvg}
					width='30'
					height='30'
					viewBox='0 0 478 478'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M472.847 226.846L438.731 192.73L250.998 4.99701C244.334 -1.66599 233.53 -1.66599 226.866 4.99701L39.132 192.73L4.99903 226.864C-1.54897 233.644 -1.36197 244.448 5.41803 250.996C12.032 257.384 22.517 257.384 29.131 250.996L34.114 245.978V460.779C34.114 470.205 41.755 477.846 51.181 477.846H426.648C436.074 477.846 443.715 470.205 443.715 460.779V245.978L448.715 250.979C455.495 257.527 466.299 257.339 472.847 250.56C479.235 243.946 479.235 233.46 472.847 226.846ZM290.115 443.713H187.715V307.179H290.115V443.713ZM409.581 443.713H324.248V290.113C324.248 280.687 316.607 273.046 307.181 273.046H170.648C161.222 273.046 153.581 280.687 153.581 290.113V443.713H68.248V211.845L238.914 41.178L409.581 211.845V443.713Z'
						fill={fillColor}
					/>
				</svg>
			</Link>
			<Link to='/blog' style={{ textDecoration: 'none', color: '#f8b195' }}>
				<svg
					ref={blogSvg}
					width='30'
					height='30'
					viewBox='0 0 480 370'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M472 40C469.878 40 467.843 40.8428 466.343 42.3431C464.843 43.8434 464 45.8783 464 48V336H420.56C369.078 336.005 317.764 341.85 267.6 353.424C264.453 354.144 261.162 353.892 258.162 352.7C255.163 351.509 252.595 349.435 250.8 346.752C279.363 329.268 312.199 320.01 345.688 320H440C442.122 320 444.157 319.157 445.657 317.657C447.157 316.157 448 314.122 448 312V256C448 253.878 447.157 251.843 445.657 250.343C444.157 248.843 442.122 248 440 248C437.878 248 435.843 248.843 434.343 250.343C432.843 251.843 432 253.878 432 256V304H345.688C311.45 303.968 277.79 312.822 248 329.696V112C248 109.878 247.157 107.843 245.657 106.343C244.157 104.843 242.122 104 240 104C237.878 104 235.843 104.843 234.343 106.343C232.843 107.843 232 109.878 232 112V329.688C202.209 312.815 168.549 303.964 134.312 304H48V16H171.2C187.329 16.0106 202.793 22.4252 214.195 33.8338C225.596 45.2423 232 60.7112 232 76.84C232 78.9617 232.843 80.9966 234.343 82.4969C235.843 83.9971 237.878 84.84 240 84.84C242.122 84.84 244.157 83.9971 245.657 82.4969C247.157 80.9966 248 78.9617 248 76.84C248 60.7112 254.404 45.2423 265.805 33.8338C277.207 22.4252 292.671 16.0106 308.8 16H432V224C432 226.122 432.843 228.157 434.343 229.657C435.843 231.157 437.878 232 440 232C442.122 232 444.157 231.157 445.657 229.657C447.157 228.157 448 226.122 448 224V8C448 5.87827 447.157 3.84344 445.657 2.34315C444.157 0.842856 442.122 0 440 0H308.8C294.5 0.0106186 280.487 4.00797 268.333 11.5431C256.18 19.0782 246.368 29.8525 240 42.656C233.632 29.8525 223.82 19.0782 211.667 11.5431C199.513 4.00797 185.5 0.0106186 171.2 0H40C37.8783 0 35.8434 0.842856 34.3431 2.34315C32.8429 3.84344 32 5.87827 32 8V312C32 314.122 32.8429 316.157 34.3431 317.657C35.8434 319.157 37.8783 320 40 320H134.312C167.807 320.007 200.649 329.265 229.216 346.752C227.415 349.428 224.847 351.497 221.848 352.688C218.85 353.878 215.562 354.135 212.416 353.424C162.247 341.848 110.927 336.003 59.44 336H16V48C16 45.8783 15.1571 43.8434 13.6569 42.3431C12.1566 40.8428 10.1217 40 8 40C5.87827 40 3.84344 40.8428 2.34315 42.3431C0.842854 43.8434 0 45.8783 0 48V344C0 346.122 0.842854 348.157 2.34315 349.657C3.84344 351.157 5.87827 352 8 352H59.44C109.71 352.008 159.817 357.716 208.8 369.016C214.432 370.316 220.311 370.059 225.807 368.272C231.304 366.485 236.21 363.235 240 358.872C243.789 363.237 248.695 366.487 254.192 368.274C259.689 370.062 265.569 370.318 271.2 369.016C320.184 357.718 370.29 352.01 420.56 352H472C474.122 352 476.157 351.157 477.657 349.657C479.157 348.157 480 346.122 480 344V48C480 45.8783 479.157 43.8434 477.657 42.3431C476.157 40.8428 474.122 40 472 40Z'
						fill={fillColor}
					/>
					<path
						d='M213.784 68.904C201.178 60.4856 186.359 55.9949 171.2 56H80C77.8783 56 75.8434 56.8429 74.3431 58.3431C72.8429 59.8434 72 61.8783 72 64C72 66.1217 72.8429 68.1566 74.3431 69.6569C75.8434 71.1572 77.8783 72 80 72H171.2C183.212 71.9863 194.957 75.5421 204.944 82.216C206.709 83.3936 208.87 83.8216 210.951 83.4061C213.032 82.9905 214.862 81.7653 216.04 80C217.218 78.2347 217.646 76.074 217.23 73.9931C216.814 71.9122 215.589 70.0816 213.824 68.904H213.784Z'
						fill={fillColor}
					/>
					<path
						d='M400 56H308.8C293.628 55.988 278.794 60.4789 266.176 68.904C265.302 69.4871 264.551 70.2366 263.967 71.1098C263.382 71.983 262.976 72.9627 262.77 73.9931C262.564 75.0234 262.563 76.0842 262.768 77.1149C262.972 78.1456 263.377 79.1259 263.96 80C264.543 80.8741 265.293 81.6248 266.166 82.2092C267.039 82.7936 268.019 83.2003 269.049 83.4061C270.079 83.6119 271.14 83.6127 272.171 83.4085C273.202 83.2043 274.182 82.7991 275.056 82.216C285.044 75.5443 296.789 71.9887 308.8 72H400C402.122 72 404.157 71.1572 405.657 69.6569C407.157 68.1566 408 66.1218 408 64C408 61.8783 407.157 59.8435 405.657 58.3432C404.157 56.8429 402.122 56 400 56Z'
						fill={fillColor}
					/>
					<path
						d='M213.784 108.904C201.178 100.486 186.359 95.9949 171.2 96H80C77.8783 96 75.8434 96.8429 74.3431 98.3431C72.8429 99.8434 72 101.878 72 104C72 106.122 72.8429 108.157 74.3431 109.657C75.8434 111.157 77.8783 112 80 112H171.2C183.212 111.986 194.957 115.542 204.944 122.216C206.709 123.394 208.87 123.822 210.951 123.406C213.032 122.99 214.862 121.765 216.04 120C217.218 118.235 217.646 116.074 217.23 113.993C216.814 111.912 215.589 110.082 213.824 108.904H213.784Z'
						fill={fillColor}
					/>
					<path
						d='M400 96H308.8C293.628 95.988 278.794 100.479 266.176 108.904C265.302 109.487 264.551 110.237 263.967 111.11C263.382 111.983 262.976 112.963 262.77 113.993C262.564 115.023 262.563 116.084 262.768 117.115C262.972 118.146 263.377 119.126 263.96 120C264.543 120.874 265.293 121.625 266.166 122.209C267.039 122.794 268.019 123.2 269.049 123.406C270.079 123.612 271.14 123.613 272.171 123.408C273.202 123.204 274.182 122.799 275.056 122.216C285.044 115.544 296.789 111.989 308.8 112H400C402.122 112 404.157 111.157 405.657 109.657C407.157 108.157 408 106.122 408 104C408 101.878 407.157 99.8435 405.657 98.3432C404.157 96.8429 402.122 96 400 96Z'
						fill={fillColor}
					/>
					<path
						d='M213.784 148.904C201.178 140.486 186.359 135.995 171.2 136H80C77.8783 136 75.8434 136.843 74.3431 138.343C72.8429 139.843 72 141.878 72 144C72 146.122 72.8429 148.157 74.3431 149.657C75.8434 151.157 77.8783 152 80 152H171.2C183.212 151.986 194.957 155.542 204.944 162.216C206.709 163.394 208.87 163.822 210.951 163.406C213.032 162.99 214.862 161.765 216.04 160C217.218 158.235 217.646 156.074 217.23 153.993C216.814 151.912 215.589 150.082 213.824 148.904H213.784Z'
						fill={fillColor}
					/>
					<path
						d='M400 136H308.8C293.628 135.988 278.794 140.479 266.176 148.904C265.302 149.487 264.551 150.237 263.967 151.11C263.382 151.983 262.976 152.963 262.77 153.993C262.564 155.023 262.563 156.084 262.768 157.115C262.972 158.146 263.377 159.126 263.96 160C264.543 160.874 265.293 161.625 266.166 162.209C267.039 162.794 268.019 163.2 269.049 163.406C270.079 163.612 271.14 163.613 272.171 163.408C273.202 163.204 274.182 162.799 275.056 162.216C285.044 155.544 296.789 151.989 308.8 152H400C402.122 152 404.157 151.157 405.657 149.657C407.157 148.157 408 146.122 408 144C408 141.878 407.157 139.843 405.657 138.343C404.157 136.843 402.122 136 400 136Z'
						fill={fillColor}
					/>
					<path
						d='M213.784 188.904C201.178 180.486 186.359 175.995 171.2 176H80C77.8783 176 75.8434 176.843 74.3431 178.343C72.8429 179.843 72 181.878 72 184C72 186.122 72.8429 188.157 74.3431 189.657C75.8434 191.157 77.8783 192 80 192H171.2C183.212 191.986 194.957 195.542 204.944 202.216C205.818 202.799 206.798 203.204 207.829 203.408C208.86 203.613 209.921 203.612 210.951 203.406C211.981 203.2 212.961 202.794 213.834 202.209C214.707 201.625 215.457 200.874 216.04 200C216.623 199.126 217.028 198.146 217.232 197.115C217.437 196.084 217.436 195.023 217.23 193.993C217.024 192.963 216.618 191.983 216.033 191.11C215.449 190.237 214.698 189.487 213.824 188.904H213.784Z'
						fill={fillColor}
					/>
					<path
						d='M400 176H308.8C293.628 175.988 278.794 180.479 266.176 188.904C264.411 190.082 263.186 191.912 262.77 193.993C262.354 196.074 262.782 198.235 263.96 200C265.138 201.765 266.968 202.991 269.049 203.406C271.13 203.822 273.291 203.394 275.056 202.216C285.044 195.544 296.789 191.989 308.8 192H400C402.122 192 404.157 191.157 405.657 189.657C407.157 188.157 408 186.122 408 184C408 181.878 407.157 179.843 405.657 178.343C404.157 176.843 402.122 176 400 176Z'
						fill={fillColor}
					/>
					<path
						d='M213.784 228.904C201.178 220.486 186.359 215.995 171.2 216H80C77.8783 216 75.8434 216.843 74.3431 218.343C72.8429 219.843 72 221.878 72 224C72 226.122 72.8429 228.157 74.3431 229.657C75.8434 231.157 77.8783 232 80 232H171.2C183.212 231.986 194.957 235.542 204.944 242.216C206.709 243.394 208.87 243.822 210.951 243.406C213.032 242.99 214.862 241.765 216.04 240C217.218 238.235 217.646 236.074 217.23 233.993C216.814 231.912 215.589 230.082 213.824 228.904H213.784Z'
						fill={fillColor}
					/>
					<path
						d='M400 216H308.8C293.628 215.988 278.794 220.479 266.176 228.904C265.302 229.487 264.551 230.237 263.967 231.11C263.382 231.983 262.976 232.963 262.77 233.993C262.564 235.023 262.563 236.084 262.768 237.115C262.972 238.146 263.377 239.126 263.96 240C265.138 241.765 266.968 242.991 269.049 243.406C270.079 243.612 271.14 243.613 272.171 243.408C273.202 243.204 274.182 242.799 275.056 242.216C285.044 235.544 296.789 231.989 308.8 232H400C402.122 232 404.157 231.157 405.657 229.657C407.157 228.157 408 226.122 408 224C408 221.878 407.157 219.843 405.657 218.343C404.157 216.843 402.122 216 400 216Z'
						fill={fillColor}
					/>
					<path
						d='M171.2 256H80C77.8783 256 75.8434 256.843 74.3431 258.343C72.8429 259.843 72 261.878 72 264C72 266.122 72.8429 268.157 74.3431 269.657C75.8434 271.157 77.8783 272 80 272H171.2C183.212 271.986 194.957 275.542 204.944 282.216C205.818 282.799 206.798 283.204 207.829 283.408C208.86 283.613 209.921 283.612 210.951 283.406C211.981 283.2 212.961 282.794 213.834 282.209C214.707 281.625 215.457 280.874 216.04 280C216.623 279.126 217.028 278.146 217.232 277.115C217.437 276.084 217.436 275.023 217.23 273.993C217.024 272.963 216.618 271.983 216.033 271.11C215.449 270.237 214.698 269.487 213.824 268.904C201.207 260.478 186.372 255.987 171.2 256V256Z'
						fill={fillColor}
					/>
					<path
						d='M400 256H308.8C293.628 255.988 278.794 260.479 266.176 268.904C265.302 269.487 264.551 270.237 263.967 271.11C263.382 271.983 262.976 272.963 262.77 273.993C262.564 275.023 262.563 276.084 262.768 277.115C262.972 278.146 263.377 279.126 263.96 280C264.543 280.874 265.293 281.625 266.166 282.209C267.039 282.794 268.019 283.2 269.049 283.406C270.079 283.612 271.14 283.613 272.171 283.408C273.202 283.204 274.182 282.799 275.056 282.216C285.044 275.544 296.789 271.989 308.8 272H400C402.122 272 404.157 271.157 405.657 269.657C407.157 268.157 408 266.122 408 264C408 261.878 407.157 259.843 405.657 258.343C404.157 256.843 402.122 256 400 256Z'
						fill={fillColor}
					/>
				</svg>
			</Link>
		</NavWrap>
	);
};

export default Navbar;
