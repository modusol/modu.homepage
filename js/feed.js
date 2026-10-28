async function loadNewsFeed() {
  try {
    const response = await fetch('data/posts.json');
    const posts = await response.json();
    
    const container = document.getElementById('news-feed-container');
    if(!container) return;

    container.innerHTML = posts.map(post => `
      <div onclick="location.href='${post.link}'" class="bg-techdark-900/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-700 hover:-translate-y-1 transition duration-300 cursor-pointer">
        <img src="${post.thumbnail}" alt="${post.title}" class="w-full h-48 object-cover">
        <div class="px-2 py-6 lg:px-6">
          <span class="text-xs font-bold ${post.categoryColor} uppercase">${post.category}</span>
          <h3 class="text-lg font-bold text-white mt-2 mb-3">${post.title}</h3>
          <p class="text-sm text-slate-400 leading-relaxed mb-4">${post.summary}</p>
          <div class="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/80 pt-4">
            <span>작성자: ${post.author}</span>
            <span>등록일: ${post.date}</span>
            <!-- <span>조회수 ${post.views}</span> -->
          </div>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error("피드 데이터를 불러오는데 실패했습니다.", error);
  }
}

document.addEventListener('DOMContentLoaded', loadNewsFeed);