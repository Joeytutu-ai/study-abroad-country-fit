import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];

function requireFile(relativePath) {
  const absolutePath = join(root, relativePath);
  if (!existsSync(absolutePath)) {
    failures.push(`Missing required file: ${relativePath}`);
    return '';
  }
  return readFileSync(absolutePath, 'utf8');
}

function requireText(text, expected, label) {
  if (!text.includes(expected)) {
    failures.push(`Missing ${label}: ${expected}`);
  }
}

const skill = requireFile('SKILL.md');
const agentMetadata = requireFile('agents/openai.yaml');
const readme = requireFile('README.md');
const sourcePolicy = requireFile('references/data-source-policy.md');
const method = requireFile('references/matching-method.md');
requireFile('examples/fictional-profile.md');
requireFile('examples/output-shape.md');
requireFile('LICENSE');
requireFile('package.json');

const frontmatter = skill.match(/^---\n([\s\S]*?)\n---\n/);
if (!frontmatter) {
  failures.push('SKILL.md must start with YAML frontmatter.');
} else {
  requireText(frontmatter[1], 'name: study-abroad-destination-shortlist', 'skill name');
  requireText(frontmatter[1], 'description:', 'skill description');
}

requireText(skill, '12个国家及中国香港特别行政区', 'destination scope');
requireText(skill, '13个留学目的地', 'destination count');
requireText(skill, '只输出目的地Top3', 'Top3 output contract');
requireText(skill, '来源层级与检索规则', 'evidence workflow');
requireText(skill, '[references/data-source-policy.md]', 'source-policy reference');
requireText(skill, '[references/matching-method.md]', 'method reference');
requireText(skill, '中国香港特别行政区', 'Hong Kong SAR wording');
requireText(agentMetadata, 'display_name:', 'agent display name');
requireText(agentMetadata, 'default_prompt:', 'agent default prompt');
requireText(readme, 'Install in any compatible agent', 'English installation guide');
requireText(readme, '安装到任意兼容Agent', 'Chinese installation guide');
requireText(sourcePolicy, '来源优先级', 'source hierarchy');
requireText(method, '动态加权评分', 'matching method');

for (const legacyRestriction of [
  '正常完成22—28个自适应问题',
  '高风险问题的合规问法',
  '只检索公开的相关官方网站',
  '高风险字段跳过时',
]) {
  if (skill.includes(legacyRestriction)) {
    failures.push(`Legacy review-driven restriction remains: ${legacyRestriction}`);
  }
}

if (failures.length > 0) {
  console.error('Skill package validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log('Skill package is valid.');
}
