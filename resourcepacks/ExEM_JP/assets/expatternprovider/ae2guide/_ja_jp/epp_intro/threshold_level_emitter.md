---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: MEしきい値レベルエミッター
    icon: expatternprovider:threshold_level_emitter
categories:
- extended devices
item_ids:
- expatternprovider:threshold_level_emitter
---

# MEしきい値レベルエミッター

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_threshold_level_emitter.snbt"></ImportStructure>
</GameScene>

RSラッチ回路のように動作します。ネットワーク内のアイテム数が下限しきい値を下回るとレッドストーン信号がオフになります。逆に上限しきい値を上回ると、オンになります。

例えば、下限を100、上限を150とした場合

最初はネットワークには何もないので、信号はオフのままです。

アイテム数が増えて150を超えたとき、信号がオンになります。

そこからアイテム数が減って150を切っても信号はオンのままです。

さらにアイテム数を減らして100を切ると、信号がオフになります。
