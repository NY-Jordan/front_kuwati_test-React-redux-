import { combineReducers, } from "redux"
import CommandReducer from '../Reducers/CommandReducer';
import DrinksReducer from '../Reducers/DrinksReducer';
import MenuOfDayReducer from '../Reducers/Menu/MenuOfDayReducer';
import MenuReducer from '../Reducers/Menu/MenuReducer';
import UserReducer from "../Reducers/UserReducer";


 const RootReducer = 
    combineReducers({
        menu: MenuReducer,
        menuofday : MenuOfDayReducer,
        command : CommandReducer,
        drinks : DrinksReducer,
        user : UserReducer,
        
    });


export default RootReducer;