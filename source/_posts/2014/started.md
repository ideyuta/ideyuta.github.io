---
layout: post
title:  "Jekyll+Gruntでサイト作りなおした"
date: 2014-09-21 00:00:00
categories: Dev
description: "更新が面倒すぎるこれまでのサイトをどうにかしたいという気持ちと、ちょっとこの1年ほどインハウスにこもっていたのでそろそろ外に向かって何かしないといけないなという気持ちが高まったところで、ここ半年ほどで学んだいろいろを活用してサイトを作り直しました。"
style: "text"

---

更新が面倒すぎるこれまでのサイトをどうにかしたいという気持ちと、ちょっとこの1年ほどインハウスにこもっていたのでそろそろ外に向かって何かしないといけないなという気持ちが高まったところで、ここ半年ほどで学んだいろいろを活用してサイトを作り直しました。

まずは技術編ということで、このサイトの開発構成あたりをざっと並べておきます。


##やりたいこと

やりたいことを簡単にまとめると、拡張しやすいサイトかつ更新が楽であること。もう少し開発要件に落とすと次のようになりました。

* GitHubで管理
* Markdownでブログ
* Jade+CoffeeScript+Sassで開発
* Vimだけで完結


###GitHubで管理

なぜGitHubで管理したいかというと、まあバージョン管理できるしCLIで全部終えられるしサーバー無料だしといろいろあります。今回はGitHub.ioにサイトを作り直すことにしました。

###Markdownでブログ

