import renderMathInElement from 'katex/contrib/auto-render'
import * as params from '@params'

const defaultOptions = {
  trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
  delimiters: [
    { left: '$$', right: '$$', display: true },
    { left: '\\[', right: '\\]', display: true },
    { left: '$', right: '$', display: false },
    { left: '\\(', right: '\\)', display: true }
  ],
  throwOnError: true,
}

/**
 * Replace single slash with double slash
 * @param {*} element 
 * @returns 
 */
const replaceDoubleSlash = (element) => {
  if (!element) return
  element.innerHTML = element.innerHTML.replace(/\\(\s+)/g, '\\\\$1')
  console.log(element.innerHTML)
}

window.addEventListener('DOMContentLoaded', () => {
  replaceDoubleSlash(document.body.querySelector('body .post-content'))
  renderMathInElement(
    document.body,
    {
      ...defaultOptions,
      ...(params.math?.katex || {})
    }
  )
})
