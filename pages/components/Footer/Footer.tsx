import Image from 'next/image'
import React from 'react'
import nftcore from '../../../public/NFTcore.svg'
import facebook from '../../../public/facebook.svg'
import linkedin from '../../../public/linkedin.svg'
import twitter from '../../../public/twitter.svg'
import styles from './Footer.module.css'
import { CopyrightOutlined } from '@ant-design/icons'

const Footer = () => {
	return (
		<div className={styles.backgroundWrapper}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<Image src={nftcore} alt='nftcore' className={styles.nftcore} />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
						ultrices amet tellus ornare. Faucibus id posuere massa
					</p>
					<div className={styles.imageContainer}>
						<Image src={facebook} alt='facebook' />
						<Image src={linkedin} alt='linkedin' />
						<Image src={twitter} alt='twitter' />
					</div>
				</div>
				<div className={styles.linkContainer}>
					<h2>Site Map</h2>
					<h3>Home</h3>
					<h3>About</h3>
					<h3>NFT</h3>
					<h3>Roadmap</h3>
					<h3>Blog</h3>
					<h3>Contact</h3>
				</div>
				<div className={styles.linkContainer}>
					<h2>Company</h2>
					<h3>Help&Support</h3>
					<h3>Terms&Conditions</h3>
					<h3>Privacy Policy</h3>
				</div>
				<div className={styles.linkContainer}>
					<h2>Resource</h2>
					<h3>Partner</h3>
					<h3>Blog</h3>
					<h3>Newsletter</h3>
				</div>
			</div>
			<p className={styles.copyright}>
				Copyright <CopyrightOutlined /> NFT core 2022 All right reserved
			</p>
		</div>
	)
}

export default Footer
