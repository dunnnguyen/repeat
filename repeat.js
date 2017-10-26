$(function(){
    var x= 0;
    var i=0;
    var array;
    
    function createList()
    {
        var text= $('#text').val();
        array = text.split(".");
        var list=[];
        var words =[];
		for (var i in array)
            {
                //console.log(array[i]);
                var ini=0;
                var arrayword= array[i].split(' ');
                var arraylength = arrayword.length;
                //console.log(arraylength);
               
                if (arraylength > 8)
                    {
                        //console.log(arrayword);
                        
                       for (var j in arrayword)
                            {
                                
                                //console.log(j + arrayword[j]);
                               if ((ini>0  && ini % 8== 0) || j == arraylength -1)
                                    {
                                        var combinewords="";
                                        for (var x in words)
                                            {
                                                combinewords+=" " + words[x];
                                            }
                                        
                                       // console.log(ini + x + combinewords);
                                        list.push(combinewords);
                                        words=[];
                                        combinewords="";
                                        ini=0;
                                    }
                               
                                else if (ini>=0)
                                    {
                                        words.push(arrayword[j]);
                                        ini++;
                                        //console.log("add in" + ini + arrayword[j]);
                                    }
                                
                            }
                        /*
                       
                        array1 = array[i].split(",");
                        console.log(array1);
                        list = $.merge(list,array1);
                        */
                    }
                else
                    {
                        list.push(array[i]);
                    }
            }
       
        return list;
    };
    
    $('#text').change(function () {
        
        
        createList();
    
    
    
    });
	/*$('a.say').on('click',function(e){
		e.preventDefault();
		responsiveVoice.setDefaultVoice("US English Female");
		var voicelist = responsiveVoice.getVoices();
		var accent= $("#voiceselection").val();
		console.log(voicelist);
		var text= $('#text').val();
        var array = text.split(".",",");
		if(responsiveVoice.voiceSupport()) 
            {
            responsiveVoice.speak(text, accent);
            }
		});*/
    
    
    $('a.split').on('click',function(e){
		e.preventDefault();
		var list = createList();
        for (var i in list)
            {
                
                $("#display").append("<p>"+ i +list[i]+"</p>");
                
                
            }
    });
    
     $('a.next').on('click',function(e){
		e.preventDefault();
        var list = createList();
        var accent= $("#voiceselection").val();
        var text= list[i];
		
        if (i > (list.length - 2))
            {
                i=0;
                text= list[i];
                if(responsiveVoice.voiceSupport()) 
                {
                     console.log("text number" + i);
                responsiveVoice.speak(text, accent);
                }
            }
         else if ( i == 0)
            {
                if(responsiveVoice.voiceSupport()) 
                {
                     console.log("text number" + i);
                    responsiveVoice.speak(text, accent);
                }
                i++;
            }
         else
         {
            i++;
            text= list[i];
            if(responsiveVoice.voiceSupport()) 
            {
                 console.log("text number" + i);
                responsiveVoice.speak(text, accent);
            }
             
         
         }
		});
    $('a.prev').on('click',function(e){
		e.preventDefault();
        var list = createList();
        var accent= $("#voiceselection").val();
        //var length= list.length;
		var text= list[i];
		
        
        if (i <0)
            {
                i=list.length - 2;
                text= list[i];
                if(responsiveVoice.voiceSupport()) 
                {
                console.log("text number" + i);
                responsiveVoice.speak(text, accent);
                }
            }
        else if ( i == 0)
            {
                if(responsiveVoice.voiceSupport()) 
                {
                     console.log("text number" + i);
                    responsiveVoice.speak(text, accent);
                }
                i--;
            }
         else
         {
             i--;
             text= list[i];
             if(responsiveVoice.voiceSupport()) 
                {
                console.log("text number" + i);
                responsiveVoice.speak(text, accent);
                }
             
         }
		});
		
});