---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: MEストレージバス(タグ)
    icon: expatternprovider:tag_storage_bus
categories:
- extended devices
item_ids:
- expatternprovider:tag_storage_bus
---

# MEストレージバス(タグ)

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_tag_storage_bus.snbt"></ImportStructure>
</GameScene>

MEストレージバス(タグ)は、アイテムや液体のタグでフィルターできる<ItemLink id="ae2:storage_bus" />です。基本的な論理演算子にも対応しています。

いくつかの例:

- 原石のみを許可

forge:raw_materials/*

- インゴットと宝石系を許可

forge:ingots/* | forge:gems/*

