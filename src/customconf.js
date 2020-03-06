import React from "react";
import styled from "styled-components";

const Label = styled.div`
  max-width: 56px;
  text-align: center;
  font-size: 12px;
`

const ToolbarItemStyles = styled.li`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: transparent;
  color: ${(props) => props.theme.foreground};
  margin-bottom: -8px;
`

const RelativeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  margin-bottom: 16px;
`

const ToolbarItem = ({ icon, label, onClick }) => {
  return (
    <RelativeDiv>
      <ToolbarItemStyles onClick={onClick}>{icon}</ToolbarItemStyles>
      <Label>{label}</Label>
    </RelativeDiv>
  );
};

export const custom = {
  components: {
    toolbarItem: ToolbarItem
  }
};
