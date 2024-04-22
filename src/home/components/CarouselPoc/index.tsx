import { useEffect, useRef } from 'react';
import styled from 'styled-components';

//this is POC only
const CarouselPoc = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollToNext();
    }, 3000);

    const scrollTo = (scrollOffset: number) => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += scrollOffset;
      }
    };

    const scrollToNext = () => {
      const scrollOffset = 300;
      scrollTo(scrollOffset);
    };

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <CarouselWrapper ref={carouselRef}>
      {mockReviews.map((review) => (
        <CarouselItem key={review.reviewDate}>
          <p>{review.text}</p>

          <ItemFooter>
            <p>{review.userName}</p>
            <p>{review.reviewDate}</p>
          </ItemFooter>
        </CarouselItem>
      ))}
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  max-width: 1024px;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  width: 100%;
  max-width: 300px;
  height: 200px;
  padding: 2rem 1rem;
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const mockReviews = [
  {
    text: 'Kasia is amazing! She helped me recover from my injury much faster than I expected. Highly recommend her services.',
    userName: 'John Doe',
    reviewDate: '2024-04-01',
  },
  {
    text: "I've been to several physical therapists before, but Kasia is the best! She's knowledgeable, caring, and dedicated to her patients' well-being.",
    userName: 'Emily Smith',
    reviewDate: '2024-04-03',
  },
  {
    text: "After just a few sessions with Kasia, I feel like a new person! She's excellent at what she does and creates personalized treatment plans that really work.",
    userName: 'Michael Johnson',
    reviewDate: '2024-04-05',
  },
  {
    text: "Kasia's expertise and professionalism are unmatched. I couldn't be happier with the progress I've made under her care.",
    userName: 'Sarah Williams',
    reviewDate: '2024-04-07',
  },
  {
    text: "I'm so grateful to have found Kasia! She's helped me overcome chronic pain and regain my mobility. Her positivity is infectious!",
    userName: 'David Brown',
    reviewDate: '2024-04-09',
  },
  {
    text: 'Kasia goes above and beyond for her patients. She genuinely cares about their well-being and takes the time to listen to their concerns.',
    userName: 'Jessica Taylor',
    reviewDate: '2024-04-11',
  },
  {
    text: "Thanks to Kasia, I'm back to doing the activities I love without pain or limitations. I can't recommend her enough!",
    userName: 'Christopher Martinez',
    reviewDate: '2024-04-13',
  },
  {
    text: 'Kasia is not only an excellent physical therapist but also a wonderful person. She makes every session enjoyable and productive.',
    userName: 'Amanda Garcia',
    reviewDate: '2024-04-15',
  },
  {
    text: "I've made more progress in a few weeks with Kasia than I did in months with other therapists. She's truly a miracle worker!",
    userName: 'Daniel Rodriguez',
    reviewDate: '2024-04-17',
  },
  {
    text: "Kasia's dedication to her patients is unmatched. She's always willing to go the extra mile to ensure they get the care they need.",
    userName: 'Jennifer Wilson',
    reviewDate: '2024-04-19',
  },
];

export default CarouselPoc;
