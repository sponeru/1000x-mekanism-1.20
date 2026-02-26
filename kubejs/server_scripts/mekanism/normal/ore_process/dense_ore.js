//packmode: normal

ServerEvents.recipes((event) => {
  const enrich_only_12 = ["lapis_lazuli"];
  const enrich_only_6 = ["quartz"];
  const enrich_only_2 = ["diamond", "emerald", "coal"];

  let appendix_extreme = (input_item, ore_type, multiplier) => {
    if (ore_type == "redstone") {
      event.recipes.mekanism.enriching(
        `${Math.floor(multiplier * 12)}x minecraft:redstone`,
        input_item
      ); //2
      event.recipes.mekanism.purifying(
        `${Math.floor(multiplier * 3)}x mek1000:softore_redstone`,
        input_item,
        "1x mekanism:oxygen"
      ); //3
      event.recipes.mekanism.injecting(
        `${Math.floor(multiplier * 6)}x mek1000:extructed_redstone`,
        input_item,
        "1x mekanism:hydrogen_chloride"
      ); //4
      event.custom({
        //5-0
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: input_item } },
        gasInput: {
          amount: Math.max(1, Math.floor(multiplier * 0.5)),
          gas: "mekanism:sulfuric_acid",
        },
        output: {
          slurry: "mek1000:dirty_redstone",
          amount: Math.floor(multiplier * 125) * 20,
          chemicalType: "slurry",
        },
      });
    } else if (ore_type == "certus_quartz") {
      event.recipes.mekanism.enriching(
        `${Math.floor(multiplier * 6)}x mek1000:crystal_certus_quartz`,
        input_item
      ); //2
      event.recipes.mekanism.purifying(
        `${Math.floor(multiplier * 4)}x mek1000:softore_certus_quartz`,
        input_item,
        "1x mekanism:oxygen"
      ); //3
      event.recipes.mekanism.injecting(
        `${Math.floor(multiplier * 8)}x mek1000:extructed_certus_quartz`,
        input_item,
        "1x mekanism:hydrogen_chloride"
      ); //4
      event.custom({
        //5-0
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: input_item } },
        gasInput: {
          amount: Math.max(1, Math.floor(multiplier * 0.5)),
          gas: "mekanism:sulfuric_acid",
        },
        output: {
          slurry: "mek1000:dirty_certus_quartz",
          amount: Math.floor(multiplier * 125) * 20,
          chemicalType: "slurry",
        },
      });

      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { fluid: "minecraft:water", amount: multiplier * 8 },
        gasInput: { gas: "mekanism:antimatter", amount: multiplier * 8 },
        energyRequired: multiplier * 160,
        duration: 20,
        gasOutput: {
          gas: "mek1000:active_" + ore_type,
          amount: multiplier * 40,
        },
      });
      
    } else if (
      ore_type == "diamond" ||
      ore_type == "emerald" ||
      ore_type == "coal"
    ) {
      event.recipes.mekanism.enriching(
        `${Math.floor(multiplier * 2)}x minecraft:${ore_type}`,
        input_item
      );

      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { fluid: "minecraft:water", amount: multiplier * 8 },
        gasInput: { gas: "mekanism:antimatter", amount: multiplier * 8 },
        energyRequired: multiplier * 160,
        duration: 20,
        gasOutput: {
          gas: "mek1000:active_" + ore_type,
          amount: multiplier * 40,
        },
      });

      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { amount: multiplier * 75, fluid: "minecraft:water" },
        gasInput: {
          amount: multiplier * 600,
          gas: "mek1000:active_aqua_regia",
        },
        energyRequired: 1,
        duration: multiplier * 6,
        itemOutput: {
          item: `mek1000:purified_${ore_type}_rawore`,
          count: multiplier * 6,
        },
      });
    } else if (ore_type == "quartz") {
      event.recipes.mekanism.enriching(
        `${Math.floor(multiplier * 6)}x minecraft:quartz`,
        input_item
      ); //2.5
      event.recipes.mekanism.purifying(
        `${Math.floor(multiplier * 4)}x mek1000:softore_quartz`,
        input_item,
        "1x mekanism:oxygen"
      ); //3
      event.recipes.mekanism.injecting(
        `${Math.floor(multiplier * 8)}x mek1000:extructed_quartz`,
        input_item,
        "1x mekanism:hydrogen_chloride"
      ); //4
      event.custom({
        //5-0
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: input_item } },
        gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mek1000:dirty_quartz",
          amount: 2400,
          chemicalType: "slurry",
        },
      });
    } else if (ore_type == "lapis_lazuli") {
      event.recipes.mekanism.enriching(
        `${Math.floor(multiplier * 12)}x minecraft:${ore_type}`,
        input_item
      );
      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { amount: multiplier * 8, fluid: "minecraft:water" },
        gasInput: { amount: multiplier * 8, gas: "mekanism:antimatter" },
        energyRequired: multiplier * 160,
        duration: 20,
        gasOutput: { gas: "mek1000:active_lapis", amount: multiplier * 40 },
      });
      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { amount: multiplier * 75, fluid: "minecraft:water" },
        gasInput: {
          amount: multiplier * 600,
          gas: "mek1000:active_aqua_regia",
        },
        energyRequired: 1,
        duration: multiplier * 6,
        itemOutput: {
          item: `mek1000:purified_lapis_rawore`,
          count: multiplier * 6,
        },
      });
    } else if (ore_type == "fluorite") {
      event.recipes.mekanism.enriching(
        `${Math.floor(multiplier * 6)}x mekanism:fluorite_gem`,
        input_item
      ); //2.5
      event.recipes.mekanism.purifying(
        `${Math.floor(multiplier * 4)}x mek1000:softore_fluorite`,
        input_item,
        "1x mekanism:oxygen"
      ); //3
      event.recipes.mekanism.injecting(
        `${Math.floor(multiplier * 8)}x mek1000:extructed_fluorite`,
        input_item,
        "1x mekanism:hydrogen_chloride"
      ); //4
      event.custom({
        //5-0
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: input_item } },
        gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mek1000:dirty_fluorite",
          amount: 2400,
          chemicalType: "slurry",
        },
      });
    } else if (ore_type == "iridium") {
      event.recipes.mekanism.enriching(
        `${Math.floor(multiplier * 9)}x kubejs:dust_iridium`,
        input_item
      );
      event.recipes.mekanism.purifying(
        `${Math.floor(multiplier * 4)}x mek1000:compressed_${ore_type}_clump`,
        input_item,
        "1x mekanism:oxygen"
      );
      event.recipes.mekanism.injecting(
        `${Math.floor(multiplier * 8)}x mek1000:compressed_${ore_type}_shard`,
        input_item,
        "1x mekanism:hydrogen_chloride"
      );
      event.custom({
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: input_item } },
        gasInput: {
          amount: Math.max(1, Math.floor(multiplier * 0.5)),
          gas: "mekanism:sulfuric_acid",
        },
        output: {
          slurry: "mek1000:dirty_compressed_" + ore_type,
          amount: Math.floor(multiplier * 67.5) * 20,
          chemicalType: "slurry",
        },
      });
      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { amount: multiplier * 8, fluid: "minecraft:water" },
        gasInput: { amount: multiplier * 8, gas: "mekanism:antimatter" },
        energyRequired: multiplier * 160,
        duration: 20,
        gasOutput: {
          gas: "mek1000:active_" + ore_type,
          amount: multiplier * 40,
        },
      });
      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { amount: multiplier * 75, fluid: "minecraft:water" },
        gasInput: {
          amount: multiplier * 600,
          gas: "mek1000:active_aqua_regia",
        },
        energyRequired: 1,
        duration: multiplier * 6,
        itemOutput: {
          item: `mek1000:purified_${ore_type}_rawore`,
          count: multiplier * 6,
        },
      });
    } else {
      event.recipes.mekanism.enriching(
        `${Math.floor(multiplier * 9)}x mekanism:dust_${ore_type}`,
        input_item
      );
      event.recipes.mekanism.purifying(
        `${Math.floor(multiplier * 4)}x mek1000:compressed_${ore_type}_clump`,
        input_item,
        "1x mekanism:oxygen"
      );
      event.recipes.mekanism.injecting(
        `${Math.floor(multiplier * 8)}x mek1000:compressed_${ore_type}_shard`,
        input_item,
        "1x mekanism:hydrogen_chloride"
      );
      event.custom({
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: input_item } },
        gasInput: {
          amount: Math.max(1, Math.floor(multiplier * 0.5)),
          gas: "mekanism:sulfuric_acid",
        },
        output: {
          slurry: "mek1000:dirty_compressed_" + ore_type,
          amount: Math.floor(multiplier * 67.5) * 20,
          chemicalType: "slurry",
        },
      });
      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { amount: multiplier * 8, fluid: "minecraft:water" },
        gasInput: { amount: multiplier * 8, gas: "mekanism:antimatter" },
        energyRequired: multiplier * 160,
        duration: 20,
        gasOutput: {
          gas: "mek1000:active_" + ore_type,
          amount: multiplier * 40,
        },
      });
      event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: input_item } },
        fluidInput: { amount: multiplier * 75, fluid: "minecraft:water" },
        gasInput: {
          amount: multiplier * 600,
          gas: "mek1000:active_aqua_regia",
        },
        energyRequired: 1,
        duration: multiplier * 6,
        itemOutput: {
          item: `mek1000:purified_${ore_type}_rawore`,
          count: multiplier * 6,
        },
      });
    }
  };

  appendix_extreme("denseores:dense_coal_ore", "coal", 4);
  appendix_extreme("denseores:dense_deepslate_coal_ore", "coal", 4);
  appendix_extreme("denseores:dense_copper_ore", "copper", 4);
  appendix_extreme("denseores:dense_deepslate_copper_ore", "copper", 4);
  appendix_extreme("denseores:dense_diamond_ore", "diamond", 4);
  appendix_extreme("denseores:dense_deepslate_diamond_ore", "diamond", 4);
  appendix_extreme("denseores:dense_emerald_ore", "emerald", 4);
  appendix_extreme("denseores:dense_deepslate_emerald_ore", "emerald", 4);
  appendix_extreme("denseores:dense_gold_ore", "gold", 4);
  appendix_extreme("denseores:dense_deepslate_gold_ore", "gold", 4);
  appendix_extreme("denseores:dense_nether_gold_ore", "gold", 4);
  appendix_extreme("denseores:dense_iron_ore", "iron", 4);
  appendix_extreme("denseores:dense_deepslate_iron_ore", "iron", 4);
  appendix_extreme("denseores:dense_lapis_ore", "lapis_lazuli", 4);
  appendix_extreme("denseores:dense_deepslate_lapis_ore", "lapis_lazuli", 4);
  appendix_extreme("denseores:dense_redstone_ore", "redstone", 4);
  appendix_extreme("denseores:dense_deepslate_redstone_ore", "redstone", 4);
  appendix_extreme('kubejs:dense_ore_certus_quartz', "certus_quartz", 4);
  appendix_extreme('kubejs:dense_ore_certus_quartz_deepslate', "certus_quartz", 4);
  appendix_extreme("kubejs:dense_ore_quartz", "quartz", 4);
  appendix_extreme("densemekanism:dense_osmium_ore", "osmium", 4);
  appendix_extreme("densemekanism:dense_deepslate_osmium_ore", "osmium", 4);

  appendix_extreme("densemekanism:dense_tin_ore", "tin", 4);
  appendix_extreme("densemekanism:dense_deepslate_tin_ore", "tin", 4);
  appendix_extreme("densemekanism:dense_lead_ore", "lead", 4);
  appendix_extreme("densemekanism:dense_deepslate_lead_ore", "lead", 4);
  appendix_extreme("densemekanism:dense_uranium_ore", "uranium", 4);
  appendix_extreme("densemekanism:dense_deepslate_uranium_ore", "uranium", 4);
  appendix_extreme("densemekanism:dense_fluorite_ore", "fluorite", 4);
  appendix_extreme("densemekanism:dense_deepslate_fluorite_ore", "fluorite", 4);
  appendix_extreme("kubejs:dense_ore_iridium", "iridium", 4);
});
