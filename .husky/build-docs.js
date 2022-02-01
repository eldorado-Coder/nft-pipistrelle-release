const { readFileSync, writeFileSync } = require('fs')
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt({ html: true })
let page = readFileSync('./INSTALLATION.html').toString()

for (const name of ['README', 'LICENSE']) {
  const content = readFileSync(`./${name}.md`).toString()
  page = page.replace(
    new RegExp(`<!--${name}\\.md-->(.*)<!--\\/${name}\\.md-->`, 's'),
    `<!--${name}.md-->${md.render(content)}<!--/${name}.md-->`
  )
}

writeFileSync('./INSTALLATION.html', page)
