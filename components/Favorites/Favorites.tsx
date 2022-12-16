import React from 'react'
import styles from './Favorites.module.css'
import NFTCore from '../../public/NFTcore.svg'
import Image from 'next/image'
import Link from 'next/link'
import ellipse59 from '../../public/Ellipse59.svg'
import ellipse60 from '../../public/Ellipse60.svg'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { RootState } from '../../store'
import {
	addToFavAction,
	clearFavAction,
	decreaseFavAction,
	removeFromFavAction,
} from '../../store/reducers/item/item-action'
import { ItemsType } from '../../store/reducers/item/item-reducer'
import { Button } from 'antd'

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

const MImage = motion(Image)
const MButton = motion(Button)

const Favorites = (props: any) => {
	const dispatch = useAppDispatch()

	const handleRemoveFromFav = (FavItem: ItemsType) => {
		dispatch(removeFromFavAction(FavItem))
	}

	const handleDecreaseFav = (FavItem: ItemsType) => {
		dispatch(decreaseFavAction(FavItem))
	}

	const handleIncreaseFav = (FavItem: ItemsType) => {
		dispatch(addToFavAction(FavItem))
	}

	const handleClearFav = () => {
		dispatch(clearFavAction())
	}

	const favs = useAppSelector((state: RootState) => state.item)

	return (
		<motion.div className={styles.backgroundWrapper}>
			<Image src={ellipse59} alt='' className={styles.ellipseRight} />
			<Image src={ellipse60} alt='' className={styles.ellipseLeft} />
			<Link href='/'>
				<Image src={NFTCore} alt='nftcore' className={styles.nftIndex} />
			</Link>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.2 }}
				className={styles.container}
			>
				{favs.items.map((i, idx) => (
					<motion.div variants={viewAnimation} custom={idx + 1} key={idx}>
						<h1>{i.title}</h1>
						<MImage
							loader={() => i.image}
							src={i.image}
							alt={i.title}
							variants={viewAnimation}
							custom={3}
							width={150}
							height={190}
							style={{
								borderRadius: '10px',
								boxShadow: '5px 3px 2px #15bffd',
							}}
						/>
						<div>Count: {i.cartQuantity}</div>
						<div>
							<MButton ghost={true} onClick={() => handleIncreaseFav(i)}>
								Increase
							</MButton>
							<MButton ghost={true} onClick={() => handleDecreaseFav(i)}>
								Decrease
							</MButton>
							<MButton ghost={true} onClick={() => handleRemoveFromFav(i)}>
								Remove
							</MButton>
						</div>
					</motion.div>
				))}
				<MButton ghost={true} onClick={() => handleClearFav()}>
					Remove All
				</MButton>
			</motion.div>
		</motion.div>
	)
}

export default Favorites
