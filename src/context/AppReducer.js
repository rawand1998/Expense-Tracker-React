export default (state,action) => {
switch (action.type) {
    case 'DELETE_TRANSCTION':
        return{
            ...state,
            transactions:state.transactions.filter(transaction => transaction.id !== action.payload)
        }
           
        
default:return state
}
}