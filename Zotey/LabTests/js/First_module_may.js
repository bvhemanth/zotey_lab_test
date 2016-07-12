var host_api = "http://localzotey.com";
var response_data_list = [];
var tst_slug_response_list=[];
var tst=0;

function table_module()
{
	 $.ajax({
   url:host_api+"/m-api/admin/get_admin_lab_test_csv_data",
   type:'GET',
   dataType: 'json',
   data:{csv_file_id:27},
   success:function(data)
   {
      var container = document.getElementById('data');
     	var row_top=document.createElement('div');
     	$(row_top).addClass('row');

      var tst_profile_loading = document.getElementById("tst_profile_loader");
      $(tst_profile_loading).css('display','none');
    
      var total_records_div=document.createElement('div');
      $(total_records_div).addClass('col-md-12 col-sm-12 col-lg-12');
    
      var csv_values=document.createElement('div');
      var table= document.createElement('table');
      $(table).attr('width','250%');
      $(table).attr('id','main_table')
      var modWidth = 1400;
      var modHeight= 460;
      $(csv_values).innerWidth(modWidth);
      $(csv_values).innerHeight(modHeight);
      $(csv_values).css('width','auto');
      $(csv_values).css('overflow','scroll');
      $(csv_values).css('align','center');

      var table_head = document.createElement('thead');    
      $(table_head).addClass("table_head");  
      $(table_head).attr('id','table_head');
      
      var table_body_head_row=document.createElement('tr');
      $(table_body_head_row).css("background", "#41A7B3");
      $(table_body_head_row).css("textAlign", "center");

  	  var table_head_test_id=document.createElement('th');
      $(table_head_test_id).html("Serial Number");
      $(table_head_test_id).css('border', '1px solid #ddd');
      $(table_head_test_id).css('padding','10px');
      $(table_head_test_id).css('width','100px');
      $(table_head_test_id).css('cursor','pointer');
      $(table_head_test_id).css('color','white');
      $(table_head_test_id).css('padding','10px');
      $(table_head_test_id).addClass('font-size');

      var table_head_test_name=document.createElement('th');
      $(table_head_test_name).html("Test Name");
      $(table_head_test_name).css('border', '1px solid #ddd');
      $(table_head_test_name).css('padding','10px');
      $(table_head_test_name).css('width','400px');
      $(table_head_test_name).css('color','white');
      $(table_head_test_name).css('padding','10px');
      $(table_head_test_name).addClass('font-size');
          
      var table_head_mrp=document.createElement('th');
      $(table_head_mrp).html("MRP");
      $(table_head_mrp).css('border', '1px solid #ddd');
      $(table_head_mrp).css('cursor','pointer');
      $(table_head_mrp).css('color','white');
      $(table_head_mrp).css('padding','10px');
      $(table_head_mrp).addClass('font-size');

      var table_head_customer_discount=document.createElement('th');
      $(table_head_customer_discount).html("Customer Discount");
      $(table_head_customer_discount).css('border', '1px solid #ddd');
      $(table_head_customer_discount).css('cursor','pointer');
      $(table_head_customer_discount).css('color','white');
      $(table_head_customer_discount).css('padding','10px');
      $(table_head_customer_discount).addClass('font-size');

      var table_head_total_discount=document.createElement('th');
      $(table_head_total_discount).html("Total Discount"); 
      $(table_head_total_discount).css('border', '1px solid #ddd');
      $(table_head_total_discount).css('cursor','pointer');
      $(table_head_total_discount).css('color','white');
      $(table_head_total_discount).addClass('font-size');
      $(table_head_total_discount).css('padding','10px');

      var table_head_final_price=document.createElement('th');
      $(table_head_final_price).html("Final Price"); 
      $(table_head_final_price).css('border', '1px solid #ddd');
      $(table_head_final_price).css('cursor','pointer');
      $(table_head_final_price).css('color','white');
      $(table_head_final_price).css('padding','10px');
      $(table_head_final_price).addClass('font-size');

      var table_head_sellable_individually=document.createElement('th');
      $(table_head_sellable_individually).html("Sellable Individually"); 
      $(table_head_sellable_individually).css('border', '1px solid #ddd');
      $(table_head_sellable_individually).css('cursor','pointer');
      $(table_head_sellable_individually).css('color','white');
      $(table_head_sellable_individually).css('padding','10px');
      $(table_head_sellable_individually).addClass('font-size');

      var table_head_parameters_count=document.createElement('th');
      $(table_head_parameters_count).html("Parameters Count"); 
      $(table_head_parameters_count).css('border', '1px solid #ddd');
      $(table_head_parameters_count).css('cursor','pointer');
      $(table_head_parameters_count).css('color','white');
      $(table_head_parameters_count).css('padding','10px');
      $(table_head_parameters_count).addClass('font-size');

      var table_head_final_price_type=document.createElement('th');
      $(table_head_final_price_type).html("Final Price Type"); 
      $(table_head_final_price_type).css('border', '1px solid #ddd');
      $(table_head_final_price_type).css('cursor','pointer');
      $(table_head_final_price_type).css('color','white');
      $(table_head_final_price_type).css('padding','10px');
      $(table_head_final_price_type).addClass('font-size');
      
      var table_head_department_name=document.createElement('th');
      $(table_head_department_name).html("Department Name"); 
      $(table_head_department_name).css('border', '1px solid #ddd');
      $(table_head_department_name).css('cursor','pointer');
      $(table_head_department_name).css('color','white');
      $(table_head_department_name).css('padding','10px');
      $(table_head_department_name).addClass('font-size');

      var table_head_zotey_commission=document.createElement('th');
      $(table_head_zotey_commission).html("Zotey Commission"); 
      $(table_head_zotey_commission).css('border', '1px solid #ddd');
      $(table_head_zotey_commission).css('cursor','pointer');
      $(table_head_zotey_commission).css('color','white');
      $(table_head_zotey_commission).css('padding','10px');
      $(table_head_zotey_commission).addClass('font-size');

      var table_head_highlight=document.createElement('th');
      $(table_head_highlight).html("Highlight"); 
      $(table_head_highlight).css('border', '1px solid #ddd');
      $(table_head_highlight).css('cursor','pointer');	
      $(table_head_highlight).css('color','white');
      $(table_head_highlight).css('padding','10px');
      $(table_head_highlight).addClass('font-size');

      var table_head_highlight_msg=document.createElement('th');
      $(table_head_highlight_msg).html("Highlight Msg"); 
      $(table_head_highlight_msg).css('border', '1px solid #ddd');
      $(table_head_highlight_msg).css('cursor','pointer');
      $(table_head_highlight_msg).css('color','white');
      $(table_head_highlight_msg).css('padding','10px');
      $(table_head_highlight_msg).css('width','100px');
      $(table_head_highlight_msg).addClass('font-size');

  	  var table_head_mark_test_as=document.createElement('th');
      $(table_head_mark_test_as).html("Status"); 
      $(table_head_mark_test_as).css('border', '1px solid #ddd');
      $(table_head_mark_test_as).css('cursor','pointer');
      $(table_head_mark_test_as).css('color','white');
      $(table_head_mark_test_as).css('padding','10px');
      $(table_head_mark_test_as).addClass('font-size');

      var table_head_suggest_master_list=document.createElement('th');
      $(table_head_suggest_master_list).html("Suggest Master List"); 
      $(table_head_suggest_master_list).css('border', '1px solid #ddd');
      $(table_head_suggest_master_list).css('cursor','pointer');
      $(table_head_suggest_master_list).css('color','white');
      $(table_head_suggest_master_list).css('padding','10px');
      $(table_head_suggest_master_list).addClass('font-size');

      var table_head_master_test_name=document.createElement('th');
      $(table_head_master_test_name).html("Master Name"); 
      $(table_head_master_test_name).css('border', '1px solid #ddd');
      $(table_head_master_test_name).css('cursor','pointer');
      $(table_head_master_test_name).css('color','white');
      $(table_head_master_test_name).css('width','250');
      $(table_head_master_test_name).css('padding','10px');
      $(table_head_master_test_name).addClass('font-size');

      var test_name_edit=document.createElement('th');
      $(test_name_edit).html('Master edit/add');
      $(test_name_edit).css('cursor','pointer');
      $(test_name_edit).css('color','white');
      $(test_name_edit).css('padding','10px');
      $(test_name_edit).addClass('font-size');

      var table_head_master_test_slug=document.createElement('th');
      $(table_head_master_test_slug).html("Master Test Slug"); 
      $(table_head_master_test_slug).css('border', '1px solid #ddd');
      $(table_head_master_test_slug).css('cursor','pointer');
      $(table_head_master_test_slug).css('color','white');
      $(table_head_master_test_slug).css('padding','10px');
      $(table_head_master_test_slug).addClass('font-size');
         
      $(table_body_head_row).append(table_head_test_id); 
      $(table_body_head_row).append(table_head_test_name);
      $(table_body_head_row).append(table_head_master_test_name);
      $(table_body_head_row).append(table_head_mark_test_as);
      $(table_body_head_row).append(test_name_edit);
      $(table_body_head_row).append(table_head_mrp);
      $(table_body_head_row).append(table_head_customer_discount);
      $(table_body_head_row).append(table_head_zotey_commission);
      $(table_body_head_row).append(table_head_total_discount);      
      $(table_body_head_row).append(table_head_final_price);
      $(table_body_head_row).append(table_head_sellable_individually);
      $(table_body_head_row).append(table_head_parameters_count);
      $(table_body_head_row).append(table_head_final_price_type);
      $(table_body_head_row).append(table_head_department_name); 
      $(table_body_head_row).append(table_head_highlight);
      $(table_body_head_row).append(table_head_highlight_msg);
      
      //$(table_body_head_row).append(table_head_suggest_master_list);
      //$(table_body_head_row).append(table_head_master_test_slug);

      $(table_head).append(table_body_head_row);
      $(table).append(table_head);
      
      var table_body = document.createElement('tfoot');
      $(table_body).attr('id','table_body');

      for(var i=0;i<data.csv_data.length;i++)
      {

        	var table_row=document.createElement('tr');
        	$(table_row).addClass('csv_details');
          $(table_row).attr('id',data.csv_data[i].serial_num);
          $(table_row).attr('padding','5px');
        	$(table_row).css('border', '1px solid #ddd');

        	var table_data_test_id=document.createElement('td');
        	$(table_data_test_id).html(data.csv_data[i].serial_num);	
        	$(table_data_test_id).css('font-size','13px');
          $(table_data_test_id).css('padding','10px');
        	$(table_data_test_id).css('border', '1px solid #ddd');
        	$(table_data_test_id).css('textAlign', 'center');

        	var table_data_test_name=document.createElement('td');
        	$(table_data_test_name).html(data.csv_data[i].test_name);
        	$(table_data_test_name).addClass("test_profile_name");

        	$(table_data_test_name).css('font-size','13px');
        	$(table_data_test_name).css('textAlign','left');
        	$(table_data_test_name).css('border', '1px solid #ddd');
        	$(table_data_test_name).css('padding-left','6px');
       
        	var table_data_mrp=document.createElement('td');
        	$(table_data_mrp).html(data.csv_data[i].mrp);	
        	$(table_data_mrp).css('font-size','13px');
        	$(table_data_mrp).css('textAlign','center');
        	$(table_data_mrp).css('border', '1px solid #ddd');
         
       	  var table_data_customer_discount=document.createElement('td');
       	  $(table_data_customer_discount).html(data.csv_data[i].customer_discount);	
        	$(table_data_customer_discount).css('font-size','13px');
       	  $(table_data_customer_discount).css('textAlign','center');
       	  $(table_data_customer_discount).css('border', '1px solid #ddd');
       
       	  var table_data_total_discount=document.createElement('td');
       	  $(table_data_total_discount).html(data.csv_data[i].total_discount);	
        	$(table_data_total_discount).css('font-size','13px');
        	$(table_data_total_discount).css('textAlign','center');
        	$(table_data_total_discount).css('border', '1px solid #ddd');
        
       	  var table_data_final_price=document.createElement('td');
       	  $(table_data_final_price).html(data.csv_data[i].final_price);	
        	$(table_data_final_price).css('font-size','13px');
        	$(table_data_final_price).css('textAlign','center');
        	$(table_data_final_price).css('border', '1px solid #ddd');
        
        	var table_data_sellable_individually=document.createElement('td');
        	$(table_data_sellable_individually).html(data.csv_data[i].sellable_individually);	
        	$(table_data_sellable_individually).css('font-size','13px');
        	$(table_data_sellable_individually).css('textAlign','center');
        	$(table_data_sellable_individually).css('border', '1px solid #ddd');

        	var table_data_parameters_count=document.createElement('td');
        	$(table_data_parameters_count).html(data.csv_data[i].parameters_count);	
        	$(table_data_parameters_count).css('font-size','13px');
        	$(table_data_parameters_count).css('textAlign','center');
        	$(table_data_parameters_count).css('border', '1px solid #ddd');

        	var table_data_final_price_type=document.createElement('td');
        	$(table_data_final_price_type).html(data.csv_data[i].final_price_type);	
        	$(table_data_final_price_type).css('font-size','13px');
        	$(table_data_final_price_type).css('textAlign','center');
        	$(table_data_final_price_type).css('border', '1px solid #ddd');

     	  	var table_data_department_name=document.createElement('td');
        	$(table_data_department_name).html(data.csv_data[i].department_name);	
        	$(table_data_department_name).css('font-size','13px');
        	$(table_data_department_name).css('textAlign','center');
        	$(table_data_department_name).css('border', '1px solid #ddd');
             
        	var table_data_zotey_commission=document.createElement('td');
        	$(table_data_zotey_commission).html(data.csv_data[i].zotey_commission);	
        	$(table_data_zotey_commission).css('font-size','13px');
        	$(table_data_zotey_commission).css('textAlign','center');
        	$(table_data_zotey_commission).css('border', '1px solid #ddd');

        	var table_data_highlight=document.createElement('td');
        	$(table_data_highlight).html(data.csv_data[i].highlight);	
        	$(table_data_highlight).css('font-size','13px');
        	$(table_data_highlight).css('textAlign','center');
        	$(table_data_highlight).css('border', '1px solid #ddd');

        	var table_data_highlight_msg=document.createElement('td');  	
        	if(data.csv_data[i].highlight_msg !='')
          {
        		
              	var table_data_highlight_msg_a = document.createElement('a');
              	$(table_data_highlight_msg_a).html('View Message');
        		    $(table_data_highlight_msg_a).attr('data-highlight-message',data.csv_data[i].highlight_msg);
              	$(table_data_highlight_msg).append(table_data_highlight_msg_a);
              	$(table_data_highlight_msg_a).css('cursor','pointer');
              	$(table_data_highlight_msg_a).attr('id','view_message_id');

              	$(table_data_highlight_msg_a).on('click',view_message);
          }
         else
          {
        		    $(table_data_highlight_msg_a).html('');
          }

       	 	$(table_data_highlight_msg).attr('highlight-messsage',data.csv_data[i].highlight_msg);		
        	$(table_data_highlight_msg).css('font-size','13px');
        	$(table_data_highlight_msg).css('textAlign','center');
        	$(table_data_highlight_msg).css('border', '1px solid #ddd');  	

        	var table_data_mark_test_as=document.createElement('td');

          var table_data_mark_as_edit_a=document.createElement('a');
        	$(table_data_mark_as_edit_a).html(data.csv_data[i].mark_test_as);	

          $(table_data_mark_as_edit_a).attr('data-lab-file-id',data.csv_file_id);
          $(table_data_mark_as_edit_a).attr('data-lab-test-serial-number',data.csv_data[i].serial_num); 
          $(table_data_mark_as_edit_a).attr('data-mark-test-as',data.csv_data[i].mark_test_as);
          $(table_data_mark_as_edit_a).attr('data-test-name',data.csv_data[i].test_name);

          $(table_data_mark_test_as).append(table_data_mark_as_edit_a); 

          $(table_data_mark_as_edit_a).css('cursor','pointer');
                    
          $(table_data_mark_as_edit_a).click(function()
          {
              $('table tfoot tr').removeClass('mouseclick');
              $(' table tfoot tr').addClass('csv_details');
          });

          if(data.csv_data[i].mark_test_as == 'duplicate_test')
          {
            $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);            
            $(table_data_mark_as_edit_a).css('color','blue');
          }
          else if(data.csv_data[i].mark_test_as=='map_error_master_test')
          {
            $(table_data_mark_as_edit_a).css('color','red');   
            $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);     
          }
          else if(data.csv_data[i].mark_test_as=='map_error_department')
          {
            $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);  
            $(table_data_mark_as_edit_a).css('color','red');      
          }
          else if(data.csv_data[i].mark_test_as=='map_to_lab')
          {
            $(table_data_mark_as_edit_a).css('color','black');      
          }
          else
          {
             $(table_data_mark_as_edit_a).css('color','black'); 
          }

        	$(table_data_mark_test_as).css('font-size','13px');
        	$(table_data_mark_test_as).css('textAlign','center');
        	$(table_data_mark_test_as).css('border', '1px solid #ddd');

        	var table_data_suggest_master_list=document.createElement('td');
        	$(table_data_suggest_master_list).html(data.csv_data[i].suggest_master_list);	
        	$(table_data_suggest_master_list).css('font-size','13px');
        	$(table_data_suggest_master_list).css('textAlign','center');
        	$(table_data_suggest_master_list).css('border', '1px solid #ddd');
      
        	var table_data_master_test_name=document.createElement('td');
          $(table_data_master_test_name).html(data.csv_data[i].master_test_name); 
          $(table_data_master_test_name).css('font-size','13px');
          $(table_data_master_test_name).css('textAlign','center');
          $(table_data_master_test_name).css('border', '1px solid #ddd');

          var table_data_master_test_name_for_edit=document.createElement('td');
          $(table_data_master_test_name_for_edit).css('border', '1px solid #ddd');
          if(data.csv_data[i].master_test_name != '')
          {
                var table_data_master_test_name_edit_a=document.createElement('a');
                $(table_data_master_test_name_edit_a).html('Edit');
                $(table_data_master_test_name_edit_a).attr('data-lab-file-id',data.csv_file_id);
                $(table_data_master_test_name_edit_a).attr('data-lab-test-name',data.csv_data[i].test_name);
                $(table_data_master_test_name_edit_a).attr('data-lab-test-serial-number',data.csv_data[i].serial_num); 
                $(table_data_master_test_name_edit_a).attr('data-lab-test-master-test-slug',data.csv_data[i].master_test_slug); 
                $(table_data_master_test_name_edit_a).css('cursor','pointer');
                $(table_data_master_test_name_for_edit).css('textAlign','center');
                $(table_data_master_test_name_edit_a).on('click',edit_master_test_name);
                $(table_data_master_test_name_for_edit).append(table_data_master_test_name_edit_a);  
          }
          else
          {
                var table_data_master_test_name_edit_a=document.createElement('a');
                $(table_data_master_test_name_edit_a).html('Add');
                $(table_data_master_test_name_edit_a).css('textAlign','center');
                $(table_data_master_test_name_edit_a).attr('data-lab-file-id',data.csv_file_id);
                $(table_data_master_test_name_edit_a).attr('data-lab-test-name',data.csv_data[i].test_name);
                $(table_data_master_test_name_edit_a).attr('data-lab-test-serial-number',data.csv_data[i].serial_num); 
                $(table_data_master_test_name_edit_a).attr('data-lab-test-master-test-slug',data.csv_data[i].master_test_slug);      
                $(table_data_master_test_name_edit_a).css('cursor','pointer');
                $(table_data_master_test_name_for_edit).css('textAlign','center')
                $(table_data_master_test_name_edit_a).on('click',edit_master_test_name);
                $(table_data_master_test_name_for_edit).append(table_data_master_test_name_edit_a);
          }
        	
          $(table_data_master_test_name_edit_a).click(function()
          {
                $('table tfoot tr').removeClass('mouseclick');
                $('tfoot tr').addClass('csv_details');
          });
        	var table_data_master_test_slug=document.createElement('td');
        	$(table_data_master_test_slug).html(data.csv_data[i].master_test_slug);	
        	$(table_data_master_test_slug).css('font-size','13px');
        	$(table_data_master_test_slug).css('textAlign','center');
        	$(table_data_master_test_slug).css('border', '1px solid #ddd');

        	$(table_row).append(table_data_test_id);
        	$(table_row).append(table_data_test_name);
          $(table_row).append(table_data_master_test_name);
          $(table_row).append(table_data_mark_test_as);
          $(table_row).append(table_data_master_test_name_for_edit);
        	$(table_row).append(table_data_mrp);
        	$(table_row).append(table_data_customer_discount);
          $(table_row).append(table_data_zotey_commission);
        	$(table_row).append(table_data_total_discount);      
        	$(table_row).append(table_data_final_price);
        	$(table_row).append(table_data_sellable_individually);
        	$(table_row).append(table_data_parameters_count);
        	$(table_row).append(table_data_final_price_type);
        	$(table_row).append(table_data_department_name);
        	$(table_row).append(table_data_highlight);
        	$(table_row).append(table_data_highlight_msg);
        	//$(table_row).append(table_data_suggest_master_list);
        	//$(table_row).append(table_data_master_test_slug);

        	$(table_body).append(table_row);
        	$(table).append(table_body);
      } 
  	  $(csv_values).append(table);
  	  $(total_records_div).append(csv_values);
  	  $(row_top).append(total_records_div);
  	  $(container).append(row_top);   
    }
});

}
function view_message()
{
    var highlight_message= $(this).data('highlight-message');
    var add_more_page = document.createElement('div');
    $(add_more_page).css("marginTop","100px");
    $(add_more_page).addClass("modal");
    $(add_more_page).attr('id','modal');
    $(add_more_page).css('backgroundColor','#fff');
    $(add_more_page).css('position','relative');
    $(add_more_page).css('paddingRight','0px');
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
    $(add_more_msg).html('Highlight Message');
    $(add_more_msg).css('marginBottom','16px');
    $(add_more_msg).css('fontWeight','bold');
    $(add_more_msg).css('fontSize','16px');
    var add_btn_row = document.createElement('div');
    $(add_btn_row).addClass('row');
    $(add_btn_row).html(highlight_message);
    $(add_btn_row).css('textAlign','center');
    $(add_more_page).append(add_more_close_element);
    $(add_more_page).append(add_more_msg);
    $(add_more_page).append(add_btn_row);
    $(add_more_page).modal().open();

} 
function edit_master_test_name()
{
    var serial_number=$(this).data('lab-test-serial-number');
    var lab_test_name= $(this).data('lab-test-name');
    var csv_file_id=$(this).data('lab-file-id');
    var master_test_slug=$(this).data('lab-test-master-test-slug');
    var test_id=$(this).data('test-id');

    var add_more_page = document.createElement('div');
    $(add_more_page).css("marginTop","100px");
    $(add_more_page).addClass("modal");
    $(add_more_page).attr('id','modal');
    $(add_more_page).css('backgroundColor','#fff');
    $(add_more_page).css('position','relative');
    $(add_more_page).css('paddingRight','0px');
    $(add_more_page).css('height','300px');
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
    $(add_more_msg).html('Choose Master Test');
    $(add_more_msg).css('marginBottom','16px');
    $(add_more_msg).css('fontWeight','bold');
    $(add_more_msg).css('fontSize','16px');
    var add_btn_row = document.createElement('div');
    $(add_btn_row).addClass('row');
    if(lab_test_name !=0)
    {
          var modal_testname_div=document.createElement('div');
          var modal_testname_div_left=document.createElement('div');
          $(modal_testname_div_left).addClass('col-md-3 col-lg-3 col-sm-3'); 
          var label_for_div_title=document.createElement('label');

          $(label_for_div_title).html("Lab Test Name"); 
          $(label_for_div_title).addClass('control-label');
          $(modal_testname_div_left).append(label_for_div_title);

          var modal_testname_div_value=document.createElement('div');
          $(modal_testname_div_value).addClass('col-md-7 col-lg-7 col-sm-7')
          $(modal_testname_div_value).html(lab_test_name);

          $(modal_testname_div).append(modal_testname_div_left);
          $(modal_testname_div).append(modal_testname_div_value);
          $(add_btn_row).append(modal_testname_div);
    }
    else
    {
          $(add_btn_row).html("");
    }
    $(add_btn_row).css('textAlign','center');

    var  last_row=document.createElement('div');
    $(last_row).addClass('row');
    $(last_row).css('textAlign','center');
    $(last_row).css('margin-top','20px');
    var last_row_left_col=document.createElement('div');
    $(last_row_left_col).addClass('col-md-3 col-lg-3 col-sm-3');

    var label_for_Test_Name=document.createElement('label');
    $(label_for_Test_Name).html('Select Master');
    $(label_for_Test_Name).addClass('control-label');
    $(last_row_left_col).append(label_for_Test_Name);
   
    var last_row_center_col=document.createElement('div');
    $(last_row_center_col).addClass('col-md-7 col-lg-7 col-sm-7');

    var list_item_widget_1=document.createElement('div');
    $(list_item_widget_1).attr('id','list_item_widget_1');
    var autocomplete_input=document.createElement('input');
    $(autocomplete_input).addClass('form-control');
    $(autocomplete_input).attr('name','test-name');
    $(autocomplete_input).attr('id','search_test_box_1');
    $(autocomplete_input).on('keypress',function()
    {
        autocomplete_attachment(1);
     });
    
    $(last_row_center_col).append(autocomplete_input);
    
    var last_row_right_col=document.createElement('div');
    $(last_row_right_col).addClass('col-md-2 col-sm-2 col-lg-2');

    var save_button=document.createElement('button'); 
    $(save_button).html('Save');
    $(save_button).addClass('btn btn-primary');
    $(save_button).attr('Id',data.csv_file_id);
  
   //after done with editng to save that data
    $(save_button).on('click',function()
    {
          var  test_name=  lab_test_name;
          var selected_data=$("#search_test_box_1").val();
          to_change_the_data(csv_file_id,serial_number,selected_data,master_test_slug);
          $("#modal").modal().close(); 
    });

    $(last_row_right_col).append(save_button);         
    var single_button_row_save= document.createElement('div');
    $(single_button_row_save).addClass('row');
     
    var single_button_row_left=document.createElement('div');
    $(single_button_row_left).addClass('col-md-10 col-lg-10 col-sm-10');
       
    $(single_button_row_save).append(single_button_row_left);

    $(last_row).append(last_row_left_col);
    $(last_row).append(last_row_center_col);
    $(last_row).append(last_row_right_col);
    $(add_more_page).append(add_more_close_element);
    $(add_more_page).append(add_more_msg);
    $(add_more_page).append(add_btn_row);
    $(add_more_page).append(last_row);
    $(add_more_page).append(single_button_row_save);
  
    $(add_more_page).modal().open();
}

