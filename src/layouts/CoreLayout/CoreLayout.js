import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
    <div>
        <div className={classes.navSide}>
            <div className={classes.navLeft}>
                <Header/>
            </div>
        </div>
        <div className={classes.mainContainer}>
            {children}
        </div>
    </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
