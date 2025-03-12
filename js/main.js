// -----------------------------------------------------------------------------
// This file includes deliberate formatting errors in order for you to verify
// that ESLint and EditorConfig are working properly. If both tools are, indeed,
// working correctly, then you’d see errors in your editor about indentation and
// improper use of footmarks instead of back ticks. When you save this file,
// your editor should strip all excess newlines and whitespace characters from
// the file. If both of these events occur, then ESLint and EditorConfig are
// working correctly.
//
// DON’T PROCEED UNTIL YOU’RE SURE ESLINT AND EDITORCONFIG ARE WORKING CORRECTLY
// -----------------------------------------------------------------------------
window.onload = () => {
    alert(`Test`);
};

const fetchData = async () => {
    try {
        const response = await fetch(`json/data.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching JSON data:`, error);
        return null;
    }
};
