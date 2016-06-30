

function module()
{

	var container = document.getElementById('container-2');
	var container_div=document.createElement('div');
	$(container_div).addClass('row');
	$(container).css('margin-top','10px');
	$(container).css('margin-left','10px');
	
	var container_div_col=document.createElement('div');
	$(container_div_col).addClass('col-md-12');
	$(container_div_col).css('width','auto');

	//var loading = document.getElementById("loader");
   
	//$(loading).css('display','block');
	//$(loading).css('margin-left','auto');
	//$(loading).css('margin-right','auto');
	//$(loading).css('margin-top','auto');
	//$(loading).css('margin-bottom','auto');
	//$(loading).css('float','none');
    //$(container_div).css('margin-top','5px');
    //$(loading).css('display','none');
    /*var table = document.createElement('table');
    $(table).css('border','collapse');
    $(table).css('border', '1px solid #ddd');

    var table_head=document.createElement('thead');
    var table_head_tr=document.createElement('tr');
       var table_head_id=document.createElement('th');
       $(table_head_id).html('Id');
       $(table_head_id).css('padding','10');
       $(table_head_id).css('border', '1px solid #ddd');
       var table_head_name=document.createElement('th');
       $(table_head_name).html('Name');
       $(table_head_name).css('padding','10');
       $(table_head_name).css('border','1px solid #ddd');
       var table_head_action=document.createElement('th');
       $(table_head_action).html('Action');
       $(table_head_action).css('padding','10');
       $(table_head_action).css('border','1px solid #ddd');
        
       $(table_head_tr).append(table_head_id);
       $(table_head_tr).append(table_head_name);
       $(table_head_tr).append(table_head_action);
       $(table_head).append(table_head_tr);

    	var table_body=document.createElement('tbody');
    	var table_bady_data1=document.createElement('td');
    	$(table_bady_data1).html("1"); 

    	var table_body_data2=document.createElement('td'); 
    	$(table_body_data2).html("hemanth");

    	var table_body_date3=document.createElement('td');
    	var button = document.createElement('button');
    	$(button).attr('value','edit');
    	$(button).html("Edit");
    	$(button).addClass('btn btn-primary btn-sm');
    	$(table_body_date3).append(button);
    	$(button).on('click',function(){
    		 modal_practice();
    	});
    	//$(table_body_date3).html("<button value='edit' name='edit'> Edit</button>");

    	$(table_body).append(table_bady_data1);
    	$(table_body).append(table_body_data2);
    	$(table_body).append(table_body_date3);

    $(table).append(table_head); 
   	$(table).append(table_body)
    $(container_div_col).append(table);*/
	$(container_div).append(container_div_col);
	$(container).append(container_div);

}
/*function modal_practice()
{

	var modal_div=document.createElement('div');
	$(modal_div).addClass('modal');
   	$(modal_div).attr('id','modal');
   	var add_more_close_element = document.createElement('a');
   	$(add_more_close_element).addClass("close");
   	$(add_more_close_element).attr('href','#');
   	$(add_more_close_element).html("&times;");
   	$(add_more_close_element).css('marginTop' ,'-19px');
   	$(add_more_close_element).css('fontSize','26px');
   	$(add_more_close_element).css('marginRight','7px');
   	$(add_more_close_element).attr('id','modal_close');
  	$(add_more_close_element).on('click',function ()
  	{
     	$("#modal").modal().close(); 
   	
   	});
   	var add_more_msg = document.createElement('div');
    $(add_more_msg).css('textAlign','center');
    $(add_more_msg).addClass('row');
    $(add_more_msg).html('hemanth');
    $(add_more_msg).css('marginBottom','16px');
    $(add_more_msg).css('fontWeight','bold');
    $(add_more_msg).css('fontSize','16px');

    var button_div=document.createElement('div');
    $(button_div).addClass('row');
    var save_button_div=document.createElement('div');
    $(save_button_div).addClass('col-md-6 col-sm-6 col-lg-6');
	var save_button=document.createElement('button');
	$(save_button).addClass('btn btn-primary');
	$(save_button).html("save");
    $(save_button_div).append(save_button);
    $(button_div).append(save_button_div);

	$(modal_div).append(add_more_close_element);
	$(modal_div).append(add_more_msg);
	$(modal_div).append(button_div);
	$(modal_div).modal().open();
}*/

window.onload =module();

