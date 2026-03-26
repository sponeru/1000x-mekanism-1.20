ServerEvents.recipes(event => { 
    event.shapeless('6x mek1000:quartz_compose',['ae2:certus_quartz_dust','2x #minecraft:coals','6x #minecraft:sand'])

    event.smelting('4x ae2:silicon','mek1000:quartz_compose')
    event.blasting('4x ae2:silicon','mek1000:quartz_compose')
})