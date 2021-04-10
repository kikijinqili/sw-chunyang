/*
 * @Author: Jinqi Li
 * @Date: 2021-04-09 12:38:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-09 12:38:17
 * @FilePath: \sw-chunyang\pages\message\index.js
 */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';
import { BackTop } from 'antd';

function useWindowSize() {
	const [ windowSize, setWindowSize ] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight
				});
			}

			window.addEventListener('resize', handleResize);

			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);
	return windowSize;
}

export default function Message(){
    const size = useWindowSize();

    return (
        <React.Fragment>
            <div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
        </React.Fragment>
    )
}