// import Button from 'antd/es/button'
import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'
import beat from '../../../../public/beat.svg'
import styles from './Body.module.css'
import { ArrowRightOutlined } from '@ant-design/icons/lib/icons'
import etherium from '../../../../public/ethereum.svg'
import avatar from '../../../../public/avatar.svg'
import { motion } from 'framer-motion'

const data = [
	'All',
	'Music',
	'3D Abstract',
	'Game',
	'Sports',
	'Cartoon',
	'Virtual World',
	'Classic',
]

const viewAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.1 },
	}),
}

const cardViewAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.1 },
	}),
}

const MButton = motion(Button)
const MImage = motion(Image)

const Body = () => {
	return (
		<>
			<div className={styles.container}>
				<motion.div initial='hidden' whileInView='visible'>
					<motion.div variants={viewAnimation} custom={0}>
						<p className={styles.bigText}>SuperNFT</p>
						<br />
						<p className={styles.mediumText}>Marketplace</p>
					</motion.div>
					<MImage src={beat} alt='' variants={viewAnimation} custom={1} />
					<motion.p className={styles.text} variants={viewAnimation} custom={2}>
						The largest and unique Super rare NFT marketplace <br />
						For crypto-collectibles
					</motion.p>
					<div className={styles.buttons}>
						<MButton
							variants={viewAnimation}
							custom={2}
							ghost={true}
							size='large'
							shape='round'
							style={{
								color: '#ffffff',
								backgroundColor: '#15bffd',
								borderColor: '#15bffd',
								fontSize: '18px',
							}}
						>
							Connect Wallet
						</MButton>
						<MButton
							variants={viewAnimation}
							custom={2}
							size='large'
							style={{ color: '#15bffd', fontSize: '18px' }}
							type='link'
						>
							Create NFTs <ArrowRightOutlined />
						</MButton>
					</div>
					<motion.h2
						variants={viewAnimation}
						custom={3}
						className={styles.subText}
					>
						Last 7 days popular search
					</motion.h2>
					<div className={styles.map}>
						{data.map((item, idx) => (
							<MButton
								variants={viewAnimation}
								custom={3}
								ghost={true}
								shape='round'
								style={{ color: '#ffffff' }}
								key={idx}
							>
								{item}
							</MButton>
						))}
					</div>
				</motion.div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					className={styles.cardContainer}
				>
					<motion.div
						variants={cardViewAnimation}
						custom={1}
						className={styles.card}
					>
						<div>
							<h3 className={styles.cardMainText}>210 Digital Artwork</h3>
							<p className={styles.textBlue}>
								<Image src={etherium} alt='' />
								3.2 ETH
							</p>
						</div>
						<div>
							<h3 className={styles.subtitle}>Golden Hour</h3>
							<div className={styles.subtitleWrapper}>
								<Image src={avatar} alt='' />
								<p className={styles.textBiege}>John Doe</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						// variants={cardViewAnimation}
						// custom={1}
						className={styles.card}
					>
						<div>
							<h3 className={styles.cardMainText}>210 Digital Artwork</h3>
							<p className={styles.textBlue}>
								<Image src={etherium} alt='' />
								3.2 ETH
							</p>
						</div>
						<div>
							<h3 className={styles.subtitle}>Golden Hour</h3>
							<div className={styles.subtitleWrapper}>
								<Image src={avatar} alt='' />
								<p className={styles.textBiege}>John Doe</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</>
	)
}

export default Body
