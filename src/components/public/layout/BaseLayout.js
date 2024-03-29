import React, { useState } from 'react';
import styled from 'styled-components';
import { LogoExtintores } from '../../../images';
import { useDevice } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Drawer } from './Drawer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Footer } from './Footer';
import { ButtonsFloating, WrapperComponent } from '../ui';
import { mediaQuery } from '../../../styles/constants/mediaQuery';

export const BaseLayout = ({ children, onClickVisibleFormContact }) => {
	const { isMobile } = useDevice();
	const navigate = useNavigate();

	const [visibleDrawer, setVisibleDrawer] = useState(false);

	return (
		<Container>
			<Drawer visibleDrawer={visibleDrawer} onSetVisibleDrawer={setVisibleDrawer} />
			<header className="header">
				<WrapperComponent>
					<>
						{isMobile ? (
							<div className="menu-mobile">
								<div className="item-logo">
									<img
										src={LogoExtintores}
										alt="Logo Servitec Facil Factura"
										onClick={() => navigate('/')}
									/>
								</div>
								<div
									className="icon-bar"
									onClick={() => setVisibleDrawer(true)}
								>
									<FontAwesomeIcon icon={faBars} size="2x" />
								</div>
							</div>
						) : (
							<div className="menu-list">
								<div className="logo-img">
									<Link to="/">
										<img
											src={LogoExtintores}
											alt="Logo Servitec Facil Factura"
										/>
									</Link>
								</div>
								<nav className="list">
									<ul>
										<a href="#inicio">
											<li>INICIO</li>
										</a>
										<a href="#about-us">
											<li>NOSOTROS</li>
										</a>
										<a href="#services">
											<li>SERVICIOS</li>
										</a>
										<span
											onClick={() =>
												onClickVisibleFormContact(true)
											}
										>
											<li>CONTÁCTO</li>
										</span>
									</ul>
								</nav>
							</div>
						)}
					</>
				</WrapperComponent>
			</header>
			<main className="body">{children}</main>
			<Footer />
			<ButtonsFloating />
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	height: auto;
	position: relative;
	padding-top: 5rem;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${({ theme }) => theme.colors.font2};
		font-family: 'Intro Demo', sans-serif;
	}

	h1 {
		font-size: 2.7rem;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.font1};
		${mediaQuery.minTablet} {
			font-size: 6rem;
		}
	}

	h2 {
		font-size: 2.1rem;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.font1};

		${mediaQuery.minTablet} {
			font-size: 5rem;
		}
	}

	h3 {
		font-size: 3rem;
		font-weight: bold;
	}

	h4 {
		font-size: 1.2rem;
		font-weight: bold;
	}

	h5 {
		font-size: 1.1rem;
		font-weight: bold;
	}

	p,
	ul,
	li,
	span {
		color: ${({ theme }) => theme.colors.font3};
	}

	.header {
		position: fixed;
		z-index: 100;
		width: 100%;
		//max-width: 1250px;
		height: auto;
		background: ${({ theme }) => theme.colors.basic};
		margin: auto;
		padding: 1rem;
		display: grid;
		grid-area: auto;
		box-shadow: 0 6px 8px 0 rgb(12 0 46 / 6%);
		right: 0;
		left: 0;
		top: 0;

		.menu-list {
			display: flex;
			padding: 0.1em 2em;

			.logo-img {
				width: 100%;
				list-style: none;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				img {
					width: 10em;
				}
			}

			.list {
				width: 60%;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				ul {
					list-style: none;
					display: flex;
					justify-content: space-around;
					align-items: center;
					padding: 0;
					margin: 0;
					li {
						color: rgb(11, 12, 16);
						font-weight: bold;
						font-size: 1.1rem;
						font-family: inherit !important;
						border-bottom: 2px solid transparent;
						transition: all 0.3s ease-in-out;
						margin-left: 1.5rem;
						cursor: pointer;
					}
					li:hover {
						color: rgb(121, 131, 140);
						border-bottom: 2px solid rgb(246, 70, 93);
						transition: all 0.3s ease-in-out;
					}
				}
			}
		}

		.menu-mobile {
			width: 100%;
			color: ${({ theme }) => theme.colors.black};
			display: grid;
			grid-template-columns: auto 1fr;
			justify-items: end;
			.item-logo {
				display: flex;
				align-items: center;
				justify-content: start;
				img {
					width: 100%;
					max-width: 150px;
				}
			}

			.icon-bar {
				width: auto;
				height: 100%;
				padding: 0.7rem 0.1rem 0.7rem 1.7rem;
			}
		}
	}

	.footer {
		width: 100%;
		height: auto;
		padding: 1rem;
		background: black;
		color: #fff;
	}
`;
