---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: MEスループットモニター
  icon: advanced_ae:throughput_monitor
categories:
  - advanced items
item_ids:
  - advanced_ae:throughput_monitor
  - advanced_ae:throughput_monitor_configurator
---

# MEスループットモニター

<GameScene zoom="8" background="transparent">
<ImportStructure src="../structure/throughput_monitors.snbt"></ImportStructure>
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

MEスループットモニターは<ItemLink id="ae2:storage_monitor" />の機能に加えて、生産量メーターを備えています。1つのアイテムや液体の数を追跡し、その変化を監視してモニターに表示します。

チャンネルは必要*ではありません*。

## 使い方

*   アイテムで右クリックか液体が入ったアイテムで2回右クリックすると、そのアイテムや液体をモニターに表示します。
*   素手で右クリックすることでモニターを消去します。
*   素手でShift+右クリックするとモニターの表示を固定します。

## スループットモニターコンフィギュレーター

<ItemImage id="advanced_ae:throughput_monitor_configurator" scale="4"></ItemImage>

スループットモニターコンフィギュレーターは表示されるデータを変更するためのツールです。このツールを持って右クリックすると、以下の3つの順で表示が切り替わります。:

* 1ティックあたりの増減
* 1秒あたりの増減
* 1分あたりの増減

注: モードを変更したとき、表示が安定するまで時間がかかることがあります。初期値は参考程度にしてください。