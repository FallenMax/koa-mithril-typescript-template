import './style.css'

import * as m from 'mithril'

// import m = require('mithril')
const App = {
  oninit() {
    console.log('init')
    console.log(arguments)
  },
  oncreate() {
    console.log('create')
    console.log(arguments)
  },
  onupdate() {
    console.log('update')
    console.log(arguments)
  },
  view() {
    return m(
      '',
      {
        onclick() {
          import('./someModule').then(fn => console.log(fn.default() + 1))
        }
      },
      'welcome home?!'
    )
  }
}

m.route(document.body.appendChild(document.createElement('DIV')), '/', {
  '/': App,
  '/:path...': App
})
