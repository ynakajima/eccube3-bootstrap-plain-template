# EC-CUBE3 Bootstrap Plain Template

> EC-CUBE3 用のプレーンな Bootstrap テンプレート

![スクリーンショット](https://raw.githubusercontent.com/ynakajima/eccube3-bootstrap-plain-template/master/screenshot.jpg)

## 概要

EC-CUBE3 からデフォルトのテンプレートに Bootstrap3 が採用されていますが、カスタマイズが諸々ほどこされているので、Twig の練習も兼ねプレーンな Bootstrap で実装をしてみました。（現在実装中）

## 方針

素のままの Bootstrap で実装する

* Bootstrap で定義されているクラス名以外は使用しない（EC-CUBE の処理上どうしても必要な箇所は除く）
* スタイル（外部CSS、style要素、style属性）は一切加えない
* JavaScript も足さない（EC-CUBE で用意されているものは利用する）
* レイアウト用の素材として画像は一切使用しない（ダミー用の商品写真、バナー等は除く）

## つかいかた

`template` ディレクトリ直下にあるファイル一式を、EC-CUBE の `app/template/default` に上書き。

```sh
$ rsync -av template/ {EC-CUBEのディレクトリ}/app/template/default
```

※ 反映されない場合は `app/cache/twig/default` 以下にあるキャッシュファイルを消去。

### 新規テンプレートとして登録する場合
新規のテンプレートとして登録したい場合はまず、DBにテンプレートデータを追加します。

```sql
INSERT INTO `dtb_template` (`device_type_id`, `template_code`, `template_name`, `create_date`, `update_date`)
VALUES (10, 'bootstrap-plain-template', 'EC-CUBE3 Bootstrap Plain Template', NOW(), NOW());
```

つぎに、テンプレート用のディレクトリを用意。（html/template は default のをコピーして利用）

```sh
$ cp -R template {EC-CUBEのディレクトリ}/app/template/bootstrap-plain-template
$ cp -R {EC-CUBEのディレクトリ}/html/template/default {EC-CUBEのディレクトリ}/app/template/bootstrap-plain-template
```

最後に、管理画面の `設定 > オーナーズストア > テンプレート` 画面にアクセスして、`テンプレート一覧` にある `EC-CUBE3 Bootstrap Plain Template` を選択して `登録` して下さい。


## 開発方法
素の html を書くのが億劫なので jade をつかって Twig のテンプレートファイルを書き出しています。

`src/jade` 以下にある jade ファイルを編集後 `gulp jade` コマンドを打つと `template` ディレクトリに Twig ファイルが書き出されます。

## 実装状況
* ✔ <del>default_frame</del>
* ✔ <del>block</del>
* ✔ <del>index</del>
* ✔ <del>pagination</del>
* ✔ <del>Block/cart</del>
* ✔ <del>Block/category</del>
* ✔ <del>Block/footer</del>
* ✔ <del>Block/free</del>
* ✔ <del>Block/garally</del>
* ✔ <del>Block/login</del>
* ✔ <del>Block/logo</del>
* ✔ <del>Block/new_product</del>
* ✔ <del>Block/news</del>
* ✔ <del>Block/search_product</del>
* ✔ <del>Product/list</del>
* ✔ <del>Product/detail</del>
* ✔ <del>Cart/index</del>
* ✔ <del>Shopping/login</del>
* ✔ <del>Shopping/nonmember</del>
* Shopping/index
* Shopping/shipping
* Shopping/shipping_edit
* Shopping/shipping_multiple
* Shopping/complete
* Shopping/shopping_error
* Contact/index
* Contact/confirm
* Contact/complete
* Entry/index
* Entry/confirm
* Entry/complete
* Entry/activate
* Forgot/index
* Forgot/reset
* Forgot/complete
* Mypage/login
* Mypage/index
* Mypage/navi
* Mypage/change
* Mypage/change_complete
* Mypage/delivery
* Mypage/delivery_edit
* Mypage/favorite
* Mypage/history
* Mypage/mail_view
* Mypage/withdraw
* Myapge/withdraw_confirm
* Mypage/withdraw_complete
* Mypage/error
* Help/about
* Help/agreement
* Help/guide
* Help/privacy
* Help/tradelaw
* Form/form_layout
* error

## LICENSE
[![license GNU GPL v2.0](https://img.shields.io/badge/license-GNU%20GPL%20v2.0-blue.svg)](https://www.gnu.org/licenses/gpl-2.0.html)

Copyright(c) 2015 ynakajima <yuhta.nakajima@gmail.com>  
Copyright(c) 2000-2015 LOCKON CO.,LTD. All Rights Reserved.
