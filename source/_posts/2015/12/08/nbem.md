---
layout: post
title: nbem
date: 2015-12-08 07:25:53
categories: dev
description: 'JSX内でBEMを直感的に記述するJSモジュールを作った。'
thumb:
style: 'text'
---

最近はReactを書く機会が増え、同時にJSXを書く機会が増えた。HTMLで書いていた時からBEM記法でのクラス記述の冗長性を疎ましく思っていたが、全てJSで書けるようになったので、JSX内でBEMを簡単に記述できるJSモジュールを作ることにした。

## nbem

[https://github.com/ideyuta/nbem](https://github.com/ideyuta/nbem)

nbemはBEM記法を簡単かつ直感的に記述することを目指したJSモジュール。requireしたnbemのクロージャ関数を変数に入れて使う。

### 基本

`&` で階層（element）を定義し `:` で変化（modifier）を定義する。

```js
var nbem = require(nbem);
var bem = nbem();

bem('header'); // => "header"
bem('&nav'); // => "header__nav"
bem('&&item'); // => "header__nav__item"

bem('header:global'); // => "header--global"
bem('&nav'); // => "header--global__nav"
```

クロージャ関数からは文字列が返ってくるのでそのままクラス名へ。

```js
<header className={bem('header')} />
```

### クラス名の連結

状態などの別クラスを連結したい場合は、クロージャ関数の第二引数に文字列もしくは文字列のリストを渡すことで連結できる。

```js
bem('header'); // => "header"
bem('&nav', 'isActive'); // => "header__nav isActive"
bem('&nav', ['isActive', 'isHover']); // => "header__nav isActive isHover"
bem('&&item'); // => "header__nav__item"
```

実際のプロダクト内では、[classnames](https://github.com/JedWatson/classnames)と併用することが想定される。

```js
getClassName() {
  return classnames({isActive: false, isHover: true});
}
render() {
  const h = nbem();
  return <header className={h('header', this.getClassName())} />;
}
```

### 接続詞の変更

BEMの基本的な接続詞は、elementが `'__'` 、modifireが `'--'`であるが、nbemでは変更する機構を備えている。nbemからシングルトンのconfigインスタンスを取り出すことができ、configに対してsetSeparatorを実行することで変更できる。

```js
var config = require(nbem).config;
config.setSeparator('-', '_'); // element, modifier
header('header:global'); // => "header-global"
header('&title') // => "header-global_title"
```

### React ES6 での記述例

```js
import React from 'react';
import nbem from 'nbem';

export default class Header extends React.Component {
  render() {
    const bem = nbem();
    return (
      <header className={bem('header')}>
        <h1 className={bem('&title')}>Title</h1>
        <p className={bem('&description')>Description</p>
      </header>
    );
  }
}
```

Render:
```html
<header class="header">
  <h1 class="header__title">Title</h1>
  <p class="header__description">Description</p>
</header>
```

## nbemを利用しているプロジェクト

- [tongariboyz/5rolli](https://github.com/tongariboyz/5rolli)
- [moqada/5rolli-crx](https://github.com/moqada/5rolli-crx)

nbemは[npm](https://www.npmjs.com/package/nbem)で公開されています。ぜひ触ってみてください。
Issueやbugなどありましたら[GitHub](https://github.com/ideyuta/nbem)からお願いします。
