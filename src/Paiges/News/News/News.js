import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PageTitle from '../../Home/Home/PageTitle/PageTitle';



const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { title, details, image_url, category_id } = news;
    return (
        <Card>
            <PageTitle title="News-card"/>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All category news</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;