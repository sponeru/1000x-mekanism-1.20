ServerEvents.recipes(event => {
    event.recipes.mekanism.enriching("24x minecraft:redstone","mek1000:softore_redstone")
    event.recipes.mekanism.enriching('6x mekanism:fluorite_gem',"mek1000:softore_fluorite")
    event.recipes.mekanism.enriching('6x ae2:certus_quartz_crystal',"mek1000:softore_certus_quartz")
    event.recipes.mekanism.enriching('6x minecraft:quartz',"mek1000:softore_quartz")

    event.recipes.mekanism.enriching('4x minecraft:coal','mek1000:dirty_dust_coal')
    event.recipes.mekanism.enriching('12x minecraft:lapis_lazuli','mek1000:dirty_dust_lapis')

    event.recipes.mekanism.crushing('6x mekanism:dust_fluorite',"mek1000:softore_fluorite")
    event.recipes.mekanism.crushing('8x ae2:certus_quartz_dust',"mek1000:softore_certus_quartz")
    event.recipes.mekanism.crushing('6x mekanism:dust_quartz',"mek1000:softore_quartz")
})