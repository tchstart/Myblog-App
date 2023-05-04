import Vue from 'vue'
import { tryCopyDomText } from '@/utils'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

import hljsNumbers from '@/plugin/highlightjs/highlightjs-line-numbers'

window.hljs = hljs
hljsNumbers(window, document)
hljs.configure({
  ignoreUnescapedHTML: true
})

// �������뷽��
Vue.prototype.$highlightCode = () => {
  const $codeList = document.querySelectorAll('#post-content pre code')
  $codeList.forEach(($code) => {
    // ��Ӹ��ư�ť
    const icon = document.createElement('i')
    icon.className = 'icon-copy el-icon-copy-document'
    icon.onclick = function(e) {
      tryCopyDomText($code)
    }
    $code.parentNode.appendChild(icon)
    // ��������
    hljs.highlightBlock($code)
    // ����к�
    hljs.lineNumbersBlock($code)
  })
}

