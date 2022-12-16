import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import MainContainer from './components/MainContainer/MainContainer'

export default function Home() {
	const { isLoading, data } = useQuery(['products'], () => {
		return axios.get('https://fakestoreapi.com/products')
	})

	return (
		<div className={styles.bodyBg}>
			<MainContainer data={data} />
		</div>
	)
}
