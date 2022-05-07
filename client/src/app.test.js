import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "./App";
import Home from "./pages/Home/Home";

test("renders home component", () => {
    const component = render(<Home />)
    const childElement = component.getByText("Harman Khera")
    expect(childElement).toBeInTheDocument()
})