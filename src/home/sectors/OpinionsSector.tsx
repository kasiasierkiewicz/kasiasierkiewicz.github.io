import CarouselPoc from 'home/components/CarouselPoc';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';

const url = '/booksy.html';

interface Review {
  review: string;
  created: string;
  user: User;
  staff: Staff[];
}

interface Staff {
  id: number;
}

interface User {
  first_name: string;
}

async function getOpinions(): Promise<Review[]> {
  const reviews = await fetchHtml();
  const reviewsScript = reviews.scripts[5].text;
  const script = reviewsScript
    .replace('window.__NUXT__=(function', 'return function')
    .replace(');', ';');

  const total = getTotalPageCount(script);
  const reviewsParsed = collectReviews(script, total);

  return reviewsParsed.filter((r) => r.staff.map((s) => s.id).includes(306022));
}

function getTotalPageCount(script: string): number {
  const pagesMatch = /,13,\d+,/.exec(script);
  const pages = pagesMatch
    ?.flatMap((m) => m.split(',').filter((s) => s.length != 0))
    .pop();
  return parseInt(pages || '0');
}

function collectReviews(script: string, totalPageCount: number): Review[] {
  return Array(totalPageCount)
    .fill(0)
    .flatMap((e, i) => {
      const fn: Function = new Function(
        script.replace(`,7,1,6,`, `,7,${i + 1},6,`)
      );
      return fn().state.business.reviews;
    })
    .map((el) => el as Review);
}

async function fetchHtml() {
  const parser = new DOMParser();
  return await fetch(url)
    .then((r) => r.text())
    .then((text) => parser.parseFromString(text, 'text/html'));
}

interface ReviewProps {
  review: Review;
}

export const OpinionsSector = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    getOpinions()
      .then((reviews) => {
        return setReviews(reviews);
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }, []);

  return <CarouselPoc />;
};
