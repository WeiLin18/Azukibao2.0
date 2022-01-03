import React, { useEffect, useState } from 'react';
import IGImg1 from 'assets/images/ig1.png';
import IGImg2 from 'assets/images/ig2.png';
import IGImg3 from 'assets/images/ig3.png';
import IGImg4 from 'assets/images/ig4.png';
import IGImg5 from 'assets/images/ig5.png';
import IGImg7 from 'assets/images/ig7.png';
import IGImg8 from 'assets/images/ig8.png';
import { useIGPostList } from '../../hooks/useIGPostList';
import AOS from 'aos';
import '../../style/plugin/aos.css';

const defaultIGItems = [
  {
    imgURL: IGImg3,
    linkURL: 'https://www.instagram.com/p/CJYD06LMULA',
  },
  {
    imgURL: IGImg2,
    linkURL: 'https://www.instagram.com/p/CJYD06LMULA',
  },
  {
    imgURL: IGImg1,
    linkURL: 'https://www.instagram.com/p/CJYEQLaMr72',
  },
  {
    imgURL: IGImg4,
    linkURL: 'https://www.instagram.com/p/CJYD7mwMyhG',
  },
  {
    imgURL: IGImg5,
    linkURL: 'https://www.instagram.com/p/CJYEIIUMmKY',
  },
  {
    imgURL: IGImg7,
    linkURL: 'https://www.instagram.com/p/CJYEURhsUE9',
  },
  {
    imgURL: IGImg8,
    linkURL: 'https://www.instagram.com/p/CJYEWFhs_CS',
  },
];

const InstagramFooter = () => {
  AOS.init({
    duration: 1500,
  });
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  const { postList, isLoading } = useIGPostList();
  const [postListState, setPostListState] = useState(defaultIGItems);
  useEffect(() => {
    if (postList && postList.imgURL !== 0) {
      setPostListState(postList);
    }
  }, [postList]);
  if (isLoading) {
    return <h2>loading</h2>;
  } else {
    return (
      <footer className="instagram bg-light-gray py-25 py-2l-15 py-xl-5">
        <div className="container">
          <ul
            className="instagram__list"
            data-aos={'fade-up'}
            data-aos-offset={'0'}
            data-aos-once={true}
          >
            {postListState.map((IGItem, index) => {
              return (
                <li className="instagram__item mb-2" key={index}>
                  <a
                    href={IGItem.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram__link"
                  >
                    <img src={IGItem.imgURL} alt="instagram" />
                  </a>
                </li>
              );
            })}

            <li className="instagram__item instagram__item--text">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ig-logo"
              >
                instagram
              </a>
              <ul className="align-self-end h4 font-2l-h5 font-xl-h6 text-white">
                <li>
                  <a
                    href="https://www.instagram.com/azukibao/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #FollowUs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/azukibao/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #Azukibao
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
};
export default InstagramFooter;
