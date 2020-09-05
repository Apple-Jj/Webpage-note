var dataset=['快过年了，准备去干点什么呢',
'二月到了，快开学了',
'三月花开了，可以放风筝了']

window.onload=function () {
    var oLi=document.getElementsByTagName('li');
    var oTxt=document.getElementById('tab').getElementsByTagName('div')[0];
    var i=0;
    for(i=0;i<oLi.length;i++)
    {
        oLi[i].index=i;
        oLi[i].onmouseover=function () {
            for(i=0;i<oLi.length;i++)
            {
                oLi[i].className='';
            }
            this.className='active';

            oTxt.innerHTML='<h2>'+(this.index+1)+'月活动</h2><p>'+dataset[this.index]+'</p>' ;
        }
    }
}