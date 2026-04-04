//packmode: normal

ServerEvents.recipes(event => {

    //通常の鉱石の倍化
    processing_normal("iron")
    processing_normal("gold")
    processing_normal("copper")
    processing_normal("lead")
    processing_normal("tin")
    processing_normal("uranium")
    processing_normal("iridium")
    processing_normal("debri")
    processing_normal("osmium")



    //通常鉱石の倍化処理
    function processing_normal(material) {

        //圧縮倍化時に付与されるボーナス個数
        var bonus = {
            raw_block: 1
        }

        //倍化率
        var doubling_rate = {
            purifying_shard: 2,
            clean_washing: 10,
            activating_crystal: 2,

            enrich_raw_ore: 6,
            purifying_raw_ore: 24,
            injecting_raw_ore: 48,
            dissolving_raw_ore: 7600,

            dissolving_raw_block: 7500,

            enrich_dense_ore: 36,
            purifying_dense_ore: 16,
            injecting_dense_ore: 32,
            dissolving_dense_ore: 5400,

            enrich_ore: 8,
            purifying_ore: 32,
            injecting_ore: 64,
            dissolving_ore: 10000,

            activating_ore: 6,
            activating_raw_block: 2,
            activating_dense_ore: 24,

            antimatter_raw_ore: 30,
            antimatter_ore: 40,
            antimatter_dense_ore: 160,
        }

        event.remove({ id: `mekanism:processing/${material}/dust/from_dirty_dust` })
        event.remove({ id: `mekanism:processing/${material}/dust/from_ore` })
        event.remove({ id: `mekanism:processing/${material}/dust/from_raw_block` })
        event.remove({ id: `mekanism:processing/${material}/dust/from_raw_ore` })

        event.remove({ id: `mekanism:processing/${material}/dirty_dust/from_clump` })

        event.remove({ id: `mekanism:processing/${material}/clump/from_ore` })
        event.remove({ id: `mekanism:processing/${material}/clump/from_raw_block` })
        event.remove({ id: `mekanism:processing/${material}/clump/from_raw_ore` })
        event.remove({ id: `mekanism:processing/${material}/clump/from_shard` })

        event.remove({ id: `mekanism:processing/${material}/shard/from_ore` })
        event.remove({ id: `mekanism:processing/${material}/shard/from_raw_block` })
        event.remove({ id: `mekanism:processing/${material}/shard/from_raw_ore` })
        event.remove({ id: `mekanism:processing/${material}/shard/from_crystal` })

        event.remove({ id: `mekanism:processing/${material}/slurry/clean` })

        event.remove({ id: `mekanism:processing/${material}/slurry/dirty/from_ore` })
        event.remove({ id: `mekanism:processing/${material}/slurry/dirty/from_raw_block` })
        event.remove({ id: `mekanism:processing/${material}/slurry/dirty/from_raw_ore` })

        event.remove({ id: `mekanism:processing/${material}/crystal/from_slurry` })

        let failcount = 0

        //素材タグ
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
            crystalized_ore: `mek1000:ores/crystalized/${material}`,
        }

        var ore = {
            raw_ore: `forge:raw_materials/${material}`,
            raw_block: `forge:storage_blocks/raw_${material}`,

            ore: `forge:ores/${material}`,
            dense_ore: `mek1000:ores/dense_${material}`
        }

        //ガス
        var gas = {
            active_gas: `mek1000:active_${material}`,
            purified_gas: `mek1000:purified_${material}`,
        }

        //懸濁液
        var slurry = {
            dirty: `mekanism:dirty_${material}`,
            clean: `mekanism:clean_${material}`,
            dirty_compressed: `astral_mekanism:dirty_compressed_${material}`,
            clean_compressed: `astral_mekanism:clean_compressed_${material}`,
            prec: `mek1000:prec_${material}`,
            prec_compress: `mek1000:prec_compress_${material}`
        }

        //懸濁液のチェック
        if (MekanismKeyHelper.slurry(slurry.dirty).get() === null) {
            slurry.dirty = `astral_mekanism:dirty_${material}`

            if (MekanismKeyHelper.slurry(slurry.dirty).get() === null) {
                slurry.dirty = `kubejs:dirty_${material}`

                if (MekanismKeyHelper.slurry(slurry.dirty).get() === null) {
                    failcount++
                    console.log(`[Mek1000] Not Found Dirty Slurry ${material}`)
                }
            }
        }


        if (MekanismKeyHelper.slurry(slurry.clean).get() === null) {
            slurry.clean = `astral_mekanism:clean_${material}`

            if (MekanismKeyHelper.slurry(slurry.clean).get() === null) {
                slurry.clean = `kubejs:clean_${material}`

                if (MekanismKeyHelper.slurry(slurry.clean).get() === null) {
                    failcount++
                    console.log(`[Mek1000] Not Found Clean Slurry ${material}`)
                }
            }
        }

        if (MekanismKeyHelper.slurry(slurry.dirty_compressed).get() === null) {
            slurry.dirty_compressed = `mek1000:dirty_compressed_${material}`
            if (MekanismKeyHelper.slurry(slurry.dirty_compressed).get() === null) {
                failcount++
                console.log(`[Mek1000] Not Found Clean Compressed Slurry ${material}`)
            }
        }

        console.log(slurry.dirty_compressed)

        if (MekanismKeyHelper.slurry(slurry.clean_compressed).get() === null) {
            slurry.clean_compressed = `mek1000:clean_compressed_${material}`
            if (MekanismKeyHelper.slurry(slurry.clean_compressed).get() === null) {
                failcount++
                console.log(`[Mek1000] Not Found Clean Compressed Slurry ${material}`)
            }
        }

        if (MekanismKeyHelper.slurry(slurry.prec).get() === null) {
            failcount++
            console.log(`[Mek1000] Not Found Prec ${material}`)
        }

        if (MekanismKeyHelper.slurry(slurry.prec_compress).get() === null) {
            failcount++
            console.log(`[Mek1000] Not Found Prec Compress ${material}`)
        }

        //倍化に使用するアイテムがすべて存在するか確認
        Object.keys(tag_material).forEach(element => {
            if (IngredientHelper.tag(tag_material[element]).isEmpty()) {
                console.log(`[Mek1000] Not Found Tag Item ${tag_material[element]}`)
                failcount++
            }
        })

        //いずれかが存在しない場合は飛ばす
        if (failcount > 0) return;

        if (tag_to_string_item(ore.raw_ore) === "minecraft:air") {

        } else {
            raw_ore_process()
        }

        if (tag_to_string_item(ore.raw_block) === "minecraft:air") {

        } else {
            raw_block_process()
        }

        if (tag_to_string_item(ore.ore) === "minecraft:air") {

        } else {
            ore_process()
        }

        if (tag_to_string_item(ore.dense_ore) === "minecraft:air") {

        } else {
            dense_ore_process()
        }

        //濃縮機
        event.recipes.mekanism.enriching(tag_to_item(tag_material.dust), `#${tag_material.dirty_dust}`)
        event.recipes.mekanism.enriching(tag_to_item(tag_material.compressed_dust), `#${tag_material.compressed_dirty_dust}`)

        //粉砕機
        event.recipes.mekanism.crushing(tag_to_item(tag_material.dirty_dust), `#${tag_material.clump}`)
        event.recipes.mekanism.crushing(tag_to_item(tag_material.compressed_dirty_dust), `#${tag_material.compressed_clump}`)

        //浄化室
        event.recipes.mekanism.purifying(tag_to_item(tag_material.clump, doubling_rate.purifying_shard), `#${tag_material.shard}`, "1x mekanism:oxygen")
        event.recipes.mekanism.purifying(tag_to_item(tag_material.compressed_clump, doubling_rate.purifying_shard), `#${tag_material.compressed_shard}`, "9x mekanism:oxygen")

        //注入室
        event.recipes.mekanism.injecting(tag_to_item(tag_material.shard), `#${tag_material.crystal}`, "1x mekanism:hydrogen_chloride")
        event.recipes.mekanism.injecting(tag_to_item(tag_material.compressed_shard), `#${tag_material.compressed_crystal}`, "9x mekanism:hydrogen_chloride")

        //溶解室
        event.custom({
            type: "mekanism:dissolution",
            itemInput: { ingredient: { tag: tag_material.purified_ore } },
            gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
            output: {
                slurry: slurry.dirty,
                amount: doubling_rate.dissolving_raw_ore,
                chemicalType: "slurry",
            },
        });

        event.custom({
            type: "mekanism:dissolution",
            itemInput: { ingredient: { tag: `${tag_material.compressed_purified_ore}` } },
            gasInput: { amount: 9, gas: "mekanism:sulfuric_acid" },
            output: {
                slurry: slurry.dirty_compressed,
                amount: doubling_rate.dissolving_raw_block,
                chemicalType: "slurry",
            },
        });

        //洗浄機
        event.custom({
            type: "mekanism:washing",
            fluidInput: { amount: 5, fluid: "minecraft:water" },
            slurryInput: { amount: 1, slurry: slurry.dirty },
            output: { slurry: slurry.clean, amount: doubling_rate.clean_washing },
        });

        event.custom({
            type: "mekanism:washing",
            fluidInput: { amount: 50, fluid: "minecraft:water" },
            slurryInput: { amount: 1, slurry: slurry.dirty_compressed },
            output: { slurry: slurry.clean_compressed, amount: doubling_rate.clean_washing },
        });

        event.custom({
            type: "mekanism:washing",
            fluidInput: { amount: 300, fluid: "minecraft:water" },
            slurryInput: { amount: 200, slurry: slurry.clean },
            output: { slurry: slurry.prec, amount: 1 },
        });

        event.custom({
            type: "mekanism:washing",
            fluidInput: { amount: 300, fluid: "minecraft:water" },
            slurryInput: { amount: 200, slurry: slurry.clean_compressed },
            output: { slurry: slurry.prec_compress, amount: 1 },
        });

        //結晶化
        event.custom({
            type: "mekanism:crystallizing",
            chemicalType: "slurry",
            input: { amount: 200, slurry: slurry.clean },
            output: { item: `${tag_to_string_item(tag_material.crystal)}` },
        });

        event.custom({
            type: "mekanism:crystallizing",
            chemicalType: "slurry",
            input: { amount: 200, slurry: slurry.clean_compressed },
            output: { item: `${tag_to_string_item(tag_material.compressed_crystal)}` },
        });

        event.custom({
            type: "mekanism:crystallizing",
            chemicalType: "slurry",
            input: { amount: 20, slurry: slurry.prec },
            output: { item: `${tag_to_string_item(tag_material.crystal)}`, count: 20 },
        });

        event.custom({
            type: "mekanism:crystallizing",
            chemicalType: "slurry",
            input: { amount: 15, slurry: slurry.prec_compress },
            output: { item: `${tag_to_string_item(tag_material.compressed_crystal)}`, count: 15 },
        });

        event.custom({
            type: "mekanism:crystallizing",
            chemicalType: "gas",
            input: { amount: 10, gas: gas.purified_gas },
            output: { item: `${tag_to_string_item(tag_material.crystalized_ore)}` },
        });

        //加圧反応室(王水)
        event.custom({
            type: "mekanism:reaction",
            itemInput: { ingredient: { tag: tag_material.crystalized_ore } },
            fluidInput: { fluid: "minecraft:water", amount: 75 },
            gasInput: { gas: "mek1000:active_aqua_regia", amount: 600 },
            energyRequired: 1,
            duration: 3,
            itemOutput: {
                item: `${tag_to_string_item(tag_material.compressed_purified_ore)}`,
                count: doubling_rate.activating_crystal,
            },
        });

        //混成
        event.custom({
            type: "mekanism:chemical_infusing",
            chemicalType: "gas",
            leftInput: { gas: "astral_mekanism:aqua_regia", amount: 100 },
            rightInput: { gas: gas.active_gas, amount: 10 },
            output: { gas: gas.purified_gas, amount: 10 },
        });

        //原石倍化処理
        function raw_ore_process() {
            //濃縮機
            event.recipes.mekanism.enriching(tag_to_item(tag_material.dust, doubling_rate.enrich_raw_ore), `#${ore.raw_ore}`)
            //浄化室
            event.recipes.mekanism.purifying(tag_to_item(tag_material.clump, doubling_rate.purifying_raw_ore), `#${ore.raw_ore}`, "1x mekanism:oxygen")
            //注入室
            event.recipes.mekanism.injecting(tag_to_item(tag_material.shard, doubling_rate.injecting_raw_ore), `#${ore.raw_ore}`, "1x mekanism:hydrogen_chloride")
            //溶解室
            event.custom({
                type: "mekanism:dissolution",
                itemInput: { ingredient: { tag: ore.raw_ore } },
                gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
                output: {
                    slurry: slurry.dirty,
                    amount: doubling_rate.dissolving_raw_ore,
                    chemicalType: "slurry",
                }
            });
            //加圧反応室(王水)
            //加圧反応室(反物質)
            event.custom({
                type: "mekanism:reaction",
                itemInput: { ingredient: { tag: ore.raw_ore } },
                fluidInput: { fluid: "minecraft:water", amount: 6 },
                gasInput: { gas: "mekanism:antimatter", amount: 3 },
                energyRequired: 120,
                duration: 20,
                gasOutput: { gas: gas.active_gas, amount: doubling_rate.antimatter_raw_ore },
            });
        }

        //原石ブロック倍化処理
        function raw_block_process() {
            //濃縮機
            event.recipes.mekanism.enriching(tag_to_item(tag_material.compressed_dust, doubling_rate.enrich_raw_ore + bonus.raw_block), `#${ore.raw_block}`)
            //浄化室
            event.recipes.mekanism.purifying(tag_to_item(tag_material.compressed_clump, doubling_rate.purifying_raw_ore + bonus.raw_block), `#${ore.raw_block}`, "1x mekanism:oxygen")
            //注入室
            event.recipes.mekanism.injecting(tag_to_item(tag_material.compressed_shard, doubling_rate.injecting_raw_ore + bonus.raw_block), `#${ore.raw_block}`, "1x mekanism:hydrogen_chloride")
            //溶解室
            event.custom({
                type: "mekanism:dissolution",
                itemInput: { ingredient: { tag: ore.raw_block } },
                gasInput: { amount: 9, gas: "mekanism:sulfuric_acid" },
                output: {
                    slurry: slurry.dirty_compressed,
                    amount: doubling_rate.dissolving_raw_block,
                    chemicalType: "slurry",
                },
            });
            //加圧反応室(王水)
            event.custom({
                type: "mekanism:reaction",
                itemInput: { ingredient: { tag: ore.raw_block } },
                fluidInput: { fluid: "minecraft:water", amount: 225 },
                gasInput: { gas: "mek1000:active_aqua_regia", amount: 1800 },
                energyRequired: 1,
                duration: 18,
                itemOutput: {
                    item: `${tag_to_string_item(tag_material.compressed_purified_ore)}`,
                    count: doubling_rate.activating_raw_block,
                },
            });
            //加圧反応室(反物質)
            event.custom({
                type: "mekanism:reaction",
                itemInput: { ingredient: { tag: ore.raw_block } },
                fluidInput: { fluid: "minecraft:water", amount: 54 },
                gasInput: { gas: "mekanism:antimatter", amount: 27 },
                energyRequired: 1080,
                duration: 20,
                gasOutput: { gas: gas.active_gas, amount: doubling_rate.antimatter_raw_ore * 9 },
            });
        }

        //鉱石ブロック倍化処理
        function ore_process() {
            //濃縮機
            event.recipes.mekanism.enriching(tag_to_item(tag_material.dust, doubling_rate.enrich_ore), `#${ore.ore}`)
            //浄化室
            event.recipes.mekanism.purifying(tag_to_item(tag_material.clump, doubling_rate.purifying_ore), `#${ore.ore}`, "1x mekanism:oxygen")
            //注入室
            event.recipes.mekanism.injecting(tag_to_item(tag_material.shard, doubling_rate.injecting_ore), `#${ore.ore}`, "1x mekanism:hydrogen_chloride")
            //溶解室
            event.custom({
                type: "mekanism:dissolution",
                itemInput: { ingredient: { tag: ore.ore } },
                gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
                output: {
                    slurry: slurry.dirty,
                    amount: doubling_rate.dissolving_ore,
                    chemicalType: "slurry",
                },
            });
            //加圧反応室(王水)
            event.custom({
                type: "mekanism:reaction",
                itemInput: { ingredient: { tag: ore.ore } },
                fluidInput: { fluid: "minecraft:water", amount: 225 },
                gasInput: { gas: "mek1000:active_aqua_regia", amount: 1800 },
                energyRequired: 1,
                duration: 18,
                itemOutput: {
                    item: `${tag_to_string_item(tag_material.purified_ore)}`,
                    count: doubling_rate.activating_ore,
                },
            });
            //加圧反応室(反物質)
            event.custom({
                type: "mekanism:reaction",
                itemInput: { ingredient: { tag: ore.ore } },
                fluidInput: { fluid: "minecraft:water", amount: 8 },
                gasInput: { gas: "mekanism:antimatter", amount: 8 },
                energyRequired: 160,
                duration: 20,
                gasOutput: { gas: gas.active_gas, amount: doubling_rate.antimatter_ore },
            });
        }

        //高密度鉱石倍化処理
        function dense_ore_process() {
            //濃縮機
            event.recipes.mekanism.enriching(tag_to_item(tag_material.dust, doubling_rate.enrich_dense_ore), `#${ore.dense_ore}`)
            //浄化室
            event.recipes.mekanism.purifying(tag_to_item(tag_material.clump, doubling_rate.purifying_dense_ore), `#${ore.dense_ore}`, "1x mekanism:oxygen")
            //注入室
            event.recipes.mekanism.injecting(tag_to_item(tag_material.shard, doubling_rate.injecting_dense_ore), `#${ore.dense_ore}`, "1x mekanism:hydrogen_chloride")
            //溶解室
            event.custom({
                type: "mekanism:dissolution",
                itemInput: { ingredient: { tag: ore.dense_ore } },
                gasInput: { amount: 2, gas: "mekanism:sulfuric_acid" },
                output: {
                    slurry: slurry.dirty_compressed,
                    amount: doubling_rate.dissolving_dense_ore,
                    chemicalType: "slurry",
                },
            });
            //加圧反応室(王水)
            event.custom({
                type: "mekanism:reaction",
                itemInput: { ingredient: { tag: ore.dense_ore } },
                fluidInput: { fluid: "minecraft:water", amount: 300 },
                gasInput: { gas: "mek1000:active_aqua_regia", amount: 2400 },
                energyRequired: 1,
                duration: 24,
                itemOutput: {
                    item: tag_to_string_item(tag_material.purified_ore),
                    count: doubling_rate.activating_dense_ore,
                },
            });

            //加圧反応室(反物質)
            event.custom({
                type: "mekanism:reaction",
                itemInput: { ingredient: { tag: ore.dense_ore } },
                fluidInput: { fluid: "minecraft:water", amount: 8 },
                gasInput: { gas: "mekanism:antimatter", amount: 8 },
                energyRequired: 640,
                duration: 20,
                gasOutput: { gas: gas.active_gas, amount: doubling_rate.antimatter_dense_ore },
            });
        }
    }

    function tag_to_item(tag, count) {
        if (count === undefined)
            return Item.of(IngredientHelper.tag(tag).getFirst())
        else
            return Item.of(IngredientHelper.tag(tag).getFirst(), count)
    }

    function tag_to_string_item(tag) {
        let str = IngredientHelper.tag(tag).getFirst().toItemString();
        return `${str}`.replace(/\'/g, "")
    }
})