import React from 'react';
import { NewsArticle } from "./Details-components/NewsArticle"
import { Links } from "./Details-components/Links"
import { NewsCard } from "./Details-components/NewsCard"
import { CommentsContainer } from "./Details-components/CommentsContainer"
import { NewsSection } from "./Details-components/NewsSection"
import "./Details-components/css/details.css"
import "./shared-libraries/font-awesome-4.min.css"

export class Details extends React.Component {
    constructor(props) {
        super();
        this.state = {
            news: {
                id: props.newsId,

                imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",

                time: (function () {
                    var today = new Date();
                    var newsDate = new Date("2017/02/21");
                    var diffMs = (today - newsDate); // milliseconds
                    var diffMins = Math.round(diffMs / 60000); // minutes
                    var diffHrs = Math.floor(diffMins / 60); // hours
                    var diffDays = Math.floor(diffHrs / 24); // days
                    var diffWeeks = Math.floor(diffDays / 7); // weeks
                    var diffMonths = Math.floor(diffDays / 30); // months
                    var diffYears = Math.floor(diffDays / 365); // years
                    if (diffMins <= 1)
                        return "1 min ago.";
                    else if (diffMins <= 59)
                        return diffMins.toString() + " mins ago.";

                    else if (diffHrs <= 1)
                        return "1 hour ago.";

                    else if (diffHrs <= 23)
                        return diffHrs.toString() + " hrs ago.";

                    else if (diffDays <= 1)
                        return "1 day ago.";

                    else if (diffDays <= 6)
                        return diffDays.toString() + " days ago.";

                    else if (diffWeeks <= 1)
                        return "1 week ago.";

                    else if (diffWeeks <= 4)
                        return diffWeeks.toString() + " weeks ago.";

                    else if (diffMonths <= 1)
                        return "1 month ago.";

                    else if (diffMonths <= 11)
                        return diffMonths.toString() + " months ago.";

                    else if (diffYears <= 1)
                        return "1 year ago.";

                    else
                        return diffYears.toString() + " years ago.";

                })(),

                title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",

                text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.`
            },


            links: {
                site: window.location.href,
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                google: "https://www.google.com",
                youtube: "https://www.youtube.com"
            },

            moreNews: [
                {
                    id: "1",

                    imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",

                    time: (function () {
                        var today = new Date();
                        var newsDate = new Date("2017/02/21");
                        var diffMs = (today - newsDate); // milliseconds
                        var diffMins = Math.round(diffMs / 60000); // minutes
                        var diffHrs = Math.floor(diffMins / 60); // hours
                        var diffDays = Math.floor(diffHrs / 24); // days
                        var diffWeeks = Math.floor(diffDays / 7); // weeks
                        var diffMonths = Math.floor(diffDays / 30); // months
                        var diffYears = Math.floor(diffDays / 365); // years
                        if (diffMins <= 1)
                            return "1 min ago.";
                        else if (diffMins <= 59)
                            return diffMins.toString() + " mins ago.";

                        else if (diffHrs <= 1)
                            return "1 hour ago.";

                        else if (diffHrs <= 23)
                            return diffHrs.toString() + " hrs ago.";

                        else if (diffDays <= 1)
                            return "1 day ago.";

                        else if (diffDays <= 6)
                            return diffDays.toString() + " days ago.";

                        else if (diffWeeks <= 1)
                            return "1 week ago.";

                        else if (diffWeeks <= 4)
                            return diffWeeks.toString() + " weeks ago.";

                        else if (diffMonths <= 1)
                            return "1 month ago.";

                        else if (diffMonths <= 11)
                            return diffMonths.toString() + " months ago.";

                        else if (diffYears <= 1)
                            return "1 year ago.";

                        else
                            return diffYears.toString() + " years ago.";

                    })(),

                    title: "Lorem Ipsum is simply dummy text of the printing",

                    links: {
                        facebook: "https://www.facebook.com",
                        twitter: "https://www.twitter.com",
                        instagram: "https://www.instagram.com",
                        google: "https://www.google.com",
                        youtube: "https://www.youtube.com"
                    }
                },

                {
                    id: "2",

                    imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",

                    time: (function () {
                        var today = new Date();
                        var newsDate = new Date("2017/02/21");
                        var diffMs = (today - newsDate); // milliseconds
                        var diffMins = Math.round(diffMs / 60000); // minutes
                        var diffHrs = Math.floor(diffMins / 60); // hours
                        var diffDays = Math.floor(diffHrs / 24); // days
                        var diffWeeks = Math.floor(diffDays / 7); // weeks
                        var diffMonths = Math.floor(diffDays / 30); // months
                        var diffYears = Math.floor(diffDays / 365); // years
                        if (diffMins <= 1)
                            return "1 min ago.";
                        else if (diffMins <= 59)
                            return diffMins.toString() + " mins ago.";

                        else if (diffHrs <= 1)
                            return "1 hour ago.";

                        else if (diffHrs <= 23)
                            return diffHrs.toString() + " hrs ago.";

                        else if (diffDays <= 1)
                            return "1 day ago.";

                        else if (diffDays <= 6)
                            return diffDays.toString() + " days ago.";

                        else if (diffWeeks <= 1)
                            return "1 week ago.";

                        else if (diffWeeks <= 4)
                            return diffWeeks.toString() + " weeks ago.";

                        else if (diffMonths <= 1)
                            return "1 month ago.";

                        else if (diffMonths <= 11)
                            return diffMonths.toString() + " months ago.";

                        else if (diffYears <= 1)
                            return "1 year ago.";

                        else
                            return diffYears.toString() + " years ago.";

                    })(),

                    title: "Lorem Ipsum is simply dummy text of the printing",

                    links: {
                        facebook: "https://www.facebook.com",
                        twitter: "https://www.twitter.com",
                        instagram: "https://www.instagram.com",
                        google: "https://www.google.com",
                        youtube: "https://www.youtube.com"
                    }
                },

                {
                    id: "3",

                    imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",

                    time: (function () {
                        var today = new Date();
                        var newsDate = new Date("2017/02/21");
                        var diffMs = (today - newsDate); // milliseconds
                        var diffMins = Math.round(diffMs / 60000); // minutes
                        var diffHrs = Math.floor(diffMins / 60); // hours
                        var diffDays = Math.floor(diffHrs / 24); // days
                        var diffWeeks = Math.floor(diffDays / 7); // weeks
                        var diffMonths = Math.floor(diffDays / 30); // months
                        var diffYears = Math.floor(diffDays / 365); // years
                        if (diffMins <= 1)
                            return "1 min ago.";
                        else if (diffMins <= 59)
                            return diffMins.toString() + " mins ago.";

                        else if (diffHrs <= 1)
                            return "1 hour ago.";

                        else if (diffHrs <= 23)
                            return diffHrs.toString() + " hrs ago.";

                        else if (diffDays <= 1)
                            return "1 day ago.";

                        else if (diffDays <= 6)
                            return diffDays.toString() + " days ago.";

                        else if (diffWeeks <= 1)
                            return "1 week ago.";

                        else if (diffWeeks <= 4)
                            return diffWeeks.toString() + " weeks ago.";

                        else if (diffMonths <= 1)
                            return "1 month ago.";

                        else if (diffMonths <= 11)
                            return diffMonths.toString() + " months ago.";

                        else if (diffYears <= 1)
                            return "1 year ago.";

                        else
                            return diffYears.toString() + " years ago.";

                    })(),

                    title: "Lorem Ipsum is simply dummy text of the printing",

                    links: {
                        facebook: "https://www.facebook.com",
                        twitter: "https://www.twitter.com",
                        instagram: "https://www.instagram.com",
                        google: "https://www.google.com",
                        youtube: "https://www.youtube.com"
                    }
                }
            ],

            comments: [
                {
                    id: "1",
                    userName: "Maria Sharapova",
                    userPhoto: "https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg",
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and         scrambled it to make a type specimen`,
                    replies: [{
                        id: "500",
                        userName: "Maria Sharapova",
                        userPhoto: "https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg",
                        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's`,
                        replies: []
                    },
                    {
                        id: "100",
                        userName: "Maria Sharapova",
                        userPhoto: "https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg",
                        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's`,
                        replies: []
                    }
                    ]
                },
                {
                    id: "200",
                    userName: "Maria Sharapova",
                    userPhoto: "https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg",
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and         scrambled it to make a type specimen`,
                    replies: []
                },
                {
                    id: "300",
                    userName: "Maria Sharapova",
                    userPhoto: "https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg",
                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and         scrambled it to make a type specimen`,
                    replies: []
                }
            ],

            relatedTopics: [
                {
                    id: "1",

                    imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",

                    time: (function () {
                        var today = new Date();
                        var newsDate = new Date("2017/02/21");
                        var diffMs = (today - newsDate); // milliseconds
                        var diffMins = Math.round(diffMs / 60000); // minutes
                        var diffHrs = Math.floor(diffMins / 60); // hours
                        var diffDays = Math.floor(diffHrs / 24); // days
                        var diffWeeks = Math.floor(diffDays / 7); // weeks
                        var diffMonths = Math.floor(diffDays / 30); // months
                        var diffYears = Math.floor(diffDays / 365); // years
                        if (diffMins <= 1)
                            return "1 min ago.";
                        else if (diffMins <= 59)
                            return diffMins.toString() + " mins ago.";

                        else if (diffHrs <= 1)
                            return "1 hour ago.";

                        else if (diffHrs <= 23)
                            return diffHrs.toString() + " hrs ago.";

                        else if (diffDays <= 1)
                            return "1 day ago.";

                        else if (diffDays <= 6)
                            return diffDays.toString() + " days ago.";

                        else if (diffWeeks <= 1)
                            return "1 week ago.";

                        else if (diffWeeks <= 4)
                            return diffWeeks.toString() + " weeks ago.";

                        else if (diffMonths <= 1)
                            return "1 month ago.";

                        else if (diffMonths <= 11)
                            return diffMonths.toString() + " months ago.";

                        else if (diffYears <= 1)
                            return "1 year ago.";

                        else
                            return diffYears.toString() + " years ago.";

                    })(),

                    title: "Lorem Ipsum is simply dummy text of the printing",

                    links: {
                        facebook: "https://www.facebook.com",
                        twitter: "https://www.twitter.com",
                        instagram: "https://www.instagram.com",
                        google: "https://www.google.com",
                        youtube: "https://www.youtube.com"
                    }
                },

                {
                    id: "2",

                    imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",

                    time: (function () {
                        var today = new Date();
                        var newsDate = new Date("2017/02/21");
                        var diffMs = (today - newsDate); // milliseconds
                        var diffMins = Math.round(diffMs / 60000); // minutes
                        var diffHrs = Math.floor(diffMins / 60); // hours
                        var diffDays = Math.floor(diffHrs / 24); // days
                        var diffWeeks = Math.floor(diffDays / 7); // weeks
                        var diffMonths = Math.floor(diffDays / 30); // months
                        var diffYears = Math.floor(diffDays / 365); // years
                        if (diffMins <= 1)
                            return "1 min ago.";
                        else if (diffMins <= 59)
                            return diffMins.toString() + " mins ago.";

                        else if (diffHrs <= 1)
                            return "1 hour ago.";

                        else if (diffHrs <= 23)
                            return diffHrs.toString() + " hrs ago.";

                        else if (diffDays <= 1)
                            return "1 day ago.";

                        else if (diffDays <= 6)
                            return diffDays.toString() + " days ago.";

                        else if (diffWeeks <= 1)
                            return "1 week ago.";

                        else if (diffWeeks <= 4)
                            return diffWeeks.toString() + " weeks ago.";

                        else if (diffMonths <= 1)
                            return "1 month ago.";

                        else if (diffMonths <= 11)
                            return diffMonths.toString() + " months ago.";

                        else if (diffYears <= 1)
                            return "1 year ago.";

                        else
                            return diffYears.toString() + " years ago.";

                    })(),

                    title: "Lorem Ipsum is simply dummy text of the printing",

                    links: {
                        facebook: "https://www.facebook.com",
                        twitter: "https://www.twitter.com",
                        instagram: "https://www.instagram.com",
                        google: "https://www.google.com",
                        youtube: "https://www.youtube.com"
                    }
                },

                {
                    id: "3",

                    imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",

                    time: (function () {
                        var today = new Date();
                        var newsDate = new Date("2017/02/21");
                        var diffMs = (today - newsDate); // milliseconds
                        var diffMins = Math.round(diffMs / 60000); // minutes
                        var diffHrs = Math.floor(diffMins / 60); // hours
                        var diffDays = Math.floor(diffHrs / 24); // days
                        var diffWeeks = Math.floor(diffDays / 7); // weeks
                        var diffMonths = Math.floor(diffDays / 30); // months
                        var diffYears = Math.floor(diffDays / 365); // years
                        if (diffMins <= 1)
                            return "1 min ago.";
                        else if (diffMins <= 59)
                            return diffMins.toString() + " mins ago.";

                        else if (diffHrs <= 1)
                            return "1 hour ago.";

                        else if (diffHrs <= 23)
                            return diffHrs.toString() + " hrs ago.";

                        else if (diffDays <= 1)
                            return "1 day ago.";

                        else if (diffDays <= 6)
                            return diffDays.toString() + " days ago.";

                        else if (diffWeeks <= 1)
                            return "1 week ago.";

                        else if (diffWeeks <= 4)
                            return diffWeeks.toString() + " weeks ago.";

                        else if (diffMonths <= 1)
                            return "1 month ago.";

                        else if (diffMonths <= 11)
                            return diffMonths.toString() + " months ago.";

                        else if (diffYears <= 1)
                            return "1 year ago.";

                        else
                            return diffYears.toString() + " years ago.";

                    })(),

                    title: "Lorem Ipsum is simply dummy text of the printing",

                    links: {
                        facebook: "https://www.facebook.com",
                        twitter: "https://www.twitter.com",
                        instagram: "https://www.instagram.com",
                        google: "https://www.google.com",
                        youtube: "https://www.youtube.com"
                    }
                },
                {
                    id: "4",

                    imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",

                    time: (function () {
                        var today = new Date();
                        var newsDate = new Date("2017/02/21");
                        var diffMs = (today - newsDate); // milliseconds
                        var diffMins = Math.round(diffMs / 60000); // minutes
                        var diffHrs = Math.floor(diffMins / 60); // hours
                        var diffDays = Math.floor(diffHrs / 24); // days
                        var diffWeeks = Math.floor(diffDays / 7); // weeks
                        var diffMonths = Math.floor(diffDays / 30); // months
                        var diffYears = Math.floor(diffDays / 365); // years
                        if (diffMins <= 1)
                            return "1 min ago.";
                        else if (diffMins <= 59)
                            return diffMins.toString() + " mins ago.";

                        else if (diffHrs <= 1)
                            return "1 hour ago.";

                        else if (diffHrs <= 23)
                            return diffHrs.toString() + " hrs ago.";

                        else if (diffDays <= 1)
                            return "1 day ago.";

                        else if (diffDays <= 6)
                            return diffDays.toString() + " days ago.";

                        else if (diffWeeks <= 1)
                            return "1 week ago.";

                        else if (diffWeeks <= 4)
                            return diffWeeks.toString() + " weeks ago.";

                        else if (diffMonths <= 1)
                            return "1 month ago.";

                        else if (diffMonths <= 11)
                            return diffMonths.toString() + " months ago.";

                        else if (diffYears <= 1)
                            return "1 year ago.";

                        else
                            return diffYears.toString() + " years ago.";

                    })(),

                    title: "Lorem Ipsum is simply dummy text of the printing",

                    links: {
                        facebook: "https://www.facebook.com",
                        twitter: "https://www.twitter.com",
                        instagram: "https://www.instagram.com",
                        google: "https://www.google.com",
                        youtube: "https://www.youtube.com"
                    }
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <main id="imain-container" className="container">
                    {/* Begin Main Row */}
                    <div className="row">
                        {/* Begin News Column */}
                        <div className="col-lg-9 col-sm-7 col-12">
                            {/* Begin News Row */}
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <NewsArticle news={this.state.news} />
                                </div>
                                {/* Begin More News */}
                                <div id="idiv-more-news" className="col-lg-4 col-12">
                                    <Links newsLinks={this.state.links} />
                                    {this.state.moreNews.map((news) => <NewsCard key={news.id} news={news} />)}
                                </div>
                                {/* End More News */}
                            </div>
                            {/* End News Row */}

                            {/* Begin Comments Row */}
                            <CommentsContainer comments={this.state.comments} />
                            {/* End Comments Row */}
                        </div>
                        {/* End News Column */}
                        {/* Begin Profiles Column */}
                        <aside className="col-lg-3 col-sm-5 col-12">
                            {/* Begin Advertisement */}
                            <section id="isection-advertisement">
                                <div className="cdiv-space">
                                    <span>Advertising Space</span>
                                </div>
                            </section>
                            {/* End Advertisement */}
                            {/* Begin Profiles */}
                            <div id="idiv-profiles">
                                <div className="cdiv-flag">
                                    Profiles
                </div>
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                            </div>
                            {/* End Profiles */}
                        </aside>
                        {/* End Profiles Column */}
                    </div>
                    {/* End Main Row */}
                </main>
                {/* End Container */}
                {/* Begin Related Topics */}
               <NewsSection title="Related Topics" news={this.state.relatedTopics} />
            </div>
        );
    }
}
