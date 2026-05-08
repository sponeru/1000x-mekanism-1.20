---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: ME精密出力バス
    icon: expatternprovider:precise_export_bus
categories:
- extended devices
item_ids:
- expatternprovider:precise_export_bus
---

# ME精密出力バス

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_precise_export_bus.snbt"></ImportStructure>
</GameScene>

ME精密出力バスは、決められた数のアイテム/液体を搬出します。搬出先に決められた数をすべて入れることができるときにのみ、動作します。

## 例

![GUI](../pic/pre_bus_gui1.png)

これは、1回の動作で3つの丸石が出力されることを意味します。ネットワーク内の丸石が3つ未満になると、動作を停止します。

![GUI](../pic/pre_bus_gui2.png)

また、出力先にアイテムをすべて搬出できない時も動作を停止します。チェストにはあと2つしか丸石を収納できないため、動作が停止します。
