import React from 'react'
import styles from './ItemDesc.module.css'
import NFTCore from '../../../public/NFTcore.svg'
import Image from 'next/image'
import Link from 'next/link'
import ellipse59 from '../../../public/Ellipse59.svg'
import ellipse60 from '../../../public/Ellipse60.svg'
import { motion } from 'framer-motion'

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

const ItemDesc = (props: any) => {
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
				viewport={{ amount: 0.5 }}
				className={styles.container}
			>
				<motion.h1 variants={viewAnimation} custom={1}>
					{props.data.title}
				</motion.h1>
				<motion.div variants={viewAnimation} custom={2}>
					{props.data.description}
				</motion.div>
				<MImage
					loader={() => props.data.image}
					src={props.data.image}
					alt={props.data.title}
					variants={viewAnimation}
					custom={3}
					width={150}
					height={190}
					style={{
						borderRadius: '10px',
						boxShadow: '5px 3px 2px #15bffd',
					}}
				/>

				<motion.div variants={viewAnimation} custom={4}>
					<h3>price: {props.data.price} ETH</h3>
					<h3>
						rated: <b>{props.data.rating.rate}</b> by {props.data.rating.count}{' '}
						users
					</h3>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default ItemDesc
