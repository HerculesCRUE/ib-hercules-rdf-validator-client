export function addCreateTextRangePolyfill() {

    /* The following code comes from: https://stackoverflow.com/questions/42213522/mocking-document-createrange-for-jest */
    global.Range = function Range() {
    };

    const createContextualFragment = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.children[0];
    };

    Range.prototype.createContextualFragment = (html) => createContextualFragment(html);

// HACK: Polyfil that allows codemirror to render in a JSDOM env.
    global.document.body.createTextRange = function () {
        return {
            setEnd: () => {
            },
            setStart: () => {
            },
            getBoundingClientRect: () => {
                return {right: 0};
            },
            getClientRects: () => [],
            createContextualFragment,
        };
    };

}