// Stick this code into a <script></script> tag to load the font: Source Han Sans (Traditional).
class ChineseFonts {
    /*
    Source Han Sans Light
        font-family: source-han-sans-traditional, sans-serif;
        font-weight: 200;
        font-style: normal;

    Source Han Sans Medium
        font-family: source-han-sans-traditional, sans-serif;
        font-weight: 500;
        font-style: normal;

    Source Han Serif Light
        font-family: source-han-serif-tc, serif;
        font-weight: 300;
        font-style: normal;

    Source Han Serif Medium
        font-family: source-han-serif-tc, serif;
        font-weight: 500;
        font-style: normal;

    */

    public static getCSSForSans() {
        return `
            font-family: source-han-sans-traditional, sans-serif;
            font-weight: 200;
            font-style: normal;
        `;
    }

    public static getCSSForSerif() {
        return `
            font-family: source-han-serif-tc, serif;
            font-weight: 300;
            font-style: normal;
        `;
    }
}

export default ChineseFonts;
