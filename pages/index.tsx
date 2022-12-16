import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import MainContainer from './components/MainContainer/MainContainer'

export default function Home() {
	// const res = fetch('https://fakestoreapi.com/products')
	// 	.then(res => res.json())
	// 	.then(json => console.log(json))

	const { isLoading, data } = useQuery(['products'], () => {
		return axios.get('https://fakestoreapi.com/products')
	})

	return (
		<div className={styles.bodyBg}>
			<MainContainer data={data} />
		</div>
	)
}

// export async function getStaticProps() {
// 	// fetch data from an API

// 	const { isLoading, data } = useQuery(['products'], () => {
// 		return axios.get('https://fakestoreapi.com/products')
// 	})

// 	return {
// 		props: {
// 			meetups: data,
// 		},
// 		revalidate: 10,
// 	}
// }
