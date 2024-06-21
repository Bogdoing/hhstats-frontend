export function getScales(xt: string, yt: string) {
    return {
        y: {
            title: {
                display: true,
                text: xt,
                font: {
                    size: 15
                }                
            },
            // reverse: true
        },
        x: {
            title: {
                display: true,
                text: yt,
                font: {
                    size: 15
                }
            }
        }
    }
}