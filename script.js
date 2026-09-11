const projects = [
  {
    id: "ards", category: "health", featured: true, index: "01", label: "Clinical ML",
    title: "烧伤患者 ARDS 临床风险预测系统",
    summary: "从 1,686 例真实临床数据出发，完成特征选择、15 类模型比较、可解释分析、外部验证与在线工具。",
    preview: "./assets/ards-report-collage.png", image: "./assets/ards-shap.png", metrics: [["AUC", "0.875"], ["外部验证", "200例"]],
    details: ["项目使用 Python、scikit-learn、XGBoost 与 SHAP，完成了 15 类模型的统一训练、比较和解释。", "LASSO、Boruta、RFE-SVM 等多种特征选择方法共同用于筛选稳定的临床预测变量。", "最终逻辑回归模型的 AUC 达到 0.875，并通过校准、DCA、Bootstrap 和 200 例外部数据验证其临床效用与泛化边界。"]
  },
  {
    id: "power", category: "climate", featured: true, index: "02", label: "Climate · Forecasting",
    title: "气象驱动的电力负荷预测",
    summary: "融合气象、节假日和历史负荷，用 VMD–IDBO–BiGRU–Attention 预测高负载变电站短期负载率。",
    preview: "./assets/power-report-collage.png", image: "./assets/power-forecast.png", metrics: [["最佳 R²", "0.885"], ["数据", "2.7M"]],
    details: ["项目使用 Python、VMD、IDBO、BiGRU 与 Attention 构建气象驱动的短期负荷预测网络。", "模型在 234 个变电站、约 270 万条小时级记录上联合利用气象、节假日和历史负荷特征。", "七个有效聚类的平均 R² 为 0.781，最佳聚类 R² 达到 0.885，可用于识别高负载站点的短期运行风险。"]
  },
  {
    id: "eroi", category: "science", index: "03", label: "Scientific Software",
    title: "eROI-LC 质谱预处理平台",
    summary: "将非结构化 LC-HRMS 原始信号转成可用于组分分析与分子网络的高质量标准矩阵。",
    visual: ["mzML", "动态分箱", "EIC 聚类", "GNPS"], metrics: [["核心模块", "11"], ["输出", "MGF/MAT"]],
    details: ["平台使用 Python 构建 mzML 解析、动态 m/z 分箱、时间重采样和 MAD 自适应降噪流水线。", "迭代 EIC 聚类、高分辨回溯及电荷态和加合离子识别将原始 LC-HRMS 信号整理为可分析特征。", "系统可直接导出 MGF、MAT 和 GNPS Feature Table，将质谱预处理与下游分子网络分析连成完整工作流。"]
  },
  {
    id: "minerals", category: "language", index: "04", label: "Language · Policy Intelligence",
    title: "关键矿产跨语言情报分析",
    summary: "融合政策、媒体、智库与中英文学术文献，量化美日澳关键矿产政策协同和议题演变。",
    preview: "./assets/minerals-report-collage.png", image: "./assets/minerals-network.png", metrics: [["文本", "7,392"], ["分析路线", "3"]],
    details: ["项目使用 Sentence Transformer、BERTopic、UMAP 和 HDBSCAN 对中英文政策、媒体、智库和学术文本进行语义聚类。", "PELT、CUSUM、KDE 与事件窗口检验用于识别政策密度变化和关键时间节点。", "NetworkX 与 Louvain 社区发现进一步构建关键词和机构网络，使 7,392 篇文本能够转化为可比较的政策协同、供应链与安全化指标。"]
  },
  {
    id: "irrigation", category: "climate", index: "05", label: "Climate · Reinforcement Learning",
    title: "双 Critic 灌溉优化系统",
    summary: "将三作物灌溉决策建模为一步 MDP，以双 Critic 拆分收益与惩罚，并通过 LP 修正现实约束。",
    image: "./assets/irrigation-benefit.png", metrics: [["状态维度", "21"], ["算法", "4"]],
    details: ["项目使用 PyTorch 构建双 Critic 一步强化学习模型，将经济收益与缺水惩罚分别估计。", "线性规划作为后处理模块修正作物面积、水资源和粮食安全等现实约束。", "OSTC-DP、OSTC-SAC 及单 Critic 消融实验共同验证了模型在不同来水情景下平衡收益与风险的能力。"]
  },
  {
    id: "eeg", category: "science", index: "06", label: "Multimodal Learning",
    title: "EEG–瞄准–扳机压力多模态预测",
    summary: "融合脑电、瞄准轨迹与扳机压力，系统比较深度时序模型及多种注意力和门控融合策略。",
    visual: ["EEG", "Aiming", "Pressure", "Score"], metrics: [["融合策略", "5+"], ["验证", "CV/Test"]],
    details: ["项目使用 PyTorch 对 TimesNet、TSMixer、LSTM 和 MLP 等时序模型进行统一训练与比较。", "Attention、Gated 和 Time-Adaptive 等融合模块联合建模 EEG、瞄准轨迹与扳机压力。", "交叉验证、独立测试和特征消融用于量化各模态的增益，并以 MAE、MAPE、R² 和置信区间评估泛化效果。"]
  },
  {
    id: "thz", category: "science", index: "07", label: "Sensing · Communications",
    title: "太赫兹雷达–RIS 波束训练",
    summary: "融合雷达感知和 RIS 信息预测最佳通信波束，降低传统穷举搜索的执行成本。",
    image: "./assets/thz-pipeline.svg", metrics: [["对比方法", "5"], ["交付", "MATLAB"]],
    details: ["项目使用 MATLAB 构建雷达感知与 RIS 信息融合的深度波束预测器和动态码本。", "实验系统比较了穷举、分层、纯雷达、信息融合和深度模型五类波束训练方案。", "消融、噪声鲁棒性和推理速度测试表明，该方法能够在保持预测精度的同时降低传统搜索的执行成本。"]
  },
  {
    id: "bapc", category: "health", index: "08", label: "Bayesian Statistics",
    title: "酒精性心肌病 BAPC 分析",
    summary: "基于 IHME GBD 2023 数据，估计中国酒精性心肌病的年龄、时期与出生队列相对风险。",
    image: "./assets/bapc-age.png", metrics: [["时间跨度", "1990–2023"], ["分组", "9"]],
    details: ["项目使用贝叶斯年龄–时期–队列模型与 MCMC 推断，分析 IHME GBD 2023 中 1990–2023 年的疾病负担数据。", "患病率、死亡率和 DALYs 分别按男性、女性及全人群建模，形成九组可比较的风险结果。", "零值平滑、异常率处理、边界保护和收敛诊断提高了估计稳定性，并输出年龄、时期、队列效应、RR 曲线及 DIC 汇总。"]
  },
  {
    id: "stocks", category: "finance", index: "09", label: "Financial Data Engineering",
    title: "股票行业数据处理与指标引擎",
    summary: "构建股票清洗、行业映射、财务数据处理和高级指标计算管线，为行情分析前端提供数据底座。",
    visual: ["原始行情", "行业映射", "指标计算", "GPU"], metrics: [["模块", "8+"], ["状态", "数据管线"]],
    details: ["项目使用 Python 构建股票行情清洗、行业映射、财务数据整理和高级指标计算管线。", "批处理控制器与 GPU 加速模块用于提升大规模行情和财务记录的处理效率。", "完整流水线测试确保各模块可以为后续的股票分析界面和选股策略提供一致的数据底座。"]
  },
  {
    id: "tea", category: "bio", index: "10", label: "Agricultural Remote Sensing",
    title: "茶叶多光谱色素含量反演",
    summary: "用多光谱植被指数估算茶叶叶绿素与类胡萝卜素，并以严格的数据划分比较线性、核方法和集成模型。",
    preview: "./assets/tea-model-collage.png", image: "./assets/tea-rf-a.png", metrics: [["ROI 样本", "372"], ["模型", "8"]],
    details: ["项目使用 Python、scikit-learn 与 XGBoost 比较 Ridge、SVR、随机森林、Bagging、GBR 等八类回归模型。", "65 个候选植被指数经训练集内相关性去冗余后保留 50 个，并以 372 个 ROI 级样本进行训练、验证和独立测试。", "结果识别了不同色素对应的较优模型，同时通过较低的测试集 R² 明确揭示现有多光谱特征的泛化上限。"]
  },
  {
    id: "acfault", category: "science", index: "11", label: "Predictive Maintenance",
    title: "空调系统故障提前预警",
    summary: "把压比限载故障从实时阈值报警升级为 30、60、120 分钟提前预测，并验证跨机组泛化能力。",
    preview: "./assets/ac-fault-collage.png", image: "./assets/ac-fault-auc.png", metrics: [["记录", "34,359"], ["工程特征", "100+"]],
    details: ["项目使用 Python、XGBoost、LightGBM、随机森林和 LSTM 构建设备故障提前预警模型。", "23 项原始传感器参数被扩展为 100 余项滞后、滚动、趋势、波动和交叉特征，并采用严格的时序切分避免数据泄漏。", "模型可分别预测未来 30、60 和 120 分钟的压比限载故障，并通过 SHAP 和跨机组验证解释前兆信号与泛化能力。"]
  },
  {
    id: "influenza", category: "health", index: "12", label: "Public Health · Time Series",
    title: "流感流行期自动识别",
    summary: "基于移动流行区间法识别不同纬度区的流感流行前、流行期与流行后阶段，并搜索最优阈值组合。",
    preview: "./assets/influenza-collage.png", image: "./assets/influenza-national.png", metrics: [["参数组合", "1,008"], ["纬度区", "4"]],
    details: ["项目使用 R 与 mem 包实现移动流行区间法，对 2009–2018 年周检出率序列进行自动划分。", "系统遍历四个纬度区、12 个流行年起始周和 21 个 i.param 取值，共评估 1,008 组参数组合。", "单峰和双峰序列均可自动处理，并通过敏感度、特异度和约登指数选择最优流行阈值。"]
  },
  {
    id: "wearable", category: "health", index: "13", label: "Measurement Validation",
    title: "可穿戴系统测量一致性验证",
    summary: "比较系统设备与医用脉氧仪的心率和血氧测量，在多种真实环境下评估一致性、系统偏差和比例偏差。",
    image: "./assets/wearable-agreement-collage.png", metrics: [["测试状态", "4"], ["信号", "HR / SpO₂"]],
    details: ["项目使用 Python 完成心率和血氧数据清洗、非参数 Bland–Altman 分析与结果可视化。", "静息、运动、室内和室外四种状态均采用百分位数法估计 95% 一致性界限。", "差值–均值回归与配对秩和检验进一步区分系统误差和比例偏差，从而验证设备在真实场景中的测量一致性。"]
  },
  {
    id: "valve", category: "science", index: "14", label: "Industrial Decision Support",
    title: "阀门维修与换新决策模型",
    summary: "从腐蚀、磨损、密封和使用条件中筛选关键因素，预测阀门应维修还是换新，并形成维护建议。",
    preview: "./assets/valve-collage.png", image: "./assets/valve-performance.png", metrics: [["阀门样本", "3,295"], ["核心因素", "16"]],
    details: ["项目使用 Python、随机森林和 GradientBoosting 分析 3,295 个阀门样本及 16 项维护因素。", "特征重要性与特征数量搜索用于筛选腐蚀、磨损、密封和使用条件中的关键变量。", "五特征方案在测试中取得 99.4% 准确率和 0.9986 AUC，并被转化为维修、换新、采购和库存建议。"]
  },
  {
    id: "spatial", category: "data", index: "15", label: "Spatial Econometrics",
    title: "城市内卷与数字经济空间计量",
    summary: "把企业级竞争指标投影到城市面板，构建多类空间权重矩阵，并分析数字经济与城市内卷的空间效应。",
    visual: ["企业指标", "城市投影", "空间矩阵", "面板回归"], metrics: [["城市", "285"], ["跨度", "2003–2022"]],
    details: ["项目使用 Python 构建 285 个城市、2003–2022 年的空间面板数据和城市内卷指标。", "邻接、地理距离和经济距离矩阵分别建模，并通过 Moran’s I、LM 和 Hausman 检验选择空间模型设定。", "城市个体与时间固定效应分析用于量化数字经济对城市内卷的直接影响和空间溢出效应。"]
  },
  {
    id: "lychee", category: "bio", index: "16", label: "Experimental Data Analysis",
    title: "荔枝预冷参数正交试验分析",
    summary: "比较预冷方式、温度和保湿方式对荔枝贮藏品质的影响，形成从时序指标到方差分析的完整证据链。",
    preview: "./assets/lychee-collage.png", image: "./assets/lychee-correlation.png", metrics: [["处理组合", "12"], ["核心指标", "7"]],
    details: ["项目使用 Python、pandas 和统计检验分析 10 个正交处理与 2 个对照组的贮藏实验。", "商品率、褐变、霉变、腐烂、失重和 TSS 被组织为时序指标，并结合 Pearson 相关和方差分析比较处理差异。", "结果识别出冷库预冷、10°C 和湿布湿果等优势组合，同时明确了对霉变率等指标影响不显著的边界。"]
  }
];

