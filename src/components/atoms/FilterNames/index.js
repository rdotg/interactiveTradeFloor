import React, { Component } from 'react'

import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import styled from 'styled-components'

const Names = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #2196f3;
  color: black;
  width: 69px;
`

const Name = styled.p`
  margin: 0;
  padding: 5px;
  &:hover {
    background: #2196f3;
    cursor: pointer;
    color: white;
  }
`

class FilterNames extends Component {
  handleClickOutside() {
    this.props.toggleFilter()
  }
  render() {
    return (
      <Names>
        <Name onClick={() => this.props.onSelect('None')}>None</Name>
        {process.env.USER_NAMES.split(',').map(user => {
          return <Name key={user} onClick={() => this.props.onSelect(user)}>{user}</Name>
        }
        )}
      </Names>
    )
  }
}

FilterNames.propTypes = {
  onSelect: PropTypes.func,
  toggleFilter: PropTypes.func,
}

export default onClickOutside(FilterNames)
