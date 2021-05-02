//definign here the base url of the api where we getting the data from
   let baseURL='https://pokeapi.co/api/v2/pokemon/';
    renderContent(1,30);
 
    
    function renderContent(min_length,max_length) {
        console.log("rendering");
        let html='';
        for(let i= min_length;i <= max_length; i++) {
        let this_html='';
         //console.log("called");
        
        
        fetch(baseURL + i).then(response=>{
            return response.json();
        }).then(data=>{
            //console.log("data",data)
            //data = data.body;
            this_html =' <div class="card"> <div class="card-body"><table style="width:100%">';
            this_html += '<tr><td>Id: '+data.id+'</td><td>Name: '+data.name+'</td><td>Height: '+data.height+'</td><td></td> </tr>';
            this_html += '<tr><td>Width: '+data.weight+' </td>  <td>Base Experience: '+data.base_experience+'</td><td>Order: '+data.order+'</td> </tr>';
            this_html += '</table></div></div>';
            html+=this_html;
        }).then(function(){  
            document.getElementById("mainDiv").innerHTML = html;
        // $("#mainDiv").html(html);
        });
        }
        }
    
  
        //$("#btnRegenerate").on('click',function(e) {
        document.querySelector("#btnRegenerate").addEventListener('click',function(event){
            //console.log("clicked");
            let min= Math.floor(Math.random() * 30+1);
            let max= Math.floor(Math.random() * 100+1);
            $("#mainDiv").html('');
            renderContent(min,max);
            e.preventDefault();
        });