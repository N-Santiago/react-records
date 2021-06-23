export default function categories(state = [], action) {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return action.payload
        case "CREATE_ALBUM":
            // let categories = state.categories.map(category => {
            //     if (category.id === action.payload.id) {
            //         return action.payload
            //     } else {
            //         return category
            //     }
            // })
            // return {...state, categories}
            return [...state, action.payload]
        default: 
            return state
    }
}