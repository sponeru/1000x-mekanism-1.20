---
navigation:
    parent: ae2:items-blocks-machines/items-blocks-machines-index.md
    title: マルチP2Pトンネル
    icon: mae2:pattern_multi_p2p_tunnel
    position: 210
categories:
 - devices
item_ids:
- mae2:redstone_multi_p2p_tunnel
- mae2:item_multi_p2p_tunnel
- mae2:fluid_multi_p2p_tunnel
- mae2:fe_multi_p2p_tunnel
- mae2:eu_multi_p2p_tunnel
- mae2:pattern_multi_p2p_tunnel
---

# Point To Point トンネル
マルチP2Pトンネルは、通常の[P2Pトンネル](ae2:items-blocks-machines/p2p_tunnels.md)と同じ動作をしますが、複数の入力を受け付けます。オフハンドに<ItemLink id="ae2:memory_card" />を持って使うことで、追加の入力を設定することができます。

例えば、この3つのホッパーは、3つの樽にアイテムを輸送します。

<GameScene zoom="3" background="transparent">
    <ImportStructure src="mae2:assets/assemblies/p2p/multi_item.snbt" />
    <IsometricCamera yaw="100" pitch="30" />
</GameScene>

この3つのレッドストーンマルチP2Pトンネルは、OR回路のように動作します。
<GameScene zoom="3" background="transparent">
    <ImportStructure src="mae2:assets/assemblies/p2p/multi_redstone.snbt" />
    <IsometricCamera yaw="15" pitch="30" />
</GameScene>

この3つのパターンマルチP2Pトンネルは、入力全てが3つの分子組立機を使えます。
<GameScene zoom="3" background="transparent">
    <ImportStructure src="mae2:assets/assemblies/p2p/multi_pattern.snbt" />
    <IsometricCamera yaw="15" pitch="30" />
</GameScene>

## 注意
MEマルチP2Pトンネルがない理由は、既に<ItemLink id="ae2:me_p2p_tunnel" />が入力と出力をあいまいにしているからです。[チャンネル](ae2:ae2-mechanics/channels.md)は方向性がないため、複数の出力が、同時に複数の入力として機能します。また、ライトマルチP2Pトンネルは実装していません。誰がそんなものを欲しがるのか理解できないため、実装するのは時間の無駄だと思ったからです。正直、だれも使わないでしょう?