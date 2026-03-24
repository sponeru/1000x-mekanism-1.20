BlockEvents.rightClicked('mek1000:pdt', event =>{
    if(event.block.getDimension() != "mek1000:void1"){
        let playername = event.player.getName().getString()
        event.player.persistentData.putString("beforedim",event.block.getDimension())
        event.player.persistentData.putDouble("x",event.player.x)
        event.player.persistentData.putDouble("y",event.player.y)
        event.player.persistentData.putDouble("z",event.player.z)

        event.server.runCommandSilent(`execute in mek1000:void1 as ${playername} run tp ${event.block.x} 65 ${event.block.z}`)
        event.server.runCommandSilent(`execute in mek1000:void1 run fill ${event.block.getX()} 64 ${event.block.getZ()} ${event.block.getX()} 64 ${event.block.getZ()} mek1000:pdt_i replace minecraft:air`)
        event.server.runCommandSilent(`execute in mek1000:void1 run fill ${event.block.getX() + 2} 63 ${event.block.getZ() - 2} ${event.block.getX() - 2} 63 ${event.block.getZ() + 2} minecraft:stone replace minecraft:air`)
    }
})

BlockEvents.rightClicked('mek1000:pdt_i', event =>{
    if(event.block.getDimension() == "mek1000:void1"){
        let playername = event.player.getName().getString()

        event.server.runCommandSilent(`execute in ${event.player.persistentData.getString("beforedim")} as ${playername} run tp ${event.player.persistentData.getDouble("x")} ${event.player.persistentData.getDouble("y")} ${event.player.persistentData.getDouble("z")}`)
    }
})