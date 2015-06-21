---
layout: post
title: "Djangoのinclude機能を利用したときに謎の空テキストが表示される現象の原因と対策"
date: 2014-10-01 00:00:00
categories: dev
description: "Djangoのinclude機能を使ったときに謎の空テキストが表示される現象が起こったのでその原因と対処方法をまとめておきます。"
style: "text"

---

Djangoのinclude機能を使ったときに謎の空テキストが表示される現象が起こったのでその原因と対処方法をまとめておきます。

##現象

変換前

```html
<div class="hoge"></div>
{% include 'fuga.html' %}
```

変換後

```html
<div class="hoge"></div>
"

"
<div class="fuga"></div>
```

##原因
BOMというのが原因らしい。BOM<span class="super">※1</span>はByte Order Markといって、Unicode形式で書かれたファイルですよっていうことを表す<span class="super">※2</span>らしい。こいつがファイルの一番始めにくっついていると、includeしたときに空テキストとして変換されてしまってぶっ壊れる。
どうやらDjangoに限ったことではなくて、PHPとかでも起こる模様。

<div class="SideMatter" style="top:1155px;"><ul>
<li>
<p>※1</p>
<a href="http://e-words.jp/w/BOM.html">e-Words:BOMとは</a>
</li>
<li>
<p>※2</p>
<a href="http://q.hatena.ne.jp/1269678207">文字コードのUTF-8について、BOM無しと、BOM付き、というのがあったのですが、具体的に、どう異なるのでしょうか？</a>
</li>
</ul></div>

##対処方法
対処方法としては、単純にvimでバイナリモードで該当ファイルを開いてBOM部分を消すだけでOK。

1\. まずは該当ファイルをバイナリモードで開く。

```vim
$ vim -b index.html
```

2\. 以下のような感じで挿入されているBOM（`<U+FEFF>`部分）を削除

```html
<U+FEFF><div class="test"> ... </div>
```

これできれいさっぱり空テキストが消えます！

##BOM付きのファイルを探す方法
他にも問題のあるファイルがあるんじゃねえか？ってことでBOM付きのファイルを探すコマンド<span class="super">※3</span>を探しました（[@moqada](https://twitter.com/moqada)さんが）。

```vim
$ find . -type f -name '*.html' -exec file {} + | grep "(with BOM)"
```

これで安心ですな。

<div class="SideMatter" style="top:1965px;"><ul>
<li>
<p>※3</p>
<a href="http://qiita.com/tailak/items/8ba2e738555f8596d3e3">Qiita:BOM付きUTF-8のファイルを探す</a>
</li>
</ul></div>
