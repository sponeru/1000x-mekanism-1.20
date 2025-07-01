// HSLからRGBへの変換関数
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

// RGBからHEXへの変換関数
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16).padStart(2, '0');
        return hex;
    }).join('');
}

StartupEvents.registry("item", event => {
    event.create('mek1000:redstone_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#dc143c").color(1, "#ff0000");
    event.create('mek1000:iron_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#d3d3d3").color(1, "#f5f5f5");
    event.create('mek1000:gold_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#ffd700").color(1, "#ffff00");
    event.create('mek1000:diamond_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#4169e1").color(1, "#00ffff");
    event.create('mek1000:lapis_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#0000ff").color(1, "#1e90ff");
    event.create('mek1000:emerald_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#7fff00").color(1, "#00ff00");
    event.create('mek1000:copper_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#ff8c00").color(1, "#daa520");
    event.create('mek1000:amethyst_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#9400d3").color(1, "#ee82ee");
    event.create('mek1000:coal_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#696969").color(1, "#808080");
    event.create('mek1000:tin_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" })
    event.create('mek1000:quartz_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" })
    event.create('mek1000:iridium_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" })
    event.create('mek1000:certusquartz_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#87ceeb").color(1, "#87cefa");
    event.create('mek1000:fluorite_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#f8f8ff").color(1, "#b0c4de");
    event.create('mek1000:lead_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#afeeee").color(1, "#5f9ea0");
    event.create('mek1000:uranium_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#6b8e23").color(1, "#98fb98");
    event.create('mek1000:osmium_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#40e0d0").color(1, "#87ceeb")
    event.create('mek1000:eternal_singularity').textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color((itemstack) => {

        // 現在時刻に基づいて色相を計算し、HEXカラーコードを取得する関数
        const now = new Date();
        const milliseconds = now.getMilliseconds();
        const hue = (milliseconds / 1000) * 360; // 0から360の範囲で色相を計算
        const saturation = 100; // 彩度を100%に設定
        const lightness = 50;  // 明度を50%に設定
        const [r, g, b] = hslToRgb(hue, saturation, lightness);
        return rgbToHex(r, g, b);
    })
})