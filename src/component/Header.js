import {Logo} from '../utils/Links';
const Header = () =>{
     return (
     <div className='absolute z-10'>
        <img className="p-4  w-52 bg-gradient-to-b from-black" src={Logo}  alt="logo"/>
     </div>
     )
}

export default Header;