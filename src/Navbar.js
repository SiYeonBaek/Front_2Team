export default function Navbar() {
    return <nav className="nav">
        <a herf="/" className="site-title">지진대피소 현황</a>
            <ul id="nav">
            <li>
              <a href="info">
                지진대피소안내
              </a>
            </li>
            <li>
              <a href="place">지진대피소위치</a>
              <ul>
                <li>
                  <a href="locationOfplace">지역별위치검색</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="historyOf">지진발생이력</a>
              <ul>
                <li>
                  <a href="historyOfarea">지역별</a>
                </li>
                <li>
                  <a href="historyOftimes">빈도수</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="   http://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/csc/bbs_conf.jsp?menuSeq=593&bbs_no=9">지진대피지침</a>
            </li>
            <li>
              <a href="/Notice">공지사항</a>
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
              </ul>
            </li>

          </ul>
        
    </nav>
}