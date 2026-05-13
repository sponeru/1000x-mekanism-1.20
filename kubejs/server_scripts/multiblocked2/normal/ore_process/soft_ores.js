ServerEvents.recipes(event => {
  soft_ore_process('redstone', true, 'forge:dusts/redstone', 24)
  soft_ore_process('certus_quartz', true, 'forge:gems/certus_quartz', 6 ,'certus')
  soft_ore_process('fluorite', true, 'forge:gems/fluorite', 6)
  soft_ore_process('quartz', true, 'forge:gems/quartz', 6)

  function soft_ore_process (material, vaporize, tagname, mult, altname) {
    let vaponame = material
      
    if(altname != undefined){
      vaponame = altname
    }

    var tag_material = {
      dust: `forge:dusts/${material}`,
      dirty_dust: `mekanism:dirty_dusts/${material}`,
      clump: `mekanism:clumps/${material}`,
      shard: `mekanism:shards/${material}`,
      crystal: `mekanism:crystals/${material}`,

      compressed_clump: `mek1000:ores/compressed_clump/${material}`,
      compressed_shard: `mek1000:ores/compressed_shard/${material}`,
      compressed_crystal: `mek1000:ores/compressed_crystal/${material}`,
      compressed_dust: `forge:storage_blocks/dust_${material}`,
      compressed_dirty_dust: `forge:storage_blocks/dirty_dust_${material}`,

      purified_ore: `mek1000:ores/purifired/${material}`,
      compressed_purified_ore: `mek1000:ores/compressed_purified/${material}`,
      crystalized_ore: `mek1000:ores/crystalized/${material}`
    }

    var ore = {
      raw_ore: `forge:raw_materials/${material}`,
      raw_block: `forge:storage_blocks/raw_${material}`,

      ore: `forge:ores/${material}`,
      dense_ore: `mek1000:ores/dense_${material}`
    }

    if (tag_to_string_item(ore.ore) === 'minecraft:air') {
    } else {
      ore_process()
    }

    if (tag_to_string_item(ore.dense_ore) === 'minecraft:air') {
    } else {
      dense_ore_process()
    }

    //鉱石
    function ore_process () {
      event.recipes.mek1000
        .integrated_ore_process()
        .id(`mek1000:process_smelting_${material}_ore`)
        // duration in tick
        .duration(80)
        // hight priority will be handled first
        .priority(1)
        // item
        .inputItems(`#${ore.ore}`)
        .chance(0, builder =>
          builder.inputItems(['mek1000:module_smelting', '#mekanism:crystals'])
        )
        .outputItems(tag_to_item(tagname, 240 * mult))

        .inputGases(
          '1000x mekanism:hydrogen_chloride',
          '1000x mekanism:sulfuric_acid'
        )

        // per tick (consume / generate per tick)
        .perTick(builder => builder.inputFE(2000000000))

      event.recipes.mek1000
        .integrated_ore_process()
        .id(`mek1000:process_smelting_anti_${material}_ore`)
        // duration in tick
        .duration(80)
        // hight priority will be handled first
        .priority(1)
        // item
        .inputItems(`#${ore.ore}`)
        .chance(0, builder =>
          builder.inputItems([
            'mek1000:module_smelting',
            '#mek1000:ores/crystalized'
          ])
        )
        .outputItems(tag_to_item(tagname, 4000 * mult))

        .inputGases(
          '1000x mekanism:sulfuric_acid',
          '300x mek1000:active_aqua_regia',
          '3x mekanism:antimatter'
        )

        // per tick (consume / generate per tick)
        .perTick(builder => builder.inputFE(2000000000))

      event.recipes.mek1000
        .integrated_ore_process()
        .id(`mek1000:process_smelting_aqua_${material}_ore`)
        // duration in tick
        .duration(80)
        // hight priority will be handled first
        .priority(1)
        // item
        .inputItems(`#${ore.ore}`)
        .chance(0, builder =>
          builder.inputItems([
            'mek1000:module_smelting',
            '#mek1000:ores/compressed_purified'
          ])
        )
        .outputItems(tag_to_item(tagname, 720 * mult))

        .inputGases(
          '1000x mekanism:hydrogen_chloride',
          '1000x mekanism:sulfuric_acid',
          '300x mek1000:active_aqua_regia'
        )

        // per tick (consume / generate per tick)
        .perTick(builder => builder.inputFE(2000000000))

      if (vaporize) {
        event.recipes.mek1000
          .integrated_ore_process()
          .id(`mek1000:process_oxidize_${material}_ore`)
          // duration in tick
          .duration(80)
          // hight priority will be handled first
          .priority(1)
          // item
          .inputItems(`#${ore.ore}`)
          .chance(0, builder =>
            builder.inputItems(['mek1000:module_oxidize', '#mekanism:crystals'])
          )

          .inputGases(
            '1000x mekanism:hydrogen_chloride',
            '1000x mekanism:sulfuric_acid'
          )

          .outputGases(`${240 * mult}x mek1000:vaporized_${vaponame}`)

          // per tick (consume / generate per tick)
          .perTick(builder => builder.inputFE(2000000000))

        event.recipes.mek1000
          .integrated_ore_process()
          .id(`mek1000:process_oxidising_anti_${material}_ore`)
          // duration in tick
          .duration(80)
          // hight priority will be handled first
          .priority(1)
          // item
          .inputItems(`#${ore.ore}`)
          .chance(0, builder =>
            builder.inputItems([
              'mek1000:module_oxidize',
              '#mek1000:ores/crystalized'
            ])
          )

          .inputGases(
            '1000x mekanism:sulfuric_acid',
            '300x mek1000:active_aqua_regia',
            '3x mekanism:antimatter'
          )

          .outputGases(`${4000 * mult}x mek1000:vaporized_${vaponame}`)

          // per tick (consume / generate per tick)
          .perTick(builder => builder.inputFE(2000000000))

        event.recipes.mek1000
          .integrated_ore_process()
          .id(`mek1000:process_oxidize_aqua_${material}_ore`)
          // duration in tick
          .duration(80)
          // hight priority will be handled first
          .priority(1)
          // item
          .inputItems(`#${ore.ore}`)
          .chance(0, builder =>
            builder.inputItems([
              'mek1000:module_oxidize',
              '#mek1000:ores/compressed_purified'
            ])
          )

          .inputGases(
            '1000x mekanism:hydrogen_chloride',
            '1000x mekanism:sulfuric_acid',
            '300x mek1000:active_aqua_regia'
          )

          .outputGases(`${720 * mult}x mek1000:vaporized_${vaponame}`)

          // per tick (consume / generate per tick)
          .perTick(builder => builder.inputFE(2000000000))
      }
    }

    //高密度鉱石
    function dense_ore_process () {
      event.recipes.mek1000
        .integrated_ore_process()
        .id(`mek1000:process_smelting_${material}_denseore`)
        // duration in tick
        .duration(80)
        // hight priority will be handled first
        .priority(1)
        // item
        .inputItems(`#${ore.dense_ore}`)
        .chance(0, builder =>
          builder.inputItems(['mek1000:module_smelting', '#mekanism:crystals'])
        )
        .outputItems(tag_to_item(tagname, 240 * mult * 4))

        .inputGases(
          '1000x mekanism:hydrogen_chloride',
          '1000x mekanism:sulfuric_acid'
        )

        // per tick (consume / generate per tick)
        .perTick(builder => builder.inputFE(2000000000))

      event.recipes.mek1000
        .integrated_ore_process()
        .id(`mek1000:process_smelting_anti_${material}_denseore`)
        // duration in tick
        .duration(80)
        // hight priority will be handled first
        .priority(1)
        // item
        .inputItems(`#${ore.dense_ore}`)
        .chance(0, builder =>
          builder.inputItems([
            'mek1000:module_smelting',
            '#mek1000:ores/crystalized'
          ])
        )
        .outputItems(tag_to_item(tagname, 4000 * mult * 4))

        .inputGases(
          '1000x mekanism:sulfuric_acid',
          '300x mek1000:active_aqua_regia',
          '3x mekanism:antimatter'
        )

        // per tick (consume / generate per tick)
        .perTick(builder => builder.inputFE(2000000000))

      event.recipes.mek1000
        .integrated_ore_process()
        .id(`mek1000:process_smelting_aqua_${material}_denseore`)
        // duration in tick
        .duration(80)
        // hight priority will be handled first
        .priority(1)
        // item
        .inputItems(`#${ore.dense_ore}`)
        .chance(0, builder =>
          builder.inputItems([
            'mek1000:module_smelting',
            '#mek1000:ores/compressed_purified'
          ])
        )
        .outputItems(tag_to_item(tagname, 720 * mult * 4))

        .inputGases(
          '1000x mekanism:hydrogen_chloride',
          '1000x mekanism:sulfuric_acid',
          '300x mek1000:active_aqua_regia'
        )

        // per tick (consume / generate per tick)
        .perTick(builder => builder.inputFE(2000000000))

      if (vaporize) {
        event.recipes.mek1000
          .integrated_ore_process()
          .id(`mek1000:process_oxidize_${material}_denseore`)
          // duration in tick
          .duration(80)
          // hight priority will be handled first
          .priority(1)
          // item
          .inputItems(`#${ore.dense_ore}`)
          .chance(0, builder =>
            builder.inputItems(['mek1000:module_oxidize', '#mekanism:crystals'])
          )

          .inputGases(
            '1000x mekanism:hydrogen_chloride',
            '1000x mekanism:sulfuric_acid'
          )

          .outputGases(`${240 * mult * 4}x mek1000:vaporized_${vaponame}`)

          // per tick (consume / generate per tick)
          .perTick(builder => builder.inputFE(2000000000))

        event.recipes.mek1000
          .integrated_ore_process()
          .id(`mek1000:process_oxidising_anti_${material}_denseore`)
          // duration in tick
          .duration(80)
          // hight priority will be handled first
          .priority(1)
          // item
          .inputItems(`#${ore.dense_ore}`)
          .chance(0, builder =>
            builder.inputItems([
              'mek1000:module_oxidize',
              '#mek1000:ores/crystalized'
            ])
          )

          .inputGases(
            '1000x mekanism:sulfuric_acid',
            '300x mek1000:active_aqua_regia',
            '3x mekanism:antimatter'
          )

          .outputGases(`${4000 * mult * 4}x mek1000:vaporized_${vaponame}`)

          // per tick (consume / generate per tick)
          .perTick(builder => builder.inputFE(2000000000))

        event.recipes.mek1000
          .integrated_ore_process()
          .id(`mek1000:process_oxidize_aqua_${material}_denseore`)
          // duration in tick
          .duration(80)
          // hight priority will be handled first
          .priority(1)
          // item
          .inputItems(`#${ore.dense_ore}`)
          .chance(0, builder =>
            builder.inputItems([
              'mek1000:module_oxidize',
              '#mek1000:ores/compressed_purified'
            ])
          )

          .inputGases(
            '1000x mekanism:hydrogen_chloride',
            '1000x mekanism:sulfuric_acid',
            '300x mek1000:active_aqua_regia'
          )

          .outputGases(`${720 * mult * 4}x mek1000:vaporized_${vaponame}`)

          // per tick (consume / generate per tick)
          .perTick(builder => builder.inputFE(2000000000))
      }
    }
  }

  function tag_to_item (tag, count) {
    if (count === undefined)
      return Item.of(IngredientHelper.tag(tag).getFirst())
    else return Item.of(IngredientHelper.tag(tag).getFirst(), count)
  }

  function tag_to_string_item (tag) {
    let str = IngredientHelper.tag(tag).getFirst().toItemString()
    return `${str}`.replace(/\'/g, '')
  }
})
