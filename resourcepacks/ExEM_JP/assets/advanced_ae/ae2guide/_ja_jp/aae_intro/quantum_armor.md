---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: 量子アーマー
  icon: advanced_ae:quantum_helmet
categories:
  - advanced items
item_ids:
  - advanced_ae:quantum_helmet
  - advanced_ae:quantum_chestplate
  - advanced_ae:quantum_leggings
  - advanced_ae:quantum_boots
  - advanced_ae:quantum_upgrade_base
  - advanced_ae:walk_speed_card
  - advanced_ae:sprint_speed_card
  - advanced_ae:step_assist_card
  - advanced_ae:jump_height_card
  - advanced_ae:lava_immunity_card
  - advanced_ae:flight_card
  - advanced_ae:water_breathing_card
  - advanced_ae:auto_feeding_card
  - advanced_ae:auto_stock_card
  - advanced_ae:magnet_card
  - advanced_ae:hp_buffer_card
  - advanced_ae:evasion_card
  - advanced_ae:regeneration_card
  - advanced_ae:strength_card
  - advanced_ae:attack_speed_card
  - advanced_ae:luck_card
  - advanced_ae:reach_card
  - advanced_ae:swim_speed_card
  - advanced_ae:night_vision_card
  - advanced_ae:flight_drift_card
  - advanced_ae:recharging_card
  - advanced_ae:portable_workbench_card
  - advanced_ae:pick_craft_card
---

# 量子アーマー

<Row gap="10">
<ItemImage id="advanced_ae:quantum_helmet" tag="{internalCurrentPower: 2.0E8d}" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_chestplate" tag="{internalCurrentPower: 3.0E8d}" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_leggings" tag="{internalCurrentPower: 2.5E8d}" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_boots" tag="{internalCurrentPower: 2.0E8d}" scale="4"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:quantum_helmet" />
* <ItemLink id="advanced_ae:quantum_chestplate" />
* <ItemLink id="advanced_ae:quantum_leggings" />
* <ItemLink id="advanced_ae:quantum_boots" />

「AE2のシステム」を装備したらどんなのになるんだろう、と想像したことはありませんか?これはそれの一つの答えです。量子アーマーはAE2のシステムと高度に連携するハイテクな装備であり、どんな時でもあらゆる機能に手軽にアクセスできます!
デフォルトでは、ネザライト装備に匹敵する防御力を備えた電力駆動の装備です。この装備は電力を使ってエネルギーシールドを展開し、かなりのダメージを吸収することができます。また、ブーツは落下ダメージを、チェストプレートは空中での採掘速度低下を解消します。
しかし、この装備の真価はアップグレードを詰め込んだ時にこそ発揮されます。

<br/>

## ネットワークに接続

量子アーマーは無線ターミナルのように<ItemLink id="ae2:wireless_access_point" />に入れることで、MEネットワークと接続できます。これによって、装備やアップグレードの機能が有効になります。詳細については以下で解説しています。なお、この有効になった機能が動作するにはアクセスポイントの範囲内にいる必要があります。

<br/>

## アップグレードの適用

アップグレードを適用させるには、アーマーを装備し、対応するキー(デフォルトではNキー)を押して量子アーマー設定メニューを開く必要があります。

![QAGUI](../pic/quantum_armor_config.png)

この画面ではアップグレードの追加/削除や有効化/無効化のほか、アップグレードの調整をすることができます。

<br/>

## 量子アップグレード基礎カード

<ItemImage id="advanced_ae:quantum_upgrade_base" scale="2"></ItemImage>

<ItemLink id="advanced_ae:quantum_upgrade_base" />自体には特別な効果はありません。全てのカードの中間素材です。

<br/>

## 自動食料補給カード

<ItemImage id="advanced_ae:auto_feeding_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:auto_feeding_card" />はプレイヤーの食事に使用するアイテムを設定できます。設定したアイテムがMEネットワークに存在するとき、空腹になれば自動で食べることができます。

<br/>

## 自動ストックカード

<ItemImage id="advanced_ae:auto_stock_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:auto_stock_card" />はプレイヤーのインベントリ内で、アイテムが設定した数になるようにMEネットワークから引き出すことができます。設定できる数は1スタックに制限されていないため、複数のスロットにわたってアイテムをストックさせることも可能です。

<br/>

## 速度系カード

