   //definign here the base url of the api where we getting the data from
   let baseURL='https://pokeapi.co/api/v2/pokemon/';
    renderContent(1,30);
 
    
    function renderContent(min_length,max_length) {
        let html='';
        for(let i= min_length;i <= max_length; i++) {
        let this_html='';
        
        $.getJSON(baseURL+i, function(data) {
                this_html =' <div class="card"> <div class="card-body"><table style="width:100%">';
                this_html += '<tr><td>Id: '+data.id+'</td><td>Name: '+data.name+'</td><td>Height: '+data.height+'</td><td></td> </tr>';
                this_html += '<tr><td>Width: '+data.weight+' </td>  <td>Base Experience: '+data.base_experience+'</td><td>Order: '+data.order+'</td> </tr>';
                this_html += '</table></div></div>';
            html+=this_html;

        }).then(function(){  
        $("#mainDiv").html(html);
        });
    }
    }
  