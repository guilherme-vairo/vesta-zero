import React from 'react'
import AliceCarousel from 'react-alice-carousel'

class Gallery extends React.Component {
	items = [1, 2, 3, 4, 5]

	state = {
		currentIndex: 0,
		responsive: { 1024: { items: 1 } },
		galleryItems: this.galleryItems(),
	}

	slideTo = i => this.setState({ currentIndex: i })

	onSlideChanged = e => this.setState({ currentIndex: e.item })

	slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

	slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

	thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

	galleryItems() {
		return this.items.map(i => <h2 key={i}> {i}</h2>)
	}

	render() {
		const { galleryItems, responsive, currentIndex } = this.state
		return (
			<div>
				<AliceCarousel
					dotsDisabled={true}
					buttonsDisabled={true}
					items={galleryItems}
					responsive={responsive}
					slideToIndex={currentIndex}
					onSlideChanged={this.onSlideChanged}
				/>

				<ul>{this.items.map(this.thumbItem)}</ul>
				<button onClick={() => this.slidePrev()}>Prev button</button>
				<button onClick={() => this.slideNext()}>Next button</button>
			</div>
		)
	}
}

export default Gallery
