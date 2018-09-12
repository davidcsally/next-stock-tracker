import React from 'react';
import Link from 'next/link';
import './NavigationTab.scss';

/** used in portfolio and index pages */
const NavigationTab = ({ route }) => (
  <ol styleName="link-container">
    <li styleName={`watch${route === '/' ? '-selected' : ''}`}>
      {route === '/'
        ? <p>Watch</p>
        : <Link href="/"><a>Watch</a></Link>
      }
    </li>
    <li styleName={`portfolio${route === '/portfolio' ? '-selected' : ''}`}>
      {route === '/portfolio'
        ? <p>Portfolio</p>
        : <Link href="/portfolio"><a>Portfolio</a></Link>
      }
    </li>
  </ol>
);

export default NavigationTab;
