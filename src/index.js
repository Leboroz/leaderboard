import header from './modules/components/header.mjs'
import leaderBoardContainer from './modules/components/main-section.mjs'
import './sass/index.scss'

document.getElementById('header').append(header(), leaderBoardContainer())
