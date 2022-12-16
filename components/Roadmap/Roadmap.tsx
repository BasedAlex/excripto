import Image from 'next/image'
import React from 'react'
import styles from './Roadmap.module.css'
import Line from '../../public/Line.svg'
import PointerLeft from '../../public/PointerLeft.svg'
import PointerRight from '../../public/PointerRight.svg'
import RoadmapCircle from '../../public/RoadmapCircle.svg'
import { motion } from 'framer-motion'

const data = [
	{
		id: 0,
		month: 'January',
		title: 'Brief',
		text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		id: 1,
		month: 'February',
		title: 'Research',
		text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		id: 2,
		month: 'March',
		title: 'Discover',
		text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		id: 3,
		month: 'April',
		title: 'Design',
		text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		id: 4,
		month: 'May',
		title: 'Testing',
		text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
	{
		id: 5,
		month: 'June',
		title: 'Launch & Feedback',
		text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
	},
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

const Roadmap = () => {
	return (
		<div className={styles.parent}>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.5 }}
				className={styles.titleContainer}
			>
				<motion.h1 variants={viewAnimation} custom={1}>
					Roadmap 2022
				</motion.h1>
				<motion.p variants={viewAnimation} custom={2}>
					The largest and unique Super rare NFT marketplace
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
						className={styles.card}
						key={item.id}
					>
						<h3>{item.month}</h3>
						<h1>{item.title}</h1>
						<p>{item.text}</p>
					</motion.div>
				))}
			</motion.div>
			<Image src={Line} alt='' className={styles.lineBreak} />
			<Image src={PointerLeft} alt='' className={styles.pointerLeftJan} />
			<Image src={PointerLeft} alt='' className={styles.pointerLeftMar} />
			<Image src={PointerLeft} alt='' className={styles.pointerLeftMay} />

			<Image src={PointerRight} alt='' className={styles.pointerLeftFeb} />
			<Image src={PointerRight} alt='' className={styles.pointerLeftApr} />
			<Image src={PointerRight} alt='' className={styles.pointerLeftJun} />

			<Image src={RoadmapCircle} alt='' className={styles.circleJan} />
			<Image src={RoadmapCircle} alt='' className={styles.circleFeb} />
			<Image src={RoadmapCircle} alt='' className={styles.circleMar} />
			<Image src={RoadmapCircle} alt='' className={styles.circleApr} />
			<Image src={RoadmapCircle} alt='' className={styles.circleMay} />
			<Image src={RoadmapCircle} alt='' className={styles.circleJun} />
		</div>
	)
}

export default Roadmap
