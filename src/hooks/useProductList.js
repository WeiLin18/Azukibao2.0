import {
  useEffect,
  useState
} from "react";
import {
  getProductList
} from "../utils";

// {
//   "records": [
//       {
//           "id": "reccJNnRX4lr0tny1",
//           "fields": {
//               "category": 1,
//               "price": 35,
//               "image": "1",
//               "slogan": "入口綿密的豆沙，點心界經典中的經典",
//               "label": "人氣NO.1",
//               "id": 1,
//               "Number": "經典豆沙包"
//           },
//           "createdTime": "2021-02-10T05:49:11.000Z"
//       },

//   ],
//   "offset": "recbPUqI5HtsSixvM"
// }

// custom hook
export const useProductList = () => {
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
    getProductList()
      .then((res) => {
        // console.log(res);
        let filterList = [];
        for (const obj of res.data.records) {
          filterList.push(obj.fields);
        }
        let uploadList = filterList.filter(product => product.state === '上架')
        setListState({
          isLoading: false,
          error: null,
          data: uploadList
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
    fetchProductList: listState.data
  };
};