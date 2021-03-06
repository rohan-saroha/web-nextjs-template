/**
 *
 * For
 *
 */

import React, { ReactNode } from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.orientation};
`;

interface Props<TListItem> {
  of: TListItem[];
  parentProps?: any;
  noParent?: boolean;
  ParentComponent?: React.FunctionComponent;
  renderItem: (item: TListItem, index: number) => React.ReactElement;
  orientation?: "row" | "column";
}

const For = ({
  of,
  parentProps,
  ParentComponent = FlexContainer,
  renderItem,
  noParent,
}: Props<typeof of[0]>) => {
  const list = () => of.map((item, index) => ({ ...renderItem(item, index), key: index }));
  const children = () => (
    <ParentComponent {...parentProps} data-testid="for">
      {list()}
    </ParentComponent>
  );
  if (noParent) {
    return (of || []).length ? list() : null;
  }
  return (of || []).length ? children() : null;
};

For.propTypes = {
  of: Proptypes.array,
  type: Proptypes.node,
  parent: Proptypes.object,
  renderItem: Proptypes.func.isRequired,
  noParent: Proptypes.bool,
  orientation: Proptypes.oneOf(["row", "column"]),
};

For.defaultProps = {
  orientation: "row",
};

export default For;
