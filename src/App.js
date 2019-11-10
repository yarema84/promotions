import React from "react";
import Promotions from "./pages/Promotions";
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import media from "./utils/media";

const theme = {
	color: {
		default: "#FFFFFF",
		primary: "#8697A2",
		bg: "#1F262F",
		darkBg: "#1A212A",
		border: "#FFAB00",
		btn: "#0CD664",
		btnHover: "#00E865"
	},
	...media
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				<Promotions/>
			</>
		</ThemeProvider>
	);
}

export default App;
