---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: 発展型パターンエンコーダー
  icon: advanced_ae:adv_pattern_encoder
categories:
  - advanced items
item_ids:
  - advanced_ae:adv_pattern_encoder
  - advanced_ae:adv_processing_pattern
---

# 発展型パターンエンコーダー

ME発展型パターンプロバイダーにアイテムの搬入面を指定するには、これでエンコードされたパターンが必要になります。手に持って右クリックすると、GUIが開きます。

<ItemImage id="advanced_ae:adv_pattern_encoder" scale="4"></ItemImage>

左側のスロットに処理パターンを入れると、そのパターンの素材がリストとして全て表示されます。

![PEGui1](../pic/ape_pattern.png)

各行には、アイテムごとに送るブロックの面を指定するボタンのセットがあります。最初は全て「A」が選択されています。これは通常のパターンのように、プロバイダーに接している面からアイテムが送られます。他の面のボタンをクリックすると、その面からアイテムが送られます。注意点として、これでエンコードされた発展型処理パターンは、<ItemLink id="advanced_ae:small_adv_pattern_provider" />か<ItemLink id="advanced_ae:adv_pattern_provider" />に入っているときのみ正常に動作します。また、指定された面からアイテムが搬入できない場合、通常のパターンプロバイダーのように接している面から搬入されます。