
/* 起站、到站改為 list */
$(function(){
    $('select[name=from_station], select[name=to_station]').each(function(){
      var id = 're_'+$(this).attr('id');
      $(this).clone().attr('list', id).replaceTag('input').wrapInner( "<datalist id='"+id+"'></datalist>").insertAfter($(this));
      $(this).remove();
    })
})

/* 乘車日期改為 datepicker */
$(function(){
    $('select[name=getin_date], select[name=getin_date2]').each(function(){
      var id = 're_'+$(this).attr('id');
      $(this).clone().attr('id', id).replaceTag('input').datepicker({
        numberOfMonths: 2,
        minDate: '0',
        maxDate: '+16D',
        dateFormat: 'yy/mm/dd-dd',
        dayNamesMin: ['日','一','二','三','四','五','六'],
        monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      }).insertAfter($(this));
      $(this).remove();
    })
})
