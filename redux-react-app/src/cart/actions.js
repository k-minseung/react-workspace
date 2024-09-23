export const addToCart = (id,name) => ({
    type : 'ADD_TO_CART',
    id,
    name
})
export const removeToCart = (id) => ({
    type : 'REMOVE_TO_CART',
    id
})