function autocomplete_attachment_only_once(box_serial_number)
{  
   $.ajax({
   url:host_api+"/m-api/admin/internal_booking_search_form_autocomplete_data",
   type:'GET',
   dataType: 'json',
   success:function(data)
   {
      for(var tst=0;tst<data.testList.length;tst++)
      {
        tst_slug_response_list.push(data.testList[tst].testSlug);  
        response_data_list.push(data.testList[tst].testName);                
      } 
    }
    });
} // autocomplete function ending  

function autocomplete_attachment(number)
{
  $( "#search_test_box_1" ).autocomplete
  ({
     source:function(request, response) 
        {
            var arryResponse = [];
            var arrySplitRequest = request.term.split(" "); 
            for( i = 0; i < response_data_list.length; i++ )
            {
                 var intCount = 0;
                 for( j = 0; j < arrySplitRequest.length; j++ ) 
                 {
                      regexp = new RegExp(arrySplitRequest[j]);
                      var test = response_data_list[i].toLowerCase().match(regexp);
                      if( test ) 
                      {  
                          intCount++;
                      } 
                      else if( !test ) 
                      {
                          intCount = arrySplitRequest.length + 1;                        
                      }
           
                      if ( intCount == arrySplitRequest.length )
                     {                        
                          arryResponse.push( response_data_list[i]); 
                     }
               };
            }    
                response(arryResponse);                      
            },minLength:2
                
        }).data('ui-autocomplete')._renderItem = function( ul, item ) {
          
            var srchTerm = this.term.trim().split(/\s+/).join ('|');
            var small=srchTerm.toLowerCase();
            var strNewLabel = item.label;
           
                regexp = new RegExp ('(' + small + ')', "ig");
                var strNewLabel = strNewLabel.replace(regexp,"<span style=''>$1</span>");   
               return $( "<li></li>" )
              .data( "item.autocomplete", item )
              .append( "<p>" + strNewLabel + "</p>" )
              .appendTo( ul );
       }
}

