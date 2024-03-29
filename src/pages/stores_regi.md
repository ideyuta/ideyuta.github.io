---
title: "STORESレジができるまで"
createdAt: "2021-06-15"
path: "/stores-regi"
type: "work"
---

## 前置き

この記事は、[STORES レジ](https://stores.jp/regi)ができるまでにやったことや考えていたことをまとめています。僕は、プロジェクトリーダー兼リードデザイナーとして全体の設計と推進をする役割として関わっており、実際に手を動かして一緒に作ってきた仲間が入れ替わりもありながら 20~30 名ほどいます。そのため、記載されているアウトプットのほとんどはチームで作り上げたものだということにご留意ください。

## はじまり

2019 年の 5 月。僕は[soi](/soi)というプロダクトの次のアクションを考えていました。ネットショップよりもライトな取引をするためのソーシャル x モバイルベースの販売プラットフォームとしての soi には可能性を感じつつも、初期的な PMF には至っておらず、ピボットする方向を探していました。

検討を進める中で、hey として、ゼロからの新規事業をこのまま探索していくか、既存事業との相乗を狙った別の事業を作っていくかをさとうさんと話しはじめ、結論として soi をクローズし、STORES.jp と Coiney をつないだ POS レジサービスを作ることになりました。

## オンラインとオフラインをひとつに

ネットショップ作成サービスとお店のキャッシュレス決済サービスという事業を持ち、そのふたつをつなぐ存在としての POS レジサービスというのはぱっと聞いた感じはわかりやすいですが、世の中にはすでに多くの類似サービスが存在します。

僕らがまず考えたのは、なぜいま、POS レジを作るのか。市場にたくさんの製品がある中で、自分たちにしかできないことはなんだろうか、ということです。

2019 年は、D2C や DNVB と呼ばれたネットショップ発のブランドが話題になり、日本でも POPUP やお店をオープンする流れが注目されてきていました。STORES.jp を利用していただいているブランドにも、店舗を構えたり POPUP をするブランドが増えはじめていました。

ネット発のブランドがオフラインへ進出すること。リアルのお店がネットショップをはじめること。オンラインとオフラインというチャネルをまたいで活動の幅は広くなっていくし、ブランドが複数のチャネルで活動するというのは長期的なトレンドとして変わらないだろうと考えました。

そして、オンラインとオフラインがひとつになることを前提においた、スモールマーチャントのためのサービス・プロダクトを作るというのは、STORES だからこそできる価値提供になるはずだと考えました。

![](/images/stores_regi/img001.jpg)

<p class="Caption">KITASANDO COFFEE に学ぶ</p>

## チームをつくる

ネットショップを中心としたブランドは店舗をどう捉えるのか。店舗からはじまったブランドはネットショップをどう運営しているのか。POS システムに求められることは何か。レジってなんなのか。いやそもそも小売とは...。僕らはほとんどなにも知りませんでした。

これまでに存在しないまったく新しいサービスを作るわけではなく、すでに存在する仕組みやオペレーションを基本としながら、オンラインとオフラインの境をなくしていく。Coiney と STORES.jp をつないで、新しい価値提供ができるようにしていく。その方向性を探っていく前段階として、店舗についてのヒアリングや他社サービスのリサーチを進めつつ、プロジェクトを進めるための体制を検討しはじめました。

![](/images/stores_regi/img002.jpg)

<p class="Caption">かんたんなリサーチとサービスの方向性をまとめる</p>

2 ヶ月弱かけて骨子を固め、全社に向けてプロジェクトのキックオフ MTG を実施しました。検討チームには、Coiney と STORES.jp からそれぞれ数名に参加してもらいしました。とはいえ既存のプロジェクトもありますし、まずは何を作るんだっけというところからだったので、少しずつ現状把握をしたりリサーチを継続していきました。

![](/images/stores_regi/img005.png)

<p class="Caption">2019/8/26 キックオフ資料</p>

要件も仕様もなく、なんの根拠もない中でとりあえずピンを立てるためだけだったんですが、この当時のリリース目標は 2020 年秋って書いてありますね...

## 考えはじめる

### オーナーさんに会って考える

まずは POPUP をやっているブランドやお店を持っているブランドについて知るために、STORES.jp を利用しているオーナーさんにお話を伺いにいきました。

![](/images/stores_regi/img011.jpg)

<p class="Caption">店舗ヒアリングへ</p>

今使っているレジはなにか。どんな機能が重要なのか。店舗の在庫管理や顧客管理、売上管理ってどうなっているのか。店舗とネットショップってどう運営されているのか...

レジアプリや POS システムを作るとは言いつつ、そもそものお店の成り立ちやオーナーさんのビジネスの特徴、店舗を構えて活動をするときに抱える課題についてなど、幅広くお店についてを聞いていきました。

### システムから考える

レジに必要な基本的な機能と、ネットショップの管理もひとつになったシステムとインターフェイス。キャッシュレス決済も簡単に導入できるような、そんなアプリケーションと POS システムを実現するにはどんな構成にすべきなのか。既存のシステムやアプリケーションを踏まえつつ、全体像を可視化していきました。

![](/images/stores_regi/img010.jpg)

<p class="Caption">全体像をイメージする</p>

そもそも POS システムを新たに作るのか、既存のネットショップのシステムをベースとして作るのか。どちらも Pros/Cons はありますが、結論としては、ネットショップのシステムを拡張しつつも、注文管理などのコアとなる仕組みは設計から見直し、今後 5-10 年を見据えた基盤として新たに開発することになりました。

そのほかにも、下記のような項目についてチームで考えを巡らせながら、現実的に小さくはじめるための要件を整理していきました。

- 店舗や在庫はどう管理するか
- アカウントやキャッシュレス決済の利用申請はどうなっているとよいか
- 店舗を作れるようにする必要があるがどうやってデータを管理するか。店舗に紐づくデータは多そうだ
- 例えば店舗の在庫を持てるようにするには
- 店舗の現金を管理できるようにするには
- キャッシュレス決済を利用できるようにするには CoineyKit(現 決済 SDK)と連携する方法で良いのか。他の方法は考えられるか
- どこから作っていくと良いだろうか
- ...

### ラフに描いて考える

描いて考えること、リアルなフィードバックループを早く回すことでしか深く理解できないと思っているので、何もわからない中でもとにかく絵を描いてみるということをやっていきました。

レジとしてかんたんで使いやすいというベースが必要で、その上でどうやってオンラインとオフラインをつなぐ新しい機能を載せていくかを考えていました。

2019 年の 10 月から、デザイナーとして[🐨 りょうこさん](https://twitter.com/rseki)がチームに参加してくれたことで、僕がラフに描いた絵を元に相談しながらデザインプロトタイプを作っていけるようになりました。

![](/images/stores_regi/img020.jpg)

<p class="Caption">初期のデザインスタディ</p>

正直なところ、僕はこれまでひとりでプロダクトのデザインをしてきたので、他のデザイナーと協力してデザインする方法がよくわからず、りょうこさんには苦労をおかけしたなあと思っています...最近は少しはまともにチームでデザインできるようになったとは思います....（どうだろうか...あやしい...）

## 業界やユーザーをもっと知る

全体像を整理していく中で、業界やお店のことにもっと詳しくなる必要があると感じていました。元々 hey のなかで POPUP やオフラインのサービスの仮説検証をしながら、ラフォーレ原宿で WHITE GALLERY の運営をしていた[あめりさん](https://twitter.com/ameliechan2)にチームに参加してもらい、リサーチを進めていきました。

### STORES のユーザーを知る

STORES.jp を利用してくださっているオーナーさんの中に、POPUP をしたり店舗を持っているブランドがどのくらいいるのかすら僕らは知りませんでした。

500 件ほどのユーザーさんを目視確認したり、アンケートをお願いしたりすることで、現在の STORES.jp にどんな業種のブランドが多く、どれくらいのブランドが店舗を持っていたり、ネットショップ以外のチャネルでの活動を行なったことがあるのかを確認していきました。

いくつかの要素で分類して、タイプの違うブランドにお話を伺いにいきました。

![](/images/stores_regi/img030.jpg)

<p class="Caption">もっと会いにいく</p>

路面に店舗を構えているブランド、館の中に店舗を持っているブランド、複数の店舗を持っているブランド、工房と一体になっているブランド、ネットショップが売上の中心となっているブランド、卸が中心のブランド...

それらに商材の違いなども合わせて、理解を深めていきました。

![](/images/stores_regi/img033.jpg)

<p class="Caption">ヒアリングのまとめの一部</p>

### 市場を知る

既存サービスに存在する機能や価格等を整理し、どのサービスがどこに強みを持っているのかを確認していきました。ヒアリングやこの調査を元に、必要最低限の機能を整理していきました。

![](/images/stores_regi/img032.jpg)

<p class="Caption">他サービス調査の一部</p>

また、どのサービスがどれくらいの認知があり、実際に使われているのかという市場感の把握と、僕らがこれからどうやって製品を届けていくかを考えるために、調査会社さんに依頼してさらに広くレジ市場のリサーチも行っています。

レジはどういうタイミングで導入検討されるのか、どんな機能やサービスが選択のポイントとなるのか、導入の決め手は何かを理解して、初期の仮説を立てていきました。

### お店を運営する

STORES では、ラフォーレ原宿に[WHITE GALLERY という販売スペースを持っていました](https://officialmag.stores.jp/entry/200514/news-whitegallery-close)。STORES でネットショップを開いているブランドが 2 週間周期で店舗販売ができる仕組みで、販売の準備から撤収まで、日々の店舗運営業務もまるっと STORES でサポートしていました。（2020 年で終了しています）

![](/images/stores_regi/img031.jpg)

<p class="Caption">club sakenomitai POP UP (2020.03.04-03.17)</p>

実際にやってみるというのは、話を聞いて想像するよりも遥かに多くのことを理解できます。あめりさんがずっと運営を担当していましたが、そこにアパレル業界で経験を積んだ店長を迎え入れて、店舗業務やレジがどうなっていると良いかなど、多くのことをフィードバックしてもらいながらプロダクトをデザインするための背景情報を集めていきました。

## 要件を固めていく

情報を集めながら、サービスの全体像を整理していきました。

<img src="/images/stores_regi/img040.jpg" class="img_w_border" />
<p class="Caption">レジアプリ要件定義書</p>

どんなサービスを作るのか、そのためにはどういった開発が必要になるのか、システムの設計を見直しておく部分はどこか、どこから手をつけていくかといったことをまとめています。

![](/images/stores_regi/img041.png)

<p class="Caption">全体の概要</p>

また、この時点で機能やフローを理解できるレベルのデザインも完成させています。ちょうど 2020 年のはじめくらいの時期で、Coiney と STORES.jp を統合して STORES というひとつのブランドになったあたりだったので、プロダクトとしてのブランドイメージもまだフワッとしていて定まっていませんでした。

![](/images/stores_regi/img042.jpg)

<p class="Caption">デザイン v1</p>

## デザインスタディ

僕もりょうこさんも、これまで iPad のデザインをやったことがなかったので、コンポーネントのルールを作るためにデザインスタディを行いました。

![](/images/stores_regi/img052.png)

<p class="Caption">iPadのSettingsやFilesを紐解く</p>

![](/images/stores_regi/img053.png)

<p class="Caption">Square POSを紐解く</p>

Square のルールは iOS の標準ルールとどう違うのか。フォントサイズやボタンのサイズ、フローの考え方の違いを確認していきました。

![](/images/stores_regi/img054.png)

<p class="Caption">Square POSのルールを適用してみたパターン</p>

### Shopify POS の設計思想

要件やデザインを整理しつつ、STORES ブランドのイメージを取り入れたコンポーネントを作っていた 2020 年 5 月、Shopify の POS レジがフルリニューアルされました。

![](/images/stores_regi/img050.jpg)

<p class="Caption">Shopify POSをさわる</p>

スマートグリッドと呼ばれるホーム画面を中心に、店舗で提供される価値が拡張されていくことを前提としたデザインになっています。このインターフェイスはかんたんに使いこなせるわけではないと思いますが、ブランドごとにカスタマイズされること、オンラインとオフラインをどうやってつなぐかということにおいてすごく参考になりました。

![](/images/stores_regi/img051.jpg)

<p class="Caption">Shopify POSのスマートグリッド</p>

[Shopify POS のローカルデザインシステムの話](https://ux.shopify.com/building-a-local-design-system-b2810c6e01f2)なんかも面白いです。Shopify のデザインシステムである Polaris は有名ですが、そこから派生させた Polaris for Retail という新しいローカルデザインシステムを構築してデザインしているようです。

ロケーションの多様性、セットアップの多様性、労働力の多様性。これらの多様性にどう対応し、より良い体験を提供できるか。より広い意味でのデザインシステムの重要性がわかります。

## デザインをアップデートする

Shopify POS の考え方から学び、コンポーネントの設計を見直してデザインをアップデートしました。実装への着手を早めるために、このタイミングでデザイナーの 🐰 れいれいにも参加してもらうことになりました。

![](/images/stores_regi/img060.jpg)

<p class="Caption">ホーム</p>

![](/images/stores_regi/img061.jpg)

<p class="Caption">会計</p>

![](/images/stores_regi/img062.jpg)

<p class="Caption">注文管理</p>

![](/images/stores_regi/img063.jpg)

<p class="Caption">商品管理</p>

![](/images/stores_regi/img064.jpg)

<p class="Caption">精算機能</p>

## 実装する

ネットショップのシステムをベースに開発を進めていくことになったので、これまでネットショップのシステムを作ってきたバックエンドエンジニアの 🕶 りそうさん、🍠 ちゃろさん、🐥 うちこしくん、🐘 ちばなさん、🍺 にっし〜の 5 名にチームに参加してもらって開発を進めていきました。

全体の要件定義書は、実装するにはだいぶ粗く作ってあったので、ひとつひとつ詳細の要件と仕様をバックエンド、モバイルチームと検討し直しながら進めていきました。商品管理、在庫管理、注文管理などの基幹となる部分に手を入れたり、精算機能や店舗管理機能、レシート情報の管理など、ネットショップでは存在しなかった機能を新たに開発してます。

![](/images/stores_regi/img070.png)

<p class="Caption">新しい注文管理基盤を設計する</p>

これはまあ一般的だと思いますが、要件の叩きを元にエンジニアと議論しながら仕様を固め、仕様が固まったら各チームのロードマップに乗せて実装を進めていくような体制で開発を進めました。実装を進める中で見つかった新しい論点はつど議論して決めています。

![](/images/stores_regi/img071.png)

<p class="Caption">ZenHubで進行管理をしてみたりもしていた</p>

モバイルチームは、元々 Coiney に所属していた 👞 よここしと、レジのために hey に入社してもらった 🧅 よこちゃんのふたりで開発を進めていきました。

アプリは SwiftUI で書かれており、API には GraphQL が使われています。プリンターやスキャナーなどのハードウェア連携も含め、実装的に面白いことをやっていると思いますが、僕は今回実装には関わっていないのであまり詳しくお話しできません...そのうち各チームから開発についての話が聞けるタイミングもあるかと思うので、ご興味があればウォッチしておいていただけると良いかなと思います。

なんか実装についてすごくさらっとした感じで書いてしまっていますが、バックエンドも約 1 年半ほどかけて、基幹部分に手を入れたりデータ移行をしたりと難しい仕事をたくさんしてきているので、ぜひどこかで詳細が公開されると良いなあと思っていたりします。

## STORES プラットフォーム

2020 年 10 月に hey は Coubic(現 STORES 予約)を買収しましたが、STORES はプラットフォームとして広く価値を提供していくことを目指しています。レジのように内部で新規プロダクトを開発することも、M&A によって幅を広げていくことも両軸で進めていく中で、プラットフォームとして価値をつなげていくための土台として、アカウント(ID)を統合するための ID 基盤の開発や、STORES としての統合された体験を提供するためのデザインシステムの開発を同時に進めていきました。

### IdP の開発

IdP をなぜ開発するのかをかんたんにいうと、STORES のすべてのサービスをひとつのアカウントで利用できるようにすること。また分割されたシステムの認証・認可の仕組みを整えること。の 2 点です。STORES がより大きな価値を提供できるようにするため、組織を拡大していくために非常に重要になります。

<img src="/images/stores_regi/img080.png" class="img_w_border" />
<p class="Caption">IdPで提供されているアカウント作成画面</p>

僕は、レジを中心に STORES プラットフォームとして何を作っていくとよいか、という視点でいろいろと動いていたので、この IdP のプロジェクトにも並行して参加し、プロダクト的な意思決定と UI のデザイン・開発を担当していました。フロントエンドは僕と[CTO](https://twitter.com/ffu_)が書くという力技です（いまはちゃんとフロントエンドエンジニアがいます）。

IdP は 2021 年 4 月にリリースされ、第一弾としてネットショップに導入されています。そして今回、STORES レジはネットショップと同じ STORES アカウントで利用できるようになっています。

### デザインシステムの開発

レジのデザインを進める中で、これからの STORES はどんな UI デザインであると良いだろうかと考えていました。これまでのネットショップのデザインに従うのか、それとも新しいデザインを考えるのか。

STORES が、複数の会社・サービスが合わさってひとつのブランド/プラットフォームを作っていくのであれば、その指針となる STORES らしさを決めないとデザインするときに迷い続けてしまう。ユーザーにとって望ましく、一貫性のある体験を提供するために、新しいデザインシステムを作るべきだろうと考えました。

![](/images/stores_regi/img081.png)

<p class="Caption">UI Componentsの一部</p>

デザインシステムは、[すなすな](https://twitter.com/YusukeSunada)と[ゆーみん](https://twitter.com/yuuminn9)のふたりのデザイナーで進めています。フロントエンドの知見もある二人が、社内のフロントエンドエンジニアと議論しながら作っています。

レジはもちろん、ネットショップの管理画面にもこのデザインシステムが適用されはじめています。完全導入への道は長いですが、少しずつよくしていければなと思っています。

デザインシステムについては、またどこかで詳しく書こうかと思います。

## 品質を上げる

2021 年 3 月に、基本的な機能が組み上がり、バックエンドとつないで実際に動作確認ができる状態になりました。

### Quality Assurance

レジはお店の屋台骨みたいなものです。会計ができなくなることの影響は大きく、お店の信用にもつながるので、可用性はフォーナイン（99.99%）を目指しましょうみたいな話になります。

これまで STORES は、基本的には社内で動作確認をすることが多く、たまに第三者検証を得意とする会社へテストを依頼したりしてきました。レジは、複数のデバイスと OS、STORES 決済 SDK と連携してのキャッシュレス決済、ハードウェアとの連携等など多様なパターンがあり、高い品質管理が求められることがわかっていたため、これまで STORES 決済でも一緒にプロジェクト進めてきた[QaaS さん](https://www.qaas.co.jp/)にチームに加わってもらい、品質の管理と向上を行うことにしました。

PM のちほぴが開発の進捗と調整をしながら全体の QA を管理して、機能テストからシナリオテストまでエンジニアとともに品質をあげていきました。

### デザインを磨き込む

組み上がったアプリを触ってみると、いくらプロトタイプを作っていたとしても、やはり全然違った感覚を得られます。ぱっとみて理解しづらかったり、操作手順が複雑に感じたりと、大小たくさんの改善ポイントが見つかりました。

2021 年のはじめに、4 月にリリースしようとピンを立て直して進めていたんですが、触った感覚からもう一段大きく使い勝手を改善できそうだというのを感じ、ふたりのデザイナーと 1 週間で主要な画面のレイアウトやフローのリニューアルを実行しました。

<img src="/images/stores_regi/img090.png" class="img_w_border" />
<p class="Caption">最終デザイン</p>

この対応をするために、4 月というリリース目標を延期することを決めました。早くリリースするというのはもちろん重要で、リリースすることでわかることはものすごくたくさんあります。でも、自分たちがこれは使いやすいだろうと思っているものをちゃんと積み重ねていかない限り、本当に優れたプロダクトにはならないだろうとも思っています。

今回はリリースを延期する意思決定をして、かなり細かい部分までモバイルチームと連携して改善することができたので、もちろん足りない部分はたくさんありつつも使いやすいプロダクトになったのではと思っています。

## リリースに向けて

5 月の中頃からはリリースに向けての確認作業や準備が盛り上がっていました。

### サポート体制の構築

レジのリリースに向けて、ユーザーさんからのお問い合わせや相談に対応できるよう、FAQ やサポート体制の構築を進めはじめました。

レジは、ネットショップと同じアカウント・同じ web の管理画面を利用することに加えて、キャッシュレス決済として STORES 決済もご利用いただけるような作りになっているので、これまでサービスごとに別れていたサポートのコミュニケーションがかなり複雑になることが予想できました。

その複雑な要件をときほぐして良い体験を作るために、これまでネットショップのカスタマーサポートを支え続けてきてくれているひやさんにチームに参加してもらい、サービス理解を深めてもらいながら FAQ の作成や体制構築を進めていきました。

### アプリの提出

緊急事態宣言が出ているような時勢ですが、ハードウェアの確認等もあったため、オフィスに集まって本番アプリの最終動作確認をして、AppStore へアプリを提出しました。リリースの 13 日前の 6 月 2 日でした。

![](/images/stores_regi/img100.jpg)

<p class="Caption">ついに...</p>

(提出する瞬間の動画を Slack にアップしたんですが、画面が小さくてわからん、なんでモニターあるのにそっちに映さないんだと低評価コメントが続出しました...写真の奥に社内で有名な YouTuber の方が写っているので勉強させてもらおうと思います...）

### サービスサイト

サービスサイトは、デザインを[ちゃんたく](https://twitter.com/chan_tktk)、実装をまさひろさんが担当しました。ギリッギリまで情報設計もデザインも粘ってしまい、実装の時間が少なくなって負担をかけてしまったので申し訳ないなと思いつつ、良いサイトができたかなあとは思っています。（ありがとう...ありがとう...）

<img src="/images/stores_regi/img101.jpg" class="img_w_border" />
<p class="Caption">サービスサイトトップページ</p>

## はじまり

リリースの 10 日前。下北沢の BONUS TRACK にオープンした TENT さんのお店「[TENT の TEMPO](https://tent1000.com/tempo.html)」に STORES レジを先行導入させていただきました。

6/4 のプレオープンにお伺いして買い物をし、無事に動いていることを確認してきました。本当によかった。

![](/images/stores_regi/img110.jpg)

![](/images/stores_regi/img111.jpg)

<p class="Caption">TENTのTEMPOヘ</p>

<br />

ここまでくるのに、2 年もかかってしまいました。

<br />

コロナによる社会変化もあり、ネットショップやネット予約はもちろん、非接触のためのキャッシュレス決済もたくさん利用されるようになってきています。

店舗という商圏の課題や、単一の販売チャネルしか持たないというリスクが顕在化しましたが、それでもリアルなお店という形は無くならなそうだというのも同時にわかったことでした。

オンラインとオフラインはもっと溶け合い、境界は無くなって、誰もが取り得る選択肢のひとつになっていく。そのためのインフラを提供していくことが、いま STORES に求められているのではないかなと思っています。

<br />

ようやく、ここからがはじまりです。  
STORES レジ、よろしくおねがいします。

ではまた
