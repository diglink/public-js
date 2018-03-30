function ResetCookie() 
{ 
 var date = new Date();
 date.setTime(date.getTime() + (5*60*1000));
 $.cookie('kk_kiem_tien', ip_client + '|0|0', { expires: date, path: '/' });
 $('div#cookie').text('Cookie : ' + $.cookie('kk_kiem_tien'));
}

var arr_ads = ["http://123link.co/st?api=c01b59b8b08eb74a8815884f0aab932389cb8820&url=","https://tmearn.com/st?api=870168badab1154f8a457671313c2db90afdfbcf&url=","http://ouo.io/s/FS48DpvC?s=","http://shink.me/s/126226?s="];

$.getJSON("https://api.ipify.org/?format=json", function(e) {
 ip_client = e.ip; 
 /* if url is "http://gd.geobytes.com/GetCityDetails?callback=?" - this 16,384 requests per hour
  ip_client = e.geobytesremoteip;
 */
 var date = new Date();
 date.setTime(date.getTime() + (5*60*1000));
 if($.cookie('kk_kiem_tien') === undefined) $.cookie('kk_kiem_tien', ip_client + '|0|0', { expires: date, path: '/' });
 $('div#cookie').text('Cookie : ' + $.cookie('kk_kiem_tien'));
 
 $('.tn-redirect a').each(function () {
if ($(this).attr('href').indexOf("https%3A%2F%2F")!=-1 || $(this).attr('href').indexOf("http%3A%2F%2F")!=-1 || $(this).attr('href').indexOf("drive.google.com")!=-1 || $(this).attr('href').indexOf("http")!=-1 )   {  
  $(this).attr("data-href",$(this).attr("href")).attr('href','javascript:void(0);').attr('target','_blank');
  $(this).click(function(){
   var datahref = $(this).attr('data-href');
	var datahref = decodeURIComponent(datahref);
   var kk_ip_client = $.cookie('kk_kiem_tien').split('|')[0];
   if (kk_ip_client == ip_client)
   {    
    var stt = parseInt($.cookie('kk_kiem_tien').split('|')[1]);
    var kk_clicks_ads = parseInt($.cookie('kk_kiem_tien').split('|')[2]);
    
    if (kk_clicks_ads < 2) {}
    else 
    {
     if (stt<arr_ads.length - 1) stt++;
     else stt = 0;
     kk_clicks_ads = 0;     
    }
    $.cookie('kk_kiem_tien', ip_client + '|' + stt + '|' + (kk_clicks_ads + 1), { expires: date, path: '/' });
    $('div#cookie').text('Cookie : ' + $.cookie('kk_kiem_tien'));    
    window.open(arr_ads[stt] + datahref,'_blank');
   }
   else $.cookie('kk_kiem_tien', ip_client + '|0|1', { expires: date, path: '/' });
  });  
}
 }); 
});
