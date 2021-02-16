import React, { useEffect, useState }  from "react";
import { Box, Progress } from "@chakra-ui/react";
import IGImg1 from "../../assets/images/ig1.png";
import IGImg2 from "../../assets/images/ig2.png";
import IGImg3 from "../../assets/images/ig3.png";
import IGImg4 from "../../assets/images/ig4.png";
import IGImg5 from "../../assets/images/ig5.png";
import IGImg7 from "../../assets/images/ig7.png";
import IGImg8 from "../../assets/images/ig8.png";
import { useIGPostList } from "../../hooks/useIGPostList";

const IGItems = [
  {
    img: IGImg3,
    linkURL: 'https://www.instagram.com/p/CJYD06LMULA'
  },
  {
    img: IGImg2,
    linkURL: 'https://www.instagram.com/p/CJYD06LMULA'
  },
  {
    img: IGImg1,
    linkURL: 'https://www.instagram.com/p/CJYEQLaMr72'
  },
  {
    img: IGImg4,
    linkURL: 'https://www.instagram.com/p/CJYD7mwMyhG'
  },
  {
    img: IGImg5,
    linkURL: 'https://www.instagram.com/p/CJYEIIUMmKY'
  },
  {
    img: IGImg7,
    linkURL: 'https://www.instagram.com/p/CJYEURhsUE9'
  },
  {
    img: IGImg8,
    linkURL: 'https://www.instagram.com/p/CJYEWFhs_CS'
  },
];

const InstagramFooter = () => {
  const { postList, error } = useIGPostList();
  const [postListState, setPostListState] = useState(null);
  useEffect(() => {
    setPostListState(postList);
    const igPhotoNum = 7;
    const igPhotoUrl = "https://www.instagram.com/p/";
  }, [postList]);
  if (error) {
    return <div>{error.message}</div>;
  } else if (!postListState) {
    return (
      <Box maxW="200px" mx="auto">
        <Box as="h2" mb="5" textAlign="center">
          loading
        </Box>
        <Progress size="xs" isIndeterminate />
      </Box>
    );
  }
  return (
    <footer className="instagram bg-light-gray py-25 py-2l-15 py-xl-5">
      <div className="container">
          <ul className="instagram__list" data-aos="fade-up" data-aos-duration="1500">
              {IGItems.map((IGItem,index) => {
                return (
                  <li className="instagram__item mb-2" key={index}>
                    <a href={IGItem.linkURL} target="_blank" className="instagram__link">
                      <img src={IGItem.img} alt="instagram" />
                    </a>
                  </li>
                )
              })}
             
              <li className="instagram__item instagram__item--text">
                  <a href="https://www.instagram.com/" target="_blank" className="ig-logo">instagram</a>
                  <ul className="align-self-end h4 font-2l-h5 font-xl-h6 text-white">
                      <li><a href="https://www.instagram.com/azukibao/" target="_blank">#FollowUs</a></li>
                      <li><a href="https://www.instagram.com/azukibao/" target="_blank">#Azukibao</a></li>
                  </ul>
              </li>
          </ul>
      </div>
  </footer>
  );
};
export default InstagramFooter;
