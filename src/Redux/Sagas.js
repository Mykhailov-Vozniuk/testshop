import { call, put, takeEvery } from 'redux-saga/effects'

const getProducts = async (limit) => {
    let res =  await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    let data = await res.json()
    return data
}

const getProduct = async (id) => {
  let res =  await fetch(`https://fakestoreapi.com/products/${id}`)
  let data = await res.json()
  console.log('getProduct', data)
  return data
}

function* fetchProducts(action) {
    try {
      const productList = yield call(getProducts, action.payload)
      yield put({ type: 'PRODUCTS_LOADED', payload: productList })
    } catch (e) {
      yield put({ type: 'FAILED_LOAD', message: e.message })
    }
  }

function* fetchProduct(action) {
  try {
    const product = yield call(getProduct, action.payload)
    yield put({ type: 'PRODUCT_LOADED', payload: product })
  } catch (e) {
    yield put({ type: 'FAILED_LOAD', message: e.message })
  }
}


  function* mySaga() {
    yield takeEvery('LOAD_PRODUCTS', fetchProducts)
    yield takeEvery('LOAD_PRODUCT', fetchProduct)
  }

  export default mySaga;