import fetch from 'node-fetch';
import fs from "fs"

const template = fs.readFileSync("Template.md", "utf8")
const posts = await (await fetch("https://avestura.dev/latest/posts.json")).json()

const postsHtml = posts.map(p => `<li><a href="${p.url}">${p.title}</a></li>`).join('')

const templateWithPosts = template.replace("<blog-posts/>", postsHtml)

const snippets = await (await fetch("https://avestura.dev/latest/snippets.json")).json()

const snippetsHtml = snippets.map(p => `<li><a href="${p.url}">${p.title}</a></li>`).join('')

const templateWithPostsAndSnippets = templateWithPosts.replace("<snippets/>", snippetsHtml)

console.log(templateWithPostsAndSnippets)
