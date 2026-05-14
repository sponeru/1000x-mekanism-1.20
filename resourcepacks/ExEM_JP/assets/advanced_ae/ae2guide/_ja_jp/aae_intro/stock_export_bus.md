---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: MEストック出力バス
  icon: advanced_ae:stock_export_bus_part
categories:
  - advanced items
item_ids:
  - advanced_ae:stock_export_bus_part
---

# MEストック出力バス

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_stock_export_bus.snbt"></ImportStructure>
</GameScene>

MEストック出力バスは、フィルターに設定されたアイテムを指定した数まで正確に搬出することができます。接続先のインベントリを監視しており、指定した数を超える搬出はされません。使用するには他のバスと同じようにアイテムを設定し、フィルターのアイテムを中央クリックすることで数を設定できます。ただし、これは搬出先のインベントリを調整するものではありません。つまり、設定した数を超えていても、余分なアイテムや液体を搬入することはありません。