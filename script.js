let searchData = [];

// data.jsonを読み込む
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        searchData = data;
        displayResults(searchData); // 最初は全件表示
    });

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

// 入力するたびに検索する
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(keyword) || 
        item.description.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword)
    );
    displayResults(filtered);
});

// 結果を画面に表示する関数
function displayResults(items) {
    if (items.length === 0) {
        resultsDiv.innerHTML = '<p style="margin-top:20px;">一致するデータが見つかりませんでした。</p>';
        return;
    }
    resultsDiv.innerHTML = items.map(item => `
        <div class="item">
            <a href="${item.url}" target="_blank">${item.title}</a>
            <span class="category">${item.category}</span>
            <p>${item.description}</p>
        </div>
    `).join('');
}