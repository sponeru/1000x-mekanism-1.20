---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: ME無線接続器
    icon: expatternprovider:wireless_connect
categories:
- extended devices
item_ids:
- expatternprovider:wireless_connect
- expatternprovider:wireless_tool
---

# ME無線接続器

<Row gap="20">
<BlockImage id="expatternprovider:wireless_connect" scale="6"></BlockImage>
<ItemImage id="expatternprovider:wireless_tool" scale="6"></ItemImage>
</Row>

ME無線接続器は、<ItemLink id="ae2:quantum_link" />のように無線でネットワークを接続できますが、距離に制限があり、ディメンションを超えて接続することはできません。また、1対1の接続のみ対応しています。多対多の接続をしたいときは、<ItemLink id="expatternprovider:wireless_hub" />を使いましょう。

## 接続方法

接続したい2つの無線接続器をME無線設定キットで右クリックすると、接続されます。

ME無線設定キットを持ってシフト+右クリックで、キットの設定をリセットすることができます。

接続に成功するとテクスチャが変化します。

接続されていないME無線接続器

<GameScene zoom="5" background="transparent">
  <ImportStructure src="../structure/wireless_connector_off.snbt"></ImportStructure>
</GameScene>

接続されたME無線接続器

<GameScene zoom="5" background="transparent">
  <ImportStructure src="../structure/wireless_connector_on.snbt"></ImportStructure>
</GameScene>

## 色分け

ME無線接続器はケーブルと同じように色を付けることができます。これもまたケーブルと同じように、同じ色のケーブルや接続器同士を接続できます。

色を付けるには<ItemLink id="ae2:color_applicator" />が必要です。

つまり、このようにネットワークを構築できます:

<GameScene zoom="3" background="transparent" interactive={true}>
  <ImportStructure src="../structure/wireless_connector_setup.snbt"></ImportStructure>
</GameScene>

## 電力消費

ME無線接続器は、距離が離れるほど消費電力が大きくなります。距離との関係は比例ではないため、あまりにも距離が離れすぎると消費電力が非常に高くなる可能性があります。

<ItemLink id="ae2:energy_card" />を使うと電力消費を抑えられます。1枚につき、10%の軽減になります。

