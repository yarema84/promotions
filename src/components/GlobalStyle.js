import React from "react";
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
    ${normalize}

    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
  	html {
		font-family: 'Roboto Slab', serif;
		-ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
	}

	body {
		margin: 0;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	menu,
	nav,
	section,
	summary {
		display: block;
    }
    audio,
    canvas,
    progress,
    video {
	    display: inline-block; /* 1 */
	    vertical-align: baseline; /* 2 */
    }

    audio:not([controls]) {
        display: none;
        height: 0;
    }

    [hidden],
    template {
	    display: none;
    }

    a {
        background-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    a:active,
    a:hover,
    a:focus,
    button {
	    outline: 0;
    }

    abbr[title] {
	    border-bottom: 1px dotted;
    }

    b,
    strong {
	    font-weight: bold;
    }

    dfn {
	    font-style: italic;
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    mark {
        background: #ff0;
        color: #000;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sup {
        top: -0.5em;
    }

    sub {
        bottom: -0.25em;
    }

    img {
        border: 0;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    figure {
        margin: 1em 40px;
    }

    hr {
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        height: 0;
    }

    pre {
        overflow: auto;
    }

    code,
    kbd,
    pre,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit; /* 1 */
        font: inherit; /* 2 */
        margin: 0; /* 3 */
    }

    button {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    html input[type="button"], /* 1 */
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: button; /* 2 */
        cursor: pointer; /* 3 */
    }

    button[disabled],
    html input[disabled] {
        cursor: default;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    input {
        line-height: 1.2;
    }

    input[type="checkbox"],
    input[type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    input[type="search"] {
        -webkit-appearance: textfield; /* 1 */
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box; /* 2 */
        box-sizing: content-box;
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
    }

    legend {
        border: 0; /* 1 */
        padding: 0; /* 2 */
    }

    textarea {
        overflow: auto;
    }

    optgroup {
        font-weight: bold;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    td,
    th {
        padding: 0;
    },
`