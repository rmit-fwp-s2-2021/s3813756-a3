import React from "react";
import Home from "./Home";
import { render , screen } from '@testing-library/react';

// The purpose of these simple tests below is to check if 
// the screen contains the placeholders or any relevant texts.

describe("Home.js", () => {
    it("Check Place holders", () => {
        render(<Home />);
        expect(screen.getAllByPlaceholderText('name'));
        expect(screen.getAllByPlaceholderText('meal'));
        expect(screen.getAllByPlaceholderText('date'));
        expect(screen.getAllByPlaceholderText('time'));
        expect(screen.getAllByPlaceholderText('guests'));
        expect(screen.getAllByPlaceholderText('Food preferences'));
        expect(screen.getAllByPlaceholderText('Special requests'));
    });
    it("Check Text", () => {
        render(<Home />);
        expect(screen.getByText('Reservation')).toBeInTheDocument();
        expect(screen.getByText("RESERVE TABLE"));
    });
});