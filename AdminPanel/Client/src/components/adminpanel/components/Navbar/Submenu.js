import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0px 20px 0px 20px;
  list-style: none;
  height: 40px;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 13px;
  font-weight:bold;

  &:hover {
    background: #000000;
    color: white;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #fff;
  height: 40px;
  padding-left: 2.3rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 13px;
  

  &:hover {
    background: #000000;
    color: white;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel value={{ color: "black" }}>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
