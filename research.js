const papers = [
    {
        title: 'Data Science',
        summary: '`Explore the Reserch paper about Data Science',
        link: 'https://books.google.co.in/books?hl=en&lr=&id=TiLEEAAAQBAJ&oi=fnd&pg=PT9&dq=data+science&ots=ZJrYjirMrT&sig=n4vet9D0aJze1uv3PhEx_OU4OS8&redir_esc=y#v=twopage&q&f=true' 
    },
    {
        title: 'Artificial intelligence in medicine',
        summary: 'Causability and explainability of artificial intelligence in medicine',
        link: 'https://wires.onlinelibrary.wiley.com/doi/epdf/10.1002/widm.1312' 
    },
    {
        title: 'Cryptocurrency Systems',
        summary: 'A Brief Survey of Cryptocurrency Systems',
        link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7906988' 
    },
    {
        title: 'The Future of Renewable Energy',
        summary: 'Analyzes trends in renewable energy sources and their implications.',
        link: 'https://example.com/renewable-energy' 
    },
    {
        title: 'Data Privacy in the Digital Age',
        summary: 'Focuses on challenges and legal frameworks surrounding data privacy.',
        link: 'https://example.com/data-privacy' 
    },
    {
        title: 'New Trends in Machine Learning',
        summary: 'Examines emerging techniques in machine learning and their applications.',
        link: 'https://example.com/machine-learning' 
    },
    {
        title: 'Sustainable Agriculture Practices',
        summary: 'Discusses innovative agricultural methods that promote sustainability.',
        link: 'https://example.com/sustainable-agriculture' 
    },
    {
        title: 'Sustainable Agriculture Practices',
        summary: 'Discusses innovative agricultural methods that promote sustainability.',
        link: 'https://example.com/sustainable-agriculture' 
    },
    {
        title: 'Sustainable Agriculture Practices',
        summary: 'Discusses innovative agricultural methods that promote sustainability.',
        link: 'https://example.com/sustainable-agriculture' 
    },
];

function displayPapers(paperList) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    paperList.forEach(paper => {
        const div = document.createElement('div');
        div.className = 'paper';
        div.innerHTML = `<strong><a href="${paper.link}" target="_blank">${paper.title}</a></strong><br>${paper.summary}`;
        resultsContainer.appendChild(div);
    });
}

function searchPapers() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredResults = papers.filter(paper => paper.title.toLowerCase().includes(query));

    // Sort results alphabetically by title
    filteredResults.sort((a, b) => a.title.localeCompare(b.title));

    displayPapers(filteredResults);
}

// Display all papers on initial load
window.onload = () => {
    displayPapers(papers);
};
