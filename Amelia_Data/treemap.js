var data = {
    name: "Pittsburgh",
    children: [
        {   "name": "Larimer", "size": 1    },
        {   "name": "Garfield", "size": 1    },
        {   "name": "Bloomfield", "size": 5    },
        {   "name": "TroyHill", "size": 8    },
        {   "name": "Carrick", "size": 6   },
        {   "name": "Bluff", "size": 10    },
        {   "name": "LincolnPlace", "size": 8    },
        {   "name": "Manchester", "size": 6    },
        {   "name": "Brooklyn", "size": 8    }
    ]
};

function colors(n) {
    var _colors = [
        "#3366cc",
        "#dc3912",
        "#ff9900",
        "#109618",
        "#990099",
        "#0099c6",
        "#dd4477",
        "#66aa00",
        "#b82e2e",
        "#316395",
        "#994499",
        "#22aa99",
        "#aaaa11",
        "#6633cc",
        "#e67300",
        "#8b0707",
        "#651067",
        "#329262",
        "#5574a6",
        "#3b3eac"
    ];
    return _colors[n % _colors.length];
}

function position() {
    this.style("left", function(d) {
        return d.x + "%";
    })
    .style("top", function(d) {
        return d.y + "%";
    })
    .style("width", function(d) {
        return d.dx + "%";
    })
    .style("height", function(d) {
        return d.dy + "%";
    });
}

function getLabel(d) {
    return d.name + "'s attendee is " + d.size;
}

var treemap = d3.layout.treemap()
                       .size([100, 100])
                       .sticky(true)
                       .value(function (d) {
                           return d.size;
                       });

var div = d3.select(".treemap")

var node = div.datum(data)
              .selectAll(".node")
              .data(treemap.nodes)
              .enter()
              .append("div")
              .attr("class", "node")
              .call(position)
              .style("background", function(d, i) {
                  return colors(i);
              })
              .text(getLabel);