<Row gap="10">
<ItemImage id="advanced_ae:walk_speed_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:sprint_speed_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:swim_speed_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:walk_speed_card" />
* <ItemLink id="advanced_ae:sprint_speed_card" />
* <ItemLink id="advanced_ae:swim_speed_card" />

これらのアップグレードは、プレイヤーの移動速度を向上させます。それぞれ移動速度を自由に設定でき、スニーク中や飛行中にも影響します。重要な点として、それぞれの移動速度は独立しているため、速度を下げて操作性を上げることもできます。

<br/>

## 垂直移動系カード

<Row gap="10">
<ItemImage id="advanced_ae:jump_height_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:step_assist_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:jump_height_card" />
* <ItemLink id="advanced_ae:step_assist_card" />

これらのアップグレードはプレイヤーの垂直方向の移動を向上させます。ジャンプ力を上げたり、ステップアシストを有効にすることができます。

<br/>

## 飛行系カード

<Row gap="10">
<ItemImage id="advanced_ae:flight_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:flight_drift_card" scale="2"></ItemImage>
</Row>

### 飛行カード

<ItemLink id="advanced_ae:flight_card" />はクリエイティブ飛行ができるようになります。飛行時の速度は設定のスライダーから調整できます。また、歩行/走行速度カードの効果も加算されます。

### 飛行ドリフトカード

<ItemLink id="advanced_ae:flight_drift_card" />は飛行カードが適用されている場合にのみ機能します。クリエイティブ飛行の慣性を調整できます。値を小さくするほど停止が早くなり、0にすると即座に停止します。

<br/>

## ME再充電カード

<ItemImage id="advanced_ae:recharging_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:recharging_card" />を適用すると、その装備のワイヤレス充電が可能になります。これにはアクセスポイントの範囲内である必要があります。チェストプレートに適用させると、インベントリのアイテムも同時に充電できます。

<br/>

## ポータブルワークベンチカード

<ItemImage id="advanced_ae:portable_workbench_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:portable_workbench_card" />は量子アーマーにセルワークベンチ機能を追加します。ホットキーを設定して開きます。操作はブロックのセルワークベンチと同じです。

<br/>

## ピッククラフトカード

<ItemImage id="advanced_ae:pick_craft_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:pick_craft_card" />はプレイヤーが現在見ているブロックの注文を行えるようになります。実際に使うにはアクセスポイントの範囲内にいることと、ブロックのレシピが登録されたパターンが必要になります。ポップアップに数を入れ、自動クラフトされるなど、通常の注文と同じ手順で処理されます。

<br/>

## ユーティリティ系カード

<Row gap="10">
<ItemImage id="advanced_ae:night_vision_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:lava_immunity_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:water_breathing_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:magnet_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:night_vision_card" />
* <ItemLink id="advanced_ae:lava_immunity_card" />
* <ItemLink id="advanced_ae:water_breathing_card" />
* <ItemLink id="advanced_ae:magnet_card" />

これらのアップグレードはプレイヤーに様々な便利系機能を提供し、火炎耐性や暗視を付与するなどの効果があります。マグネットカードは多彩な項目が設定でき、アイテムのフィルターや回収範囲を調整できます。

<br/>

## 防御系カード

<Row gap="10">
<ItemImage id="advanced_ae:hp_buffer_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:regeneration_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:evasion_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:hp_buffer_card" />
* <ItemLink id="advanced_ae:regeneration_card" />
* <ItemLink id="advanced_ae:evasion_card" />

これらのアップグレードはプレイヤーの防御を様々な形で強くさせます。体力増加カードは最大体力を増加させ、再生カードは体力の回復速度を向上します。回避カードは一定の確率であらゆるダメージを完全に無効化します。

<br/>

## 攻撃系カード

<Row gap="10">
<ItemImage id="advanced_ae:strength_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:attack_speed_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:strength_card" />
* <ItemLink id="advanced_ae:attack_speed_card" />

これらのアップグレードはプレイヤーの攻撃を強くさせます。攻撃力を上げたり、攻撃速度を向上させます。

<br/>

## 能力系カード

<Row gap="10">
<ItemImage id="advanced_ae:luck_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:reach_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:luck_card" />
* <ItemLink id="advanced_ae:reach_card" />

これらのアップグレードはプレイヤーの能力を向上させます。運勢を高めてドロップ率を良くしたり、リーチを伸ばしたりできます。リーチカードの距離は設定で変更できます。

<br/>

## 予定

この装備には今後さらに多くの機能が追加される予定です。お楽しみに!