import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function WSAppHeader() {
  const activeClassName = 'active'
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => (
              <div key={item.title} className="select-item">
                {index < 3 ? (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                  >
                    {item.title}
                    <i className="sprite_01 icon"></i>
                  </NavLink>
                ) : (
                  <a href={item.link}>{item.title}</a>
                )}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <a href="#/">我</a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
