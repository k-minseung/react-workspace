import React, {useState} from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk';
function MyMap() {

  const[result , setResult] = useState("");
  // const[position,setPosition] = useState(null); // 좌표를 저장하기 위한 State

  //지도에 표시 될 마커 State
  const[markers , setMarkers] = useState([]);

  //활성화된 마커의 id를 관리하는 state
  const[activeMarker , setActiveMarker] = useState(null);

  //검색한 키워드를 저장하는 state
  const[keyword , setKeyword] = useState('');

  //생성된 카카오맵 객체를 저장할 state
  const[map , setMap] = useState(null);

  //사용자가 클릭한 마커의 정보를 저장할 state
  const[info , setInfo] = useState(null);


  const center = {
      // 지도의 중심좌표
      lat: 33.450701,  //위도
      lng: 126.570667, //경도
  }

  //----------------------------------------------------------------------------------------------

  //지도 클릭시 마커 추가
  const handleMapClick = (event,MouseEvent) => {
    const latlng = MouseEvent.latLng
        setResult(
          `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`
        )
        const newMarker = {
          id:markers.length,
          position : {
            lat : latlng.getLat(),
            lng : latlng.getLng()
          },
          info : ` 마커 위치 : ( ${latlng.getLat()} , ${latlng.getLng()} ) `
        }
        setMarkers([...markers,newMarker]);
  }

  //----------------------------------------------------------------------------------------------

  //마커에 마우스를 올렸을 때 인포윈도우 활성화하기
  const handleMouseOver = (id) => {
    setActiveMarker(id);
  }

  //마커에 마우스를 올리지 않을 때 인포윈도우 비활성화하기
  const handleMouseOut = () =>{
    setActiveMarker(null);
  }

  //----------------------------------------------------------------------------------------------
  
  return (
    <div>
      <Map
        center={center} //지도 중심 좌표 lat : 위도, lng : 경도
        style={{ width: '600px', height: '600px' }} //지도의 너비와 높이
        level={3} // 지도 확대 정도 숫자가 작을수록 크게 클수록 작게 보임
        onClick={handleMapClick} // 지도 클릭 이벤트 핸들러
      >
        {markers.map(marker => (
          <MapMarker 
            key = {marker.id}
            position={marker.position}
            onClick={() => handleMouseOver(marker.id)} //클릭했을때
            // onMouseOver={} //마우스를 올렸을 때
            onMouseOut={handleMouseOut}
            >
              {activeMarker === marker.id && (
                    <div style={{padding:"5px",color:"#000"}}>
                      {marker.info}
                    </div> 
              )} 
              
            </MapMarker>
        ))}

        {/* 마커는 좌표위에 생성이 된다. 
      <MapMarker 
        position={position ?? center} /> {position ?? center} position 앞에 값이 없으면 center를 사용해라 */}

      {/* 인포윈도우 생성하기
      <MapInfoWindow //Infowindow를 생성하고 지도에 표시한다.
         position={center} //Infowindow가 표시될 위치
        removable={true} //Infowindow가 닫을 수 있는 x버튼 표시
        >
           <div style={{padding :'5px', color:'#000'}}>Hello World</div>
         </MapInfoWindow> */}

      </Map>
      <p>지도를 클릭해주세요!</p>
      <p id = "result">{result}</p>
    </div>
  );
}

export default MyMap;