/* Author: Andrew Emad Nassif */

import React from "react";
import { NewsCard } from "./../NewsCard/News-Card";

import "./News-Section.css";

export class NewsSection extends React.Component {

    constructor(props){
        super();
        this.state = {
            news: require("./../fake-api/" + props.newsSrc + "")
        };
    }
    
    render() {
        return (
            <section className="container-fluid csection-root">
                <header className="chdr-section-title">
                    <span className="cspn-flag" style={this.props.flagBorderStyle}>
                        <label className="clbl-section-title">{this.props.title}</label>
                    </span>
                    <span className="cspn-more">
                        <a className="clink-more" href="#">{this.props.more}</a>
                    </span>
                </header>

                <div className="container-fluid">
                    <div className="row">
                        {
                            this.state.news.data.slice(0, 4).map((news) => (
                                    <NewsCard key = {news.id}
                                              news = {news}
                                              hasPublishTime = {this.props.withPublishTimes}
                                              hasSocialLinks = {this.props.withSocialLinks}
                                              hasMoreDetail = {this.props.withMoreDetails}
                                              alignment = {this.props.alignment}
                                              descriptionLineCount = {this.props.descriptionLineCount 
                                                                      /*Set this to 0 if no description paragraph in the card*/} />
                                )
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}