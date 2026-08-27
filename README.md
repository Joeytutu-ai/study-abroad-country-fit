# Study Abroad Destination Shortlist

[中文](#中文) | [English](#english)

An agent skill for producing an evidence-backed Top3 study-abroad destination shortlist. It compares 12 countries and the Hong Kong Special Administrative Region of China as 13 study destinations, rather than treating one factor—such as tuition, ranking, or immigration policy—as decisive on its own.

## 中文

### 它解决什么问题

同样是“预算30万元、想读金融硕士”，加拿大、英国、新加坡或中国香港特别行政区并不会天然有固定答案。学历衔接、全学制总成本、授课语言、申请准备度、职业目标、家庭安排、风险偏好与目标行业会共同改变结论。

本skill先建立完整申请人画像，再以公开可核验的信息比较13个留学目的地，最终只交付目的地Top3及每个结果的证据、取舍与排名敏感项。

### 覆盖范围

- 目的地：英国、澳大利亚、加拿大、美国、新加坡、日本、韩国、马来西亚、新西兰、瑞士、德国、法国，以及中国香港特别行政区。
- 路径：高中升本科、本科升硕士、硕士升博士、成人再教育与职业转型。
- 联网：以主管机构、官方国际教育门户、院校官网、公共资助机构与官方统计为首要证据；必要时补充方法公开、可追溯的权威国际组织、专业认证机构、学术数据库或公共数据集。

### 安装到任意兼容Agent

克隆或下载本仓库后，将整个`study-abroad-destination-shortlist`目录复制到目标Agent的skill目录。不要只复制`SKILL.md`，因为`references/`、`examples/`和`scripts/`是完整资产的一部分。

```bash
git clone https://github.com/<your-account>/study-abroad-destination-shortlist.git
cp -R study-abroad-destination-shortlist <your-agent-skills-root>/
```

例如，Codex通常使用`~/.codex/skills/`；其他Agent请使用其文档指定的skill目录。安装后按该Agent的刷新方式重新加载skills。

### 使用方式

将下列请求交给已安装该skill的Agent：

```text
请根据我的情况，使用study-abroad-destination-shortlist，为我匹配留学目的地Top3。
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

### What it does

This skill builds a complete applicant profile, verifies decision-changing facts, and returns only a Top3 study-abroad destination shortlist. It evaluates fit across degree progression, full-program cost, language, academic readiness, career plans, personal constraints, and risk tolerance.

### Scope

- Destinations: Australia, Canada, France, Germany, Japan, Malaysia, New Zealand, Singapore, South Korea, Switzerland, the United Kingdom, the United States, and the Hong Kong Special Administrative Region of China.
- Pathways: undergraduate, taught/research master's, doctorate, adult education, and career transition.
- Evidence: official sources first, with traceable authoritative supplementary data where it improves a comparison.

### Install in any compatible agent

Clone or download the repository, then copy the entire folder—not only `SKILL.md`—to the agent's skill directory.

```bash
git clone https://github.com/<your-account>/study-abroad-destination-shortlist.git
cp -R study-abroad-destination-shortlist <your-agent-skills-root>/
```

For Codex, that directory is commonly `~/.codex/skills/`. For another agent, follow that agent's skill-installation documentation and reload its skills after copying.

### Use

```text
Use study-abroad-destination-shortlist to match the Top3 study-abroad destinations for my profile.
```

The result includes rationale, pivotal scoring dimensions, trade-offs, ranking sensitivities, dated source links, and confidence for each shortlisted destination.

## Repository checks

`npm run validate` checks the required skill layout, metadata, core scope, reference files, examples, and the removal of legacy review-driven question caps. GitHub Actions runs the same check on every push and pull request.

## License

[MIT](LICENSE)