function to_change_the_data(id,serial_number,selected_data,master_test_slug)
{ 

    var a = response_data_list.indexOf(selected_data);
    var slug_value=tst_slug_response_list[a];
   
    $.ajax({
    url:host_api+"/m-api/admin/set_master_test_for_lab_test",
    type:'GET',
    data:{csv_file_id:id,serial_num:serial_number,lab_test_slug:"blood",master_test_slug:slug_value },
    dataType: 'json',
    success:function(data)
    {

      var csv_file_id=data.csv_file_id;

      var test_name=data.current_record.test_name;
      var mark_test_as=data.current_record.mark_test_as;
      var master_test_name=data.current_record.master_test_name;
      var mrp=data.current_record.mrp;
      var customer_discount=data.current_record.customer_discount;
      var total_discount=data.current_record.total_discount;
      var final_price=data.current_record.final_price;
      var sellable_individually=data.current_record.sellable_individually;
      var parameters_count=data.current_record.parameters_count;
      var final_price_type=data.current_record.final_price_type;
      var department_name=data.current_record.department_name;
      var zotey_commission=data.current_record.zotey_commission;
      var highlight=data.current_record.highlight;
      var highlight_msg=data.current_record.highlight_msg;
      var suggest_master_list=data.current_record.suggest_master_list;
      var master_test_slug=data.current_record.master_test_slug;
      var serial_num=data.current_record.serial_num;

      update_row(csv_file_id,test_name,mark_test_as,master_test_name,mrp,
        customer_discount,total_discount,final_price,sellable_individually,parameters_count,
        final_price_type,department_name,zotey_commission,highlight,highlight_msg,suggest_master_list,master_test_slug,serial_num,selected_data);
     
    }
   }); 
}

