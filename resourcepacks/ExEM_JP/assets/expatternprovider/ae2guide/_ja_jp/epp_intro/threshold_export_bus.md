---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: MEしきい値出力バス
    icon: expatternprovider:threshold_export_bus
categories:
- extended devices
item_ids:
- expatternprovider:threshold_export_bus
---

# MEしきい値出力バス

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_threshold_export_bus.snbt"></ImportStructure>
</GameScene>

MEしきい値出力バスは、MEネットワークに収納されているアイテム数がしきい値より上/下のときに動作します。

## 例

![GUI](../pic/thr_bus_gui1.png)

銅のしきい値は128に設定されているため、ネットワークの銅が128個を超えると、銅が搬出されます。

![GUI](../pic/thr_bus_gui2.png)

しきい値は上と同じですが、モードが「下回ったとき」に設定されています。ネットワーク内の銅が128個未満の時に銅が搬出されます。
