import { Fragment } from 'react'
import MainContainer from '../components/MainContainer/MainContainer'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import ItemDesc from '../components/ItemDesc/ItemDesc'

export const getServerSideProps = async (context: any) => {
	// console.log(context.params)
	const { itemID } = context.params
	console.log(itemID)
	// const { isLoading, data } = useQuery(['products'], () => {
	// 	return axios.get(`https://fakestoreapi.com/products/`)
	// })
	const res = await fetch(`https://fakestoreapi.com/products/${itemID}`)
	// console.log(res.json())
	const data = await res.json()
	console.log(data)

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { data: data },
	}
}

function ItemDetails(props: any): any {
	// const { isLoading, data } = useQuery(['products'], () => {
	// 	return axios.get(`https://fakestoreapi.com/products/`)
	// })
	return <ItemDesc data={props.data} />
}

// export async function getStaticPaths(props: any) {
// 	console.log(props)
// 	return {
// 		fallback: false,
// 		paths: [
// 			{ params: { itemID: '1' } },
// 			{ params: { itemID: '2' } },
// 			{ params: { itemID: '3' } },
// 		],
// 	}
// }

// export async function getStaticProps(context: any) {
// 	//fetching for a single meetup

// 	const itemID = context.params.itemID
// 	console.log(itemID)

// 	return {
// 		props: {
// 			meetupData: {
// 				image:
// 					'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Russia/st-petersburg/st-petersburg-lead-guide.jpg',
// 				id: 'm1',
// 				title: 'Первый митап',
// 				address: 'Некая ул., дом 5',
// 				description: 'Описание митапа',
// 			},
// 		},
// 	}
// }

export default ItemDetails
