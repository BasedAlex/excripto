import { Fragment } from 'react'
import MainContainer from '../components/MainContainer/MainContainer'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import ItemDesc from '../components/ItemDesc/ItemDesc'

export const getServerSideProps = async (context: any) => {
	const { itemID } = context.params
	console.log(itemID)
	const res = await fetch(`https://fakestoreapi.com/products/${itemID}`)
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
	return <ItemDesc data={props.data} />
}

export default ItemDetails
