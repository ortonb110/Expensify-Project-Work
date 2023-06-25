import {Fragment} from 'react'
import logo from '../Assets/logo.png';
const Landing = () => {
  return (
    <Fragment>
        <nav>
            <h1 className='flex gap-2 items-center text-[#33b1bc] font-bold'>
              <img src={logo} alt="Expensify logo" />
              expensify
            </h1>
        </nav>
        <section>
            
        </section>
    </Fragment>
  )
}

export default Landing