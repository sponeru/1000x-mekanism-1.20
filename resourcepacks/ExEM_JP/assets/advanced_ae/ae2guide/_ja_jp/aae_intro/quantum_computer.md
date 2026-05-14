---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: 量子コンピューター
  icon: advanced_ae:quantum_core
categories:
  - advanced devices
item_ids:
  - advanced_ae:quantum_unit
  - advanced_ae:quantum_core
  - advanced_ae:quantum_structure
  - advanced_ae:quantum_accelerator
  - advanced_ae:quantum_multi_threader
  - advanced_ae:quantum_storage_128
  - advanced_ae:quantum_storage_256
  - advanced_ae:data_entangler
---

# 量子コンピューター

量子コンピューターは特殊なクラフティングCPUです。十分なクラフトストレージがあれば、無制限の注文をすることができます。

<GameScene zoom="2" background="transparent">
  <ImportStructure src="../structure/quantum_computer_multiblock.snbt"></ImportStructure>
</GameScene>

## 量子コンピューターコア

<BlockImage id="advanced_ae:quantum_core" p:powered="true" p:formed="true" scale="4"></BlockImage>

量子コンピューターコアは量子コンピューターの心臓部です。これ一つで256Mのクラフトストレージと8つの並列処理を備えています。これ単体でも量子コンピューターとして機能し、機能を試せます。しかし、真価はマルチブロックにした時に発揮します。単体で使用するには、上下どちらかの面からケーブルを繋げる必要があります。

## 量子コンピュータストレージ

<Row gap="20">
<BlockImage id="advanced_ae:quantum_storage_128" scale="4"></BlockImage>
<BlockImage id="advanced_ae:quantum_storage_256" scale="4"></BlockImage>
</Row>

これらのブロックは量子コンピューターのクラフトストレージを増加させます。量子コンピューターの特性上、これを追加することで実行できるタスク数が増加します。容量は128Mと256Mの2種類が存在します。

## 量子データエンタングラー

<BlockImage id="advanced_ae:data_entangler" scale="4"></BlockImage>

量子データエンタングラーはマルチブロックにあるすべてのクラフトストレージに影響を与える特別なブロックです。複数の次元でデータを保存することにより、容量を4倍に増加させます。各量子コンピューターのマルチブロックに1つのみ設置できます。

## 量子コンピューター加速器

<BlockImage id="advanced_ae:quantum_accelerator" scale="4"></BlockImage>

量子コンピューター加速器は、量子コンピューターに8つの並列処理を追加します。量子コンピューターの並列処理数は、それで実行されるすべてのタスクに影響します。よって、これを大量に設置しておくことが賢明と言えます。

## 量子コンピュータ多重スレッド処理装置

<BlockImage id="advanced_ae:quantum_multi_threader" scale="4"></BlockImage>

データエンタングラーと同様に、このブロックは加速器が別の次元で追加の並列処理を行えるようにし、並列処理数を4倍に増加させます。各量子コンピューターのマルチブロックに1つのみ設置できます。

## 量子コンピューターの構造

<Row gap="20">
<BlockImage id="advanced_ae:quantum_structure" scale="4"></BlockImage>
<BlockImage id="advanced_ae:quantum_structure" p:formed="true" p:powered="true" scale="4"></BlockImage>
</Row>

これらのブロックは量子コンピューターの外壁に使われます。量子コンピューターの一部として扱われ、内部と外部を繋げる役割を持ちます。

## マルチブロック

マルチブロックの量子コンピューターを構成するには以下のルールに従う必要があります:
- 最大サイズは7x7x7(構造ガラスを含む)です。
- 内部に空間が存在してはいけません。空きスペースは<ItemLink id="advanced_ae:quantum_unit" />で埋められますが、このブロックには追加の機能はありません。
- 必ず1つの<ItemLink id="advanced_ae:quantum_core" />が必要です。
- <ItemLink id="advanced_ae:data_entangler" />は1つまでです。
- <ItemLink id="advanced_ae:quantum_multi_threader" />は1つまでです。
- 外壁や外枠のブロックは全て<ItemLink id="advanced_ae:quantum_structure" />である必要があります。
- 内部に<ItemLink id="advanced_ae:quantum_structure" />が存在してはいけません。

## サーバーコンフィグ

サーバー側のコンフィグにより、いくつかの値を調整できます。 例:
- マルチブロックの最大サイズ
- 加速器の並列処理数
- 多重スレッド処理装置の最大数
- 多重スレッド処理装置の倍率
- データエンタングラーの最大数
- データエンタングラーの倍率

現在の設定は各アイテムのツールチップで確認できます。