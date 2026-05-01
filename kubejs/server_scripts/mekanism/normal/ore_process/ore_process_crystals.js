//packmode: normal

ServerEvents.recipes(event => {

    //クリスタル系鉱石の倍化
    processing_crystal("redstone")
    processing_crystal("fluorite")
    processing_crystal("quartz")
    processing_crystal("certus_quartz")

    //通常鉱石の倍化処理
    function processing_crystal(material) {
        //倍化率
        var doubling_rate = {
            purifying_extract: 2,
            clean_washing: 10,
            activating_crystal: 1,

            purifying_ore: 3,
            injecting_ore: 6,
            dissolving_ore: 2400,
            activating_ore: 3,

            purifying_dense: 12,
            injecting_dense: 24,
            activating_dense: 40,
            dissolving_compressed: 10000,

            antimatter_ore: 40,
            antimatter_dense_ore: 200,
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
            soft_ore: `mek1000:ores/gem/soft/${material}`,
            extracted: `mek1000:ores/gem/extracted/${material}`,
            crystal: `mek1000:ores/gem/crystal/${material}`,

            purified_ore: `mek1000:ores/purifired/${material}`,
            compressed_purified_ore: `mek1000:ores/compressed_purified/${material}`,
            crystalized_ore: `mek1000:ores/crystalized/${material}`,
        }

        var ore = {
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
            prec: `mek1000:prec_${material}`,
        }

        //懸濁液のチェック
        if (MekanismKeyHelper.slurry(slurry.dirty).get() === null) {
            slurry.dirty = `astral_mekanism:dirty_${material}`

            if (MekanismKeyHelper.slurry(slurry.dirty).get() === null) {
                slurry.dirty = `kubejs:dirty_${material}`

                if (MekanismKeyHelper.slurry(slurry.dirty).get() === null) {
                    slurry.dirty = `mek1000:dirty_${material}`
    
                    if (MekanismKeyHelper.slurry(slurry.dirty).get() === null) {
                        failcount++
                        console.log(`[Mek1000] Not Found Dirty Slurry ${material}`)
                    }
                }
            }
        }


        if (MekanismKeyHelper.slurry(slurry.clean).get() === null) {
            slurry.clean = `astral_mekanism:clean_${material}`

            if (MekanismKeyHelper.slurry(slurry.clean).get() === null) {
                slurry.clean = `kubejs:clean_${material}`

                if (MekanismKeyHelper.slurry(slurry.clean).get() === null) {
                    slurry.clean = `mek1000:clean_${material}`
    
                    if (MekanismKeyHelper.slurry(slurry.clean).get() === null) {
                        failcount++
                        console.log(`[Mek1000] Not Found Clean Slurry ${material}`)
                    }
                }
            }
        }

        if (MekanismKeyHelper.slurry(slurry.prec).get() === null) {
            failcount++
            console.log(`[Mek1000] Not Found Prec ${material}`)
        }

        //倍化に使用するアイテムがすべて存在するか確認
        Object.keys(tag_material).forEach(element => {
            if (tag_to_string_item(tag_material[element]) === "minecraft:air") {
                console.log(`[Mek1000] Not Found Tag Item ${tag_material[element]}`)
                failcount++
            }
        })

        //いずれかが存在しない場合は飛ばす
        if (failcount > 0) return;

        if (tag_to_string_item(ore.ore) === "minecraft:air") {

        } else {
            ore_process()
        }

        if (tag_to_string_item(ore.dense_ore) === "minecraft:air") {

        } else {
            dense_ore_process()
        }

        //浄化室
        event.recipes.mekanism.purifying(tag_to_item(tag_material.soft_ore, doubling_rate.purifying_extract), `#${tag_material.extracted}`, "1x mekanism:oxygen")

        //注入室
        event.recipes.mekanism.injecting(tag_to_item(tag_material.extracted), `#${tag_material.crystal}`, "1x mekanism:hydrogen_chloride")

        //溶解室
        event.custom({
            type: "mekanism:dissolution",
            itemInput: { ingredient: { tag: tag_material.purified_ore } },
            gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
            output: {
                slurry: slurry.dirty,
                amount: doubling_rate.dissolving_ore,
                chemicalType: "slurry",
            },
        });

        event.custom({
            type: "mekanism:dissolution",
            itemInput: { ingredient: { tag: `${tag_material.compressed_purified_ore}` } },
            gasInput: { amount: 9, gas: "mekanism:sulfuric_acid" },
            output: {
                slurry: slurry.dirty,
                amount: doubling_rate.dissolving_compressed,
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
            fluidInput: { amount: 300, fluid: "minecraft:water" },
            slurryInput: { amount: 200, slurry: slurry.clean },
            output: { slurry: slurry.prec, amount: 1 },
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
            input: { amount: 20, slurry: slurry.prec },
            output: { item: `${tag_to_string_item(tag_material.crystal)}`, count: 20 },
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

        //鉱石ブロック倍化処理
        function ore_process() {
            //浄化室
            event.recipes.mekanism.purifying(tag_to_item(tag_material.soft_ore, doubling_rate.purifying_ore), `#${ore.ore}`, "1x mekanism:oxygen")
            //注入室
            event.recipes.mekanism.injecting(tag_to_item(tag_material.extracted, doubling_rate.injecting_ore), `#${ore.ore}`, "1x mekanism:hydrogen_chloride")
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
            //浄化室
            event.recipes.mekanism.purifying(tag_to_item(tag_material.soft_ore, doubling_rate.purifying_dense), `#${ore.dense_ore}`, "1x mekanism:oxygen")
            //注入室
            event.recipes.mekanism.injecting(tag_to_item(tag_material.extracted, doubling_rate.injecting_dense), `#${ore.dense_ore}`, "1x mekanism:hydrogen_chloride")
            //溶解室
            event.custom({
                type: "mekanism:dissolution",
                itemInput: { ingredient: { tag: ore.dense_ore } },
                gasInput: { amount: 2, gas: "mekanism:sulfuric_acid" },
                output: {
                    slurry: slurry.dirty,
                    amount: doubling_rate.dissolving_compressed,
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
                    count: doubling_rate.activating_dense,
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