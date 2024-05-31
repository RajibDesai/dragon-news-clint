import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard.js/NewsSummaryCard';
import PageTitle from './PageTitle/PageTitle';


const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
           <PageTitle title="Home-Page"/>
            <h2>Dragon news home {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;