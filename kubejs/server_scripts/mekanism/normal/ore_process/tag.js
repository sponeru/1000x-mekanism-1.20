ServerEvents.tags("item",(event) => {
    event.add('forge:ores/quartz', 'kubejs:ore_quartz')
    event.add('forge:ores/quartz', 'kubejs:ore_quartz_deepslate')
})

ServerEvents.tags("fluid",(event)=>{
    event.add('forge:hydrogen', 'mekanism:hydrogen')
    event.add('minecraft:water', 'minecraft:water')
})