---
layout: post
title: 'SassをStylusに変換する際に気をつけるべきポイント'
date: 2015-07-13 20:11:07
categories: dev
description: 'SassをStylusに変換した際に結構ハマったので、気をつけるべきポイントとともに、SassとStylusの細かい違いをまとめます。'
thumb:
style: 'text'
---

SassをStylusに変換した際に結構ハマったので、気をつけるべきポイントと、SassとStylusの細かい違いをまとめます。

sass2stylus<span class="super">※1</span>を使って変換しますが、いまいち変換しきれないポイントがあるので、stylus素人はハマります。また、ローカルでガンガン変換していくためにnpmでsass2stylusをインストールできますが、これまたうまく動かないので、[こちら](http://qiita.com/sugarshin/items/8315fa10250acd86bfb0)を参考にして動くようにしてください。

<div class="SideMatter" style="top:488px;"><ul>
<li>
<p>※1</p>
<a href="https://github.com/mojotech/sass2stylus">sass2stylus</a></li>
<li>
<p>参考</p>
<a href="http://qiita.com/sugarshin/items/8315fa10250acd86bfb0">Qiita : sassをstylusに変換する</a></li>
</ul></div>


##複数のセレクタを指定している部分がひとつのセレクタのみになってしまう

変換前
```scss
.hoge, .fuga {
  width: 100%;
}
```

変換後
```stylus
.hoge,
  width: 100%
```

手動で追加するほかないのか...


##変数をcontentに入れる場合、括弧はいらない

変換前
```scss
.hoge {
  content: "#{$foo}";
}
```

変換後
```stylus
.hoge
  content: {$foo}
```

正しくはこっち
```stylus
.hoge
  content: $foo
```


##Mixinにブロックコンテンツを渡す@contentは{block}で代用できるが、呼び出し側に+接頭詞が必要

<div class="SideMatter" style="top:1772px;"><ul>
<li>
<p>参考</p>
<a href="https://learnboost.github.io/stylus/docs/mixins.html#block-mixins">Block Mixins - Stylus</a></li>
</ul></div>

###@contentはblockで代用

変換前
```scss
@mixin hoge() {
  @content;
}
```

変換後
```stylus
hoge
  {block}
```

###呼び出し元に注意

変換前
```scss
@include hoge() {
  .fuga
    p piyo
}
```

変換後（そもそもMixin内のブロックコンテンツが消えてた…）
```stylus
hoge()
```

正しくはこっち
```stylus
+hoge()
  .fuga
    p piyo
```


##デフォルト値の指定は!defaultではなく?=を使う

変換前
```scss
$hode: 100px !default;
```

変換後
```stylus
$hoge = 100px
```

正しくはこっち
```stylus
$hoge ?= 100px
```


##古いIEに対応する場合の注意

こういう記述はエラーと判定される

```scss
filter: alpha(opacity=0);
```

そんなときはunquoteを使う

```stylus
filter: unquote('alpha(opacity=0')
```


##@importはアンダースコアも記述

sass2stylusでは変換されないので注意。[_hoge.scss/stylus]というファイル名だったとすると

scssの場合
```scss
@import 'hoge';
```

stylusの場合
```stylus
@import '_hode'
```


##フォントアイコンが変換で文字化ける

変換前
```scss
content: '\e600';
```

変換後
```stylus
content: ""
```
