import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard.js/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h2>This category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;