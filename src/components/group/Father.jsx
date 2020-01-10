import React from 'react'
import { notifyOut as notifyFather} from '../../utils/utils'
import Child  from './Child' ;

export default props =>{
    return(
        <div>
            <Child notifyOut={notifyFather}/>
        </div>
    )
}