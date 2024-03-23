const query = document.getElementById('site-search');
const root = document.getElementById('root');

query.addEventListener('input', () => {
    CSS.highlights.clear();
    const str = query.value.trim().toLowerCase();
    if (!str) {
        return;
    }

    const treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

    const textNodes = [];
    let currentNode = treeWalker.nextNode();
    while (currentNode) {
        textNodes.push(currentNode);
        currentNode = treeWalker.nextNode();
    }

    const doneArr = [
        textNodes.map((arr) => {
            return arr.textContent;
        }),
    ];

    const result = doneArr.flat().join('').trim();



    const ranges = textNodes.map((node) => {
        const text = result;
        const indices = [];
        let startPos = 0;
        while (startPos < text.length) {
            const index = text.indexOf(str, startPos);
            if (index === -1) break;
            indices.push(index);
            startPos = index + str.length;
        }

        return indices.map((index) => {
            const range = new Range();
            range.setStart(node, index);
            range.setEnd(node, index + str.length);
            return range;
        });
    });

    const searchResultsHighlight = new Highlight(...ranges.flat());

    CSS.highlights.set('search-results', searchResultsHighlight);
});