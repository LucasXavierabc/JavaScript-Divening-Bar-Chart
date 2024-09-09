            // criando o gráfico de barra
            var chart = anychart.bar();

            // data
            var winlossData = [
                [65, 17, "2015-16"],
                [61, 21, "2014-15"],
                [55, 27, "2013-14"],
                [37, 45, "2012-13"],
                [25, 41, "2011-12"],
                [25, 57, "2010-11"],
                [25, 57, "2009-10"],
                [17, 65, "2008-09"],
                [25, 57, "2007-08"],
                [40, 42, "2006-07"],
                [37, 45, "2005-06"],
                [48, 34, "2004-05"],
                [26, 56, "2003-04"],
                [32, 50, "2002-03"],
                [24, 58, "2001-02"],
                [26, 56, "2000-01"],
                [15, 67, "1999-00"],
                [19, 31, "1998-99"],
                [21, 61, "1997-98"],
                [26, 56, "1996-97"]
            ];

            // configura uma função para criar as 'linhas' do grafico
            var createSeries = function(columnNumber, name){
                var data = [];
                for (var i = 0; i < winlossData.length; i++){
                    var value = winlossData[i][columnNumber]
                    var center = 0
                    if (name == "Wins"){
                        data.push({
                            x: winlossData[i][2],
                            low: -center,
                            high: -center - value,
                            value: value
                        });
                    }
                }
                var series = chart.rangeBar(data);
                series.name(name);
            };

            // cria as series
            createSeries(0,"Losses")
            createSeries(1,"Wins")

            // seta o título do gráfico
            chart
                .title()
                .enabled(true)
                .text("LA Lakers with Kobe Bryant, wins and losses (1996-2016)");

            // 'liga' a 'legend' do gráfico
            chart
                .legend()
                .enabled(true)

            // cria uma barra empilhada dos vários graficos
            chart.yScale().stackMode("value");

            // seta um 'container id' para o gráfico
            chart.container("container");

            // começa o desenhar do grafico
            chart.draw();