import React from 'react';
import Link from './utility/Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Search on Youtube
      </Link>
      <Link href="/wiki" className="item">
        Search on Wiki
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
