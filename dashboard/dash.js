$(document).ready(function() {
    //Init Moment
    moment.locale('id');
    height = $("#rencanaindividu").height();
    $("#rencana").css('height', height);
    $("#rencana").css('margin', 'auto');
    hdr = $(".page-main-header").height();
    $(".page-body").css("margin-top", hdr);
    //SURAT STAKEHOLDER
    $.getJSON("https://spreadsheets.google.com/feeds/list/1jxLmf7UHPZmD3-X8Mtd92ePQjTsc01kD3PFR2q6fdDo/3/public/full?alt=json", function(data) {
        surat_arr = new Array();
        data["feed"]["entry"].forEach(process, surat_arr);


        function process(item, index) {
            single = [
                String(item['gsx$tanggal']['$t']),
                item['gsx$tujuan']['$t'].toString(),
                item['gsx$ttd']['$t'].toString(),
                item['gsx$jumlah']['$t'].toString(),
                item['gsx$siapdata']['$t'].toString(),
                item['gsx$prosesttd']['$t'].toString(),
                item['gsx$kirim']['$t'].toString(),
            ]
            this.push(single);
        }
        $('#data-source-2').dataTable({
            "bSort": false,
            "data": surat_arr,
        });

    });

    //DATA HARIAN LENGKAP
    $.getJSON("https://spreadsheets.google.com/feeds/list/1jxLmf7UHPZmD3-X8Mtd92ePQjTsc01kD3PFR2q6fdDo/4/public/full?alt=json", function(data) {
        detail_report = new Array();
        data["feed"]["entry"].forEach(process, detail_report);

        last = '';

        function process(item, index) {
            if (item['gsx$satu']['$t'].toString() != '') {
                last = item['gsx$satu']['$t'].toString();
            }
            periode = item['gsx$dua']['$t'].toString() + ' ' + last;
            single = [
                periode,
                item['gsx$tiga']['$t'].toString(),
                item['gsx$empat']['$t'].toString(),
                item['gsx$lima']['$t'].toString(),
                item['gsx$enam']['$t'].toString(),
                item['gsx$tujuh']['$t'].toString(),
                item['gsx$delapan']['$t'].toString(),
                item['gsx$sembilan']['$t'].toString(),
                item['gsx$sepuluh']['$t'].toString(),
                item['gsx$sebelas']['$t'].toString(),
                item['gsx$duabelas']['$t'].toString(),
                item['gsx$tigabelas']['$t'].toString(),
                item['gsx$empatbelas']['$t'].toString(),
                item['gsx$limabelas']['$t'].toString(),
                item['gsx$enambelas']['$t'].toString(),
                item['gsx$tujuhbelas']['$t'].toString(),
                item['gsx$delapanbelas']['$t'].toString(),
                item['gsx$sembilanbelas']['$t'].toString(),
                item['gsx$duapuluh']['$t'].toString(),
            ]
            this.push(single);
        }
        $('#data-source-3').dataTable({
            "bSort": false,
            "data": detail_report,
        });

    });

    //DATA BULANAN TABEL ATAS
    $.getJSON("https://spreadsheets.google.com/feeds/list/1jxLmf7UHPZmD3-X8Mtd92ePQjTsc01kD3PFR2q6fdDo/5/public/full?alt=json", function(data) {
        monthly = new Array();
        data["feed"]["entry"].forEach(process, monthly);
        $('#bulanan')


        function process(item, index) {
            if (item['gsx$satu']['$t'].toString() == 'Total') {
                tr = '<tr class="font-weight-bold">';
            } else {
                tr = '<tr>'
            }
            single = [tr,
                '<td>' + item['gsx$satu']['$t'].toString() + '</td>',
                '<td>' + item['gsx$dua']['$t'].toString() + '</td>',
                '<td>' + item['gsx$tiga']['$t'].toString() + '</td>',
                '<td>' + item['gsx$empat']['$t'].toString() + '</td>',
                '<td>' + item['gsx$lima']['$t'].toString() + '</td>',
                '<td>' + item['gsx$enam']['$t'].toString() + '</td>',
                '<td>' + item['gsx$tujuh']['$t'].toString() + '</td>',
                '<td>' + item['gsx$delapan']['$t'].toString() + '</td>',
                '<td>' + item['gsx$sembilan']['$t'].toString() + '</td>',
                '<td>' + item['gsx$sepuluh']['$t'].toString() + '</td>',
                '<td>' + item['gsx$sebelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$duabelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$tigabelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$empatbelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$limabelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$enambelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$tujuhbelas']['$t'].toString() + '</td>',
                '</tr>'
            ]
            this.push(single);
        }

        $('#bulanan').after(monthly);

    });

    //LAST UPDATE
    $.getJSON("https://www.googleapis.com/drive/v3/files/17WzqgY5AGbq4f25LUVO0nz4lKYgEHDMxP6O9DvWH-e0?fields=modifiedTime&key=AIzaSyAk4w7l6y2JoIwzQmyUAmKbI13J0Uizfjc", function(data) {
        last_update = moment(data['modifiedTime']);
        $('#last_update').html(last_update.format("dddd, Do MMMM YYYY - HH:mm:ss"));
    });

    //DATA HARIAN TABEL ATAS
    $.getJSON("https://spreadsheets.google.com/feeds/list/1jxLmf7UHPZmD3-X8Mtd92ePQjTsc01kD3PFR2q6fdDo/6/public/full?alt=json", function(data) {
        daily = new Array();
        data["feed"]["entry"].forEach(process, daily);


        function process(item, index) {
            single = ['<tr>',
                String('<td>' + item['gsx$satu']['$t']) + '</td>',
                '<td>' + item['gsx$dua']['$t'].toString() + '</td>',
                '<td>' + item['gsx$tiga']['$t'].toString() + '</td>',
                '<td>' + item['gsx$empat']['$t'].toString() + '</td>',
                '<td>' + item['gsx$lima']['$t'].toString() + '</td>',
                '<td>' + item['gsx$enam']['$t'].toString() + '</td>',
                '<td>' + item['gsx$tujuh']['$t'].toString() + '</td>',
                '<td>' + item['gsx$delapan']['$t'].toString() + '</td>',
                '<td>' + item['gsx$sembilan']['$t'].toString() + '</td>',
                '<td>' + item['gsx$sepuluh']['$t'].toString() + '</td>',
                '<td>' + item['gsx$sebelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$duabelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$tigabelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$empatbelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$limabelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$enambelas']['$t'].toString() + '</td>',
                '<td>' + item['gsx$tujuhbelas']['$t'].toString() + '</td>',
                '</tr>'
            ]
            this.push(single);
        }
        $('#harian').after(daily);

    });

    report = $('#report-overview').dataTable({
        "bSort": false,
        "paging": false,
        "searching": false,
        "bInfo": false,
    });

    //CHART INDIVIDUAL
    $.getJSON("https://spreadsheets.google.com/feeds/list/1jxLmf7UHPZmD3-X8Mtd92ePQjTsc01kD3PFR2q6fdDo/1/public/full?alt=json", function(data) {
        last_individu = moment(data['feed']['updated']['$t']);
        $('#last_individu').html(last_individu.format("dddd, MMMM Do YYYY, h:mm:ss a"));
        $('#tukar_individu').html(numeral(data['feed']['entry'][0]['gsx$total']['$t']).format("0,0"));
        arrayIndividual = {
            'tukar': [],
            'cancel': [],
            'bulan': [],
            'tanggal': [],
        };
        data['feed']['entry'].forEach(mapToChart, arrayIndividual);

        function mapToChart(item, index) {
            this['tukar'].push(item['gsx$tukar']['$t']);
            this['cancel'].push(item['gsx$cancel']['$t']);
            this['bulan'].push(item['gsx$bulan']['$t'])
            this['tanggal'].push(item['gsx$tanggal']['$t'])
        }

        var newArray = arrayIndividual['tanggal'].map((e, i) => e + ' ' + arrayIndividual['bulan'][i]);

        var optionscolumnchart = {
            series: [{
                name: 'Tukar',
                data: arrayIndividual['tukar']
            }, {
                name: 'Cancel',
                data: arrayIndividual['cancel']
            }, ],
            legend: {
                show: true,
                offsetY: -8
            },
            chart: {
                type: 'bar',
                height: 380
            },
            plotOptions: {
                bar: {
                    radius: 10,
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    dataLabels: {
                        orientation: 'vertical',
                        position: 'bottom'
                    }
                }
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                show: true,
                colors: ['transparent'],
                curve: 'smooth',
                lineCap: 'butt'
            },
            grid: {
                show: false,
                padding: {
                    left: -5,
                    right: -5
                }
            },
            xaxis: {
                type: 'category',
                categories: newArray,
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 120,
                    style: {
                        colors: [],
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                    offsetX: 0,
                    offsetY: 0,
                    format: undefined,
                    formatter: undefined,
                    datetimeUTC: true,
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: "MMM 'yy",
                        day: 'dd MMM',
                        hour: 'HH:mm',
                    },
                },
            },
            yaxis: {
                title: {
                    text: 'bilyet',
                    colors: [CubaAdminConfig.primary, '#F00'],
                }
            },
            fill: {
                colors: [CubaAdminConfig.primary, CubaAdminConfig.secondary, '#51bb25'],
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.1,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },

            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + " bilyet"
                    }
                }
            }
        };



        var chartcolumnchart = new ApexCharts(
            document.querySelector("#chart-widget4"),
            optionscolumnchart
        );
        chartcolumnchart.render();
    });

    //CHART KELOMPOK
    $.getJSON("https://spreadsheets.google.com/feeds/list/1jxLmf7UHPZmD3-X8Mtd92ePQjTsc01kD3PFR2q6fdDo/2/public/full?alt=json", function(data) {
        last_individu = moment(data['feed']['updated']['$t']);
        besok = moment(data['feed']['entry'][0]['gsx$tglbesok']['$t'].toString(), "YYYY-MM-D", true);
        console.log(data['feed']['entry'][0]['gsx$tglbesok']['$t']);
        console.log(besok);
        $('#last_individu').html(last_individu.format("dddd, Do MMMM YYYY, h:mm:ss a"));
        $('#tglbesok').html(besok.format("dddd, MMMM Do YYYY"));
        $('#tukar_kelompok').html(numeral(data['feed']['entry'][0]['gsx$total']['$t']).format('0,0'));
        $('#tukar_akumulasi').html(numeral(data['feed']['entry'][0]['gsx$akumulasi']['$t']).format('0,0'));
        $('#tukar_hariini').html(numeral(data['feed']['entry'][0]['gsx$totalhariini']['$t']).format('0,0'));
        $('#indvbesok').html(numeral(data['feed']['entry'][0]['gsx$indvbesok']['$t']).format('0,0'));
        $('#kolbesok').html(numeral(data['feed']['entry'][0]['gsx$kolbesok']['$t']).format('0,0'));
        $('#klpbesok').html(numeral(data['feed']['entry'][0]['gsx$klpbesok']['$t']).format('0,0'));
        $('#totbesok').html(numeral(data['feed']['entry'][0]['gsx$totalbesok']['$t']).format('0,0'));
        arrayKelompok = {
            'bilyet': [],
            'bulan': [],
            'tanggal': [],
            'kelompok': [],
        }
        data['feed']['entry'].forEach(mapToChart, arrayKelompok);
        var tanggalanKelompok = arrayKelompok['tanggal'].map((e, i) => e + ' ' + arrayKelompok['bulan'][i]);

        function mapToChart(item, index) {
            this['bilyet'].push(item['gsx$bilyet']['$t']);
            this['kelompok'].push(item['gsx$kelompok']['$t']);
            this['bulan'].push(item['gsx$bulan']['$t']);
            this['tanggal'].push(item['gsx$tanggal']['$t']);
        }

        var optionscolumnchart = {
            series: [{
                name: 'Bilyet',
                data: arrayKelompok['bilyet'],
                type: 'column'
            }, {
                name: 'Kelompok',
                data: arrayKelompok['kelompok'],
                type: 'line',
            }],
            legend: {
                show: true,
                offsetY: -8
            },
            chart: {
                type: 'line',
                height: 380,
                stacked: false,
            },
            plotOptions: {
                bar: {
                    radius: 10,
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    dataLabels: {
                        orientation: 'vertical',
                        position: 'bottom'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                orientation: "vertical",
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    colors: ['#FFF', '#000']
                },
                background: {
                    enabled: true,
                    foreColor: '#000000',
                    borderRadius: 2,
                    padding: 4,
                    opacity: 0.9,
                    borderWidth: 1,
                    borderColor: '#fff'
                },
            },
            stroke: {
                show: true,
                colors: ['transparent'],
                curve: 'smooth',
                lineCap: 'butt'
            },
            grid: {
                show: false,
                padding: {
                    left: -5,
                    right: -5
                }
            },
            xaxis: {
                categories: tanggalanKelompok,
                tickPlacement: 'on',
            },
            yaxis: [{
                title: {
                    text: 'Bilyet',
                    offsetY: '25 px',
                },
                labels: {
                    show: true,
                },
                logarithmic: false,
                forceNiceScale: true,
                show: true,
            }, {
                title: {
                    text: 'Kelompok',
                    offsetY: '75 px',
                },
                labels: {
                    show: true,
                },
                style: {
                    color: '#FEB019',
                },
                logarithmic: false,
                forceNiceScale: true,
                show: true,
            }],
            fill: {
                colors: [CubaAdminConfig.primary, CubaAdminConfig.secondary, '#51bb25'],
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.1,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.9,
                    stops: [0, 100]
                },

            },
            axisBorder: {
                offsetY: "25px",
                color: '#FEB019'
            },

            tooltip: {
                y: {
                    formatter: function(val) {
                        return val
                    }
                }
            }
        };



        var chartcolumnchart = new ApexCharts(
            document.querySelector("#chart-widget5"),
            optionscolumnchart
        );
        chartcolumnchart.render();

    });

    //CHART INCREMENTAL INDIVIDUAL
    $.getJSON("https://spreadsheets.google.com/feeds/list/1jxLmf7UHPZmD3-X8Mtd92ePQjTsc01kD3PFR2q6fdDo/7/public/full?alt=json", function(data) {
        arrayIndividual = {
            'tukar': [],
            'cancel': [],
            'bulan': [],
            'tanggal': [],
        };
        data['feed']['entry'].forEach(mapToChart, arrayIndividual);

        function mapToChart(item, index) {
            if (item['gsx$bulan']['$t'] != '' && index == 1) {
                item['gsx$bulan']['$t'] = 'September';
            }
            this['tukar'].push(item['gsx$individu']['$t']);
            this['bulan'].push(item['gsx$bulan']['$t'])
            this['tanggal'].push(item['gsx$tanggal']['$t'])
        }

        var newArray = arrayIndividual['tanggal'].map((e, i) => e + ' ' + arrayIndividual['bulan'][i]);

        var optionscolumnchart = {
            series: [{
                name: 'Incremental',
                data: arrayIndividual['tukar']
            }, ],
            legend: {
                show: true,
                offsetY: 40
            },
            chart: {
                type: 'bar',
                height: 380
            },
            plotOptions: {
                bar: {
                    radius: 10,
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    dataLabels: {
                        orientation: 'horizontal',
                        position: 'top'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                orientation: "horizontal",
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    colors: ['#000']
                },
                offsetY: -20,
                background: {
                    enabled: true,
                    foreColor: '#000',
                    backColor: '#000',
                    borderRadius: 2,
                    padding: 4,
                    opacity: 0.9,
                    borderWidth: 1,
                    borderColor: '#000'
                },
            },

            stroke: {
                show: true,
                colors: ['transparent'],
                curve: 'smooth',
                lineCap: 'butt'
            },
            grid: {
                show: false,
                padding: {
                    left: -5,
                    right: -5
                }
            },
            xaxis: {
                type: 'category',
                categories: newArray,
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 120,
                    style: {
                        colors: [],
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                    offsetX: 0,
                    offsetY: 0,
                    format: undefined,
                    formatter: undefined,
                    datetimeUTC: true,
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: "MMM 'yy",
                        day: 'dd MMM',
                        hour: 'HH:mm',
                    },
                },
            },
            yaxis: {
                title: {
                    text: 'Incremental'
                }
            },
            fill: {
                colors: [CubaAdminConfig.primary, CubaAdminConfig.secondary, '#51bb25'],
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.1,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },

            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + " bilyet"
                    }
                }
            }
        };



        var chartcolumnchart = new ApexCharts(
            document.querySelector("#chart-widget-incremental-individu"),
            optionscolumnchart
        );
        chartcolumnchart.render();
    });

    //CHART INCREMENTAL KELOMPOK
    $.getJSON("https://spreadsheets.google.com/feeds/list/1jxLmf7UHPZmD3-X8Mtd92ePQjTsc01kD3PFR2q6fdDo/8/public/full?alt=json", function(data) {
        arrayKelompok = {
            'bilyet': [],
            'bulan': [],
            'tanggal': [],
            'kelompok': [],
        }
        data['feed']['entry'].forEach(mapToChart, arrayKelompok);
        var tanggalanKelompok = arrayKelompok['tanggal'].map((e, i) => e + ' ' + arrayKelompok['bulan'][i]);

        function mapToChart(item, index) {
            if (item['gsx$bulan']['$t'] != '' && index == 1) {
                this['bulan'].push('Agustus');
            } else {
                this['bulan'].push(item['gsx$bulan']['$t']);
            }
            this['bilyet'].push(item['gsx$kelompok']['$t']);
            this['tanggal'].push(item['gsx$tanggal']['$t']);
        }

        var optionscolumnchart = {
            series: [{
                name: 'Incremental',
                data: arrayKelompok['bilyet'],
                type: 'column'
            }, ],
            legend: {
                show: true
            },
            chart: {
                type: 'bar',
                height: 380,
                stacked: false,
            },
            plotOptions: {
                bar: {
                    radius: 10,
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    dataLabels: {
                        orientation: 'horizontal',
                        position: 'top'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                orientation: "horizontal",
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    colors: ['#000']
                },
                offsetY: -20,
                background: {
                    enabled: true,
                    foreColor: '#000',
                    backColor: '#000',
                    borderRadius: 2,
                    padding: 4,
                    opacity: 0.9,
                    borderWidth: 1,
                    borderColor: '#000'
                },
            },

            stroke: {
                show: true,
                colors: ['transparent'],
                curve: 'smooth',
                lineCap: 'butt'
            },
            grid: {
                show: false,
                padding: {
                    left: -5,
                    right: -5
                }
            },
            xaxis: {
                categories: tanggalanKelompok,
                tickPlacement: 'on',
            },
            yaxis: [{
                title: {
                    text: 'Incremental',
                    offsetY: '25 px',
                },
                labels: {
                    show: true,
                },
                logarithmic: false,
                forceNiceScale: true,
                show: true,
            }, ],
            fill: {
                colors: [CubaAdminConfig.primary, CubaAdminConfig.secondary, '#51bb25'],
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.1,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },
            axisBorder: {
                offsetY: "25px",
            },

            tooltip: {
                y: {
                    formatter: function(val) {
                        return val
                    }
                }
            }
        };



        var chartcolumnchart = new ApexCharts(
            document.querySelector("#chart-widget-incremental-kelompok"),
            optionscolumnchart
        );
        chartcolumnchart.render();

    });



    $(".page-wrapper").attr("class", "page-wrapper horizontal-wrapper ");
    $(".page-body-wrapper").attr("class", "page-body-wrapper horizontal-menu");
    $(".logo-wrapper").find('img').attr('src', 'logobi.png');
    $(".logo-wrapper").find('img').attr('height', '40px');
    localStorage.setItem('page-wrapper', 'horizontal-wrapper');
    localStorage.setItem('page-body-wrapper', 'horizontal-menu');
    $(".main-nav").hide();
});