export default function Reducer (state = {
        productList: [],
        product: {}
    }, action){
        switch(action.type){
            case "PRODUCTS_LOADED":
			return {
				...state,
				productList: action.payload
			}
            case "PRODUCT_LOADED":
			return {
				...state,
				product: action.payload
			}
            default:
                return state
        }
    }