let DustBlocks = [
  ["mek1000:block_dust_iron", "mekanism:dust_iron"],
  ["mek1000:block_dirty_dust_iron", "mekanism:dirty_dust_iron"],
  ["mek1000:block_dust_gold", "mekanism:dust_gold"],
  ["mek1000:block_dirty_dust_gold", "mekanism:dirty_dust_gold"],
  ["mek1000:block_dust_osmium", "mekanism:dust_osmium"],
  ["mek1000:block_dirty_dust_osmium", "mekanism:dirty_dust_osmium"],
  ["mek1000:block_dust_copper", "mekanism:dust_copper"],
  ["mek1000:block_dirty_dust_copper", "mekanism:dirty_dust_copper"],
  ["mek1000:block_dust_tin", "mekanism:dust_tin"],
  ["mek1000:block_dirty_dust_tin", "mekanism:dirty_dust_tin"],
  ["mek1000:block_dust_lead", "mekanism:dust_lead"],
  ["mek1000:block_dirty_dust_lead", "mekanism:dirty_dust_lead"],
  ["mek1000:block_dust_uranium", "mekanism:dust_uranium"],
  ["mek1000:block_dirty_dust_uranium", "mekanism:dirty_dust_uranium"],
  ["mek1000:block_dust_iridium", "kubejs:dust_iridium"],
  ["mek1000:block_dirty_dust_iridium", "kubejs:dirty_dust_iridium"],
  ["mek1000:block_dust_debri", "kubejs:dust_debri"],
  ["mek1000:block_dirty_dust_debri", "kubejs:dirty_dust_debri"],
];

let DustSmelting = [
  ["mek1000:block_dust_iron", "minecraft:iron_ingot"],
  ["mek1000:block_dust_gold", "minecraft:gold_ingot"],
  ["mek1000:block_dust_osmium", "mekanism:ingot_osmium"],
  ["mek1000:block_dust_copper", "minecraft:copper_ingot"],
  ["mek1000:block_dust_tin", "mekanism:ingot_tin"],
  ["mek1000:block_dust_lead", "mekanism:ingot_lead"],
  ["mek1000:block_dust_uranium", "mekanism:ingot_uranium"],
  ["mek1000:block_dust_iridium", "kubejs:iridium"],
  ["mek1000:block_dust_debri", "minecraft:netherite_scrap"],
];

let RawBlockSmelting = [
  ["minecraft:raw_iron_block", "minecraft:iron_block"],
  ["minecraft:raw_gold_block", "minecraft:gold_block"],
  ["mekanism:block_raw_osmium", "mekanism:block_osmium"],
  ["minecraft:raw_copper_block", "minecraft:copper_block"],
  ["mekanism:block_raw_tin", "mekanism:block_tin"],
  ["mekanism:block_raw_lead", "mekanism:block_lead"],
  ["mekanism:block_raw_uranium", "mekanism:block_uranium"],
];

ServerEvents.recipes(event => {
    DustBlocks.forEach(item => {
        event.shaped(item[0], ["AAA", "AAA", "AAA"], { A: item[1] })
        event.shapeless(Item.of(item[1],9),[item[0]])
    })

    DustSmelting.forEach(item => {
        event.smelting(Item.of(item[1], 9), item[0]).cookingTime(800);
        event.blasting(Item.of(item[1], 9), item[0]).cookingTime(400);
    })

    RawBlockSmelting.forEach((item) => {
      event.smelting(Item.of(item[1], 1), item[0]).cookingTime(800);
      event.blasting(Item.of(item[1], 1), item[0]).cookingTime(400);
    });
})