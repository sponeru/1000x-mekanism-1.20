---
navigation:
    parent: ae2:items-blocks-machines/items-blocks-machines-index.md
    title: パターンP2Pトンネル
    icon: mae2:pattern_p2p_tunnel
categories:
 - devices
item_ids:
- mae2:pattern_p2p_tunnel
---

# パターンP2P

<GameScene zoom="4" background="transparent">
    <ImportStructure src="mae2:assets/assemblies/p2p/single_pattern.snbt" />
    <IsometricCamera yaw="15" pitch="30"/>
</GameScene>

パターンP2Pトンネルは[パターンプロバイダー](ae2:items-blocks-machines/pattern_provider.md)によって送信された[パターン](ae2:items-blocks-machines/patterns.md)を通すための[P2Pトンネル](ae2:items-blocks-machines/p2p_tunnels.md)です。P2Pの入力側にあるプロバイダーは、出力側にある加工装置に注文を送信することができます。また、加工装置がP2Pの出力側にアイテムを出力すると、それを入力側にあるプロバイダーに送ることができます。

P2Pトンネルを通して送信された注文は、プロバイダーがP2Pの出力側にあるかのように動作します。つまり、ブロックモードは出力それぞれに機能し、素材は複数の出力先に分割されることはありません。また、サブネットにアイテムを直接送信する特殊な連携や、[分子組立機](ae2:items-blocks-machines/molecular_assembler.md)も問題なく動作します。