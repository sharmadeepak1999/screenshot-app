$(document).ready(() => {

    $("#capture").on("click", () => {
        let name = Date.parse(new Date())
        html2canvas(document.body, {
            dpi: 192,
            onrendered: function(canvas) {
                $("#sImage").attr('src', canvas.toDataURL("image/png"))
                $("#sImage").attr('alt', `screenshot-${name}.png`)
                $("#sDownload").attr('href', canvas.toDataURL("image/png"))
                $("#sDownload").attr('download', `screenshot-${name}.png`)
                $("#ssModal").modal({
                    keyboard: true
                })
            }
        })
    })
})