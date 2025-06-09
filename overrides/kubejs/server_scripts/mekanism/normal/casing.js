ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:reaction",
    itemInput: {
      ingredient: {
        item: "mek1000:bedrockium_ingot",
      },
    },
    fluidInput: {
      amount: 10000,
      fluid: "mek1000:condenced_lux",
    },
    gasInput: {
      amount: 10000,
      gas: "mekanism:antimatter",
    },
    energyRequired: 40000000000000,
    duration: 400,
    itemOutput: {
      item: "mek1000:neutronium_ingot",
      count: 1,
    },
  });
  event.shaped("mek1000:black_casing", ["tst", "sds", "tst"], {
    t: "mek1000:5xcobblestone",
    s: "mek1000:4xcobblestone",
    d: "mek1000:bedrockium_ingot",
  });

  event.shaped(
    "4x mek1000:electricity_resistant_reinforced_casing",
    ["ete", "tnt", "ete"],
    {
      e: "mekanism:sps_casing",
      t: "mekanism_extras:supreme_control_circuit",
      n: "mekanism:teleportation_core",
    }
  );

  event
    .shaped("mek1000:energy_cataryst", ["ete", "tnt", "ese"], {
      e: "advanced_ae:quantum_alloy_plate",
      t: "mekanism_extras:alloy_thermonuclear",
      n: "mekanism:teleportation_core",
      s: "mekanism_extras:infinite_energy_cube",
    })
    .id("mek1000:energy_cataryst");

  event
    .shaped("mek1000:fluid_cataryst", ["ete", "tnt", "ese"], {
      e: "advanced_ae:quantum_alloy_plate",
      t: "mekanism_extras:alloy_thermonuclear",
      n: "mekanism:teleportation_core",
      s: "mekanism:ultimate_fluid_tank",
    })
    .id("mek1000:fluid_cataryst");
  event
    .shaped("mek1000:item_cataryst", ["ete", "tnt", "ese"], {
      e: "advanced_ae:quantum_alloy_plate",
      t: "mekanism_extras:alloy_thermonuclear",
      n: "mekanism:teleportation_core",
      s: "megacells:bulk_cell_component",
    })
    .id("mek1000:item_cataryst");
  event
    .shaped("mek1000:gas_cataryst", ["ete", "tnt", "ese"], {
      e: "advanced_ae:quantum_alloy_plate",
      t: "mekanism_extras:alloy_thermonuclear",
      n: "mekanism:teleportation_core",
      s: "mekanism:ultimate_chemical_tank",
    })
    .id("mek1000:gas_cataryst");

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: {
        ingredient: {
          item: "minecraft:glass",
        },
      },
      fluidInput: {
        amount: 500,
        fluid: "mek1000:condenced_lux",
      },
      gasInput: {
        amount: 100,
        gas: "mekanismelements:superheated_helium",
      },
      energyRequired: 2147483647,
      duration: 400,
      itemOutput: {
        item: "mek1000:laser_glass",
        count: 2,
      },
      gasOutput: {
        gas: "mekanismelements:helium",
        amount: 100,
      },
    })
    .id("mek1000:laser_glass");

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: {
        ingredient: {
          item: "ae2:singularity",
        },
      },
      fluidInput: {
        amount: 10,
        fluid: "mek1000:condenced_lux",
      },
      gasInput: {
        amount: 1000,
        gas: "mekanism:spent_nuclear_waste",
      },
      energyRequired: 2147483647,
      duration: 400,
      itemOutput: {
        item: "mek1000:emc",
        count: 1,
      },
      gasOutput: {
        gas: "mekanism:antimatter",
        amount: 1,
      },
    })
    .id("mek1000:emc");

  event
    .shaped("mek1000:uranite_flux_casing", ["ete", "tnt", "ese"], {
      e: "mekanism:hdpe_sheet",
      t: "mekanism:hdpe_stick",
      n: "#forge:storage_blocks/uranium",
      s: "fluxnetworks:flux_block",
    })
    .id("mek1000:uranite_flux_casing");

  event
    .shaped("4x mek1000:wtf_casing", ["ete", "tnt", "ese"], {
      e: "mekanism:ultimate_control_circuit",
      t: "mekanism:alloy_atomic",
      n: "mek1000:uranite_flux_casing",
      s: "mekanism:enriched_refined_obsidian",
    })
    .id("mek1000:wtf_casing");

  event.shaped("mek1000:reinforced_steel_casing", ["ete", "tnt", "ete"], {
    e: "#forge:storage_blocks/steel",
    t: "mekanism:elite_control_circuit",
    n: "mekanism:steel_casing",
  });

  event.shaped("mek1000:fusion_energy_input", ["ete", "tft", "ete"], {
    e: "mekaevolution:infinite_energy_cube",
    t: "megacells:mega_energy_cell",
    f: "mek1000:fusion_casing",
  });

  event.shaped("mek1000:gas_input", ["gge", "gte", "gee"], {
    e: "mekanism:ultimate_fluid_tank",
    g: "mekanism:ultimate_chemical_tank",
    t: "mekanism:sps_casing",
  });

  event.shapeless("mek1000:imitation_sps_port", [
    "mekanism:sps_port",
    "mekanism_extras:alloy_radiance",
  ]);

  event.shaped("mek1000:item_input", ["e  ", "t  ", "   "], {
    e: "#forge:chests",
    t: "mek1000:reinforced_steel_casing",
  });

  event.shaped("mek1000:item_output", ["   ", "t  ", "e  "], {
    e: "#forge:chests",
    t: "mek1000:reinforced_steel_casing",
  });

  event.shaped("mek1000:fluid_output", ["   ", "t  ", "e  "], {
    e: "mekanism:ultimate_fluid_tank",
    t: "mek1000:reinforced_steel_casing",
  });

  global.convert.push(["mek1000:item_input", "mek1000:item_output"]);

  event.shapeless("mek1000:energy_output", [
    "mek1000:reinforced_steel_casing",
    "mekanism:induction_port",
  ]);

  event.shaped("mek1000:singurarity_gas_input", ["eee", "ete", "eee"], {
    e: "mekanism:ultimate_chemical_tank",
    t: "mek1000:black_casing",
  });

  event.recipes.mekanism.enriching(
    "mek1000:compressed_sps_casing",
    "64x mekanism:sps_casing"
  );

  // tin casing craft
  event
    .shaped(`mek1000:tin_casing_incomplete`, ["tgt", "obo", "tst"], {
      t: `mekanism:block_tin`,
      b: `mekanism:block_bronze`,
      s: `mekanism_extras:supreme_control_circuit`,
      g: `minecraft:glass`,
      o: `mekanism:ingot_refined_obsidian`,
    })
    .id(`mek1000:tincasing_1`);

  // tin casing wrapping
  event.recipes.mekanism
    .combining(
      `mek1000:tin_casing`,
      "mek1000:tin_casing_incomplete",
      "16x mek1000:ldpe"
    )
    .id(`mek1000:tincasing_2`);
})