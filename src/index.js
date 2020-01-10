import React from 'react';
import ReactDom from 'react-dom'
import Multi from './components/MultiplosComponentes'
import Family from './components/group/Family'
import Member from './components/group/Member'
import CompFunction from './components/CompFunction'
import Father from './components/group/Father'
import CompClass from './components/classes/CompClass';
import Cont from './components/classes/Cont';
import Hooks from './components/hook/Hooks';

var root = document.getElementById('root');

ReactDom.render(
    <div>
        <Hooks />
        <Cont numero={0}/>
        <CompClass valor="89"/>
        <Father />
        <CompFunction />
        <Family sobrenome="Deiró">
            <Member name="Sergio"/>
            <Member name="Matias"/>
        </Family>
        <Multi />
    </div>
,root);