//function for 
function update_row(csv_file_id,test_name,mark_test_as,master_test_name,mrp,
      customer_discount,total_discount,final_price,sellable_individually,parameters_count,
      final_price_type,department_name,zotey_commission,highlight,highlight_msg,suggest_master_list,master_test_slug,serial_num,selected_data)
{
               
        $('table tr:nth-child('+serial_num+')').empty();
        $('tfoot tr:nth-child('+serial_num+')').removeClass('csv_details');
        $('tfoot tr:nth-child('+serial_num+')').addClass('mouseclick');
        
        var table_data_test_id=document.createElement('td');
        $(table_data_test_id).html(serial_num); 
        $(table_data_test_id).css('font-size','13px');
        $(table_data_test_id).css('padding','10px');
        $(table_data_test_id).css('border', '1px solid #ddd');
        $(table_data_test_id).css('textAlign', 'center');

        var table_data_test_name=document.createElement('td');
        $(table_data_test_name).html(test_name);
        $(table_data_test_name).addClass("test_profile_name");

        $(table_data_test_name).css('font-size','13px');
        $(table_data_test_name).css('textAlign','left');
        $(table_data_test_name).css('border', '1px solid #ddd');
        $(table_data_test_name).css('padding-left','6px');
     
        var table_data_mrp=document.createElement('td');
        $(table_data_mrp).html(mrp); 
        $(table_data_mrp).css('font-size','13px');
        $(table_data_mrp).css('textAlign','center');
        $(table_data_mrp).css('border', '1px solid #ddd');
       
        var table_data_customer_discount=document.createElement('td');
        $(table_data_customer_discount).html(customer_discount); 
        $(table_data_customer_discount).css('font-size','13px');
        $(table_data_customer_discount).css('textAlign','center');
        $(table_data_customer_discount).css('border', '1px solid #ddd');
     
        var table_data_total_discount=document.createElement('td');
        $(table_data_total_discount).html(total_discount); 
        $(table_data_total_discount).css('font-size','13px');
        $(table_data_total_discount).css('textAlign','center');
        $(table_data_total_discount).css('border', '1px solid #ddd');
      
        var table_data_final_price=document.createElement('td');
        $(table_data_final_price).html(final_price); 
        $(table_data_final_price).css('font-size','13px');
        $(table_data_final_price).css('textAlign','center');
        $(table_data_final_price).css('border', '1px solid #ddd');
           
        var table_data_sellable_individually=document.createElement('td');
        $(table_data_sellable_individually).html(sellable_individually); 
        $(table_data_sellable_individually).css('font-size','13px');
        $(table_data_sellable_individually).css('textAlign','center');
        $(table_data_sellable_individually).css('border', '1px solid #ddd');

        var table_data_parameters_count=document.createElement('td');
        $(table_data_parameters_count).html(parameters_count); 
        $(table_data_parameters_count).css('font-size','13px');
        $(table_data_parameters_count).css('textAlign','center');
        $(table_data_parameters_count).css('border', '1px solid #ddd');

        var table_data_final_price_type=document.createElement('td');
        $(table_data_final_price_type).html(final_price_type); 
        $(table_data_final_price_type).css('font-size','13px');
        $(table_data_final_price_type).css('textAlign','center');
        $(table_data_final_price_type).css('border', '1px solid #ddd');

        var table_data_department_name=document.createElement('td');
        $(table_data_department_name).html(department_name); 
        $(table_data_department_name).css('font-size','13px');
        $(table_data_department_name).css('textAlign','center');
        $(table_data_department_name).css('border', '1px solid #ddd');
           
        var table_data_zotey_commission=document.createElement('td');
        $(table_data_zotey_commission).html(zotey_commission); 
        $(table_data_zotey_commission).css('font-size','13px');
        $(table_data_zotey_commission).css('textAlign','center');
        $(table_data_zotey_commission).css('border', '1px solid #ddd');

        var table_data_highlight=document.createElement('td');
        $(table_data_highlight).html(highlight); 
        $(table_data_highlight).css('font-size','13px');
        $(table_data_highlight).css('textAlign','center');
        $(table_data_highlight).css('border', '1px solid #ddd');

        var table_data_highlight_msg=document.createElement('td');    
        if(highlight_msg !='')
        {
              var table_data_highlight_msg_a = document.createElement('a');
              $(table_data_highlight_msg_a).html('View Message');
              $(table_data_highlight_msg_a).attr('data-highlight-message',highlight_msg);
              $(table_data_highlight_msg).append(table_data_highlight_msg_a);
              $(table_data_highlight_msg_a).css('cursor','pointer');
              $(table_data_highlight_msg_a).attr('id','view_message_id');
              
              $(table_data_highlight_msg_a).on('click',view_message);
        }
        else
        {
             $(table_data_highlight_msg_a).html('');
        }

        $(table_data_highlight_msg).attr('highlight-messsage',highlight_msg);    
        $(table_data_highlight_msg).css('font-size','13px');
        $(table_data_highlight_msg).css('textAlign','center');
        $(table_data_highlight_msg).css('border', '1px solid #ddd');    

        var table_data_mark_test_as=document.createElement('td');

        var table_data_mark_as_edit_a=document.createElement('a');
        $(table_data_mark_as_edit_a).html(mark_test_as); 

        $(table_data_mark_as_edit_a).attr('data-lab-file-id',csv_file_id);
        $(table_data_mark_as_edit_a).attr('data-lab-test-serial-number',serial_num); 
        $(table_data_mark_as_edit_a).attr('data-mark-test-as',mark_test_as);
        $(table_data_mark_as_edit_a).attr('data-test-name',test_name); 
        $(table_data_mark_test_as).append(table_data_mark_as_edit_a); 

        $(table_data_mark_as_edit_a).css('cursor','pointer');
               
        $(table_data_mark_as_edit_a).click(function()
        {
              $('table tfoot tr').removeClass('mouseclick');
              $('tfoot tr').addClass('csv_details');
        });
      
        if(mark_test_as == 'duplicate_test')
        {
              $(table_data_mark_as_edit_a).css('color','blue');
              $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);  
        }
        else if(mark_test_as=='map_error_master_test')
        {
              $(table_data_mark_as_edit_a).css('color','red');
              $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);        
        }
        else if(mark_test_as=='map_error_department')
        {
              $(table_data_mark_as_edit_a).css('color','red');  
              $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);      
        }
        else if(mark_test_as=='map_to_lab')
        {
              $(table_data_mark_as_edit_a).css('color','black');      
        }
        else
        {
              $(table_data_mark_as_edit_a).css('color','black'); 
        }

        $(table_data_mark_test_as).css('font-size','13px');
        $(table_data_mark_test_as).css('textAlign','center');
        $(table_data_mark_test_as).css('border', '1px solid #ddd');

        var table_data_suggest_master_list=document.createElement('td');
        $(table_data_suggest_master_list).html(suggest_master_list); 
        $(table_data_suggest_master_list).css('font-size','13px');
        $(table_data_suggest_master_list).css('textAlign','center');
        $(table_data_suggest_master_list).css('border', '1px solid #ddd');
    
        var table_data_master_test_name=document.createElement('td');
        $(table_data_master_test_name).html(selected_data); 
        $(table_data_master_test_name).css('font-size','13px');
        $(table_data_master_test_name).css('textAlign','center');
        $(table_data_master_test_name).css('border', '1px solid #ddd');

        var table_data_master_test_name_for_edit=document.createElement('td');
        $(table_data_master_test_name_for_edit).css('border', '1px solid #ddd');
        if(master_test_name != '')
        {
              var table_data_master_test_name_edit_a=document.createElement('a');
              $(table_data_master_test_name_edit_a).html('Edit');
              $(table_data_master_test_name_edit_a).attr('data-lab-file-id',csv_file_id);
              $(table_data_master_test_name_edit_a).attr('data-lab-test-name',test_name);
              $(table_data_master_test_name_edit_a).attr('data-lab-test-serial-number',serial_num); 
              $(table_data_master_test_name_edit_a).attr('data-lab-test-master-test-slug',master_test_slug); 
              $(table_data_master_test_name_edit_a).css('cursor','pointer');
              $(table_data_master_test_name_for_edit).css('textAlign','center');
              $(table_data_master_test_name_edit_a).on('click',edit_master_test_name);
              $(table_data_master_test_name_for_edit).append(table_data_master_test_name_edit_a);  
        }
        else
        {
              var table_data_master_test_name_edit_a=document.createElement('a');
              $(table_data_master_test_name_edit_a).html('Add');
              $(table_data_master_test_name_edit_a).css('textAlign','center');
              $(table_data_master_test_name_edit_a).attr('data-lab-file-id',csv_file_id);
              $(table_data_master_test_name_edit_a).attr('data-lab-test-name',test_name);
              $(table_data_master_test_name_edit_a).attr('data-lab-test-serial-number',serial_num); 
              $(table_data_master_test_name_edit_a).attr('data-lab-test-master-test-slug',master_test_slug)
              $(table_data_master_test_name_edit_a).css('cursor','pointer');
              $(table_data_master_test_name_for_edit).css('textAlign','center')
              $(table_data_master_test_name_edit_a).on('click',edit_master_test_name);
              $(table_data_master_test_name_for_edit).append(table_data_master_test_name_edit_a);
        }

        $(table_data_master_test_name_edit_a).click(function()
        {
              $('table tfoot tr').removeClass('mouseclick');
              $('tfoot tr').addClass('csv_details');
        });

        var table_data_master_test_slug=document.createElement('td');
        $(table_data_master_test_slug).html(master_test_slug); 
        $(table_data_master_test_slug).css('font-size','13px');
        $(table_data_master_test_slug).css('textAlign','center');
        $(table_data_master_test_slug).css('border', '1px solid #ddd'); 
        
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_test_id);   
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_test_name);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_master_test_name);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_mark_test_as);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_master_test_name_for_edit);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_mrp);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_customer_discount);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_zotey_commission);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_total_discount);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_final_price);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_sellable_individually);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_parameters_count);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_final_price_type);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_department_name);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_highlight);
        $('table tfoot tr:nth-child('+serial_num+')').append(table_data_highlight_msg);
        //$('table tr:nth-child('+serial_num+')').append(table_data_suggest_master_list);
        //$('table tr:nth-child('+serial_num+')').append(table_data_master_test_slug);
      
           // $('table').append('table tbody tr:nth-child('+serial_num+')');
        if(serial_num==1)
       {

              var table_head = document.createElement('thead');    
              $(table_head).addClass("table_head");  
              $(table_head).attr('id','table_head');
              
              var table_body_head_row=document.createElement('tr');
              $(table_body_head_row).css("background", "#41A7B3");
              $(table_body_head_row).css("textAlign", "center");

              var table_head_test_id=document.createElement('th');
              $(table_head_test_id).html("Serial Number");
              $(table_head_test_id).css('border', '1px solid #ddd');
              $(table_head_test_id).css('padding','10px');
              $(table_head_test_id).css('width','100px');
              $(table_head_test_id).css('cursor','pointer');
              $(table_head_test_id).css('color','white');
              $(table_head_test_id).css('padding','10px');
              $(table_head_test_id).addClass('font-size');

              var table_head_test_name=document.createElement('th');
              $(table_head_test_name).html("Test Name");
              $(table_head_test_name).css('border', '1px solid #ddd');
              $(table_head_test_name).css('padding','10px');
              $(table_head_test_name).css('cursor','pointer');
              $(table_head_test_name).css('width','400px');
              $(table_head_test_name).css('color','white');
              $(table_head_test_name).css('padding','10px');
              $(table_head_test_name).addClass('font-size');
                  
              var table_head_mrp=document.createElement('th');
              $(table_head_mrp).html("MRP");
              $(table_head_mrp).css('border', '1px solid #ddd');
              $(table_head_mrp).css('cursor','pointer');
              $(table_head_mrp).css('color','white');
              $(table_head_mrp).css('padding','10px');
              $(table_head_mrp).addClass('font-size');

              var table_head_customer_discount=document.createElement('th');
              $(table_head_customer_discount).html("Customer Discount");
              $(table_head_customer_discount).css('border', '1px solid #ddd');
              $(table_head_customer_discount).css('cursor','pointer');
              $(table_head_customer_discount).css('color','white');
              $(table_head_customer_discount).css('padding','10px');
              $(table_head_customer_discount).addClass('font-size');

              var table_head_total_discount=document.createElement('th');
              $(table_head_total_discount).html("Total Discount"); 
              $(table_head_total_discount).css('border', '1px solid #ddd');
              $(table_head_total_discount).css('cursor','pointer');
              $(table_head_total_discount).css('color','white');
              $(table_head_total_discount).addClass('font-size');
              $(table_head_total_discount).css('padding','10px');

              var table_head_final_price=document.createElement('th');
              $(table_head_final_price).html("Final Price"); 
              $(table_head_final_price).css('border', '1px solid #ddd');
              $(table_head_final_price).css('cursor','pointer');
              $(table_head_final_price).css('color','white');
              $(table_head_final_price).css('padding','10px');
              $(table_head_final_price).addClass('font-size');

              var table_head_sellable_individually=document.createElement('th');
              $(table_head_sellable_individually).html("Sellable Individually"); 
              $(table_head_sellable_individually).css('border', '1px solid #ddd');
              $(table_head_sellable_individually).css('cursor','pointer');
              $(table_head_sellable_individually).css('color','white');
              $(table_head_sellable_individually).css('padding','10px');
              $(table_head_sellable_individually).addClass('font-size');

              var table_head_parameters_count=document.createElement('th');
              $(table_head_parameters_count).html("Parameters Count"); 
              $(table_head_parameters_count).css('border', '1px solid #ddd');
              $(table_head_parameters_count).css('cursor','pointer');
              $(table_head_parameters_count).css('color','white');
              $(table_head_parameters_count).css('padding','10px');
              $(table_head_parameters_count).addClass('font-size');

              var table_head_final_price_type=document.createElement('th');
              $(table_head_final_price_type).html("Final Price Type"); 
              $(table_head_final_price_type).css('border', '1px solid #ddd');
              $(table_head_final_price_type).css('cursor','pointer');
              $(table_head_final_price_type).css('color','white');
              $(table_head_final_price_type).css('padding','10px');
              $(table_head_final_price_type).addClass('font-size');
              
              var table_head_department_name=document.createElement('th');
              $(table_head_department_name).html("Department Name"); 
              $(table_head_department_name).css('border', '1px solid #ddd');
              $(table_head_department_name).css('cursor','pointer');
              $(table_head_department_name).css('color','white');
              $(table_head_department_name).css('padding','10px');
              $(table_head_department_name).addClass('font-size');

              var table_head_zotey_commission=document.createElement('th');
              $(table_head_zotey_commission).html("Zotey Commission"); 
              $(table_head_zotey_commission).css('border', '1px solid #ddd');
              $(table_head_zotey_commission).css('cursor','pointer');
              $(table_head_zotey_commission).css('color','white');
              $(table_head_zotey_commission).css('padding','10px');
              $(table_head_zotey_commission).addClass('font-size');

              var table_head_highlight=document.createElement('th');
              $(table_head_highlight).html("Highlight"); 
              $(table_head_highlight).css('border', '1px solid #ddd');
              $(table_head_highlight).css('cursor','pointer');  
              $(table_head_highlight).css('color','white');
              $(table_head_highlight).css('padding','10px');
              $(table_head_highlight).addClass('font-size');

              var table_head_highlight_msg=document.createElement('th');
              $(table_head_highlight_msg).html("Highlight Msg"); 
              $(table_head_highlight_msg).css('border', '1px solid #ddd');
              $(table_head_highlight_msg).css('cursor','pointer');
              $(table_head_highlight_msg).css('color','white');
              $(table_head_highlight_msg).css('padding','10px');
              $(table_head_highlight_msg).css('width','100px');
              $(table_head_highlight_msg).addClass('font-size');

              var table_head_mark_test_as=document.createElement('th');
              $(table_head_mark_test_as).html("Status"); 
              $(table_head_mark_test_as).css('border', '1px solid #ddd');
              $(table_head_mark_test_as).css('cursor','pointer');
              $(table_head_mark_test_as).css('color','white');
              $(table_head_mark_test_as).css('padding','10px');
              $(table_head_mark_test_as).addClass('font-size');

              var table_head_suggest_master_list=document.createElement('th');
              $(table_head_suggest_master_list).html("Suggest Master List"); 
              $(table_head_suggest_master_list).css('border', '1px solid #ddd');
              $(table_head_suggest_master_list).css('cursor','pointer');
              $(table_head_suggest_master_list).css('color','white');
              $(table_head_suggest_master_list).css('padding','10px');
              $(table_head_suggest_master_list).addClass('font-size');

              var table_head_master_test_name=document.createElement('th');
              $(table_head_master_test_name).html("Master Name"); 
              $(table_head_master_test_name).css('border', '1px solid #ddd');
              $(table_head_master_test_name).css('cursor','pointer');
              $(table_head_master_test_name).css('color','white');
              $(table_head_master_test_name).css('width','250');
              $(table_head_master_test_name).css('padding','10px');
              $(table_head_master_test_name).addClass('font-size');

              var test_name_edit=document.createElement('th');
              $(test_name_edit).html('Master edit/add');
              $(test_name_edit).css('cursor','pointer');
              $(test_name_edit).css('color','white');
              $(test_name_edit).css('padding','10px');
              $(test_name_edit).addClass('font-size');

              var table_head_master_test_slug=document.createElement('th');
              $(table_head_master_test_slug).html("Master Test Slug"); 
              $(table_head_master_test_slug).css('border', '1px solid #ddd');
              $(table_head_master_test_slug).css('cursor','pointer');
              $(table_head_master_test_slug).css('color','white');
              $(table_head_master_test_slug).css('padding','10px');
              $(table_head_master_test_slug).addClass('font-size');
                 
              $(table_body_head_row).append(table_head_test_id); 
              $(table_body_head_row).append(table_head_test_name);
              $(table_body_head_row).append(table_head_master_test_name);
              $(table_body_head_row).append(table_head_mark_test_as);
              $(table_body_head_row).append(test_name_edit);
              $(table_body_head_row).append(table_head_mrp);
              $(table_body_head_row).append(table_head_customer_discount);
              $(table_body_head_row).append(table_head_zotey_commission);
              $(table_body_head_row).append(table_head_total_discount);     
              $(table_body_head_row).append(table_head_final_price);
              $(table_body_head_row).append(table_head_sellable_individually);
              $(table_body_head_row).append(table_head_parameters_count);
              $(table_body_head_row).append(table_head_final_price_type);
              $(table_body_head_row).append(table_head_department_name);
              $(table_body_head_row).append(table_head_highlight);
              $(table_body_head_row).append(table_head_highlight_msg);
              
              //$(table_body_head_row).append(table_head_suggest_master_list);
              //$(table_body_head_row).append(table_head_master_test_slug);

              $(table_head).append(table_body_head_row);
              $('table').append(table_head);
       }
        else
       {
             //   $('table').append('tfoot tr:nth-child('+serial_num+')');
       } 

       // $('table tfoot').append('tr:nth-child('+serial_num+')');
}

