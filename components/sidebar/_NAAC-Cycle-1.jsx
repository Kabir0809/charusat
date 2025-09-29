import { Fragment } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const title = "NAAC Cycle-1";

const Cycle1 = () => {
 
  const commentList = [
    {
      desc: 'NAAC AQAR 2019-2020',
      link: 'https://charusat.ac.in/iqac/naac/2019_20/',
    },
    {
      desc: 'NAAC AQAR 2018-2019',
      link: 'https://charusat.ac.in/iqac/naac/2018_19/',
    },
    {
      desc: 'NAAC AQAR 2017-2018',
      link: 'https://charusat.ac.in/iqac/naac/2017_18/mobile/index.html',
    },
    {
      desc: 'NAAC AQAR 2016-2017',
      link: 'https://charusat.ac.in/iqac/naac/2016_17/mobile/index.html',
    },
  ];

  return (
    <Fragment>
      <div className="comments">
        <h4 className="title-border">{title}</h4>
        <ul className="comment-list">
          {commentList.map((val, i) => (
            <li className="comment" key={i}>
              <div className="com-content">
                <div className="com-title">
                  <div className="com-title-meta lab-ul">
                    {/* Use Link component for internal links, and <a> for external links */}
                    
                      <Link href={val.link}>
                        
                          <span>{val.desc}</span>
                       
                      </Link>
                    
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default dynamic(()=> Promise.resolve(Cycle1),{ssr:false});;
