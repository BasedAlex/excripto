import { Button } from 'antd'
import React from 'react'
import styles from './Hero.module.css'
import { motion } from 'framer-motion'

const viewAnimation = {
	hidden: {
		x: 200,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const MButton = motion(Button)

const Hero = () => {
	return (
		<div className={styles.backgroundBlur}>
			<div className={styles.container}>
				<div className={styles.anime}>
					<svg
						width='427'
						height='427'
						viewBox='0 0 427 427'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.spinner}
					>
						<path
							d='M422 213.5C424.761 213.5 427.006 211.261 426.941 208.5C425.994 168.022 413.552 128.609 391.019 94.8858C367.559 59.7759 334.215 32.411 295.203 16.2517C256.191 0.09241 213.263 -4.1356 171.848 4.10234C130.433 12.3403 92.3912 32.6742 62.5327 62.5327C32.6742 92.3912 12.3403 130.433 4.10234 171.848C-4.1356 213.263 0.0924105 256.191 16.2517 295.203C32.411 334.215 59.7759 367.559 94.8858 391.019C128.609 413.552 168.022 425.994 208.5 426.941C211.261 427.006 213.5 424.761 213.5 422V421.24C213.5 418.478 211.26 416.246 208.5 416.178C170.15 415.232 132.817 403.422 100.864 382.072C67.5234 359.795 41.5377 328.131 26.1928 291.085C10.8479 254.039 6.83294 213.275 14.6557 173.947C22.4785 134.62 41.7876 98.4949 70.1413 70.1413C98.4949 41.7876 134.62 22.4785 173.947 14.6557C213.275 6.83294 254.039 10.8479 291.085 26.1928C328.131 41.5377 359.795 67.5234 382.072 100.864C403.422 132.817 415.232 170.15 416.178 208.5C416.246 211.26 418.478 213.5 421.24 213.5H422Z'
							fill='url(#paint0_linear_1_359)'
							fillOpacity='0.7'
						/>
						<path
							d='M49.3961 205.369C47.0532 205.253 45.0542 207.059 44.9971 209.404C44.2226 241.256 52.4931 272.708 68.8914 300.093C86.0179 328.693 111.241 351.573 141.371 365.839C171.501 380.105 205.184 385.116 238.162 380.238C271.14 375.361 301.931 360.813 326.641 338.436C351.351 316.059 368.871 286.857 376.984 254.523C385.098 222.189 383.441 188.175 372.223 156.782C361.006 125.39 340.731 98.0286 313.963 78.1589C288.333 59.1339 257.853 47.795 226.08 45.4172C223.741 45.2421 221.747 47.0528 221.631 49.3957C221.515 51.7386 223.321 53.7262 225.66 53.9044C255.754 56.1971 284.619 66.9563 308.9 84.9799C334.319 103.848 353.572 129.83 364.224 159.641C374.876 189.451 376.45 221.751 368.745 252.455C361.04 283.16 344.403 310.89 320.939 332.14C297.474 353.389 268.235 367.203 236.919 371.835C205.603 376.467 173.617 371.708 145.006 358.162C116.395 344.615 92.4428 322.888 76.1795 295.728C60.6443 269.785 52.7911 239.998 53.4844 209.824C53.5383 207.479 51.739 205.485 49.3961 205.369Z'
							fill='url(#paint1_linear_1_359)'
							fillOpacity='0.7'
						/>
						<path
							d='M316.595 229.624C318.067 229.854 319.45 228.847 319.643 227.37C322.265 207.306 319.148 186.889 310.626 168.496C301.725 149.286 287.327 133.147 269.254 122.12C251.181 111.093 230.243 105.673 209.09 106.545C187.936 107.417 167.516 114.543 150.412 127.021C133.308 139.498 120.288 156.767 112.999 176.645C105.71 196.522 104.478 218.114 109.461 238.691C114.443 259.268 125.415 277.906 140.99 292.247C155.903 305.978 174.393 315.181 194.3 318.81C195.765 319.077 197.146 318.067 197.376 316.595C197.607 315.123 196.599 313.747 195.134 313.478C176.281 310.015 158.772 301.287 144.644 288.278C129.855 274.66 119.435 256.962 114.704 237.422C109.973 217.882 111.142 197.378 118.064 178.502C124.986 159.627 137.35 143.228 153.592 131.379C169.834 119.53 189.225 112.764 209.312 111.936C229.4 111.107 249.282 116.254 266.444 126.726C283.606 137.197 297.278 152.522 305.731 170.764C313.805 188.189 316.77 207.527 314.311 226.536C314.12 228.014 315.123 229.393 316.595 229.624Z'
							fill='url(#paint2_linear_1_359)'
							fillOpacity='0.7'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_1_359'
								x1='46.97'
								y1='40.1944'
								x2='289.775'
								y2='499.536'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#15BFFD' />
								<stop offset='1' stopColor='#9C37FD' />
							</linearGradient>
							<linearGradient
								id='paint1_linear_1_359'
								x1='82.029'
								y1='76.6794'
								x2='273.717'
								y2='439.318'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#15BFFD' />
								<stop offset='1' stopColor='#9C37FD' />
							</linearGradient>
							<linearGradient
								id='paint2_linear_1_359'
								x1='130.004'
								y1='126.607'
								x2='251.743'
								y2='356.914'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#15BFFD' />
								<stop offset='1' stopColor='#9C37FD' />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.5 }}
					className={styles.textContainer}
				>
					<motion.h1 variants={viewAnimation} custom={1}>
						Why choose us?
					</motion.h1>
					<motion.div variants={viewAnimation} custom={2}>
						Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
						semper. Eros suspendisse varius enim ultrices isque et quis ctumst.
						Feugiat amet velit faucibus amet
						<br />{' '}
						<p>
							Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa
							amet lacinia aliquamid ultrices vitae.
						</p>
					</motion.div>
					<MButton
						ghost={true}
						size='large'
						variants={viewAnimation}
						custom={2}
						shape='round'
						style={{
							color: '#ffffff',
							backgroundColor: '#15bffd',
							borderColor: '#15bffd',
							fontSize: '16px',
						}}
					>
						Connect Wallet
					</MButton>
				</motion.div>
			</div>
		</div>
	)
}

export default Hero
