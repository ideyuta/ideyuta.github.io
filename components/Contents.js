import React from 'react';
import nbem from 'nbem';

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
        <b>Visaのプリペイドカードをスマホアプリから簡単に発行できるサービス</b>を作っています。
      </p>

      <blockquote className="twitter-tweet" data-lang="ja"><p dir="ltr" lang="ja">ReactNative製のアプリ、バンドルカードリリースしました！ぜひ触ってみてください！<a href="https://t.co/0wG4NFZEr0">https://t.co/0wG4NFZEr0</a> <a href="https://t.co/6Ieb7JO4Vv">pic.twitter.com/6Ieb7JO4Vv</a></p>&mdash; └┐☺︎└┐ (@_ideyuta) <a href="https://twitter.com/_ideyuta/status/776617797153542144">2016年9月16日</a></blockquote>

      <p className={c('&body')}>
        僕の主な業務はサービス全般のデザインと、アプリ開発、プロモーションの企画実施などです。ほとんどJavaScriptを書き続けるマンになっているので、最近はデザインがちょっとできるエンジニアと言われています。
      </p>

      <p className={c('&body')}>
        SELECKさんにどんな感じで開発しているかをまとめてもらいましたのでご興味があればどうぞ。<a href="https://seleck.cc/850" target="_blank">3人の開発チームで、Fintech事業をどう作る？最小構成のチームで挑む、その戦略とは</a>
      </p>

    </div>
  );
}
