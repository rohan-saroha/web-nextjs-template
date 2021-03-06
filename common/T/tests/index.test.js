/**
 *
 * Tests for T
 *
 */

import React from "react";
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from "@utils/testUtils";
import T from "../index";

describe("<T />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = renderWithIntl(<T />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 T component", () => {
    const { getAllByTestId } = renderWithIntl(<T />);
    expect(getAllByTestId("t").length).toBe(1);
  });
});
