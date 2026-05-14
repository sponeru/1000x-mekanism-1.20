---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: ME発展型IOバス
  icon: advanced_ae:advanced_io_bus_part
categories:
  - advanced items
item_ids:
  - advanced_ae:advanced_io_bus_part
---

# ME発展型IOバス

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_advanced_io_bus.snbt"></ImportStructure>
</GameScene>

ME発展型IOバスは、外部のインベントリを制御するための非常に強力なツールです。これは<ItemLink id="advanced_ae:import_export_bus_part"/>と<ItemLink id="advanced_ae:stock_export_bus_part"/>を組みあわせて作られ、両方の機能を継承しています。また、発展型IOバスの速度は<ItemLink id="ae2:export_bus"/>の8倍です。起動から速度が最大に達するためには多少時間がかかりますが、完全に起動すれば驚異的な速さになります。

## 搬出

ME発展型IOバスは、フィルターにアイテムと数を指定することで、その数までアイテムを搬出することができます。また、UIの左側に、搬出されたアイテムの数を調整するための設定もあります。

## 搬入

ME発展型IOバスは、フィルターに指定されていないアイテムは搬入します。搬入と搬出の処理は別々に行われるため、片方の処理でもう片方が停止することはありません。調整モードが有効な場合、設定された数を超えたアイテムは優先的に搬入されます。他に搬入の処理がされていない場合、フィルターにないアイテムを搬入します。

<RecipeFor id="advanced_ae:advanced_io_bus_part"/>