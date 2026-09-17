const projects = [
  {
    id: "llm-mcts", category: "llm", index: "01", label: "LLM · Agents",
    title: "LLM + MCTS 检索增强智能体",
    summary: "把大模型策略、蒙特卡洛树搜索和 RAG 专家轨迹接到同一套探索循环里，让智能体在长程任务中可规划、可回放。",
    visual: ["LLM Policy", "MCTS", "RAG 轨迹", "Belief"], metrics: [["核心模块", "4"], ["搜索", "MCTS"]],
    details: ["项目用大模型生成先验策略，再以 MCTS 在动作空间里做前瞻搜索，而不是单步贪心解码。", "RAG 检索库保存专家轨迹，搜索时用来校正信念状态和剪枝明显差的分支。", "探索器、引导智能体和轨迹回放脚本构成完整闭环，适合展示长程决策而不是聊天封装。"]
  },
  {
    id: "minerals", category: "llm", featured: true, index: "02", label: "LLM · Policy Intelligence",
    title: "关键矿产跨语言情报分析",
    summary: "融合政策、媒体、智库与中英文学术文献，量化美澳关键矿产政策协同和议题演变。",
    preview: "./assets/minerals-report-collage.png", image: "./assets/minerals-network.png", metrics: [["文本", "7,392"], ["分析路线", "3"]],
    details: ["项目使用 Sentence Transformer、BERTopic、UMAP 和 HDBSCAN 对中英文政策、媒体、智库和学术文本进行语义聚类。", "PELT、CUSUM、KDE 与事件窗口检验用于识别政策密度变化和关键时间节点。", "NetworkX 与 Louvain 社区发现进一步构建关键词和机构网络，使 7,392 篇文本转化为可比较的政策协同与供应链指标。"]
  },
  {
    id: "spatialrgpt", category: "llm", index: "03", label: "Vision–Language · Spatial",
    title: "SpatialRGPT 空间视觉问答",
    summary: "把大模型接到 RGB 与空间视觉输入上，让模型在场景里回答位置、关系和区域描述，而不只做图像分类。",
    visual: ["RGB", "Spatial tokens", "LLaMA", "区域问答"], metrics: [["骨干", "LLaMA"], ["输入", "RGB + 空间"]],
    details: ["项目在 SpatialRGPT 框架上组织 RGB 图像、空间 token 和大模型对齐训练。", "训练脚本覆盖 LLaMA 权重准备、多模态投影和指令微调，目标是空间关系而不是开放聊天。", "和普通 VQA 相比，难点在区域定位、三维关系和语言输出必须同时对齐。"]
  },
  {
    id: "qvlm", category: "llm", index: "04", label: "Vision–Language Model",
    title: "QVLM / LLaVA 多模态微调",
    summary: "在 LLaVA 1.5 与 QVLM 上做视觉指令微调，用混合验证集检查图文对齐和开放视觉问答质量。",
    visual: ["图像编码", "投影层", "LLM 解码", "VQA"], metrics: [["基座", "LLaVA-1.5"], ["验证", "混合 jsonl"]],
    details: ["项目同时保留 QVLM 与 LLaVA 工程，用来对比不同视觉语言对齐方式。", "混合验证 jsonl 覆盖描述、定位和多轮问答，而不是单一 caption 指标。", "交付重点是可复现的微调与评测流程，而不是再包一层聊天界面。"]
  },
  {
    id: "refseg", category: "llm", featured: true, index: "05", label: "Vision–Language · Segmentation",
    title: "Qwen3-VL 指代表达分割",
    summary: "在 Qwen3-VL-2B 上接入 Seg Expert，让模型根据自然语言描述定位并分割图像目标。",
    image: "./assets/refseg-sample.png", metrics: [["平均 IoU", "0.524"], ["最高 IoU", "0.926"]],
    details: ["项目使用 Qwen3-VL、Qwen-ViT 与 PyTorch 把指称表达式接到分割专家头上。", "模型必须同时理解开放词汇描述和像素级边界，而不是只输出检测框。", "在 RefCOCO 验证样本上平均 IoU 为 0.524、最高 0.926，并保留失败案例用于分析语言歧义。"]
  },
  {
    id: "llm-kg", category: "llm", index: "06", label: "LLM · Knowledge Graph",
    title: "大模型流程解析与 Neo4j 图谱",
    summary: "用大模型做指代消解和 BPMN 网关识别，再把实体关系写入 Neo4j，形成可查询的流程知识图谱。",
    visual: ["文档", "指代消解", "网关抽取", "Neo4j"], metrics: [["图数据库", "Neo4j 5.19"], ["任务", "抽取 + 入库"]],
    details: ["token 分类和指代消解模块先把流程文本拆成可对齐的实体与事件。", "大模型提示词专门处理 XOR / AND 等网关逻辑，避免把控制流写成普通三元组。", "json2neo4j 与图生成脚本把结果落进 Neo4j，可用 Cypher 回溯决策路径。"]
  },
  {
    id: "bart-kg", category: "llm", index: "07", label: "LLM · Graph Neural Nets",
    title: "BART + 知识图谱生成",
    summary: "把 GAT 编码的知识图谱节点接到 BART 编码器，让生成过程能引用结构化事实而不是只靠文本上下文。",
    visual: ["KG 节点", "GAT", "BART", "条件生成"], metrics: [["编码器", "GAT + BART"], ["任务", "KG-to-Text"]],
    details: ["图注意力网络先对实体邻域做消息传递，再把节点表示注入 BART。", "生成端需要在流畅性和事实约束之间折中，避免编造图谱中不存在的关系。", "工程包含独立的模型、检查点和数据集目录，便于做有无图谱的消融。"]
  },
  {
    id: "dissemination", category: "llm", index: "08", label: "LLM · Text Dynamics",
    title: "科幻与媒体议题传播分析",
    summary: "对科幻文本、论文、主流媒体和社交媒体语料做主题与传播路径分析，观察同一议题如何跨圈层扩散。",
    visual: ["多源语料", "主题聚类", "传播路径", "可视化"], metrics: [["语料源", "4"], ["输出", "路径图"]],
    details: ["预处理把四类语料统一到可比较的文档-主题空间，而不是混在同一个词袋里。", "传播分析同时看时间顺序和媒介跳转，用来区分原创议题和二次转写。", "可视化脚本输出圈层扩散图，适合展示文本模型如何服务媒介研究而不是情感打分。"]
  },
  {
    id: "mv-vton", category: "gen", index: "09", label: "Generative · Virtual Try-on",
    title: "MV-VTON 多视角虚拟试衣",
    summary: "用多视角生成网络把服装映射到人体，处理视角变化、遮挡和纹理一致性，而不是单张正面换装。",
    visual: ["多视角人像", "服装编码", "视角模块", "试衣结果"], metrics: [["任务", "VTON"], ["难点", "多视角一致"]],
    details: ["视角模块和数据增强用来稳住侧面、背面和局部遮挡下的服装几何。", "损失函数同时约束外观相似和跨视角一致性，避免每张图各生成一套衣服。", "这是高难度条件生成，目标是跨视角衣服同一件，而不是滤镜拼接。"]
  },
  {
    id: "chiller-gen", category: "climate", index: "10", label: "Generative · Time Series",
    title: "冷水机组运行数据生成模型",
    summary: "在真实冷水机组时序上比较 Diffusion、VAE 和 WGAN，并用 Optuna 搜索能复现工况分布的生成器。",
    visual: ["工况序列", "Diffusion", "VAE", "WGAN"], metrics: [["模型", "3"], ["调参", "Optuna"]],
    details: ["生成目标是传感器工况分布，而不是像素图像，因此要同时看边缘分布和时序依赖。", "三套模型各自独立训练和调参，最后在同一套处理后的机组数据上对比。", "结果用于补充稀有故障工况，而不是做无约束随机生成。"]
  },
  {
    id: "uvit", category: "gen", index: "11", label: "Generative · Vision Backbone",
    title: "U-ViT 扩散与 Retinex / RMT 视觉栈",
    summary: "把 U-ViT 扩散生成、Diff-Retinex 低光增强和 RMT 检测分割放到同一套视觉实验栈里对照。",
    visual: ["U-ViT", "Retinex", "RMT", "下游任务"], metrics: [["子系统", "3"], ["任务", "生成 / 增强 / 检测"]],
    details: ["U-ViT 用 ViT 做扩散主干，检验 Transformer 在生成任务上的可扩展性。", "Diff-Retinex 单独处理低光分解，RMT 则承担分类、检测和分割。", "三套工程并列，用来说明生成、增强和识别可以共享数据但不共享评价标准。"]
  },
  {
    id: "sd-sim", category: "gen", index: "12", label: "Generative · Attention Control",
    title: "Stable Diffusion 注意力编辑",
    summary: "在推理过程中记录并修正 SIM 注意力响应，用来分析真实图像编辑每一步的空间控制是否生效。",
    visual: ["原图", "Attention", "逐步去噪", "编辑结果"], metrics: [["模型", "Stable Diffusion"], ["输出", "逐步对照"]],
    details: ["系统在去噪循环里插入注意力探针，而不是只看最终一张图。", "布局引导和注意力修正用来检查物体是否出现在指定区域。", "逐步可视化让失败可定位到某一层、某一步，而不是笼统说生成不好。"]
  },
  {
    id: "pinn", category: "science", index: "13", label: "Scientific Machine Learning",
    title: "工业产率 PINN 建模与诊断",
    summary: "把指数衰减机理写入神经网络损失，分析物理约束、参数塌缩与泛化之间的权衡。",
    image: "./assets/pinn-prediction.png", metrics: [["过程记录", "30K"], ["过程特征", "16"]],
    details: ["项目使用 PyTorch 把指数衰减及其微分约束写进双网络训练，而不是事后用公式去拟合残差。", "诊断重点是参数 a、b、c 会不会塌缩成常数，以及物理项过强时测试集如何变差。", "测试集 R² 约 0.50 被如实保留，用来说明机理约束和数据拟合并不自动互相成就。"]
  },
  {
    id: "materials", category: "science", index: "14", label: "Scientific ML · Materials",
    title: "分子动力学迁移学习本构模型",
    summary: "从分子动力学轨迹学习有限应变下的弹性响应，再迁移到拉伸、压缩和多向剪切的宏观本构预测。",
    visual: ["MD 轨迹", "迁移学习", "能量面", "弹性常数"], metrics: [["加载路径", "9+"], ["输出", "Cij / 能量"]],
    details: ["训练数据覆盖拉伸、压缩和正负剪切等多条加载路径，而不是单一单轴曲线。", "模型要同时给出能量面和弹性常数，并接受 Hessian / 自动微分检查。", "难点在有限应变下保持物理对称性和迁移稳定性，属于材料和科学计算交叉。"]
  },
  {
    id: "cosmx", category: "bio", index: "15", label: "Spatial Omics",
    title: "CosMx 空间转录组细胞分割",
    summary: "在同一 FOV 上对比 Cellpose、StarDist、Baysor 和 ComSeg，评估空间转录组细胞边界的一致性。",
    visual: ["FOV 图像", "四套分割", "合并评估", "细胞边界"], metrics: [["方法", "4"], ["数据", "CosMx zarr"]],
    details: ["四套算法的假设完全不同：深度学习轮廓、星凸形状、转录本聚类和组合分割。", "同一 FOV 对齐后才能比较谁在拥挤组织里少切、多切或漏切。", "这是空间组学预处理里最难的一步，直接决定下游细胞类型分析是否可信。"]
  },
  {
    id: "spod", category: "science", index: "16", label: "Scientific Computing · Fluids",
    title: "流场 POD / SPOD 与复值 ICA",
    summary: "对速度场做正交分解、谱 POD 和复值独立成分分析，再结合 Hilbert-Huang 变换提取相干结构。",
    visual: ["u / v 场", "POD", "SPOD", "cICA + HHT"], metrics: [["分解", "4"], ["实现", "MATLAB"]],
    details: ["POD 抓能量主导结构，SPOD 再按频率把相干模态分开，避免把不同周期混在一个模态里。", "复值 ICA 和 HHT 用来处理非平稳、非正交的流动结构。", "输出是可对照的流场图像，而不是只报一组特征值。"]
  },
  {
    id: "brats", category: "health", index: "17", label: "Medical Imaging · Transformers",
    title: "CNN-Transformer 脑肿瘤多模态分割",
    summary: "在 BraTS2018 上融合多模态 MRI，用 CNN-Transformer 做肿瘤亚区分割，并做模态消融。",
    visual: ["多模态 MRI", "CNN-Trans", "模态消融", "Dice"], metrics: [["数据", "BraTS2018"], ["结构", "CNN + Transformer"]],
    details: ["模型同时吃 T1、T1ce、T2、FLAIR，要在缺失某一模态时仍然给出可用分割。", "模态消融和参数量统计用来证明 Transformer 分支不是只在堆参数。", "公开挑战数据让结果可复核，也把难度放在多模态对齐和边界上，而不是私有病历。"]
  },
  {
    id: "dscript", category: "bio", index: "18", label: "Computational Biology",
    title: "D-SCRIPT 蛋白质相互作用预测",
    summary: "用深度序列模型预测人类蛋白相互作用，再对全蛋白矩阵做命名对齐和结果后处理。",
    visual: ["蛋白序列", "D-SCRIPT", "交互矩阵", "后处理"], metrics: [["对象", "Human proteome"], ["输出", "成对得分"]],
    details: ["模型从序列直接估计相互作用可能性，不依赖已有结构对接。", "全矩阵预测后还要处理蛋白标识、列名映射和阈值筛选，否则无法和生物学名单对齐。", "日志和后处理脚本说明这是一条可重复的计算生物学流水线。"]
  },
  {
    id: "eroi", category: "bio", index: "19", label: "Scientific Software",
    title: "eROI-LC 质谱预处理平台",
    summary: "将非结构化 LC-HRMS 原始信号转成可用于组分分析与分子网络的高质量标准矩阵。",
    visual: ["mzML", "动态分箱", "EIC 聚类", "GNPS"], metrics: [["核心模块", "11"], ["输出", "MGF/MAT"]],
    details: ["平台使用 Python 构建 mzML 解析、动态 m/z 分箱、时间重采样和 MAD 自适应降噪流水线。", "迭代 EIC 聚类、高分辨回溯及电荷态和加合离子识别将原始信号整理为可分析特征。", "系统可直接导出 MGF、MAT 和 GNPS Feature Table，把预处理与分子网络连成完整工作流。"]
  },
  {
    id: "irrigation", category: "climate", index: "20", label: "RL · Resource Allocation",
    title: "双 Critic 灌溉优化系统",
    summary: "将三作物灌溉决策建模为一步 MDP，以双 Critic 拆分收益与惩罚，并通过线性规划修正现实约束。",
    image: "./assets/irrigation-benefit.png", metrics: [["状态维度", "21"], ["算法", "4"]],
    details: ["项目使用 PyTorch 构建双 Critic 一步强化学习模型，将经济收益与缺水惩罚分别估计。", "线性规划作为后处理模块修正作物面积、水资源和粮食安全等现实约束。", "OSTC-DP、OSTC-SAC 及单 Critic 消融共同验证模型在不同来水情景下平衡收益与风险的能力。"]
  },
  {
    id: "thz", category: "science", index: "21", label: "RL · Communications",
    title: "太赫兹雷达–RIS 波束训练",
    summary: "融合雷达感知和 RIS 信息预测最佳通信波束，降低传统穷举搜索的执行成本。",
    image: "./assets/thz-pipeline.svg", metrics: [["对比方法", "5"], ["交付", "MATLAB"]],
    details: ["项目构建雷达感知与 RIS 信息融合的深度波束预测器和动态码本。", "实验比较穷举、分层、纯雷达、信息融合和深度模型五类方案。", "消融、噪声鲁棒性和推理速度测试表明，该方法能在保持精度的同时降低搜索成本。"]
  },
  {
    id: "valve", category: "science", index: "22", label: "Industrial Decision Support",
    title: "阀门维修与换新决策模型",
    summary: "从腐蚀、磨损、密封和使用条件中筛选关键因素，预测阀门应维修还是换新，并形成维护建议。",
    preview: "./assets/valve-collage.png", image: "./assets/valve-performance.png", metrics: [["阀门样本", "3,295"], ["核心因素", "16"]],
    details: ["项目使用随机森林和梯度提升分析 3,295 个阀门样本及 16 项维护因素。", "特征数量搜索用来找腐蚀、磨损、密封和使用条件中真正起作用的变量。", "模型输出被转成维修、换新、采购和库存建议，而不是停在分类准确率。"]
  },
  {
    id: "evidence", category: "data", index: "23", label: "Cognitive · Sequential Models",
    title: "多输出序贯证据积累模型",
    summary: "把决策过程建成证据随时间累积的多输出模型，用来解释选择、反应时和中间信念如何一起变化。",
    visual: ["证据流", "累积过程", "多输出头", "轨迹可视化"], metrics: [["输出", "多任务"], ["形式", "序贯"]],
    details: ["模型和普通分类器的差别在于：它必须生成一条随时间演化的证据轨迹。", "多输出头同时拟合选择结果和过程变量，避免只拟合最终标签。", "可视化脚本把累积曲线画出来，便于检查模型是否真的在“积累”而不是一步跳到结论。"]
  },
  {
    id: "robot", category: "science", index: "24", label: "Robotics · Perception",
    title: "机器人姿态感知与动作规划",
    summary: "用 YOLO 姿态估计和动作分类识别同轴操作，再把感知结果接到 MoveIt 做运动规划。",
    visual: ["姿态估计", "动作分类", "MoveIt", "执行"], metrics: [["模块", "感知 + 规划"], ["检测", "YOLO Pose"]],
    details: ["视觉端先估计关键点，再判定当前是哪一类同轴或协作动作。", "规划端用 MoveIt 把识别结果变成可执行轨迹，而不是停在离线视频打标签。", "评估脚本同时看分类结果和规划是否能在真实约束下走通。"]
  },
  {
    id: "bapc", category: "health", index: "25", label: "Bayesian Statistics",
    title: "酒精性心肌病 BAPC 分析",
    summary: "基于公开的 IHME GBD 2023 数据，估计酒精性心肌病的年龄、时期与出生队列相对风险。",
    image: "./assets/bapc-age.png", metrics: [["时间跨度", "1990–2023"], ["分组", "9"]],
    details: ["项目使用贝叶斯年龄–时期–队列模型与 MCMC，分析 1990–2023 年公开疾病负担数据。", "患病率、死亡率和 DALYs 分别按男性、女性和全人群建模，形成九组可比较结果。", "零值平滑、边界保护和收敛诊断用于稳住估计，并输出 RR 曲线与 DIC。"]
  },
  {
    id: "influenza", category: "health", index: "26", label: "Public Health · Time Series",
    title: "流感流行期自动识别",
    summary: "基于移动流行区间法识别不同纬度区的流感流行前、流行期与流行后阶段，并搜索最优阈值组合。",
    preview: "./assets/influenza-collage.png", image: "./assets/influenza-national.png", metrics: [["参数组合", "1,008"], ["纬度区", "4"]],
    details: ["项目使用 R 与 mem 包对 2009–2018 年周检出率序列做自动划分。", "系统遍历四个纬度区、12 个流行年起始周和 21 个 i.param，共评估 1,008 组参数。", "单峰和双峰序列均可处理，最终按敏感度、特异度和约登指数选阈值。"]
  },
  {
    id: "spatial", category: "data", index: "27", label: "Spatial Econometrics",
    title: "城市内卷与数字经济空间计量",
    summary: "把企业级竞争指标投影到城市面板，构建多类空间权重矩阵，并分析数字经济与城市内卷的空间效应。",
    visual: ["企业指标", "城市投影", "空间矩阵", "面板回归"], metrics: [["城市", "285"], ["跨度", "2003–2022"]],
    details: ["项目构建 285 个城市、2003–2022 年的空间面板和城市内卷指标。", "邻接、地理距离和经济距离矩阵分开建模，并用 Moran’s I、LM 和 Hausman 选择设定。", "城市个体与时间固定效应用来分离直接影响和空间溢出。"]
  },
  {
    id: "esn", category: "data", index: "28", label: "Dynamical Systems · Forecasting",
    title: "ESN 五万步递归预测",
    summary: "用双层回声状态网络做超长程递归预测，并把谱半径、泄漏率和正则系数交给贝叶斯优化。",
    visual: ["储备池", "双层 ESN", "贝叶斯优化", "长程滚动"], metrics: [["递归步数", "50,000+"], ["调参", "Bayesian"]],
    details: ["普通 ESN 在几千步后就会漂，这里把递归目标拉到五万步以上。", "双层储备池用来同时保持短期响应和长期记忆。", "贝叶斯优化搜索谱半径、泄漏率和 alpha，避免手工网格爆掉。"]
  },
  {
    id: "genomic-sem", category: "bio", index: "29", label: "Statistical Genetics",
    title: "多表型遗传相关与 Genomic SEM",
    summary: "使用 LDSC 和 Genomic SEM 分析多表型遗传相关结构，并生成遗传力、相关矩阵和因子 GWAS 图表。",
    visual: ["GWAS 汇总", "LDSC", "Genomic SEM", "因子 GWAS"], metrics: [["流程", "R"], ["输出", "GWAS / SEM"]],
    details: ["R 流程覆盖数据准备、遗传相关估计、结构方程建模、因子 GWAS 和可视化。", "LDSC 先给出遗传力和两两相关，SEM 再检验潜在因子是否解释这些相关。", "全部基于公开汇总统计量，不依赖个体基因型原文。"]
  },
  {
    id: "acfault", category: "climate", index: "31", label: "Predictive Maintenance",
    title: "空调系统故障提前预警",
    summary: "把压比限载故障从实时阈值报警升级为 30、60、120 分钟提前预测，并验证跨机组泛化能力。",
    preview: "./assets/ac-fault-collage.png", image: "./assets/ac-fault-auc.png", metrics: [["记录", "34,359"], ["工程特征", "100+"]],
    details: ["项目使用 XGBoost、LightGBM、随机森林和 LSTM 做设备故障提前预警。", "23 项原始传感器被扩展为 100 余项滞后、滚动和交叉特征，并严格按时间切分。", "模型分别预测未来 30、60 和 120 分钟的压比限载，再用 SHAP 和跨机组验证看前兆是否可迁移。"]
  },
  {
    id: "sse-mcs", category: "finance", index: "32", label: "Quant · Model Comparison",
    title: "上证指数波动建模与 MCS 比较",
    summary: "对上证指数收益和已实现波动建模，再用模型置信集比较多套预测方法，给出在统计上站得住的排序。",
    visual: ["行情与宏观因子", "波动率模型", "样本外预测", "MCS 排序"], metrics: [["对象", "上证指数"], ["比较", "MCS"]],
    details: ["项目同时拟合收益预测和已实现波动，而不是只做一条点预测曲线。", "HAR-RV 等波动率设定和机器学习模型放在同一套滚动窗口里比较。", "模型置信集用来剔除明显更差的方法，避免只看单一 RMSE 就宣布胜负。"]
  },
  {
    id: "copper-trade", category: "finance", index: "33", label: "Trade Network · GNN",
    title: "铜矿贸易网络与风险预测",
    summary: "用出口地经纬度和贸易额建成铜矿上游网络，再用图神经网络估计节点风险，而不是把每笔贸易当成独立样本。",
    visual: ["出口节点", "贸易边", "GNN", "风险得分"], metrics: [["商品", "铜矿上游"], ["年份", "2010"]],
    details: ["网络边权来自贸易额，节点位置来自出口经纬度，用来保留地理邻近和贸易集中度。", "图神经网络在邻域上传风险信号，识别易受冲击的枢纽，而不是只看单国总量。", "结果同时给出网络结构和节点风险，便于对照供应链集中在哪些环节。"]
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

function visualRank(project) {
  const src = project.preview || project.image || "";
  if (!src) return 100;
  const order = ["refseg-sample", "minerals", "influenza", "ac-fault", "valve", "irrigation", "pinn", "bapc", "thz"];
  const index = order.findIndex(key => src.includes(key));
  return index === -1 ? 50 : index;
}

function renderProjects(filter = "all") {
  let visible = projects.filter(project => filter === "all" || project.category === filter);
  if (filter === "all") visible = [...visible].sort((a, b) => visualRank(a) - visualRank(b));
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
