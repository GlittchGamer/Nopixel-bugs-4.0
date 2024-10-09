/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Bugs } from './bugs'

const root = document.getElementById('root')

render(() => <Bugs />, root!)
