export const actionProducts = (limit) => {
	return{
		type: 'LOAD_PRODUCTS',
		payload: limit
	}
}

export const actionProduct = (id) => {
	return{
		type: 'LOAD_PRODUCT',
		payload: id
	}
}