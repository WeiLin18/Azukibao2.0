import React, { useState, useEffect } from 'react';
import { Key } from '../../utils'; // 引入 API key
import GoogleMapReact from 'google-map-react';
import IconImg from 'assets/images/azuki-dark.svg';
const MyPositionMarker = ({ text }) => <div>{text}</div>;

// Map
const SimpleMap = (props) => {
  // 預設位置
  const [myPosition, setMyPosition] = useState({
    lat: 25.04,
    lng: 121.5,
  });
  const shopList = [
    {
      name: '南京復興總店',
      address: '台北市中山區南京東路三段219號',
      phone: '02-2222-2222',
      lat: 25.04,
      lng: 121.5,
    },
    {
      name: '板橋新埔2號店',
      address: '新北市板橋區文化路一段360號',
      phone: '02-2222-8888',
      lat: 25.043,
      lng: 121.52,
    },
  ];

  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [places, setPlaces] = useState([]);
  // 建立 state，供地圖本身做參考，以改變地圖視角
  const [currentCenter, setCurrentCenter] = useState({
    lat: 25.04,
    lng: 121.5,
  });
  // 當地圖載入完成，將地圖實體與地圖 API 傳入 state 供之後使用
  const apiHasLoaded = (map, maps) => {
    setMapInstance(map);
    setMapApi(maps);
    setMapApiLoaded(true);
  };

  const handleCenterChange = () => {
    if (mapApiLoaded) {
      setMyPosition({
        // center.lat() 與 center.lng() 會回傳正中心的經緯度
        lat: mapInstance.center.lat(),
        lng: mapInstance.center.lng(),
      });
    }
  };

  // 找咖啡廳
  // const findCafeLocation = () => {
  //     if (mapApiLoaded) {
  //         const service = new mapApi.places.PlacesService(mapInstance)

  //         const request = {
  //             location: myPosition,
  //             radius: 1000,
  //             type: ['cafe'],
  //         }

  //         service.nearbySearch(request, (results, status) => {
  //             if (status === mapApi.places.PlacesServiceStatus.OK) {
  //                 setPlaces(results)
  //             }
  //         })
  //     }
  // }
  const CafeMarker = ({ shop }) => (
    <div
      style={{
        height: '60px',
        width: '120px',
        background: '#fa0',
        zIndex: '100',
        cursor: 'pointer',
      }}
    >
      <img style={{ height: '30px', width: '30px' }} src={IconImg} />
      <h2 className="mb-2">{shop.name}</h2>
      <h4>{shop.phone}</h4>
    </div>
  );

  const handleClickShop = (e) => {
    const map = document.getElementById('ShopMap');
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
      '<div id="bodyContent">' +
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the ' +
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
      'south west of the nearest large town, Alice Springs; 450&#160;km ' +
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
      'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
      'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
      'Aboriginal people of the area. It has many springs, waterholes, ' +
      'rock caves and ancient paintings. Uluru is listed as a World ' +
      'Heritage Site.</p>' +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
      '(last visited June 22, 2009).</p>' +
      '</div>' +
      '</div>';

    const infowindow = new mapApi.InfoWindow({
      content: contentString,
    });
    infowindow.open(map, e.target);
  };

  // useEffect(() => {
  //     findCafeLocation()
  // }, [mapApiLoaded, myPosition])

  // 點擊自動完成地址時，更改 MyPosition
  const handleClickToChangeMyPosition = (e) => {
    const placeId = e.target.getAttribute('dataid');
    console.log('s');
    const service = new mapApi.places.PlacesService(mapInstance);
    const request = {
      placeId,
      fields: ['geometry'],
    };

    service.getDetails(request, (results, status) => {
      if (status === mapApi.places.PlacesServiceStatus.OK) {
        const newPosition = {
          lat: results.geometry.location.lat(),
          lng: results.geometry.location.lng(),
        };
        setCurrentCenter(newPosition); // 改變地圖視角位置
        setMyPosition(newPosition); // 改變 MyPosition
      }
    });
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <button onClick={handleClickShop}>123</button>
      {/* <input type="button" value="找咖啡廳" onClick={findCafeLocation} /> */}
      <GoogleMapReact
        bootstrapURLKeys={{
          key: Key,
          libraries: ['places'], // 要在這邊放入我們要使用的 API
        }}
        center={currentCenter}
        onBoundsChange={handleCenterChange} // 移動地圖邊界時觸發 handleCenterChange
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
        id="ShopMap"
      >
        <MyPositionMarker
          lat={myPosition.lat}
          lng={myPosition.lng}
          text="My Position"
        />
        {shopList.map((item) => (
          <CafeMarker
            // key={item.id}
            lat={item.lat}
            lng={item.lng}
            // lat={item.geometry.location.lat()}
            // lng={item.geometry.location.lng()}
            shop={item}
            // placeId={item.place_id}
            // dataid={item.place_id}
            onClick={handleClickShop}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

// 由於改寫成 functional component，故另外設定 defaultProps
SimpleMap.defaultProps = {
  center: {
    lat: 25.04,
    lng: 121.5,
  },
  zoom: 17,
};

export default SimpleMap;
