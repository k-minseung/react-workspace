import React, {useState} from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import '../css/address.css';
import axios from "axios";

function Address () {

    //Daum 우편번호 API 스크립트 URL
    let scriptUrl = "http://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"

    //react-dame-postcode의 useDaumPostcodePopup훅을 사용하여 API를 팝업으로 실행할 준비
    const open = useDaumPostcodePopup(scriptUrl);

    const [postCode , setPostCode] = useState('');              //우편번호를 저장할 State
    const [address , setAddress] = useState('');                //주소를 저장할 State
    const [detailAddress , setDetailAddress] = useState('');    //상세주소를 저장할 State
    const [extraAddress, setExtraAddress] = useState('');       //참고항목를 저장할 State

    //팝업을 열고 완료시 handleComplete 함수 실행
    const handleClick = () => {
        open({onComplete: handleComplete})
    }

    //DaumPostcode API에서 주소 선택 완료 후 실행되는 함수
    const handleComplete = (data) => {
        let addr = ''; // 주소 변수
        let extraAddr = ''; // 참고항목 변수

    //메인주소를 처리 -----------------------------------------------
    if(data.userSelectedType === 'R'){
        addr = data.roadAddress; //도로명 주소 선택시 도로명 주소 할당
    } else {
        addr = data.jibunAddress; //지번 주소 선택 시 지번 주소 할당
    }



    //참고항목을 처리 ------------------------------------------------
    //사용자가 선택한 주소 타입에 따라 주소를 설정
    //도로명주소(R) 또는 지번주소(J) 를 선택했는지 확인
    if(data.userSelectedType==="R"){
        // 법정동명이 있는지 확인하고 추가 (법정동, 법정리가 있을 때만)
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
        }
        // 건물명이 있고 공동주택일 경우 추가
        if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
        }
        //참고항목이 있다면 괄호로 감싸서 추가
        if (extraAddr !== ''){
            extraAddr = `(${extraAddr})`
        }
        //참고항목 state 업데이트
        setExtraAddress(extraAddr);
    } else {
        //지번 주소인 경우 참고항목을 빈 문자열로 설정
        setExtraAddress('');
    }

    //우편번호, 주소를 state에 저장
    setPostCode(data.zonecode);
    setAddress(addr);
    

    //상세주소 입력 필드로 포커스를 이동
    document.getElementById('detailAddress').focus();
}


    return(
        <div className="form-group">
            <div className="form-row">
                <input placeholder="우편번호" readOnly value={postCode} />
                <input type="button" onClick={handleClick} value="우편번호 찾기" />
            </div>
            <input id="address" type="text" placeholder="주소" readOnly  value={address}/>
            <div className="form-row split">
                <input id="detailAddress" type="text" onChange={(e)=>setDetailAddress(e.target.value)} placeholder="상세주소" />
                <input id="detailAddress" type="text" placeholder="참고항목" readOnly value={extraAddress} />
            </div>
        </div>
    )
}

export default Address;