import React from 'react'
import styles from './Creator.module.css'
import avatar from '../../public/avatar.svg'
import ethereum from '../../public/ethereum.svg'
import Image from 'next/image'
import { Button } from 'antd'
import { motion } from 'framer-motion'

const data = [
	{ creator: 'Emerson Philips', price: 3.2 },
	{ creator: 'Emerson Philips', price: 3.2 },
	{ creator: 'Emerson Philips', price: 3.2 },
	{ creator: 'Emerson Philips', price: 3.2 },
	{ creator: 'Emerson Philips', price: 3.2 },
	{ creator: 'Emerson Philips', price: 3.2 },
	{ creator: 'Emerson Philips', price: 3.2 },
	{ creator: 'Emerson Philips', price: 3.2 },
	{ creator: 'Emerson Philips', price: 3.2 },
]

const viewAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			delay: custom * 0.2,
			ease: [0, 0.71, 0.2, 1.01],
		},
	}),
}

const cardViewAnimation = {
	hidden: (custom: number) => ({
		y: -100,
		opacity: 0,
	}),
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			delay: custom * 0.2,
			ease: [0, 0.71, 0.2, 1.01],
		},
	}),
}

const Creator = () => {
	return (
		<>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.5 }}
				className={styles.titleContainer}
			>
				<motion.h1 variants={viewAnimation} custom={1}>
					Our creator
				</motion.h1>
				<motion.p variants={viewAnimation} custom={2}>
					The largest unique Super rare NFT marketplace
				</motion.p>
				<motion.p variants={viewAnimation} custom={3}>
					For crypto-collectibles
				</motion.p>
			</motion.div>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.2, once: true }}
				className={styles.cardContainer}
			>
				{data.map((item, idx) => (
					<motion.div
						variants={cardViewAnimation}
						custom={idx + 1}
						key={idx}
						className={`${styles.card} ${styles.corner}`}
					>
						<Image src={avatar} alt='avatar' className={styles.avatar} />
						<div className={styles.creator}>
							<h3>{item.creator}</h3>
							<div className={styles.curr}>
								<Image src={ethereum} alt='ethereum' />
								<p>{item.price} ETH</p>
							</div>
						</div>
						<Button type='link' size='large' style={{ fontSize: '20px' }}>
							Follow
						</Button>
					</motion.div>
				))}
			</motion.div>
			<div className={styles.buttonExplore}>
				<Button
					ghost={true}
					shape={'round'}
					size={'large'}
					style={{ color: '#15bffd', borderColor: '#15bffd' }}
				>
					Explore More
				</Button>
			</div>
		</>
	)
}

export default Creator
