import React from 'react';
import nbem from 'nbem';

/**
 * Footer
 *
 * @return {ReactElement}
 */
export default function Footer() {
  const f = nbem();
  return (
    <div className={f('Footer')}>
      <p className={f('&copyright')}>
        © ideyuta, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja" target="_blank">CC-BY-SA</a>.
      </p>
    </div>
  );
}