MarkdownやreSTのような構造的な文書をローカルで書いて、そいつをそのままブログに転用したい。そこで登場するのが[Jekyll](http://jekyllrb.com/)先生ですね。github.ioはJakyllに対応していて簡単に使えるんですが、今回の場合は静的ページ+Jekyllでブログという形だったので、Gruntで静的ページを生成すると同時に[grunt-jekyll](https://www.npmjs.org/package/grunt-jekyll)でコンパイルするようにしました。

####参考

* [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages)


### Jade+CoffeeScript+Sassで開発
これらはそれぞれHTML、JS、CSSのメタ言語で、一度手を出してしまうと戻れなくなる劇薬です。開発を楽にしようとするのであればこの辺りはマストですね。簡単にそれぞれを説明しておきます。

####Jade
Jadeは、HTMLを簡単に書けるJavaScriptのテンプレートエンジンです。テンプレートエンジンなので、ブロックや変数など簡単な処理も書けますし、HTMLのコンポーネント化もできてしまいます。
なぜHamlじゃなくてJadeなのかと言われる方もおられるかと思います。まあ直裁にいうと、HamlよりもJadeのほうがぱっと見たときに直感的にわかりやすい感じがしたからです。（まずあの%が...）

####参考

* [Jade - Template Engine](http://jade-lang.com/)
* [Jade について。 - Gists - GitHub](https://gist.github.com/japboy/5402844)

####CoffeeScript
CoffeeScriptは、JavaScriptにコンパイルできるプログラミング言語です。JSよりも簡潔に書けるので慣れると戻れません。最近[弊社](https://kanmu.co.jp)ではTypeScriptに変えようかという話もでてきていますがとりあえず慣れているCoffeeScriptにしました。現状サイト内で使ってるとこはありませんがそのうちトップページとかでごにょごにょやりたい...

####参考

* [CoffeeScript](http://coffeescript.org/)
* [CoffeeScript入門メモ](http://qiita.com/questbeat/items/031a0106749b8ba15aca)
* [CoffeeScript と TypeScript をそれぞれ実務案件で使ってみた感想](http://dev.classmethod.jp/client-side/javascript/review-coffeesctipt-and-typescript/)

####Sass
SassはCSSのメタ言語です。だいたい皆さんすでにSassかLess、Stylusあたりに移行し終えていると思いますが、正直この辺りはプロジェクトに合わせて選べば良いかなと。個人的な採用理由としては、自社内でSassを使ったフレームワークを内製していて、それを使うのが最も開発効率が良いというのが理由です。はい。そのうちこのあたりは公開できればと。

####参考

* [Sass](http://sass-lang.com/)



###Grunt

いきなりでてきましたGruntですが軽く挟んでおきます。Gruntはいろいろな面倒な作業を自動化してくれるビルドツールなんですが、今回使っているJade、CoffeeScript、Sass、JekyllはすべてこのGruntさんが自動的にビルドして、必要なファイル群を生成してくれるようになっています。弊社のハイパーフルスタックおじさんである[@moqada](https://twitter.com/moqada)さんが「Gulpいいんやで〜」と言っていたのでそのうち変わるかもしれません。

####参考
* [Grunt](http://gruntjs.com/)
* [Gulp](http://gulpjs.com/)


###Vimだけで完結
これ開発効率に与える影響大きいと思っていて、複数のツールを使わなくて済むというだけで気分的にもスピード感あがるなと。まあ実際のところMarkdownで文書書く部分はKobitoを使っていたりするんですが、それでもFTPツールとかFinderとかエディタを行き来する必要がないだけでも圧倒的に楽です。
昨年(2013）末あたりにVimを使い始めて、完全に移行するまでに2週間ぐらい掛かりましたが、[時雨道場さん](https://gist.github.com/voluntas/6831251)のスパルタキーマップを弊社エンジニアに埋め込まれつつ頑張った結果得られてものは大きいです。

##準備

以上を詰め合わせてサイトを作る方法を書いていきます。

###GitHubで新しいリポジトリを作成しローカルにクローンする
まずは[GitHub](https://github.com/new)で新しいリポジトリを作成します。
今回はGitHub.ioを利用するので、username.github.ioというリポジトリを作りました。
![](/img/blog/2014-09-21-started/create-repository.jpg)

作成したら、そいつをローカルにCloneしてきます。

```vim
$ git clone git@github.com:ideyuta/ideyuta.github.io.git
```

###JekyllとGruntをインストール
今回のサイトを作成するにはJekyllとGruntが必要です。そこで、基本的なGrunt設定等を簡単にインストールできるYeomanを使って、それらをインストールしていきます。ここでは、shoitoさんの[静的ページをJekyllとGrunt/Yeomanで作る](http://qiita.com/shoito/items/5dad6e715d4e4d49e752)を参考に進めます。

####必要なファイルをインストール

これから行う開発にはRuby1.9+が必要になります。[このあたり](http://qiita.com/checkpoint/items/f8e65380d9cb0182218d)を参考にRubyをインストールしてください。Rubyをインストールし終えたら、以下のファイルをインストールします。

* Bundler : Gemのパッケージ管理ツール
* Grunt-cli : Gruntを実行するためのCLI
* Yo : Yeomanのプロジェクトひな形生成ツールYo
* generator-jekyllrb : Yoで作成するひな形をJekyll対応にしてくるジェネレータ

```vim
$ gem install bundler
$ npm install -g grunt-cli
$ npm install -g yo
$ npm install -g generator-jekyllrb
```

####Yoでひな形を作成
先ほどインストールしたYoを使ってサイトのひな形を生成します。

```vim
$ yo jekyllrb
```

以下のようなファイル群が作成されるはずです。

```
.
|-- Gemfile
|-- Gemfile.lock
|-- Gruntfile.js
|-- _config.build.yml
|-- _config.yml
|-- app
|   |-- _bower_components
|   |-- _includes
|   |-- _layouts
|   |-- _plugins
|   |-- _posts
|   |-- _scss
|   |-- _src
|   |-- css
|   |-- fonts
|   |-- img
|   |-- index.html
|   `-- js
|-- bower.json
|-- node_modules
`— package.json
```


これでGruntでSass、Coffee、Jekyllがコンパイルされるようになりました。

###Jadeを使えるようにする
これではまだJadeが使えないので、Jadeをインストールします。
GruntでJadeを扱うには[Grunt-contrib-jade](https://github.com/gruntjs/grunt-contrib-jade)を使います。

```vim
$ npm install grunt-contrib-jade
```

あとはGruntfileにタスクを書いてあげればOKです。タスク内容は[ソース](https://github.com/ideyuta/ideyuta.github.io/tree/develop)を見てください。

###確認

以上の設定で、grunt serveを実行すればローカルサーバで確認できるようになっているはずです。

```vim 
$ grunt serve
```

ポート9000でひな形のサイトが見れることを確認して次に進んでください。

##静的ページの作成とJekyllのコンパイルディレクトリを分ける

Jadeを入れたことで、Jekyllがコンパイルするhtmlファイルを生成するjadeファイルという、若干ややこしい構成になりました。そこで、開発中に触るソースファイルとJekyllでコンパイルするファイルを切り分けられるように、ディレクトリとGruntタスクを変更しました。

###ファイル構成
ファイル構成をざっくりみると以下のような感じになります。

```
.
|--_config.yml
|--_config.build.yml
|--jekyll
| |--_layouts
| |--_blog
| |--_profile
| |--_posts
| |--_work
| `--...
|--src
| |--_coffee
| |--_components
| |--_jade
|   |--_layouts
|   |--_blog
|   `--_profile
| |--_posts
| |--_sass
| `--_work
|--dist
|--Gemfile
|--Gemfile.lock
|--Gruntfile.js
|--node_modules
`--package.json
```

開発は、srcディレクトリ以下で行うことになります。srcディレクトリ下のファイルを変更すると、Gruntタスクが走ってjekyllディレクトリに必要なファイルを生成していきます。その後、Grunt-jekyllがmdファイルなどをもとに、公開するファイル群をdistディレクトリ下に生成します。このときcss、img、jsなどはGrunt-jekyllで生成されないため、Grunt-jekyll終了後にGrunt-copyを利用して、jekyllディレクトリから公開に必要なファイルをdistディレクトリにコピーしていきます。これでようやくsrcファイルを変更すると公開ファイルがdist以下に生成される環境ができました。

Gruntタスクについては[ソース](https://github.com/ideyuta/ideyuta.github.io/tree/develop)を...

###静的ページについて
ブログ（mdファイル）以外の静的ページは、_jadeディレクトリ以下で作成します。そのファイルをgrunt-jadeでjekyllディレクトリ以下にコンパイルするようにしています。そこで生成されたファイルとmdファイルを使って公開ファイルがつくられます。

##ブランチ構成

ブランチは、developで開発、masterに公開ファイルを配置します。

```
.
|--master
`--develop
```

developブランチに先ほどの開発ファイル群が存在し、masterブランチは[Grunt-build-control](https://github.com/robwierzbowski/grunt-build-control)を利用して、developブランチのdist以下をdeployするような形になっています。

こんなGruntタスクを

```js
buildcontrol: {
  dist: {
    options: {
      dir: 'dist',
      remote: '../',
      branch: 'master',
      commit: true,
      push: true
    }
  }
}
```

以下のコマンドで実行すると

```vim
$ grunt buildcontrol:dist
```

ローカルのmasterブランチにpush&commitされます。後はmasterブランチでリモートにpushするだけ。


なぜこんな構成になっているかというと、github.ioではmasterブランチ直下のindex.htmlをルートとして参照するらしく？特定のディレクトリ（今回はdist）をルートとして設定できなかったためです。これができないと、dist以下にある公開ファイルが開発ファイルとごちゃまぜになってしまい、わけがわからなくなってしまうのです...そこで、masterには公開ファイルだけを配置するような形に一旦落ち着きました。この辺りもっと良いやり方があれば教えてください...

##まとめ
これでdevelopブランチのsrcをいじればサイト＋ブログが更新できるようになりました。まだまだ構成がびみょうな部分がありますが、一旦こんな感じで締めくくりたいと思います。次回は「サイト作りなおしたデザイン編」を公開したいと思いますのでよろしくおねがいします。
