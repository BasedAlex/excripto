import React from 'react'
import styles from './Collection.module.css'
import { motion } from 'framer-motion'
import avatar from '../../public/avatar.svg'
import Image from 'next/image'
import { Button } from 'antd'

const data = [
	{ collection: 'Punk Art Collection', artist: 'James Watson', id: 0 },
	{ collection: 'Punk Art Collection', artist: 'James Watson', id: 1 },
	{ collection: 'Illustration Art Collection', artist: 'James Watson', id: 2 },
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

const Collection = () => {
	return (
		<div>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.5 }}
				className={styles.titleContainer}
			>
				<motion.h1 variants={viewAnimation} custom={1}>
					Top Collection
				</motion.h1>
				<motion.p variants={viewAnimation} custom={1}>
					The largest and unique Super rare NFT marketplace
				</motion.p>
				<motion.p variants={viewAnimation} custom={1}>
					For crypto-collectibles
				</motion.p>
			</motion.div>
			<div className={styles.cardCenter}>
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
							key={item.id}
						>
							<div className={styles.card}>
								<div>
									<h3 className={styles.text}>Created by</h3>
									<div className={styles.cardTitle}>
										<Image src={avatar} alt='' className={styles.titleImage} />

										<b className={styles.textArtist}>{item.artist}</b>
									</div>
								</div>
								<div>
									<h2 className={styles.text}>{item.collection}</h2>
									<p className={styles.text}>
										Created by{' '}
										<b className={styles.textArtist}>{item.artist}</b>
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
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
		</div>
	)
}

export default Collection
