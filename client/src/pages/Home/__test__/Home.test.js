import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Test the Home Component", () => {
    test("render the home page 2 buttons", async () => {
        render(<Home />);
        const buttonList = await screen.findAllByRole("button");
        // console.log(buttonList)
        expect(buttonList).toHaveLength(2)
    })
})