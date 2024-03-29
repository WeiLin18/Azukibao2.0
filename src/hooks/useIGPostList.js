import {
  useEffect,
  useState
} from "react";
import {
  getIGPosts
} from "../utils";


// custom hook
export const useIGPostList = () => {
  const [listState, setListState] = useState({
    isLoading: false,
    error: null,
    data: null
  });

  useEffect(() => {
    setListState({
      isLoading: true,
      error: null,
      data: null
    });
    getIGPosts()
      .then((res) => {
        if (res.data === null) {
          throw new Error("data is null");
        }
        const igPhotoNum = 7;
        const igPhotoUrl = "https://www.instagram.com/p/";
        let postList = [];
        for (let i = 0; i < igPhotoNum; i++) {
          let post = {
            linkURL: `${igPhotoUrl}${res.data.graphql.user.edge_owner_to_timeline_media.edges[i].node.shortcode}`,
            imgURL: `${res.data.graphql.user.edge_owner_to_timeline_media.edges[i].node.thumbnail_resources[4].src}`
          }
          postList.push(post);
        }
        setListState({
          isLoading: false,
          error: null,
          data: postList,
        });

      })
      .catch((error) => {
        console.log(error);
        setListState({
          isLoading: false,
          error: error,
          data: null
        });
      });
  }, []);

  return {
    isLoading: listState.isLoading,
    error: listState.error,
    postList: listState.data
  };
};