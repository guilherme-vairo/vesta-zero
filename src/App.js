import React, { useState, useEffect } from 'react'
import './App.scss'
import axios from 'axios'
import SEO from './components/SEO'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Layout from './components/Layout'
import styled from 'styled-components'
import { Theme } from './utils/Theme'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Estrutura from './components/Estrutura'
import CardGallery from './components/CardGallery'
import Contato from './components/Contato'
import MenuItem from '@material-ui/core/MenuItem'
import { Palette } from './utils/Theme'

const AppContainer = styled.div`
	> div {
		padding-left: 13vw !important;
		padding-right: 13vw !important;
	}
`

const Nested = styled(MenuItem)`
	width: calc(100% - 30px) !important;
	margin-left: 30px !important;
	margin-right: 0 !important;
	border-bottom: 1px solid ${Palette.grey.light} !important;
	padding-left: 30px !important;
	letter-spacing: 1px;
	font-family: 'Alegreya Sans SC Regular' !important;
	font-size: 19px !important;
	font-weight: 500 !important;
	&:hover {
		font-weight: 700 !important;
		background-color: ${Palette.transparent} !important;
	}
	border-bottom: 1px solid ${Palette.grey.medium}!important;
`

const API_URL = 'https://cfp.olimpo.tic.ufrj.br/wp-json/wp/v2'

function App() {
	const [data, setData] = useState([])
	const [filter, setFilter] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${API_URL}/acoes?per_page=100${filter}`)
			setData(result.data)
		}
		fetchData()
	}, [filter])

	return (
		<div className='App'>
			<MuiThemeProvider theme={Theme}>
				<SEO title='Título do Site' />
				<Layout>
					<Menu>
						<Nested
							component='button'
							onClick={() => setFilter('')}
							href='#acoes'
						>
							todas
						</Nested>
						<Nested
							component='button'
							onClick={() => setFilter('&tipo=26')}
							href='#acoes'
						>
							cursos
						</Nested>
						<Nested
							component='button'
							onClick={() => setFilter('&tipo=27')}
							href='#acoes'
						>
							disciplinas
						</Nested>
						<Nested
							component='button'
							onClick={() => setFilter('&tipo=31')}
							href='#acoes'
						>
							projetos
						</Nested>
						<Nested
							component='button'
							onClick={() => setFilter('&tipo=30')}
							href='#acoes'
						>
							eventos
						</Nested>
						<Nested
							component='button'
							onClick={() => setFilter('&tipo=29')}
							href='#acoes'
						>
							espaços
						</Nested>
					</Menu>
					<AppContainer>
						<Hero />
						<Sobre data={data} />
						<Estrutura />
						<CardGallery data={data} />
						<Contato />
						<Footer>
							<a href='#footer'>Footer</a>
						</Footer>
					</AppContainer>
				</Layout>
			</MuiThemeProvider>
		</div>
	)
}

export default App
