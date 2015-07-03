---
layout: post
title: 'submoduleのブランチを変更する'
date: 2015-07-03 08:53:06
categories: dev
description: 'Gitのsubmoduleはいろいろ厄介なやつですが、今回は特定のブランチをsubmoduleとして追加していた際に、そのブランチを別のブランチへ変更する方法をまとめます。'
thumb:
style: 'text'
---


##submoduleのブランチを変えたい

Gitのsubmoduleはいろいろ厄介なやつですが、今回は特定のブランチをsubmoduleとして追加していた際に、そのブランチを別のブランチへ変更する方法をまとめます。
もっといい方法があるかもしれませんので、知っている人は教えて下さい。方法としては、1度submoduleを削除して入れ直しています。


##submoduleの削除

まずQiitaにあったsubmoduleの削除方法<span class="super">※1</span>を参考にsudmoduleを削除します。


<div class="SideMatter" style="top:712px;"><ul>
<li>
<p>※1</p>
<a href="http://qiita.com/u1aryz/items/8d1923da79158439eeaa">git submoduleを今風な感じで削除する</a></li>
</ul></div>

```vim
$ git submodule deinit path/to/submodule
$ git rm path/to/submodule
$ git config -f .gitmodules --remove-section submodule.path/to/submodule
```

##.git/modules内のファイルの削除

上記コマンドでsubmodule自体は削除されましたが、再度同じsubmoduleを追加しようとすると、これまでのbranchで追加されてしまう現象が発生しました。
どうやら、`.git/modules`内のファイルを削除する必要があったようです。

```vim
$ git rm -r .git/modules/path/to/submodule
```

##再インストール

削除した後、再インストールすることでブランチを変えることができます。

```vim
$ git submodule add -b <BRANCH> git@github.com:submodule
```

以上です。
