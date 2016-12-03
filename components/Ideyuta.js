import React from 'react';
import {prefixLink} from 'gatsby-helpers';
import nbem from 'nbem';

/**
 * Ideyuta
 *
 * @return {ReactElement}
 */
export default function Ideyuta() {
  const i = nbem();
  return (
    <div className={i('Ideyuta')}>
      <div className={i('&recentPhoto')}>
        <img
          className={i('&&img')}
          src={prefixLink('/images/ideyuta.png')}
        />
        <p className={i('&&copyright')}>
          ©
          <a href="https://seleck.cc/850" target="_blank">RELATIONS</a>
          さん
        </p>
      </div>
      <h1 className={i('&hello')}>
        こんにちは、<b>井出優太</b>です。東京でデザイナーをしています。インタラクション・デザインを軸にデザインしたりコードを書いたりしています。
      </h1>
      <p className={i('&bio')}>
        略歴：88年静岡県生まれ。多摩美術大学大学院 美術研究科 デザイン専攻 情報デザイン研究領域 経験デザイン修了。美術修士。1歳の娘がいます。<b>高校で電子工学、大学でメディアアート、大学院でインタラクションデザインをやっていました。</b>フリーのデザイナー・コーダーを経て、2013年8月に金融・決済・ITを軸とするベンチャーであるカンムへ入社。<b>今は<a href="https://vandle.jp/" target="_blank">バンドルカード</a>を作っています。</b>
      </p>
      <p className={i('&bio')}>
        連絡先：ご連絡は<a href="mailto:ide.yuta@gmail.com">ide.yuta@gmail.com</a>にお願いします。書いたコードは<a href="https://github.com/ideyuta">GitHub</a>で見ることができます。<a href="https://twitter.com/_ideyuta">Twitter</a>もやっていますが全てフィクションです。
      </p>
      <div className={i('&trademark')}>
        <img
          className={i('&&img')}
          src={prefixLink('/images/trademark.svg')}
        />
      </div>
    </div>
  );
}
