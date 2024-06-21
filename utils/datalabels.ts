export const datalabelsNull = {
    labels: {
        title: null
    }
}

export const datalabelsLine = {
    align: function (context: any) {
        var index = context.dataIndex;
        var curr = context.dataset.data[index];
        var prev = context.dataset.data[index - 1];
        var next = context.dataset.data[index + 1];
        return prev < curr && next < curr ? 'start' :
            prev > curr && next > curr ? 'start' :
                'end';
    },
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: 'rgba(128, 128, 128, 0.7)',
    borderRadius: 4,
    borderWidth: 1,
    color: function (context: any) {
        var i = context.dataIndex;
        var value = context.dataset.data[i];
        var prev = context.dataset.data[i - 1];
        var diff = prev !== undefined ? value - prev : 0;
            return  diff < 0 ? '#ff0000' :
                    diff > 0 ? '#0000ff' :
                    'gray';
    },
    font: {
        size: 11,
        weight: 'bold',
    },
    offset: 0,
    formatter: function (value: any, context: any) {
        var i = context.dataIndex;
        var prev = context.dataset.data[i - 1];
        var diff = prev !== undefined ? prev - value : 0;
        var glyph = diff < 0 ? '▲' : diff > 0 ? '▼' : '◆';
        return ' ' + Math.round(value);
        // return glyph + ' ' + Math.round(value);
    },
    padding: 1
}    

export const datalabelsLine2 = {
    backgroundColor: function (context: any) {
        return context.dataset.backgroundColor;
    },
    borderRadius: 4,
    color: 'white',
    font: {
        weight: 'bold'
    },
    formatter: Math.round,
    padding: 1
    
}    

export const datalabelsBar = {
        align: function(context: any) {
        var value = context.dataset.data[context.dataIndex];
        return value > 0 ? 'end' : 'start';
        },
        anchor: function(context: any) {
        var value = context.dataset.data[context.dataIndex];
        return value > 0 ? 'end' : 'start';
        //value > 0 ? 'end' : 'start';
        },
        borderRadius: 4,
        // color: 'white',
        backgroundColor: function(context: any) {
        return context.dataset.backgroundColor;
        },
        // formatter: Math.round,
        padding: 1
}    

export const datalabelsPie = {
    backgroundColor: function (context: any) {
        return context.dataset.backgroundColor;
    },
    borderColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    color: 'white',
    display: function (context: any) {
        var dataset = context.dataset;
        var count = dataset.data.length;
        var value = dataset.data[context.dataIndex];
        return value > 3//count * 0.5;
    },
    font: {
        weight: 'bold'
    },
    padding: 6,
    formatter: Math.round
}