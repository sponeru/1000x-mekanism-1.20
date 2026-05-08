---
navigation:
  title: "アドオン:AE2 Insert Export Card"
  icon: ae2insertexportcard:export_card
  position: 150
categories:
  - tools
item_ids:
- ae2insertexportcard:export_card
- ae2insertexportcard:insert_card
---

# AE2 Insert Export Card

<Row>
  <ItemImage id="ae2insertexportcard:export_card" scale="2" />

  <ItemImage id="ae2insertexportcard:insert_card" scale="2" />
</Row>

挿入カード/搬出カードを使うと、インベントリからアイテムを挿入またはインベントリにアイテムを搬出することができます。

## 挿入カード

<ItemImage id="ae2insertexportcard:insert_card" scale="2" />

挿入カードは、インベントリの特定のスロットにあるアイテムを取り出し、MEネットワークに挿入します。
![Insert Card](diagrams/insert_card.png)

スロットをクリックするとチェックマークがつきます。チェックマークがついたスロットにあるアイテムがMEネットワークに挿入されます。アイテムフィルターは上のスロットで行います。

### アップグレード

挿入カードは以下の[アップグレード](items-blocks-machines/upgrade_cards.md)に対応しています:

*   <ItemLink id="fuzzy_card" />は耐久値でもフィルターできるようになるほか、耐久/NBTを無視したフィルターも可能です。
*   <ItemLink id="inverter_card" />はフィルターをホワイトリストからブラックリストに変更します。

### レシピ

<RecipeFor id="ae2insertexportcard:insert_card" />

## 搬出カード

<ItemImage id="ae2insertexportcard:export_card" scale="2" />

搬出カードは挿入カードと全く同じような動作をしますが、こちらはMEネットワークからアイテムをインベントリに搬出します。

![Export Card](diagrams/export_card.png)

インベントリからアイテムを上部のスロットにドラッグして、アイテムを指定します。インベントリ内のスロットをクリックすることで、数を調整できます。右クリックすると数がXに戻ります。

### アップグレード

搬出カードは以下の[アップグレード](items-blocks-machines/upgrade_cards.md)に対応しています:

*   <ItemLink id="fuzzy_card" />は耐久値でもフィルターできるようになるほか、耐久/NBTを無視したフィルターも可能です。
*   <ItemLink id="speed_card" />は搬出速度を1個から設定した数に上昇させます。
*   <ItemLink id="crafting_card" />はMEネットワークに指定したアイテムが存在しない時、自動で注文して補充します。

### レシピ

<RecipeFor id="ae2insertexportcard:export_card" />