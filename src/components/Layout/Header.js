import { Fragment } from 'react'
import meal from '../../assets/Meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
      <h1>MaxMeals</h1>
      <HeaderCartButton />
      </header>
      <img className={classes['main-image']} src={meal} alt="delicious food" />
    </Fragment>
  )
}

export default Header