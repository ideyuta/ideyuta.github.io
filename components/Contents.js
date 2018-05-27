import React from 'react';
import nbem from 'nbem';
import {prefixLink} from 'gatsby-helpers';

/**
 * Contents
 *
 * @return {ReactElement}
 */
export default function Contents() {
  const c = nbem();
  return (
    <div className={c('Contents')}>

      <h2 className={c('&headline')}>最近</h2>

      <p className={c('&body')}>
        ニューライトという会社で働いています。
        <br />
        <a className={c('&body')} href="https://newlight.jp">
          https://newlight.jp
        </a>
      </p>

      <img src="/images/newlight201710.png" />


      <h2 className={c('&headline')}>バンドルカード</h2>

      <p className={c('&body')}>
        <b>Visaのプリペイドカードをスマホアプリから簡単に発行できるサービス</b>を作っていま<del>す</del>した。
      </p>

      <blockquote className="twitter-tweet" data-lang="ja"><p dir="ltr" lang="ja">ReactNative製のアプリ、バンドルカードリリースしました！ぜひ触ってみてください！<a href="https://t.co/0wG4NFZEr0">https://t.co/0wG4NFZEr0</a> <a href="https://t.co/6Ieb7JO4Vv">pic.twitter.com/6Ieb7JO4Vv</a></p>&mdash; └┐☺︎└┐ (@_ideyuta) <a href="https://twitter.com/_ideyuta/status/776617797153542144">2016年9月16日</a></blockquote>

      <p className={c('&body')}>
        僕の主な業務はサービス全般のデザインと、アプリ開発、プロモーションの企画実施などです。ほとんどJavaScriptを書き続けるマンになっているので、最近はデザインがちょっとできるエンジニアと言われています。
      </p>

      <p className={c('&body')}>
        SELECKさんにどんな感じで開発しているかをまとめてもらいましたのでご興味があればどうぞ。<a href="https://seleck.cc/850" target="_blank">3人の開発チームで、Fintech事業をどう作る？最小構成のチームで挑む、その戦略とは</a>
      </p>

      <p className={c('&body')}>
        バンドルカードの制作過程を簡単にまとめた記事を公開しています。
        <a href={prefixLink('/vandlecard/')}>
          <b>こちらからどうぞ。</b>
        </a>
      </p>


      <h2 className={c('&headline')}>Works</h2>

      <p className={c('&body')}>
        <a href={prefixLink('/vandlecard/')}>
          バンドルカードができるまで
        </a>
      </p>

      <p className={c('&body')}>
        <a href={prefixLink('/i-d-e/')}>
          フリーランス時代の仕事
        </a>
      </p>

      <p className={c('&body')}>
        <a href={prefixLink('/design-st/')}>
          学生時代にデザインしたもの
        </a>
      </p>

      <p className={c('&body')}>
        <a href={prefixLink('/mediaart/')}>
          学生時代に制作したメディアアートたち
        </a>
      </p>

    </div>
  );
}
