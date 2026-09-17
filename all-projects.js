const archiveGrid = document.querySelector("#archive-grid");
const archiveSearch = document.querySelector("#archive-search");
const archiveCount = document.querySelector("#archive-result-count");
const archiveTotal = document.querySelector("#archive-total");
const archiveEmpty = document.querySelector("#archive-empty");

const categoryLabels = {
  llm: "大模型与智能体",
  gen: "生成与多模态",
  health: "医疗健康",
  bio: "生物化学",
  climate: "气象能源",
  finance: "金融商业",
  science: "智能系统与工程",
  data: "数据分析"
};

let projects = [];
let activeFilter = "all";

function renderArchive() {
  const query = archiveSearch.value.trim().toLowerCase();
  const visible = projects.filter(project => {
    const matchesCategory = activeFilter === "all" || project.category === activeFilter;
    const matchesQuery = !query || project.description.toLowerCase().includes(query) || categoryLabels[project.category].toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  archiveGrid.innerHTML = visible.map(project => `
    <article class="archive-card">
      <small>${categoryLabels[project.category]}</small>
      <p>${project.description}</p>
    </article>`).join("");

  archiveCount.textContent = `显示 ${visible.length} / ${projects.length} 个项目`;
  archiveEmpty.hidden = visible.length !== 0;
}

fetch("./assets/archive-projects.json")
  .then(response => {
    if (!response.ok) throw new Error("项目描述载入失败");
    return response.json();
  })
  .then(data => {
    projects = data;
    archiveTotal.textContent = projects.length;
    renderArchive();
  })
  .catch(() => {
    archiveCount.textContent = "项目描述暂时无法载入";
    archiveEmpty.hidden = false;
    archiveEmpty.textContent = "请刷新页面后重试。";
  });

archiveSearch.addEventListener("input", renderArchive);
document.querySelector("#archive-filters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".archive-filter").forEach(item => item.classList.toggle("active", item === button));
  renderArchive();
});
