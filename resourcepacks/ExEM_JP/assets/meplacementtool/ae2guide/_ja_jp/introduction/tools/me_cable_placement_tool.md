---
navigation:
  parent: introduction/index.md
  title: MEケーブル建築ツール
  position: 3
  icon: meplacementtool:me_cable_placement_tool
categories:
  - meplacementtool tools
item_ids:
  - meplacementtool:me_cable_placement_tool
---

# MEケーブル建築ツール

<ItemImage id="meplacementtool:me_cable_placement_tool" scale="4" />

MEケーブル建築ツールは、素早いケーブル設置に特化したツールです。複数のモードを備え、様々なケーブルや色に対応しています。

## 機能

- **ケーブル**: ガラス、カバー、スマート、高密度カバー、高密度スマートケーブルに対応しています。
- **建築モード**:
  - **直線**: 指定した直線にケーブルを設置します。
  - **平面**: 指定した四角形の範囲すべてにケーブルを設置します。
  - **分岐**: 指定した間隔で分岐するケーブルを設置します。
- **ネットワーク接続**: <ItemLink id="ae2:wireless_access_point" />を使ってMEネットワークと接続できます。
- **取り消し**: 1つ前の設置を取り消すことができます。

## 使い方

- **右クリック**: 範囲を選択
- **左クリック**: 範囲選択をキャンセル
- **Gキー**: 設定画面を開く
- **Ctrl + 左クリック**: 1つ前の設置を取り消し
- **ME無線アクセスポイントに設置**: MEネットワークに接続

### 通常

![Without Key of Spectrum](../../assets/me_cable_placement_tool_gui_no_key.png)

- **手動染色**: 染料をオフハンドに持った状態でツールを使うと、染料を消費して染色されたケーブルを設置します。

### 色彩のカギを装着

![With Key of Spectrum](../../assets/me_cable_placement_tool_gui_with_key.png)

- **色を選択**: 設定画面で16(+1)色から自由に選べます。
- **自動染色**: 染料を消費せず、選択した色のケーブルを設置します。
- **Aキー**: 現在選択している色をお気に入りに登録します。(キーコンフィグで変更可能です)

## レシピ

<RecipeFor id="meplacementtool:me_cable_placement_tool" />