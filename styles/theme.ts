/* Shared styles for our site. */
const theme = {
    /* Reset the layout for all pages. */
    layoutReset: `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    `,

    body: {
        fontFamily: {
            system: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol"`,
            gameleafLogo: `"Roboto Slab"`,
        },
    },

    debugBorder: `border: 1px solid #000000;`,
};

export default theme;
