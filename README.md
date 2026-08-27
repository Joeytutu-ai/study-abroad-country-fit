# Study Abroad Country Fit

[中文](#中文) | [English](#english)

An agent skill that narrows 13 study destinations to the 3 worth pursuing for a particular applicant. It evaluates degree path, full-program budget, language, academic readiness, career direction, life needs, and risk tolerance together. Then it rules out direct conflicts, weighs the remaining fit, verifies decision-changing facts, and shows why each destination made the list.

## 中文

### 找到值得申请的3个留学目的地

这个skill解决的是“我的条件下，哪3个留学目的地最值得申请”。它把学历、预算、语言、职业、生活需求和风险偏好一起纳入判断，再把个人情况拆成可比较的约束和偏好，逐项核验。

它先确认用户的学历路径、目标专业方向、入学时间、成绩与申请准备度，再结合整个学制的预算、语言、职业目标、家庭或照护安排、生活适应和风险承受度，排除直接冲突的目的地。剩下的候选按权重评分，最后只输出Top3。

### 怎么匹配

|测评维度|默认权重|具体看什么|
|---|---:|---|
|留学目标与学历路径|20%|当前学历能否衔接目标学位、学制与入学时间是否合适|
|预算与资金压力|20%|整个学制的学费、生活费、必缴费用和已确认资助，不只看一年学费|
|职业与长期规划|20%|目标行业、回国或当地发展的优先级、博士后的学术或产业方向|
|学术背景与申请匹配|15%|成绩、课程、研究或项目经历与目标学习方向的衔接|
|语言与申请准备度|10%|授课语言、语言成绩、材料和申请节奏是否匹配|
|生活适应与必要支持|10%|城市偏好、气候、文化、陪同、照护、无障碍和医疗可及性需求|
|风险偏好与不可接受条件|5%|对成本、竞争、时间和政策变化的承受度，以及明确不能接受的条件|

默认权重只是起点。用户把职业、成本、回国、科研或体验排在更前面时，skill会重配权重并记录理由。

匹配分4步进行：

1. 逐项补齐会影响排序的信息，直到能够区分Top3。
2. 先筛硬条件。学历衔接、授课语言、全学制必要成本、入学时间和明确禁忌有直接冲突时，不让其他偏好抵消。
3. 对剩余候选按上述维度评分。费用统一按“整个学制必要总成本”比较；项目、城市和学制差异会进入判断。
4. 核验会改变排序的事实。政策、项目、费用和资格以官方一手信息为主；跨目的地比较可补充方法公开、可追溯的权威数据。每个Top3结果都会写明证据、取舍、排名敏感项和置信度。

### 覆盖范围

- 目的地：英国、澳大利亚、加拿大、美国、新加坡、日本、韩国、马来西亚、新西兰、瑞士、德国、法国，以及中国香港特别行政区。
- 路径：高中升本科、本科升硕士、硕士升博士、成人再教育与职业转型。
- 联网：以主管机构、官方国际教育门户、院校官网、公共资助机构与官方统计为首要证据；必要时补充方法公开、可追溯的权威国际组织、专业认证机构、学术数据库或公共数据集。

### 安装到任意兼容Agent

克隆或下载本仓库后，将整个`study-abroad-country-fit`目录复制到目标Agent的skill目录。不要只复制`SKILL.md`，因为`references/`、`examples/`和`scripts/`是完整资产的一部分。

```bash
git clone https://github.com/Joeytutu-ai/study-abroad-country-fit.git
cp -R study-abroad-country-fit <your-agent-skills-root>/
```

例如，Codex通常使用`~/.codex/skills/`；其他Agent请使用其文档指定的skill目录。安装后按该Agent的刷新方式重新加载skills。

### 使用方式

将下列请求交给已安装该skill的Agent：

```text
请根据我的情况，使用study-abroad-country-fit，为我匹配最适合的留学国家/地区Top3。
```

它会逐项补齐会改变排序的信息，并返回每个目的地的：匹配原因、关键得分维度、主要取舍、排名敏感项、来源链接和置信度。

### 数据口径

- 费用统一比较“整个学制的必要总成本区间”，而不是只比较单年学费。
- 对政策、资格、项目、费用和时间要求，优先使用官方一手信息。
- 对宏观比较可使用可追溯的权威补充数据，但不能覆盖冲突的一手官方结论。
- 对个人签证、居留、资助、医疗或无障碍资格，只解释公开规则与待核验点，不替主管机构作个案决定。

详见[来源政策](references/data-source-policy.md)和[匹配方法](references/matching-method.md)。

### 本地校验

无需安装第三方依赖：

```bash
npm run validate
```

## English

### Find the three destinations worth pursuing

This skill answers a practical question: which three study-abroad destinations fit this applicant best? It builds a complete profile, removes direct conflicts, scores the remaining candidates, and verifies facts that can change the ranking.

### How matching works

|Dimension|Default weight|What it tests|
|---|---:|---|
|Degree goal and pathway|20%|Degree progression, programme length, entry timing|
|Budget and funding pressure|20%|Full-program tuition, living costs, compulsory fees, confirmed funding|
|Career and long-term plan|20%|Target industry, return/stay priorities, research or industry direction|
|Academic and application fit|15%|Grades, coursework, research, projects, readiness|
|Language and preparation|10%|Teaching language, language level, application preparation|
|Life fit and essential support|10%|Location, climate, culture, care, accessibility, healthcare support|
|Risk tolerance and non-negotiables|5%|Tolerance for cost, competition, timing, policy changes, hard constraints|

The weights move when an applicant's stated priorities call for it. The skill then checks hard constraints first, compares full-program cost rather than annual tuition alone, scores viable destinations, and records sources, trade-offs, ranking sensitivities, and confidence for the final Top3.

### Scope

- Destinations: Australia, Canada, France, Germany, Japan, Malaysia, New Zealand, Singapore, South Korea, Switzerland, the United Kingdom, the United States, and the Hong Kong Special Administrative Region of China.
- Pathways: undergraduate, taught/research master's, doctorate, adult education, and career transition.
- Evidence: official sources first, with traceable authoritative supplementary data where it improves a comparison.

### Install in any compatible agent

Clone or download the repository, then copy the entire folder—not only `SKILL.md`—to the agent's skill directory.

```bash
git clone https://github.com/Joeytutu-ai/study-abroad-country-fit.git
cp -R study-abroad-country-fit <your-agent-skills-root>/
```

For Codex, that directory is commonly `~/.codex/skills/`. For another agent, follow that agent's skill-installation documentation and reload its skills after copying.

### Use

```text
Use study-abroad-country-fit to match the Top3 study-abroad countries or regions for my profile.
```

The result includes rationale, pivotal scoring dimensions, trade-offs, ranking sensitivities, dated source links, and confidence for each shortlisted destination.

## Repository checks

`npm run validate` checks the required skill layout, metadata, core scope, reference files, examples, and the removal of legacy review-driven question caps. GitHub Actions runs the same check on every push and pull request.

## License

[MIT](LICENSE)
