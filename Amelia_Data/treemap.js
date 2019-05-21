var data = {
    name: "Pittsburgh",
    children: [
        {   "name": "Larimer", "size": 1, "word": "definitely hope, less, living, deep, formerly, pay, incredible, 393646, years"    },
        {   "name": "Garfield", "size": 1, "word": "better, gang, major, diversifying, fire, never, remain, way, organizing, center"    },
        {   "name": "Bloomfield", "size": 5 , "word": "diy, churches, area, influence, renamed, gap, environs, walk, volunteer, storefronts"  },
        {   "name": "TroyHill", "size": 8 , "word": "went, disputed, avenue, palmas, district, loner, 000, shops, cities, ago"   },
        {   "name": "Carrick", "size": 6, "word": "looming, hours, bastions, age, temporary, township, eventually, modest, vegas, outside"   },
        {   "name": "Bluff", "size": 10, "word": "senior, construction, tends, goes, noisy, 30s, semipro, munhall, whose, aggie"    },
        {   "name": "LincolnPlace", "size": 8, "word": "paths, boulevard, fanatic, exceptions, mossfield, seeing, hot, james, pizza, wicklines"    },
        {   "name": "Manchester", "size": 6, "word": "sells, lebanon, incorporated, store, 172, hoffa, tree, professionals, league, celebrating"    },
        {   "name": "Brooklyn", "size": 8, "word": "part, molly, trend, attempted, cobbler, good, newly, vacant, trolley, trees"    }
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

function getKeyword(d) {
    return d.word;
}

var treemap = d3.layout.treemap()
                       .size([100, 100])
                       .sticky(true);
                    //    .value(function (d) {
                    //        return d.size;
                    //    });

var root = d3.hierarchy(data)
root.sum(function(d) {
    return d.size;
});

treemap(root);

var div = d3.select(".treemap")

var node = div.datum(data)
              .selectAll(".node")
              .data(root.descendants())
              .enter()
              .append("div")
              .attr("class", "node")
              .call(position)
              .style("background", function(d, i) {
                  return colors(i);
              })
              .text(getLabel)

node.append("p").attr("id", "word")
                .text(getKeyword)
                .style("word-spacing", function(d, i) {
                    return "1em";
                })
                // .attr('x', function(d) { return d.x0});


// var node1 = div.datum(data)
//                .selectAll(".node")
//                .data(treemap.nodes)
//                .enter()
//                .append("p")
//                .attr("class", text)
//                .call(position)
//                .text(getKeyword);