import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<Veiw />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
  test("displays button strike", () => {
    const display = render(<App />);
    display.getByText(/github/);
  });
  test('it renders First', () => {
		const display = render(<App />);
		display.getByTestId('submitButtonTest');
	});
});
