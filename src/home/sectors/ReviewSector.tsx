import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from 'home/components/Carousel'
import { FizjomedicaId, getReviews, Review, YeyId } from 'home/services/booksy_review_scraper'


interface ReviewProps {
    review: Review;
}

const ReviewText = styled.p`
    min-height: 5em;
`

const ItemFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`

const shortReview = (review: String) =>
    review.length > 200 ? review.substring(0, 200) + '...' : review

const ReviewComponent = (props: ReviewProps) => {
    const date = new Date(props.review.created)
    return (
        <>
            <ReviewText>{shortReview(props.review.review)}</ReviewText>
            <ItemFooter>
                <p>{props.review.user.first_name}</p>
                <p>{date.toLocaleDateString()}</p>
            </ItemFooter>
        </>
    )
}

const CarouselComponent = styled.div`
    width: 100%;
    display: flex;
    padding-top: 2em;
    padding-bottom: 2em;
`

export const ReviewSector = () => {
    const [reviews, setReviews] = useState<Review[]>([])
    useEffect(() => {
        getReviews('/booksy.html', YeyId)
            .then(reviews => getReviews('/fizjomedica.html', FizjomedicaId)
                .then(r => [...r, ...reviews]))
            .then((reviews) => {
                return setReviews(reviews)
            })
            .catch((err) => {
                console.log(err)
                return []
            })
    }, [])

    return (
        <CarouselComponent>
            <Carousel>
                {reviews.map((review) => (
                    <ReviewComponent key={review.created} review={review} />
                ))}
            </Carousel>
        </CarouselComponent>
    )

}
