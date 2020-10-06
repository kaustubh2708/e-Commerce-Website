// All the chekout page actions

export const initialState={
    basket:[],
    user:null,
};

export const getBasketTotal =(basket)=>
    basket?.reduce((amount,item)=> item.price+amount,0);

function reducer(state,action){
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user,
            }
        case 'ADD_TO_BASKET':
            // logic for adding item to baksket
            return{
                ...state,
                basket:[...state.basket,action.item]
  
            };
            
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from Basket

            let newBasket=[...state.basket];
            const index =state.basket.findIndex((baskeItem)=> baskeItem.id === action.id);
            if (index>= 0){
                //item exist in basket and remove it
                newBasket.splice(index,1);
            } else {
                console.warn(
                    'Cant remove product (id: ${action.id}) as its not present in the basket.'
                );
            }

            return{
                ...state, 
                basket: newBasket,
            };
            
        default:
            return state;
    }
}

export default reducer;