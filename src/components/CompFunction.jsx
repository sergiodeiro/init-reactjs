import React from 'react'
import {aprovados as aprov} from '../utils/Array'
import { generateItens} from '../utils/utils'

export default props => {   
   return (
       <div>
            <h1>Aprovados</h1>
            <ul>
                {generateItens(aprov)}
            </ul>
       </div>
   )
}