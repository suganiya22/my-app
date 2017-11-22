function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

const PRODUCT_INITIAL = {
    rows: [],
    count: 0,
    page: 1,
    sorting: getParameterByName('sorting'),
    search: getParameterByName('search'),
    products: {},
}
export function loadProducts(page=1) {
    return (dispatch, getState) => {
        let state = getState();
        let { page, sorting, search } = state.products
        let url = `//127.0.0.1:8000/api/books/?format=json&page=${page}`;
         if(search) {
            url+=`&search=${search}`
        }
        
     
    }
}
export function showProductsResult(jsonResult) {
    return {
        type: "SHOW_PRODUCTS",
        products: jsonResult
    };
}
export default function products(state=[]){
	console.log("products",state);
	return state;	
}	
export function getProducts(state,props){
	console.log("XXXXXXXXXXXXXX",state,props);
	return state.products;
}
export function getProduct(state,props){
	return state.products.find(item=>item.id===props.id);
}
export const productsInit = (state=PRODUCT_INITIAL, action) => {
	console.log("action,state",state,action);
    let idx = 0;
    switch (action.type) {
        case 'SHOW_PRODUCTS':
            return Object.assign({}, state, {
                rows: action.products.results,
                count: action.products.count,
            });
            break;
        case 'SHOW_PRODUCT':
            return Object.assign({}, state, {
                products: action.product
            });
            break;
        case 'CHANGE_PAGE':
            return Object.assign({}, state, {
                page: action.page
            });
            break;
       
        case 'CHANGE_SEARCH':
            return Object.assign({}, state, {
                search: action.search
            });
            break;
       
       
       
    }
    return state;
}	