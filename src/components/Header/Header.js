import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <div className={classes.navLeftTop}>
      <IndexLink to='/'><h4 className={classes.indexNav}>主页</h4></IndexLink>
    </div>
    <div className={classes.navHeader}>
      <ul>
        <li>
          <IndexLink to='/base' activeClassName={classes.activeRoute}>
            巡检基础表
          </IndexLink>
        </li>
        <li>
          <Link to='/event' activeClassName={classes.activeRoute}>
            巡检事件表
          </Link>
        </li>
        <li>
          <Link to='/biz' activeClassName={classes.activeRoute}>
            业务情况表
          </Link>
        </li>
        <li>
          <Link to='/user' activeClassName={classes.activeRoute}>
            用户管理
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
