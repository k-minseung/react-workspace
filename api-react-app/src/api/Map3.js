import React,{ useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import {useDaumPostcodePopup} from 'react-daum-postcode';

function MyMap3(){

    const[address,setAddress] = useState("");
    //얻어온 좌표를 저장할 state에 저장
    const[position,setPosition] = useState(null);

    // Daum 우편번호 API 스크립트 URL
    let scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'

    // react-daum-postcode의 useDaumPostcodePopup 훅을 사용하여 API를 팝업으로 실행할 준비
    const open = useDaumPostcodePopup(scriptUrl);

    //주소-좌표 변환 객체를 생성
    let geoCoder = new window.kakao.maps.services.Geocoder();

    const handleComplete = (data) => {
        let addr = data.address;
        setAddress(addr);

        geoCoder.addressSearch(data.address,function(results,status){
            //정상적으로 검색이 완료 됐으면
            if(status === window.kakao.maps.services.Status.OK){
                let result = results[0];
                console.log(result.y,result.x)
                //좌표를 객체로 만들어서 만든 state에 저장
                let center = {
                    lat:result.y,
                    lng:result.x
                }  
                setPosition(center);
            }
            

        })
    }

    function handleClick(){
        open({onComplete : handleComplete})
    }

    return(
        <div>
            <div>
                <input type="text" value={address} placeholder="주소" readOnly/>
                <input type="button" onClick={handleClick} value="주소 검색" />
            </div>
            <div>
            {position !== null &&
                <Map center={position}
                        style={{width:"400px",height:"400px"}}
                        level={3}
                       >       
                    <MapMarker 
                        position={position}
                        readOnly>
                        
                    </MapMarker>
                </Map>
            }
            </div>     
        </div>
    )
}
export default MyMap3;
