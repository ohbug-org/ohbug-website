export function toLine(name: string): string {
  const target = name
    .replace(/[~!@#$%^&*()/|,.<>?"'();:_+-=[\]{}]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
  if (target[0] === '-') return target.substr(1)
  return target
}

const config = require('../../config')
export function getGithubUrl(slug: string): string {
  return `${config.github}/blob/master${slug}.md`
}
