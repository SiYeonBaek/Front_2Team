import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios'
import "./styles.css";
import KakaoMap from "./KakaoMap";
import { Map, MapMarker } from 'react-kakao-maps-sdk';
// import Weather from "./Weather";

export default function App() { // eslint-disable-next-line
    const [visible, setVisible] = useState(true);

    const [markerPositions, setMarkerPositions] = useState([]);
    const markerPositions1 = [
        [33.452278, 126.567803],
        [33.452671, 126.574792],
        [33.451744, 126.572441]
    ];
    const markerPositions2 = [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912]
    ];

    const [mapSize, setMapSize] = useState([400, 400]);

    const API_KEY = "99bfbfe44797995b67f1b4c4948e3ea2";
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}';

    const searchWeather = async (e) => {
        if (e.key === 'Enter') {
            try {
                const data = await axios({
                    method: 'get',
                    url: url

                })

                console.log(data);
                setResult(data);
            }
            catch (err) {
                alert(err);
            }

        }
    }


    const AppWrap = styled.div`
    width: 8rem;
    height: 8rem;
    border: 1px pink solid;
    .appContentWrap {
      left: 50%
      top: 50%
      transform: translate(-50%,-50%);
      position: absolute;
      border: 1px blue solid;
      padding:20px;
    }
  `;

    const ResultWrap = styled.div`
    margin-top: 60px;
    padding: 10px;
    border: 1px black solid;
    border-radius: 8px;
  
  `;



    return (
        <div className="App">
          <div className="Header">
          <a href='/'><h1>??????????????? ??????</h1></a> 
            <div className="App-nav">
                <div className="nav-bar">
                    <ul id="nav">
                        <li>
                            <a href="#" className="abc">
                                ?????????????????????
                            </a>
                        </li>
                        <li>
                            <a href="#">?????????????????????</a>
                            <ul>
                                <li>
                                    <a href="#">?????????????????????</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">??????????????????</a>
                            <ul>
                                <li>
                                    <a href="#">?????????</a>
                                </li>
                                <li>
                                    <a href="#">?????????</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="   http://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/csc/bbs_conf.jsp?menuSeq=593&bbs_no=9">??????????????????</a>
                        </li>
                        <li>
                            <a href="Notice">????????????</a>
                        </li>

                    </ul>
                </div>
            </div>
          </div>
            <div id="wrap">
                {visible && (
                    <>
                        <h2>??????</h2>
                        <KakaoMap markerPositions={markerPositions} size={mapSize} />
                    </>
                )}
            </div>
            <div id="wrap-2">
                {visible && (
                    <>
                        <h2>??????????????????</h2>
                        <AppWrap>
                            <div className="appContentWrap">
                                <input
                                    placeholder='????????? ???????????????.'
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    type='text'
                                    onKeyDown={searchWeather}
                                />
                                <ResultWrap>
                                    <div className="?????????">(result.name)</div>
                                    <div className="??????">(result.data.main.tem)</div>
                                    <div className="????????????">(result.data.weather[0].main)</div>
                                </ResultWrap>

                            </div>

                        </AppWrap>
                    </>
                )}
            </div>

            {/* react footer  */}
            <div id="footer">
                <div class="bg-custom">
                    <div class="divbox">
                        <div class="row">
                            <div class="col-md-12 p-5">
                                <div class="row">

                                    <div class="col-md-3">
                                        <></>
                                        <div className="coll_title">
                                            <h3>?????????????????? 1588-3650</h3>
                                        </div>
                                        <p>?????? ????????????(?????????????????? 1588-3650)??? ????????? ?????? ????????? ???????????? ??????????????? ???????????? 24?????? ???????????? ????????? ?????? ??? ?????? ????????? ???????????? ???????????? ?????? ????????????(1588-3650)??? ????????? ?????? ???????? ???????????????????????? ?????? ???????????? ????????? ??????????????????.</p>
                                        <></>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        <p>??????????????? : 02-2100-3399</p>
                                                        <p>??????(????????? ??????) : 09:00 ~ 18:00 </p>
                                                        <p>??????????????? : 02-2100-3399</p>
                                                    </li>
                                                    <div class="aalign">
                                                        <div className="a_link">

                                                        <a className="link_a" href="https://www.youtube.com/@withyou3542">YouTube</a>
                                                        <a className="link_a" href="https://twitter.com/KMA_earthquake?s=20&t=nGkYYya2LiAb7eiScfu0NQ">Twitter</a>
                                                        <a className="link_a" href="https://www.sejong.go.kr/safety/index.do">Naver</a>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </li>
                                            <div class="right"><li><p>????????? | ????????? ????????? ????????? ?????????</p></li></div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}