function edit_mark_test_as()
{
    var id= $(this).data('lab-file-id');
    var serial_num=$(this).data('lab-test-serial-number');
    var mark_test_as_data=$(this).data('mark-test-as');
    var test_name= $(this).data('test-name');

    var add_more_page = document.createElement('div');
    $(add_more_page).css("marginTop","100px");
    $(add_more_page).addClass("modal");
    $(add_more_page).attr('id','modal');
    $(add_more_page).css('backgroundColor','#fff');
    $(add_more_page).css('position','relative');
    $(add_more_page).css('paddingRight','0px');
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
    $(add_more_msg).html('Mark Record As');
    $(add_more_msg).css('marginBottom','16px');
    $(add_more_msg).css('fontWeight','bold');
    $(add_more_msg).css('fontSize','16px');
    
    var add_title_row = document.createElement('div');
    $(add_title_row).addClass('row');
    var add_title_row_col=document.createElement('div');
    $(add_title_row_col).addClass('col-md-12 col-sm-12 col-lg-12');
    $(add_title_row_col).html(test_name);
   
    $(add_title_row).css('textAlign','center');
    $(add_title_row).append(add_title_row_col);

    var single_button_row_save= document.createElement('div');
    $(single_button_row_save).addClass('row');
    $(single_button_row_save).css('margin-top','25px');
     
    var single_button_row_left=document.createElement('div');
    $(single_button_row_left).addClass('col-md-4 col-lg-4 col-sm-4');
    
    if((mark_test_as_data=='map_error_master_test') ||(mark_test_as_data=='map_error_department') )
    {  
    
    }
    else
    {
          var single_button_save_Mark_It_As_Either=document.createElement('button');
          $(single_button_save_Mark_It_As_Either).addClass('btn btn-primary');
          $(single_button_save_Mark_It_As_Either).html("Map This Duplicate");
   
          $(single_button_save_Mark_It_As_Either).attr('data-csv-file-id',id);
          $(single_button_save_Mark_It_As_Either).attr('data-serial-num',serial_num);
          $(single_button_save_Mark_It_As_Either).attr('data-mark-test-as','map_this_duplicate');
          $(single_button_row_left).append(single_button_save_Mark_It_As_Either);  
    }
     
    var single_button_row_middle=document.createElement('div');
    $(single_button_row_middle).addClass('col-md-4 col-sm-4 col-lg-4');
    $(single_button_save_Mark_It_As_Either).on('click',function()
      {

            var csv_file_id=$(this).data('csv-file-id');
            var serial_num=$(this).data('serial-num');
            var mark_test_as=$(this).data('mark-test-as');
            status_update(csv_file_id,serial_num,mark_test_as);
       
            $("#modal").modal().close();   
      });

    var single_button_row_right=document.createElement('div');
    $(single_button_row_right).addClass('col-md-4 col-sm-4 col-lg-4');

    var single_button_save_Keep_It_Pending=document.createElement('button');
    $(single_button_save_Keep_It_Pending).addClass('btn btn-danger');

    $(single_button_save_Keep_It_Pending).html("Keep It Pending");
    $(single_button_save_Keep_It_Pending).attr('data-csv-file-id',id);
    $(single_button_save_Keep_It_Pending).attr('data-serial-num',serial_num);
    $(single_button_save_Keep_It_Pending).attr('data-mark-test-as','keep_it_pending');

    $(single_button_row_right).append(single_button_save_Keep_It_Pending);

    $(single_button_save_Keep_It_Pending).on('click',function()
      {

            var csv_file_id=$(this).data('csv-file-id');
            var serial_num=$(this).data('serial-num');
            var mark_test_as=$(this).data('mark-test-as');
 
            status_update(csv_file_id,serial_num,mark_test_as);
            $("#modal").modal().close();
      });

    $(single_button_row_save).append(single_button_row_left);
    $(single_button_row_save).append(single_button_row_middle);
    $(single_button_row_save).append(single_button_row_right); 

    $(add_more_page).append(add_more_close_element);
    $(add_more_page).append(add_more_msg);
    $(add_more_page).append(add_title_row);
    $(add_more_page).append(single_button_row_save);
    $(add_more_page).modal().open();
}


