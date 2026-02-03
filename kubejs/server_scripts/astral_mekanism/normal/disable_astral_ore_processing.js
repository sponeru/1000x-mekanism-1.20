ServerEvents.recipes(event => {
    let material = ["coal","iron","copper","gold","redstone","emerald","lapis_lazuli","diamond","quartz","tin","uranium","lead","osmium","fluorite","netherite"]

    material.forEach(value =>{
        event.remove({id:`astral_mekanism:processing/${value}/dirty_slurry`})
        event.remove({id:`astral_mekanism:processing/${value}/clean_slurry`})
        event.remove({id:`astral_mekanism:processing/${value}/dirty_compressed_slurry`})
        event.remove({id:`astral_mekanism:processing/${value}/clean_compressed_slurry`})
        event.remove({id:`astral_mekanism:processing/${value}/dirty_compressed_slurry_raw`})

        event.remove({id:`astral_mekanism:processing/${value}/clump`})
        event.remove({id:`astral_mekanism:processing/${value}/clump1`})
        event.remove({id:`astral_mekanism:processing/${value}/clump2`})

        event.remove({id:`astral_mekanism:processing/${value}/shard`})
        event.remove({id:`astral_mekanism:processing/${value}/shard1`})
        event.remove({id:`astral_mekanism:processing/${value}/shard2`})

        event.remove({id:`astral_mekanism:processing/${value}/crystal`})
        event.remove({id:`astral_mekanism:processing/${value}/crystal_compressed`})

        event.remove({id:`astral_mekanism:processing/${value}/debris`})

        event.remove({id:`astral_mekanism:processing/${value}/raw`})
        event.remove({id:`astral_mekanism:processing/${value}/dirty_dust`})
        event.remove({id:`astral_mekanism:processing/${value}/dust`})

        event.remove({id:`astral_mekanism:processing/${value}/${value}`})
    })
})