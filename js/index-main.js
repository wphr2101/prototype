// JavaScript Document
var appFilterData=["Business","Customer Service","Risk","Attrition"];//filter values for app filter
var modelFilter=[["Model"],["Model","Time to Resolution"],["Model","Number of Days Delinquent","Behavior Score"],["Model","Attrition Score"]];//model values for model filter
var signalFilter=[["Signal"],["Signal","30 days", "7 days"],["Signal","5 days","15 days","30 days"],["Signal","Top 10%"]];//signal values for signal filter
var channelFilter = ["Select Channel","E-mail","Fax","Phone","Postal mail","Referral","Web","Social media"];
var providerFilter = ["Select Provider","Capital One", "Wells Fargo", "Citibank", "Discover","Bank of America","Amex","Barclays","GE Retails","JP Morgan Chase"];
$(function() {
	//populate apps filter through code
filterReset();
$('.main-container').animate({
	opacity:'1'},800);
	
    $( "#content-tab" ).tabs();
   /* $('.ui-tabs-anchor').on('click', function(){
	    console.log('Clicked'+$(document).height());
	    $('footer').animate({
		    top:$(document).height()-30},100);
    });*/
    $( "#data-quality, #stability, #performance, #signal-ov-alert" ).accordion({
	    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },
	    collapsible:true,
	    active:false,
	    heightStyle: "content"
    });
    $('#app-filter').on('change', function(){
	    appIndex = this.selectedIndex;
	    $('#model-filter').empty();
	    $('#signal-filter').empty();
	    for(i=0; i<modelFilter[appIndex].length; i++)
		    $('#model-filter').append('<option>'+modelFilter[appIndex][i]+'</option>');
	    
	     for(i=0; i<signalFilter[appIndex].length; i++)
		    $('#signal-filter').append('<option>'+signalFilter[appIndex][i]+'</option>');
	    
    });
    /* code for high charts starts here */
    //   ##### code for model - stability charts  starts here #######
    $('#stability-sub-menu').on('click',function(){
	    $('#key-statistics').highcharts({
            chart: {
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'Percentage of Billing disputes compliants per total complaints per month',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 0,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
		    enabled:false,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Compliants',
                data: [14,12, 16, 10, 8, 10, 12, 16, 14, 12, 14, 16]
            }]
        });
	  
	   $('#psi-analysis').highcharts({
            chart: {
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'Billing disputes per million cards in circulation per month',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 0,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Amex',
                data: [3,2, 3, 3, 3, 2, 4, 1.5, 3, 4, 5, 6]
            },
		{
                name: 'Citibank',
                data: [5,5.5, 4, 9, 7, 8, 10, 6, 5, 6, 8, 9]
            },
		{
                name: 'Discover',
                data: [2,1.5, 1, 1.75, 2, 3, 4, 3.5, 2.5, 3, 3.5, 3.75]
            }]
        });

	    
    });
    //   ##### code for model - stability charts  ends here #######
    //   ##### code for model - performance charts  starts here #######
    $('#performance-sub-menu').on('click',function(){
	     $('#performance-trend-1').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Credit card protection <br>complaints per million cards in active',
		    margin:40
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Capital One',
                    'Amex',
                    'Citibank',
			  'Discover',
			  'Bank of America'
                ]
            },
            yAxis: {
                min: 0,
		    //max: 120,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'June',
                data: [0.3, 0.1, 0.2, 0.1]
    
            }, {
                name: 'July',
                data: [0.6, 0.25, 0.3, 0.1]
    
            }, {
                name: 'August',
                data: [0.25, 0.1, 0.1, 0.05]
    
            }]
        });
	  $('#performance-trend-2').highcharts({
            chart: {
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'The 3 companies fined by the CFPB',
                x: -20 //center
            },
            subtitle: {
                text: '(in Complaints per million cards)',
                x: -20
            },
            xAxis: {
                categories: ['Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 0,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Amex',
                data: [2,2.5, 2, 2.75,2, 3.5]
            },
		{
                name: 'Capital One',
                data: [6,7, 6.5, 10, 9, 8]
            },
		{
                name: 'Discover',
                data: [1.5,2, 1.5,1, 2, 1.75]
            }]
        });
	    
    });
    //   ##### code for model - performance charts  ends here #######
     /* code for high charts ends here */
     $('#alert-model-app-signal-tab').on('click',function(){
	     $('#alert-signal-filter').show();
	     $('#alert-data-filter').hide();
     });
      $('#alert-raw-data-tab').on('click',function(){
	     $('#alert-signal-filter').hide();
	     $('#alert-data-filter').show();
     });
     $('#alert-overview-tab, #alert-settings-tab').on('click',function(){
	     $('#alert-data-filter, #alert-signal-filter').hide();
     });
     
      $('#raw-data-quality-tab').on('click',function(){
	     $('#alert-data-filter,.sub-filter,#data-subset-filter').show();
	     $('#alert-field-filter').hide();
     });
      $('#raw-data-trend-tab').on('click',function(){
	     $('#alert-data-filter, #alert-field-filter').show();
	     $('#data-subset-filter, .sub-filter').hide();
     });
     $('#ov-data-tab, #api-data-trend-tab, #data-settings-tab').on('click',function(){
	     $('#alert-data-filter, #alert-signal-filter,#data-subset-filter, .sub-filter').hide();
     });
     
 });
 
 
var filterReset = function(){
$('#app-filter, #model-filter, #signal-filter, #channel-filter, #provider-filter').empty();
for(i=0;i<appFilterData.length;i++)
$('#app-filter').append('<option>'+appFilterData[i]+'</option>');
$('#model-filter').append('<option>'+modelFilter[0]+'</option>');
$('#signal-filter').append('<option>'+signalFilter[0]+'</option>');
for(i=0;i<channelFilter.length;i++)
$('#channel-filter').append('<option>'+channelFilter[i]+'</option>');
for(i=0;i<providerFilter.length;i++)
$('#provider-filter').append('<option>'+providerFilter[i]+'</option>');
}

