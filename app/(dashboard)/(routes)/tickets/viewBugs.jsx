import React from 'react'
import {useDispatch, useSelector} from 'react-redux'


export default()=>{
        const dispatch = useDispatch();
        const {bugs} = useSelector(state=>state);

        useEffect(()=>{
            dispatch(getBugs());
        }, [bugs.length < 1])


        return ( 

            bugs.map((bug,key) => (
                <BugCard key={key} bug={bug} clicked={BugClicked}/>
            ))
        )



}