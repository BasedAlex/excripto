import Image from 'next/image'
import React from 'react'
import styles from './Auction.module.css'
import etherium from '../../public/ethereum.svg'
import avatar from '../../public/avatar.svg'
import circleGroup from '../../public/circleGroup.svg'
import { Button } from 'antd'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BellOutlined } from '@ant-design/icons'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { addToFavAction } from '../../store/reducers/item/item-action'
import { ItemsType } from '../../store/reducers/item/item-reducer'

// export type ItemsType = {
// 	id: number
// 	title: string
// 	price: number
// 	description: string
// 	category: string
// 	image: string
// }

const viewAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const Auction = (data: any) => {
	const dispatch = useAppDispatch()

	const products = data.data.data

	const handleAddToFav = (product: ItemsType) => {
		dispatch(addToFavAction(product))
	}
	return (
		<>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.5 }}
				className={styles.titleContainer}
			>
				<motion.h1 variants={viewAnimation} custom={1}>
					Live Auction
				</motion.h1>
				<motion.p variants={viewAnimation} custom={2}>
					The largest unique Super rare NFT marketplace
				</motion.p>
				<motion.p variants={viewAnimation} custom={3}>
					For crypto-collectibles
				</motion.p>
			</motion.div>
			<div className={styles.cardCenter}>
				<motion.div
					initial='hidden'
					whileInView='visible'
					className={styles.cardContainer}
				>
					{data!.data?.data?.data
						?.slice(0, 3)
						.map((item: ItemsType, idx: number) => (
							<motion.div
								variants={viewAnimation}
								custom={idx}
								key={item.id}
								className={styles.card}
							>
								<div className={styles.flexTitle}>
									<div>
										<h3 className={styles.cardMainText}>Current bid</h3>
										<p className={styles.textBlue}>
											<Image src={etherium} alt='' />
											{item.price} ETH
										</p>
									</div>
									<Link href={`/${item.id}`}>
										<Button
											ghost={true}
											size='large'
											shape='round'
											style={{
												color: '#ffffff',
												backgroundColor: '#15bffd',
												borderColor: '#15bffd',
												fontSize: '16px',
											}}
										>
											Place bid
										</Button>
									</Link>
								</div>
								<Image
									loader={() => item.image}
									src={item.image}
									alt={item.title}
									width={150}
									height={190}
									style={{
										borderRadius: '10px',
										boxShadow: '5px 3px 2px #15bffd',
									}}
								/>
								<div className={styles.flexTitle}>
									<div>
										<h3 className={styles.subtitle}>Golden Hour</h3>
										<div className={styles.subtitleWrapper}>
											<Image src={avatar} alt='' />
											<p className={styles.textBiege}>{item.title}</p>
											<Button
												ghost={true}
												size='large'
												shape='round'
												icon={<BellOutlined />}
												onClick={() => handleAddToFav(item)}
											/>
										</div>
									</div>

									<Image src={circleGroup} alt='' className={styles.circle} />
								</div>
							</motion.div>
						))}
				</motion.div>
			</div>
		</>
	)
}

export default Auction
