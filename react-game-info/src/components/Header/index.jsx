import React from 'react';
import { HeaderContainer, Logo, SelectTheme, OptionTheme } from './style';
import { Link } from 'react-router-dom';
import { logo } from './config';
import Time from '../Time';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/actions';


function Header({ handleToggle, selected }) {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count.count)

  const handleInc = () => {
    dispatch(increment(10))
  }

  const handleDec = () => {
    dispatch(decrement())
  }


  return (
    <HeaderContainer>
      <Link to="/"><Logo src={logo} alt="Logo" />
      </Link>
      <SelectTheme onChange={handleToggle} defaultValue={selected}>
        <OptionTheme value="light">light</OptionTheme>
        <OptionTheme value="dark">dark</OptionTheme>
      </SelectTheme >
      <Time />
      <div>{count}</div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </HeaderContainer>
  )
}

export default Header



//rfce ввести, в App.jsx в return между <> </> ввести и подключить <Header /> и import Header from "./components/Header"