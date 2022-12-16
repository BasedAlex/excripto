import React from 'react'
import Auction from '../Auction/Auction'
import Collection from '../Collection/Collection'
import Creator from '../Creator/Creator'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Roadmap from '../Roadmap/Roadmap'
import styles from './MainContainer.module.css'

const MainContainer = (data: any) => {
	return (
		<>
			<Header />
			<Hero />
			<Auction data={data} />
			<Roadmap />
			<Collection />
			<Creator />
			<Footer />
		</>
	)
}

export default MainContainer
