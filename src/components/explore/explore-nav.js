import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const ExploreNav = ({ url }) => {
  let commonProps = {
    activeClassName: 'exp_nav_active',
    className: 'exp_nav_link',
  }

  return (
    <Fragment>
      <ul>
        <li>
          <NavLink to={`${url}`} exact {...commonProps}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/explore-photos`} {...commonProps}>
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/explore-groups`} {...commonProps}>
            Groups
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/explore-groups`} {...commonProps}>
            Pharmacy
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/explore-groups`} {...commonProps}>
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/explore-groups`} {...commonProps}>
            Clinic
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/explore-groups`} {...commonProps}>
            Hospital
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/explore-groups`} {...commonProps}>
            drags
          </NavLink>
        </li>
      </ul>
    </Fragment>
  )
}

ExploreNav.propTypes = {
  url: PropTypes.string.isRequired,
}

export default ExploreNav
