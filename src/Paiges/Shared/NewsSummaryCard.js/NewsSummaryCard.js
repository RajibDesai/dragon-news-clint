import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegEye, FaRegBookmark, FaShareNodes, FaStar } from "react-icons/fa6";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, rating, details, image_url, total_view, author } = news;
  // console.log(news)
  return (
    <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <Image src={author.img} className='me-3' style={{ height: '60px' }} roundedCircle />
          <div>
            <p className='mb-0'>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className='me-3'></FaRegBookmark>
          <FaShareNodes></FaShareNodes>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
            details.length > 250 ?
              <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
              :
              <>{details}</>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
        <FaStar className='text-warning me-2'></FaStar>
        <span>{rating?.number}</span>
        </div>
        <div>
          <FaRegEye className='me-2'></FaRegEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;