function status_update(csv_file_id,serial_num,mark_test_as)
{

  var status=mark_test_as;

   $.ajax({
    url:host_api+"/m-api/admin/mark_lab_test_status_as",
    type:'GET',
    data:{csv_file_id:csv_file_id,serial_num:serial_num,mark_test_as:status},
    dataType: 'json',
    success:function(data)
    {      
          var csv_file_id=data.csv_file_id;
          var test_name=data.current_record.test_name;
          var mark_test_as=data.current_record.mark_test_as;
          var master_test_name=data.current_record.master_test_name;
          var mrp=data.current_record.mrp;
          var customer_discount=data.current_record.customer_discount;
          var total_discount=data.current_record.total_discount;
          var final_price=data.current_record.final_price;
          var sellable_individually=data.current_record.sellable_individually;
          var parameters_count=data.current_record.parameters_count;
          var final_price_type=data.current_record.final_price_type;
          var department_name=data.current_record.department_name;
          var zotey_commission=data.current_record.zotey_commission;
          var highlight=data.current_record.highlight;
          var highlight_msg=data.current_record.highlight_msg;
          var suggest_master_list=data.current_record.suggest_master_list;
          var master_test_slug=data.current_record.master_test_slug;
          var serial_num=data.current_record.serial_num;
            
         update_row_after_status_edit(csv_file_id,test_name,mark_test_as,master_test_name,mrp,
            customer_discount,total_discount,final_price,sellable_individually,parameters_count,
             final_price_type,department_name,zotey_commission,highlight,highlight_msg,suggest_master_list,master_test_slug,serial_num);        

    }
  });
}
function update_row_after_status_edit(csv_file_id,test_name,mark_test_as,master_test_name,mrp,
      customer_discount,total_discount,final_price,sellable_individually,parameters_count,
      final_price_type,department_name,zotey_commission,highlight,highlight_msg,suggest_master_list,master_test_slug,serial_num)
{

    $('tfoot tr:nth-child('+serial_num+')').empty();
    $('tfoot tr:nth-child('+serial_num+')').removeClass('csv_details');
    $('tfoot tr:nth-child('+serial_num+')').addClass('mouseclick');

    var table_data_test_id=document.createElement('td');
    $(table_data_test_id).html(serial_num); 
    $(table_data_test_id).css('padding','10px');
    $(table_data_test_id).css('font-size','13px');
    $(table_data_test_id).css('border', '1px solid #ddd');
    $(table_data_test_id).css('textAlign', 'center');
    
    var table_data_test_name=document.createElement('td');
    $(table_data_test_name).html(test_name);
    $(table_data_test_name).addClass("test_profile_name");

    $(table_data_test_name).css('font-size','13px');
    $(table_data_test_name).css('textAlign','left');
    $(table_data_test_name).css('border', '1px solid #ddd');
    $(table_data_test_name).css('padding-left','6px');
    
    var table_data_mrp=document.createElement('td');
    $(table_data_mrp).html(mrp); 
    $(table_data_mrp).css('font-size','13px');
    $(table_data_mrp).css('textAlign','center');
    $(table_data_mrp).css('border', '1px solid #ddd');
       
    var table_data_customer_discount=document.createElement('td');
    $(table_data_customer_discount).html(customer_discount); 
    $(table_data_customer_discount).css('font-size','13px');
    $(table_data_customer_discount).css('textAlign','center');
    $(table_data_customer_discount).css('border', '1px solid #ddd');
     
    var table_data_total_discount=document.createElement('td');
    $(table_data_total_discount).html(total_discount); 
    $(table_data_total_discount).css('font-size','13px');
    $(table_data_total_discount).css('textAlign','center');
    $(table_data_total_discount).css('border', '1px solid #ddd');
      
    var table_data_final_price=document.createElement('td');
    $(table_data_final_price).html(final_price); 
    $(table_data_final_price).css('font-size','13px');
    $(table_data_final_price).css('textAlign','center');
    $(table_data_final_price).css('border', '1px solid #ddd');
          
    var table_data_sellable_individually=document.createElement('td');
    $(table_data_sellable_individually).html(sellable_individually); 
    $(table_data_sellable_individually).css('font-size','13px');
    $(table_data_sellable_individually).css('textAlign','center');
    $(table_data_sellable_individually).css('border', '1px solid #ddd');

    var table_data_parameters_count=document.createElement('td');
    $(table_data_parameters_count).html(parameters_count); 
    $(table_data_parameters_count).css('font-size','13px');
    $(table_data_parameters_count).css('textAlign','center');
    $(table_data_parameters_count).css('border', '1px solid #ddd');

    var table_data_final_price_type=document.createElement('td');
    $(table_data_final_price_type).html(final_price_type); 
    $(table_data_final_price_type).css('font-size','13px');
    $(table_data_final_price_type).css('textAlign','center');
    $(table_data_final_price_type).css('border', '1px solid #ddd');

    var table_data_department_name=document.createElement('td');
    $(table_data_department_name).html(department_name); 
    $(table_data_department_name).css('font-size','13px');
    $(table_data_department_name).css('textAlign','center');
    $(table_data_department_name).css('border', '1px solid #ddd');
           
    var table_data_zotey_commission=document.createElement('td');
    $(table_data_zotey_commission).html(zotey_commission); 
    $(table_data_zotey_commission).css('font-size','13px');
    $(table_data_zotey_commission).css('textAlign','center');
    $(table_data_zotey_commission).css('border', '1px solid #ddd');

    var table_data_highlight=document.createElement('td');
    $(table_data_highlight).html(highlight); 
    $(table_data_highlight).css('font-size','13px');
    $(table_data_highlight).css('textAlign','center');
    $(table_data_highlight).css('border', '1px solid #ddd');

    var table_data_highlight_msg=document.createElement('td');    
    if(highlight_msg !='')
    {   
          var table_data_highlight_msg_a = document.createElement('a');
          $(table_data_highlight_msg_a).html('View Message');
          $(table_data_highlight_msg_a).attr('data-highlight-message',highlight_msg);
          $(table_data_highlight_msg).append(table_data_highlight_msg_a);
          $(table_data_highlight_msg_a).css('cursor','pointer');
          $(table_data_highlight_msg_a).attr('id','view_message_id');
          $(table_data_highlight_msg_a).on('click',view_message);
    }
    else
    {
          $(table_data_highlight_msg_a).html('');
    }

    $(table_data_highlight_msg).attr('highlight-messsage',highlight_msg);    
    $(table_data_highlight_msg).css('font-size','13px');
    $(table_data_highlight_msg).css('textAlign','center');
    $(table_data_highlight_msg).css('border', '1px solid #ddd');    

    var table_data_mark_test_as=document.createElement('td');

    var table_data_mark_as_edit_a=document.createElement('a');
    $(table_data_mark_as_edit_a).html(mark_test_as); 

    $(table_data_mark_as_edit_a).attr('data-lab-file-id',csv_file_id);
    $(table_data_mark_as_edit_a).attr('data-lab-test-serial-number',serial_num); 
    $(table_data_mark_as_edit_a).attr('data-mark-test-as',mark_test_as);
    $(table_data_mark_as_edit_a).attr('data-test-name',test_name); 
    $(table_data_mark_test_as).append(table_data_mark_as_edit_a); 
    $(table_data_mark_as_edit_a).css('cursor','pointer');
        
    $(table_data_mark_as_edit_a).click(function()
        {
              $('table tfoot tr').removeClass('mouseclick');
              $('tfoot tr').addClass('csv_details');
        });

    if(mark_test_as == 'duplicate_test')
    {
          $(table_data_mark_as_edit_a).css('color','blue');
          $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);  
    }
    else if(mark_test_as=='map_error_master_test')
    {
          $(table_data_mark_as_edit_a).css('color','red');   
          $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);     
    }
    else if(mark_test_as=='map_error_department')
    {
          $(table_data_mark_as_edit_a).on('click',edit_mark_test_as);  
          $(table_data_mark_as_edit_a).css('color','red');      
    }
    else if(mark_test_as=='map_to_lab')
    {
          $(table_data_mark_as_edit_a).css('color','black');      
    }
    else
    {
          $(table_data_mark_as_edit_a).css('color','black'); 
    }

    $(table_data_mark_test_as).css('font-size','13px');
    $(table_data_mark_test_as).css('textAlign','center');
    $(table_data_mark_test_as).css('border', '1px solid #ddd');

    var table_data_suggest_master_list=document.createElement('td');
    $(table_data_suggest_master_list).html(suggest_master_list); 
    $(table_data_suggest_master_list).css('font-size','13px');
    $(table_data_suggest_master_list).css('textAlign','center');
    $(table_data_suggest_master_list).css('border', '1px solid #ddd');
    
    var table_data_master_test_name=document.createElement('td');
    $(table_data_master_test_name).html(master_test_name); 
    $(table_data_master_test_name).css('font-size','13px');
    $(table_data_master_test_name).css('textAlign','center');
    $(table_data_master_test_name).css('border', '1px solid #ddd');

    var table_data_master_test_name_for_edit=document.createElement('td');
    $(table_data_master_test_name_for_edit).css('border', '1px solid #ddd');
   if(master_test_name != '')
    {
          var table_data_master_test_name_edit_a=document.createElement('a');
          $(table_data_master_test_name_edit_a).html('Edit');
          $(table_data_master_test_name_edit_a).attr('data-lab-file-id',csv_file_id);
          $(table_data_master_test_name_edit_a).attr('data-lab-test-name',test_name);
          $(table_data_master_test_name_edit_a).attr('data-lab-test-serial-number',serial_num); 
          $(table_data_master_test_name_edit_a).attr('data-lab-test-master-test-slug',master_test_slug); 
          $(table_data_master_test_name_edit_a).css('cursor','pointer');
          $(table_data_master_test_name_for_edit).css('textAlign','center');
          $(table_data_master_test_name_edit_a).on('click',edit_master_test_name);
          $(table_data_master_test_name_for_edit).append(table_data_master_test_name_edit_a);  
    }
    else
    {
          var table_data_master_test_name_edit_a=document.createElement('a');
          $(table_data_master_test_name_edit_a).html('Add');
          $(table_data_master_test_name_edit_a).css('textAlign','center');
          $(table_data_master_test_name_edit_a).attr('data-lab-file-id',csv_file_id);
          $(table_data_master_test_name_edit_a).attr('data-lab-test-name',test_name);
          $(table_data_master_test_name_edit_a).attr('data-lab-test-serial-number',serial_num); 
          $(table_data_master_test_name_edit_a).attr('data-lab-test-master-test-slug',master_test_slug)
          $(table_data_master_test_name_edit_a).css('cursor','pointer');
          $(table_data_master_test_name_for_edit).css('textAlign','center')
          $(table_data_master_test_name_edit_a).on('click',edit_master_test_name);
          $(table_data_master_test_name_for_edit).append(table_data_master_test_name_edit_a);
    }

    $(table_data_master_test_name_edit_a).click(function()
    {

              $('table tfoot tr').removeClass('mouseclick');
              $('tfoot tr').addClass('csv_details');

    });
        
    var table_data_master_test_slug=document.createElement('td');
    $(table_data_master_test_slug).html(master_test_slug); 
    $(table_data_master_test_slug).css('font-size','13px');
    $(table_data_master_test_slug).css('textAlign','center');
    $(table_data_master_test_slug).css('border', '1px solid #ddd');
  
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_test_id);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_test_name);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_master_test_name);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_mark_test_as);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_master_test_name_for_edit);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_mrp);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_customer_discount);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_zotey_commission);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_total_discount);    
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_final_price);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_sellable_individually);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_parameters_count);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_final_price_type);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_department_name);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_highlight);
    $('tfoot tr:nth-child('+serial_num+')').append(table_data_highlight_msg);
        //$('table tr:nth-child('+serial_num+')').append(table_data_suggest_master_list);
        //$('table tr:nth-child('+serial_num+')').append(table_data_master_test_slug);      
       
    if(serial_num==1)
    {
          $('table thead').empty();

          var table_head = document.createElement('thead');    
          $(table_head).addClass("table_head");  
          $(table_head).attr('id','table_head');
        
          var table_body_head_row=document.createElement('tr');
          $(table_body_head_row).css("background", "#41A7B3");
          $(table_body_head_row).css("textAlign", "center");

          var table_head_test_id=document.createElement('th');
          $(table_head_test_id).html("Serial Number");
          $(table_head_test_id).css('border', '1px solid #ddd');
          $(table_head_test_id).css('padding','10px');
          $(table_head_test_id).css('width','100px');
          $(table_head_test_id).css('cursor','pointer');
          $(table_head_test_id).css('color','white');
          $(table_head_test_id).css('padding','10px');
          $(table_head_test_id).addClass('font-size');

          var table_head_test_name=document.createElement('th');
          $(table_head_test_name).html("Test Name");
          $(table_head_test_name).css('border', '1px solid #ddd');
          $(table_head_test_name).css('padding','10px');
          $(table_head_test_name).css('width','400px');
          $(table_head_test_name).css('color','white');
          $(table_head_test_name).css('padding','10px');
          $(table_head_test_name).addClass('font-size');
              
          var table_head_mrp=document.createElement('th');
          $(table_head_mrp).html("MRP");
          $(table_head_mrp).css('border', '1px solid #ddd');
          $(table_head_mrp).css('cursor','pointer');
          $(table_head_mrp).css('color','white');
          $(table_head_mrp).css('padding','10px');
          $(table_head_mrp).addClass('font-size');

          var table_head_customer_discount=document.createElement('th');
          $(table_head_customer_discount).html("Customer Discount");
          $(table_head_customer_discount).css('border', '1px solid #ddd');
          $(table_head_customer_discount).css('cursor','pointer');
          $(table_head_customer_discount).css('color','white');
          $(table_head_customer_discount).css('padding','10px');
          $(table_head_customer_discount).addClass('font-size');

          var table_head_total_discount=document.createElement('th');
          $(table_head_total_discount).html("Total Discount"); 
          $(table_head_total_discount).css('border', '1px solid #ddd');
          $(table_head_total_discount).css('cursor','pointer');
          $(table_head_total_discount).css('color','white');
          $(table_head_total_discount).addClass('font-size');
          $(table_head_total_discount).css('padding','10px');

          var table_head_final_price=document.createElement('th');
          $(table_head_final_price).html("Final Price"); 
          $(table_head_final_price).css('border', '1px solid #ddd');
          $(table_head_final_price).css('cursor','pointer');
          $(table_head_final_price).css('color','white');
          $(table_head_final_price).css('padding','10px');
          $(table_head_final_price).addClass('font-size');

          var table_head_sellable_individually=document.createElement('th');
          $(table_head_sellable_individually).html("Sellable Individually"); 
          $(table_head_sellable_individually).css('border', '1px solid #ddd');
          $(table_head_sellable_individually).css('cursor','pointer');
          $(table_head_sellable_individually).css('color','white');
          $(table_head_sellable_individually).css('padding','10px');
          $(table_head_sellable_individually).addClass('font-size');

          var table_head_parameters_count=document.createElement('th');
          $(table_head_parameters_count).html("Parameters Count"); 
          $(table_head_parameters_count).css('border', '1px solid #ddd');
          $(table_head_parameters_count).css('cursor','pointer');
          $(table_head_parameters_count).css('color','white');
          $(table_head_parameters_count).css('padding','10px');
          $(table_head_parameters_count).addClass('font-size');

          var table_head_final_price_type=document.createElement('th');
          $(table_head_final_price_type).html("Final Price Type"); 
          $(table_head_final_price_type).css('border', '1px solid #ddd');
          $(table_head_final_price_type).css('cursor','pointer');
          $(table_head_final_price_type).css('color','white');
          $(table_head_final_price_type).css('padding','10px');
          $(table_head_final_price_type).addClass('font-size');
          
          var table_head_department_name=document.createElement('th');
          $(table_head_department_name).html("Department Name"); 
          $(table_head_department_name).css('border', '1px solid #ddd');
          $(table_head_department_name).css('cursor','pointer');
          $(table_head_department_name).css('color','white');
          $(table_head_department_name).css('padding','10px');
          $(table_head_department_name).addClass('font-size');

          var table_head_zotey_commission=document.createElement('th');
          $(table_head_zotey_commission).html("Zotey Commission"); 
          $(table_head_zotey_commission).css('border', '1px solid #ddd');
          $(table_head_zotey_commission).css('cursor','pointer');
          $(table_head_zotey_commission).css('color','white');
          $(table_head_zotey_commission).css('padding','10px');
          $(table_head_zotey_commission).addClass('font-size');

          var table_head_highlight=document.createElement('th');
          $(table_head_highlight).html("Highlight"); 
          $(table_head_highlight).css('border', '1px solid #ddd');
          $(table_head_highlight).css('cursor','pointer');  
          $(table_head_highlight).css('color','white');
          $(table_head_highlight).css('padding','10px');
          $(table_head_highlight).addClass('font-size');

          var table_head_highlight_msg=document.createElement('th');
          $(table_head_highlight_msg).html("Highlight Msg"); 
          $(table_head_highlight_msg).css('border', '1px solid #ddd');
          $(table_head_highlight_msg).css('cursor','pointer');
          $(table_head_highlight_msg).css('color','white');
          $(table_head_highlight_msg).css('padding','10px');
          $(table_head_highlight_msg).css('width','100px');
          $(table_head_highlight_msg).addClass('font-size');

          var table_head_mark_test_as=document.createElement('th');
          $(table_head_mark_test_as).html("Status"); 
          $(table_head_mark_test_as).css('border', '1px solid #ddd');
          $(table_head_mark_test_as).css('cursor','pointer');
          $(table_head_mark_test_as).css('color','white');
          $(table_head_mark_test_as).css('padding','10px');
          $(table_head_mark_test_as).addClass('font-size');

          var table_head_suggest_master_list=document.createElement('th');
          $(table_head_suggest_master_list).html("Suggest Master List"); 
          $(table_head_suggest_master_list).css('border', '1px solid #ddd');
          $(table_head_suggest_master_list).css('cursor','pointer');
          $(table_head_suggest_master_list).css('color','white');
          $(table_head_suggest_master_list).css('padding','10px');
          $(table_head_suggest_master_list).addClass('font-size');

          var table_head_master_test_name=document.createElement('th');
          $(table_head_master_test_name).html("Master Name"); 
          $(table_head_master_test_name).css('border', '1px solid #ddd');
          $(table_head_master_test_name).css('cursor','pointer');
          $(table_head_master_test_name).css('color','white');
          $(table_head_master_test_name).css('width','250');
          $(table_head_master_test_name).css('padding','10px');
          $(table_head_master_test_name).addClass('font-size');

          var test_name_edit=document.createElement('th');
          $(test_name_edit).html('Master edit/add');
          $(test_name_edit).css('cursor','pointer');
          $(test_name_edit).css('color','white');
          $(test_name_edit).css('padding','10px');
          $(test_name_edit).addClass('font-size');

          var table_head_master_test_slug=document.createElement('th');
          $(table_head_master_test_slug).html("Master Test Slug"); 
          $(table_head_master_test_slug).css('border', '1px solid #ddd');
          $(table_head_master_test_slug).css('cursor','pointer');
          $(table_head_master_test_slug).css('color','white');
          $(table_head_master_test_slug).css('padding','10px');
          $(table_head_master_test_slug).addClass('font-size');
             
          $(table_body_head_row).append(table_head_test_id); 
          $(table_body_head_row).append(table_head_test_name);
          $(table_body_head_row).append(table_head_master_test_name);
          $(table_body_head_row).append(table_head_mark_test_as);
          $(table_body_head_row).append(test_name_edit);
          $(table_body_head_row).append(table_head_mrp);
          $(table_body_head_row).append(table_head_customer_discount);
          $(table_body_head_row).append(table_head_zotey_commission);
          $(table_body_head_row).append(table_head_total_discount); 
          $(table_body_head_row).append(table_head_final_price);
          $(table_body_head_row).append(table_head_sellable_individually);
          $(table_body_head_row).append(table_head_parameters_count);
          $(table_body_head_row).append(table_head_final_price_type);
          $(table_body_head_row).append(table_head_department_name);
          $(table_body_head_row).append(table_head_highlight);
          $(table_body_head_row).append(table_head_highlight_msg);
          
          //$(table_body_head_row).append(table_head_suggest_master_list);
          //$(table_body_head_row).append(table_head_master_test_slug);

          $(table_head).append(table_body_head_row);
          $('table').append(table_head);       
    }
    else
    {
        //$('table').append('tfoot tr:nth-child('+serial_num+')');
    } 
     //$('table tfoot').append('tr:nth-child('+serial_num+')');
}

$(document).ready(autocomplete_attachment_only_once(1));
window.onload =table_module();
