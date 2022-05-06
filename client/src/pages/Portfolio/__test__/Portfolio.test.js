import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import renderer from "react-test-renderer"
import '../Portfolio'
import Modal from "../../../components/Modal/Modal";
import Portfolio from "../Portfolio";

describe("preview modal", () => {
    it('should render when "learn more" button is clicked', () => {
        let component = renderer.create(<Portfolio />)

    })
})