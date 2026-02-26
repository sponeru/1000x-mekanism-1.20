//packmode: normal

ServerEvents.recipes((event) => {
  event.custom({
    type: "mekanism:chemical_infusing",
    chemicalType: "gas",
    leftInput: { gas: "astral_mekanism:aqua_regia", amount: 100 },
    rightInput: { gas: "mek1000:activated_redstone", amount: 1 },
    output: { gas: "mek1000:active_aqua_regia", amount: 100 },
  });

  event.custom({
    type: "mekanism:reaction",
    itemInput: { ingredient: { item: "minecraft:redstone" } },
    fluidInput: { fluid: "minecraft:water", amount: 1 },
    gasInput: { gas: "mekanism:steam", amount: 1 },
    energyRequired: 1,
    duration: 1,
    //        "itemOutput": { "item": 'minecraft:poppy' },
    gasOutput: { gas: "mek1000:activated_redstone", amount: 1 },
  });

  event.custom({
    type: "mekanism:reaction",
    itemInput: { ingredient: { item: "minecraft:redstone_block" } },
    fluidInput: { fluid: "minecraft:water", amount: 9 },
    gasInput: { gas: "mekanism:steam", amount: 9 },
    energyRequired: 1,
    duration: 8,
    //        "itemOutput": { "item": 'minecraft:poppy' },
    gasOutput: { gas: "mek1000:activated_redstone", amount: 9 },
  });

  let advanced_processing = (type) => {
    event.custom({
      type: "mekanism:reaction",
      itemInput: { ingredient: { tag: `forge:raw_materials/${type}` } },
      fluidInput: { fluid: "minecraft:water", amount: 6 },
      gasInput: { gas: "mekanism:antimatter", amount: 6 },
      energyRequired: 120,
      duration: 20,
      gasOutput: { gas: "mek1000:active_" + type, amount: 30 },
    });

    event.custom({
      type: "mekanism:reaction",
      itemInput: { ingredient: { tag: `forge:ores/${type}` } },
      fluidInput: { fluid: "minecraft:water", amount: 8 },
      gasInput: { gas: "mekanism:antimatter", amount: 8 },
      energyRequired: 160,
      duration: 20,
      gasOutput: { gas: "mek1000:active_" + type, amount: 40 },
    });

    event.custom({
      type: "mekanism:reaction",
      itemInput: { ingredient: { tag: `forge:storage_blocks/raw_${type}` } },
      fluidInput: { fluid: "minecraft:water", amount: 54 },
      gasInput: { gas: "mekanism:antimatter", amount: 54 },
      energyRequired: 1080,
      duration: 20,
      gasOutput: { gas: "mek1000:active_" + type, amount: 270 },
    });

    event.custom({
      type: "mekanism:chemical_infusing",
      chemicalType: "gas",
      leftInput: { gas: "astral_mekanism:aqua_regia", amount: 100 },
      rightInput: { gas: "mek1000:active_" + type, amount: 10 },
      output: { gas: "mek1000:purified_" + type, amount: 10 },
    });

    event.custom({
      type: "mekanism:crystallizing",
      chemicalType: "gas",
      input: {
        amount: 10,
        gas: "mek1000:purified_" + type,
      },
      output: {
        item: `mek1000:crystalized_${type}_rawore`,
      },
    });

    event.custom({
      type: "mekanism:reaction",
      itemInput: { ingredient: { tag: `forge:raw_materials/${type}` } },
      fluidInput: { fluid: "minecraft:water", amount: 25 },
      gasInput: { gas: "mek1000:active_aqua_regia", amount: 200 },
      energyRequired: 1,
      duration: 2,
      itemOutput: { item: `mek1000:purified_${type}_rawore`, count: 2 },
    });

    event.custom({
      type: "mekanism:reaction",
      itemInput: { ingredient: { tag: `forge:ores/${type}` } },
      fluidInput: { fluid: "minecraft:water", amount: 75 },
      gasInput: { gas: "mek1000:active_aqua_regia", amount: 600 },
      energyRequired: 1,
      duration: 6,
      itemOutput: { item: `mek1000:purified_${type}_rawore`, count: 6 },
    });

    event.custom({
      type: "mekanism:reaction",
      itemInput: { ingredient: { tag: `forge:storage_blocks/raw_${type}` } },
      fluidInput: { fluid: "minecraft:water", amount: 225 },
      gasInput: { gas: "mek1000:active_aqua_regia", amount: 1800 },
      energyRequired: 1,
      duration: 18,
      itemOutput: {
        item: `mek1000:compressed_purified_${type}_rawore`,
        count: 2,
      },
    });

    event.custom({
      type: "mekanism:reaction",
      itemInput: { ingredient: { item: `mek1000:crystalized_${type}_rawore` } },
      fluidInput: { fluid: "minecraft:water", amount: 75 },
      gasInput: { gas: "mek1000:active_aqua_regia", amount: 600 },
      energyRequired: 1,
      duration: 3,
      itemOutput: {
        item: `mek1000:compressed_purified_${type}_rawore`,
        count: 2,
      },
    });

    if (type == "iridium" || type == "debri") {
      event.custom({
        type: "mekanism:dissolution",
        itemInput: {
          ingredient: { item: `mek1000:compressed_purified_${type}_rawore` },
        },
        gasInput: { amount: 9, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mek1000:dirty_compressed_" + type,
          amount: 7400,
          chemicalType: "slurry",
        },
      });
      event.custom({
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: `mek1000:purified_${type}_rawore` } },
        gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "kubejs:dirty_" + type,
          amount: 7400,
          chemicalType: "slurry",
        },
      });
    } else if (
      type == "redstone" ||
      type == "quartz" ||
      type == "certus_quartz" ||
      type == "fluorite"
    ) {
      event.custom({
        type: "mekanism:dissolution",
        itemInput: {
          ingredient: { item: `mek1000:compressed_purified_${type}_rawore` },
        },
        gasInput: { amount: 4, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mek1000:dirty_" + type,
          amount: 10000,
          chemicalType: "slurry",
        },
      });
      event.custom({
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: `mek1000:purified_${type}_rawore` } },
        gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mek1000:dirty_" + type,
          amount: 2400,
          chemicalType: "slurry",
        },
      });
    } else if (
      type == "coal" ||
      type == "diamond" ||
      type == "emerald" ||
      type == "lapis"
    ) {
      event.custom({
        type: "mekanism:dissolution",
        itemInput: {
          ingredient: { item: `mek1000:compressed_purified_${type}_rawore` },
        },
        gasInput: { amount: 20, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mek1000:dirty_" + type,
          amount: 200,
          chemicalType: "slurry",
        },
      });

      event.custom({
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: `mek1000:purified_${type}_rawore` } },
        gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mek1000:dirty_" + type,
          amount: 10,
          chemicalType: "slurry",
        },
      });

      event.custom({
        type: "mekanism:washing",
        fluidInput: { amount: 5, fluid: "minecraft:water" },
        slurryInput: { amount: 1, slurry: `mek1000:dirty_${type}` },
        output: {
          slurry: `mek1000:clean_${type}`,
          amount: 10,
        },
      });
    } else {
      event.custom({
        type: "mekanism:dissolution",
        itemInput: {
          ingredient: { item: `mek1000:compressed_purified_${type}_rawore` },
        },
        gasInput: { amount: 9, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mek1000:dirty_compressed_" + type,
          amount: 7400,
          chemicalType: "slurry",
        },
      });
      event.custom({
        type: "mekanism:dissolution",
        itemInput: { ingredient: { item: `mek1000:purified_${type}_rawore` } },
        gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
        output: {
          slurry: "mekanism:dirty_" + type,
          amount: 7400,
          chemicalType: "slurry",
        },
      });
    }
  };
  advanced_processing("iron");
  advanced_processing("copper");
  advanced_processing("gold");
  advanced_processing("tin");
  advanced_processing("osmium");
  advanced_processing("uranium");
  advanced_processing("lead");
  advanced_processing("iridium");
  advanced_processing("debri");

  advanced_processing("redstone");
  advanced_processing("quartz");
  advanced_processing("certus_quartz");
  advanced_processing("fluorite");

  advanced_processing("coal");
  advanced_processing("diamond");
  advanced_processing("emerald");
  advanced_processing("lapis");

  let iridium_multiplifer = 3;
  let type = "iridium";

  type = "lapis";
  event.custom({
    type: "mekanism:crystallizing",
    chemicalType: "slurry",
    input: {
      amount: 10,
      slurry: "mek1000:clean_lapis",
    },
    output: {
      item: "mek1000:crystal_lapis",
    },
  });

  event.custom({
    type: "mekanism:injecting",
    itemInput: {
      ingredient: {
        tag: "forge:ores/" + type,
      },
    },
    chemicalInput: {
      amount: 48,
      gas: "mekanism:hydrogen_chloride",
    },
    output: {
      item: "mek1000:shard_" + type,
    },
  });

  event.custom({
    type: "mekanism:injecting",
    itemInput: {
      ingredient: {
        tag: "mekanism:crystals/" + type,
      },
    },
    chemicalInput: {
      amount: 1,
      gas: "mekanism:hydrogen_chloride",
    },
    output: {
      item: "mek1000:shard_" + type,
    },
  });

  event.recipes.mekanism.purifying(
    `2x mek1000:clump_` + type,
    `mek1000:shard_` + type,
    "1x mekanism:oxygen"
  );

  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        count: 1,
        tag: "mekanism:clumps/" + type,
      },
    },
    output: {
      count: 1,
      item: "mek1000:dirty_dust_" + type,
    },
  });

  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        count: 1,
        tag: "forge:ores/" + type,
      },
    },
    output: {
      count: 6,
      item: "mek1000:dirty_dust_" + type,
    },
  });

  event.recipes.mekanism.enriching(
    "12x minecraft:lapis_lazuli",
    "mek1000:dirty_dust_lapis"
  );

  type = "coal";
  event.custom({
    type: "mekanism:crystallizing",
    chemicalType: "slurry",
    input: {
      amount: 10,
      slurry: "mek1000:clean_" + type,
    },
    output: {
      item: "mek1000:crystal_" + type,
    },
  });

  event.custom({
    type: "mekanism:injecting",
    itemInput: {
      ingredient: {
        tag: "mekanism:crystals/" + type,
      },
    },
    chemicalInput: {
      amount: 1,
      gas: "mekanism:hydrogen_chloride",
    },
    output: {
      item: "mek1000:shard_" + type,
    },
  });

  event.custom({
    type: "mekanism:injecting",
    itemInput: {
      ingredient: {
        tag: "forge:ores/" + type,
      },
    },
    chemicalInput: {
      amount: 48,
      gas: "mekanism:hydrogen_chloride",
    },
    output: {
      item: "mek1000:shard_" + type,
    },
  });

  event.recipes.mekanism.purifying(
    `2x mek1000:clump_` + type,
    `mek1000:shard_` + type,
    "1x mekanism:oxygen"
  );
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        count: 1,
        tag: "mekanism:clumps/" + type,
      },
    },
    output: {
      count: 1,
      item: "mek1000:dirty_dust_" + type,
    },
  });

  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        count: 1,
        tag: "forge:ores/" + type,
      },
    },
    output: {
      count: 6,
      item: "mek1000:dirty_dust_" + type,
    },
  });

  event.custom({
    type: "mekanism:enriching",
    input: {
      ingredient: {
        count: 1,
        tag: "mekanism:dirty_dusts/" + type,
      },
    },
    output: {
      count: 4,
      item: "minecraft:coal",
    },
  });

  event.custom({
    type: "mekanism:crystallizing",
    chemicalType: "slurry",
    input: {
      amount: 10,
      slurry: "mek1000:clean_diamond",
    },
    output: {
      amount: 1,
      item: "minecraft:diamond",
    },
  });

  event.custom({
    type: "mekanism:crystallizing",
    chemicalType: "slurry",
    input: {
      amount: 10,
      slurry: "mek1000:clean_emerald",
    },
    output: {
      amount: 1,
      item: "minecraft:emerald",
    },
  });
});