const grid = document.querySelector("#project-grid");
const count = document.querySelector("#project-count");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");

function visualMarkup(project, dialogMode = false) {
  const className = dialogMode ? "dialog-visual" : "project-media";
  const image = dialogMode ? project.image : (project.preview || project.image);
  if (image) return `<div class="${className}"><img src="${image}" alt="${project.title} 的结果可视化" loading="lazy"></div>`;
  return `<div class="${className}"><div class="visual-placeholder"><div class="pipeline">${project.visual.map((item, index) => `${index ? "<i>→</i>" : ""}<span>${item}</span>`).join("")}</div></div></div>`;
}

function renderProjects(filter = "all") {
  const visible = projects.filter(project => filter === "all" || project.category === filter);
  grid.innerHTML = visible.map(project => `
    <article class="project-card ${project.featured && filter === "all" ? "featured" : ""}" data-category="${project.category}">
      ${visualMarkup(project)}
      <div class="project-body">
        <div class="project-meta"><span>${project.label}</span><span>${project.index}</span></div>
        <h3>${project.title}</h3><p>${project.summary}</p>
        <div class="metric-strip">${project.metrics.map(([key,value]) => `<span><strong>${value}</strong>${key}</span>`).join("")}</div>
        <button class="card-action" data-project="${project.id}" type="button">查看实现细节 ↗</button>
      </div>
    </article>`).join("");
  count.textContent = `${visible.length} 个项目`;
}

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  dialogContent.innerHTML = `${visualMarkup(project, true)}<div class="dialog-text"><p class="section-no">${project.index} / ${project.label}</p><h2 id="dialog-title">${project.title}</h2><p>${project.summary}</p><ul class="detail-list">${project.details.map(item => `<li>${item}</li>`).join("")}</ul></div>`;
  dialog.showModal();
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderProjects(button.dataset.filter);
}));

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-project]");
  if (button) openProject(button.dataset.project);
});

document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

renderProjects();
