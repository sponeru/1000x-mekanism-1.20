---
navigation:
  parent: introduction/index.md
  title: ME建築ツール
  position: 1
  icon: meplacementtool:me_placement_tool
categories:
  - meplacementtool tools
item_ids:
  - meplacementtool:me_placement_tool
---

# ME建築ツール

<ItemImage id="meplacementtool:me_placement_tool" scale="4" />

ME建築ツールは、MEネットワークから直接ブロック、液体、AE2のケーブル部品を設置できるツールです。最大18種類のアイテムや液体を記憶します。

## 機能

- **遠隔供給**: インベントリに入れずともブロックを設置できます。
- **ネットワーク接続**: <ItemLink id="ae2:wireless_access_point" />を使ってMEネットワークに接続できます。
- **18個の設定スロット**: 最大18種類のブロックや液体を設定でき、素早く切り替えられます。
- **自動注文**: MEネットワークやインベントリにブロックが存在しないとき、クラフト可能であれば注文画面が開きます。
- **メモリーカード対応**: オフハンドに<ItemLink id="ae2:memory_card" />を持っているとき、設置した部品に自動的に設定を反映します。
- **設定カード(Mekanism)対応**: オフハンドにMekanismの設定カードを持っているとき、設置した機械に自動的に設定を反映します。

## 使い方

- **空中に右クリック**: 設定画面を開く
- **地面に右クリック**: ブロックを設置
- **Gキー長押し**: ラジアルメニューを開く
- **ラジアルメニューで左クリック**: ブロックを選択する

![Radial Menu](../../assets/me_placement_tool_radial.png)

## ネットワーク接続

<ItemLink id="ae2:wireless_access_point" />に設置: MEネットワークに接続します。

## 設定画面

![Configuration GUI](../../assets/me_placement_tool_gui.png)

設定画面には、アイテムを設定できるスロットが18個あります。以下の方法で設定できます:
- JEIからアイテムをドラッグして設定
- インベントリからアイテムをドラッグして設定

また、ブロックのほかにAE2の部品(ケーブル、バス、パネルなど)を設定できます。

## レシピ

<RecipeFor id="meplacementtool:me_placement_tool" />