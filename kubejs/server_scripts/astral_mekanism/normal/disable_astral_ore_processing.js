ServerEvents.recipes(event => {
    let material = ["coal","iron","copper","gold","redstone","emerald","lapis_lazuli","diamond","quartz","tin","uranium","lead","osmium","fluorite","netherite","certus_quartz","amethyst","naquadah"]

    material.forEach(value =>{
        event.remove({id:`astral_mekanism:processing/${value}/ore`})
        event.remove({id:`astral_mekanism:processing/${value}/dirty_slurry`})
        event.remove({id:`astral_mekanism:processing/${value}/clean_slurry`})
        event.remove({id:`astral_mekanism:processing/${value}/dirty_compressed_slurry`})
        event.remove({id:`astral_mekanism:processing/${value}/clean_compressed_slurry`})
        event.remove({id:`astral_mekanism:processing/${value}/dirty_compressed_slurry_raw`})

        event.remove({id:`astral_mekanism:processing/${value}/clump`})
        event.remove({id:`astral_mekanism:processing/${value}/clump_1`})
        event.remove({id:`astral_mekanism:processing/${value}/clump_2`})

        event.remove({id:`astral_mekanism:processing/${value}/shard`})
        event.remove({id:`astral_mekanism:processing/${value}/shard_1`})
        event.remove({id:`astral_mekanism:processing/${value}/shard_2`})

        event.remove({id:`astral_mekanism:processing/${value}/crystal`})
        event.remove({id:`astral_mekanism:processing/${value}/crystal_compressed`})

        event.remove({id:`astral_mekanism:processing/${value}/debris`})

        event.remove({id:`astral_mekanism:processing/${value}/raw`})
        event.remove({id:`astral_mekanism:processing/${value}/dirty_dust`})
        event.remove({id:`astral_mekanism:processing/${value}/dust`})

        event.remove({id:`astral_mekanism:processing/${value}/cluster`})

        event.remove({id:`astral_mekanism:processing/${value}/${value}`})
    
        event.remove({id:`astral_mekanism:starlight/${value}/ore`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/ore`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/purifying`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/crushing`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/crystallizing`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/injecting`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/dissolution`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/washing`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/compressing`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/nucleosynthesizing`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/reconstruction`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/dirty_slurry`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/clean_slurry`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/dirty_compressed_slurry`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/clean_compressed_slurry`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/dirty_compressed_slurry_raw`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/clump`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/clump_1`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/clump_2`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/shard`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/shard_1`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/shard_2`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/crystal`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/crystal_compressed`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/debris`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/raw`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/dirty_dust`})
        event.remove({id:`astral_mekanism:unique_processing/${value}/dust`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/cluster`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/final`})

        event.remove({id:`astral_mekanism:unique_processing/${value}/${value}`})

        event.remove({id:`astral_mekanism:processing_old/${value}/ore`})
        event.remove({id:`astral_mekanism:processing_old/${value}/dirty_slurry`})
        event.remove({id:`astral_mekanism:processing_old/${value}/clean_slurry`})
        event.remove({id:`astral_mekanism:processing_old/${value}/dirty_compressed_slurry`})
        event.remove({id:`astral_mekanism:processing_old/${value}/clean_compressed_slurry`})
        event.remove({id:`astral_mekanism:processing_old/${value}/dirty_compressed_slurry_raw`})

        event.remove({id:`astral_mekanism:processing_old/${value}/clump`})
        event.remove({id:`astral_mekanism:processing_old/${value}/clump_1`})
        event.remove({id:`astral_mekanism:processing_old/${value}/clump_2`})

        event.remove({id:`astral_mekanism:processing_old/${value}/shard`})
        event.remove({id:`astral_mekanism:processing_old/${value}/shard_1`})
        event.remove({id:`astral_mekanism:processing_old/${value}/shard_2`})

        event.remove({id:`astral_mekanism:processing_old/${value}/crystal`})
        event.remove({id:`astral_mekanism:processing_old/${value}/crystal_compressed`})

        event.remove({id:`astral_mekanism:processing_old/${value}/debris`})

        event.remove({id:`astral_mekanism:processing_old/${value}/raw`})
        event.remove({id:`astral_mekanism:processing_old/${value}/dirty_dust`})
        event.remove({id:`astral_mekanism:processing_old/${value}/dust`})

        event.remove({id:`astral_mekanism:processing_old/${value}/cluster`})

        event.remove({id:`astral_mekanism:processing_old/${value}/${value}`})
    })
})