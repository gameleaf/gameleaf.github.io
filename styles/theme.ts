/* Shared styles for our site. */
class Theme {
    /* Reset the layout for all pages. */
    public static layoutReset: `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    `;

    public static body: {
        fontFamily: {
            system: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol"`;
            gameleafLogo: `"Roboto Slab"`;
        };
    };

    public static getDebugBorder() {
        return `border: 1px solid #000000;`;
    }
}

export default Theme;
