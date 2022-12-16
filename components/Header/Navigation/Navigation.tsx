import { SearchOutlined } from '@ant-design/icons'
import { DownloadOutlined, HeartOutlined } from '@ant-design/icons/lib/icons'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '../../../hooks/redux-hooks'

import NFTCore from '../../../public/NFTcore.svg'
import { RootState } from '../../../store'
import styles from './Navigation.module.css'

const Navigation = () => {
	const favTotalQuantity = useAppSelector(
		(state: RootState) => state.item.favTotalQuantity
	)

	return (
		<header className={styles.header}>
			<div className={styles.textLayout}>
				<Image src={NFTCore} alt='' className={styles.text} />
				<p className={styles.textItem}>Discover</p>
				<div className={styles.textItem}>
					<p>Marketplace</p>
				</div>
				<p className={styles.textItem}>How it Work</p>
				<Button
					type='ghost'
					shape='circle'
					icon={<SearchOutlined />}
					size='large'
					ghost={true}
					style={{ color: '#fff' }}
				/>
				<Button
					type='default'
					shape='round'
					ghost={true}
					size='large'
					style={{ color: '#15bffd', borderColor: '#15bffd' }}
				>
					Connect Wallet
				</Button>
				<Button
					type='primary'
					shape='circle'
					icon={<DownloadOutlined />}
					size='large'
				/>
				<Link href={'/cart'} className={styles.favs}>
					<Button
						type='primary'
						shape='circle'
						icon={<HeartOutlined />}
						size='large'
					></Button>
					<p>{favTotalQuantity !== 0 ? favTotalQuantity : ''}</p>
				</Link>
			</div>
		</header>
	)
}

export default Navigation
