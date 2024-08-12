// src/remarkPlugin.ts
import { visit } from 'unist-util-visit'
var codeFileName = () => {
  return (tree, file) => {
    visit(tree, 'code', (node, index, parent) => {
      const metaString = `${node.lang ?? ''} ${node.meta ?? ''}`.trim()
      if (!metaString) return
      const [title] = metaString.match(/(?<=title=("|'))(.*?)(?=("|'))/) ?? ['']
      if (!title && metaString.includes('title=')) {
        file.message('Invalid title', node, 'remark-code-title')
        return
      }
      if (!title) return

      const titleNode = {
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: {
            'data-remark-code-title': true,
            'data-language': node.lang,
          },
        },
        children: [{ type: 'text', value: title }],
      }

      console.log('parent:', parent, 'index', index, 'titleNode', titleNode)
      console.log('parent:', parent.children[index])

      // parent.children[index].splice(0, 0, titleNode)
      parent.children.splice(index, 0, titleNode)
      return index + 2
    })
  }
}

export default codeFileName
