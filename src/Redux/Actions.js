export const actionProducts = (limit) => {
	console.log('actionProducts')
	return{
		type: 'LOAD_PRODUCTS',
		payload: limit
	}
}

export const actionProduct = (id) => {
	console.log('actionProduct')
	return{
		type: 'LOAD_PRODUCT',
		payload: id
	}
}