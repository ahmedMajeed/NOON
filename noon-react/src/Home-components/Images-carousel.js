/* author: Ahmed Mohamed Ahmed */

import React from "react";
import {NewsCarousel} from "./News-carousel"

export class ImagesCarousel extends React.Component{

	constructor(props){
		super();
		this.state = {
			data: props.data,
			dataItemsLength: props.data.data.length
		};
	}

	render(){
		return(
			<NewsCarousel
				carouselID={"idiv-news-carousel"}
				dataItemsLength={this.state.dataItemsLength}
			>
				{/* images slides */}
				{this.state.data.data.map((carouselItem,i) =>
					<div className={"carousel-item "+((i===0)?"active":"") } key={i} >
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-4 cdiv-carousel-item">
								<img src={carouselItem.image} alt={carouselItem.captionText} className="img-fluid cimg-carousel-image" />
								<div className="cdiv-carousel-item-caption">
									<span className="cspan-published-time">{carouselItem.publishTime}</span>
									<div className="cdiv-text">
										{carouselItem.captionText}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
		    </NewsCarousel>
		);		
	}
}