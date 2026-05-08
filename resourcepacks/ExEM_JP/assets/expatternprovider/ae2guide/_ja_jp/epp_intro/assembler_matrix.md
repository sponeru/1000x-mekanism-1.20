---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: 組立マトリックス
    icon: expatternprovider:assembler_matrix_frame
categories:
- extended devices
item_ids:
- expatternprovider:assembler_matrix_frame
- expatternprovider:assembler_matrix_wall
- expatternprovider:assembler_matrix_glass
- expatternprovider:assembler_matrix_pattern
- expatternprovider:assembler_matrix_crafter
- expatternprovider:assembler_matrix_speed
---

# 組立マトリックス

<Row>
<BlockImage id="expatternprovider:assembler_matrix_frame" p:formed="true" p:powered="true" scale="5"></BlockImage>
<BlockImage id="expatternprovider:assembler_matrix_wall" scale="5"></BlockImage>
<BlockImage id="expatternprovider:assembler_matrix_glass" scale="5"></BlockImage>
</Row>
<Row>
<BlockImage id="expatternprovider:assembler_matrix_pattern" scale="5"></BlockImage>
<BlockImage id="expatternprovider:assembler_matrix_crafter" scale="5"></BlockImage>
<BlockImage id="expatternprovider:assembler_matrix_speed" scale="5"></BlockImage>
</Row>

組立マトリックスはマルチブロックの構造体で、<ItemLink id="ae2:molecular_assembler" />と<ItemLink id="ae2:pattern_provider" />を融合させたものです。
MEネットワークに十分な数の<ItemLink id="ae2:crafting_accelerator" />を設置したCPUがあれば、同時に大量のクラフト作業ができ、チャンネルを節約できます。

## Structure

<GameScene zoom="3" background="transparent" interactive={true}>
  <ImportStructure src="../structure/assembler_matrix.snbt"></ImportStructure>
</GameScene>

3x3x3 - 7x7x7までの直方体・立方体で構築することができます。また、以下のルールがあります。
- 角と辺は **組立マトリックス外枠** を設置
- 面は **組立マトリックス[外装/ガラス]** を設置
- 内部は **組立マトリックス[パターン/クラフト/スピード]コア** を設置

他にも、組立マトリックスには一つ以上のパターンコアとクラフトコアを設置する必要があります。
また、内部は完全に埋め、空気ブロックの部分がないようにする必要があります。
組立マトリックスが正常に構築されると、デバイスオンラインの時に外枠が青くなります。

## 組立マトリックスコア

3種類の組立マトリックスコアが存在します。

- 組立マトリックスパターンコア

組立マトリックスは、パターンコアにあるパターンのみ動作します。パターンコア1つにつき、組立マトリックスのパターンスロットを36個増やします。

- 組立マトリックスクラフトコア

組立マトリックスは、クラフトコアで実際にクラフトを行います。クラフトコア1つにつき、クラフトの並列数を8つ増やします。

- 組立マトリックススピードコア

組立マトリックス用の<ItemLink id="ae2:speed_card" />です。5つまで設置することができ、クラフト速度を上昇させます。それ以上のスピードコアを設置しても、速度は上がりません。

## GUI

デバイスオンラインの組立マトリックスを右クリックすると、GUIを開けます。

![GUI](../pic/assembler_matrix.png)

パターンを追加・検索したり、実行中のクラフト数を確認できます。