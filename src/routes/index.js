import {Routes, Route} from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Menu from '../pages/Menu';

import PspMenu from '../pages/Menu/psp';
import GnrMenu from '../pages/Menu/gnr';

import PspPc from '../pages/Quiz/Psp/Pc'
import GnrPc from '../pages/Quiz/Gnr/Pc'


function RoutesApp(){
    return(
        <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Menu />} />

            <Route path='/pspmenu' element={<PspMenu/>} />
            <Route path='/gnrmenu' element={<GnrMenu/>} />


            <Route path='/psppc' element={<PspPc/>} />
            <Route path='/gnrpc' element={<GnrPc />} />






            {/* <Route path='/signin' element={<SignUp />} />  Usar para definir as rotas */}

        </Routes>
    )
}

export default RoutesApp;