import React from 'react';
import {prefixLink} from 'gatsby-helpers';

/**
 * Header
 *
 * @return {ReactElement}
 */
export default function Header() {
  return (
    <div className="Header">
      <h1 className="Header_title">
        <img
          height="32"
          src={prefixLink('/images/ide.png')}
          width="32"
        />
      </h1>
      <p className="Header_bio">
        Yuta Ide, 1988, MFA, Kanmu Inc
      </p>
    </div>
  );
}
