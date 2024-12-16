import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) =>{
            state.push({name:"Ryan beasley"})
            state.push({name:"John smith"})

        }


    }

})
    export default slice.reducer;

    export const{getUser} = slice.actions;

