
const DETAILS_TARGET = "DETAILS_TARGET";
const MENU_CONDITION = "MENU_CONDITION";


let initialState = {
    menu: false,
    detailsTarget: false,
}
const dataHeader = (state = initialState, action) => {
    switch (action.type) {
        case DETAILS_TARGET: return { ...state, detailsTarget: action.target }
        
        case MENU_CONDITION: return { ...state, menu: action.bool }

        default: 
            return state;
    }
}

export const detailsAC = (target) => ({ type: DETAILS_TARGET, target });

export const menuCondition = (bool) => ({ type: MENU_CONDITION, bool });

export default dataHeader