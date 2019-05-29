import React from 'react'
import { Container, Titulo } from './Atoms'
import Grid from '@material-ui/core/Grid'
import Carousel from '../components/CarouselCards'
import Card from '../components/Moleculas/Cards'

export default () => (
	<Container id='acoes'>
		<Titulo>
			Ações Formativas <span />
		</Titulo>

		<Carousel>
			<Grid container spacing={5}>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
			</Grid>
			<Grid container spacing={5}>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
			</Grid>
			<Grid container spacing={5}>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
				<Grid item xs={6}>
					<Card />
				</Grid>
			</Grid>
		</Carousel>
	</Container>
)