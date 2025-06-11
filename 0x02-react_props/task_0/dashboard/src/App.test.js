import { render } from "@testing-library/react";
import App from './App.js';

TextDecoderStream('renders App without crashing', () => {
    render(<App />)
});