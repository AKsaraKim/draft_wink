$(document).ready(function(){
    sideAct();
    chatbotAct();
    favorAct();
    alarmAct();
    mainBtnAct();
    themeCngAct();
    layoutAct();
   
    function sideAct(){
        $('.btn-fd').click(function(){
            if($(this).hasClass("on") == true){
                $('.main-sidebar').addClass("on");
                $('.content-wrapper').addClass("on");
                $('.navbar').addClass("on");
                $(this).removeClass("on");
            } else {
                $('.main-sidebar').removeClass("on");
                $('.content-wrapper').removeClass("on");
                $('.navbar').removeClass("on");
                $(this).addClass("on");
            }
        });
    }    

    

    function chatbotAct(){
        $('.chatbot>button').click(function(){
            if($('.chatbot_box').hasClass("on") == true){
                $('.chatbot_box').removeClass('on');
                setTimeout(function() { 
                    $('.chatbot_box').hide();
                }, 300);
            } else {
                $('.chatbot_box').show(0,function(){
                    $('.chatbot_box').addClass('on');
                });
            }
        });
        
        $('.chatbot_box>.btn_close').click(function(){
            if($('.chatbot_box').hasClass("on") == true){
                $('.chatbot_box').removeClass('on');
                setTimeout(function() { 
                    $('.chatbot_box').hide();
                }, 300);
            } else {
                $('.chatbot_box').show(0,function(){
                    $('.chatbot_box').addClass('on');
                });
            }
        });
    }

    function favorAct(){
        $('.btn_favor').click(function(){
            if($(this).hasClass("on") == true){
                $(this).removeClass("on");
                toastAct('상환스케줄시뮬레이션[21140]을<br /> 즐겨찾기에 등록해제하셨습니다.');
            } else {
                $(this).addClass("on");
                toastAct('상환스케줄시뮬레이션[21140]을<br /> 즐겨찾기에 등록하셨습니다.');
            }
        });

        $('.toast_box>.btn_close').click(function(){
            if($(this).parent('.toast_box').hasClass("on") == true){
                $(this).parent('.toast_box').removeClass("on");
                $(this).parent('.toast_box').hide();
            }
        })
    }

    function toastAct(txt){
        $('.toast_box').show().addClass('on');        
        $('.toast_box > p').html(txt);

        setTimeout(function() { 
            $('.toast_box').removeClass('on');
        }, 1700);

        setTimeout(function() { 
            $('.toast_box').hide();
        }, 2000);        
    }

    function alarmAct(){
        $('.btn_alarm').click(function(){
            if($('.al_box').hasClass("on") == true){
                $('.al_box').removeClass('on');
                setTimeout(function() { 
                    $('.al_box').hide();
                }, 300);
            } else {
                $('.al_box').show(0,function(){
                    $('.al_box').addClass('on');
                });
            }
        });
        
        $('.al_box>.btn_close').click(function(){
            if($('.al_box').hasClass("on") == true){
                $('.al_box').removeClass('on');
                setTimeout(function() { 
                    $('.al_box').hide();
                }, 300);
            } else {
                $('.al_box').show(0,function(){
                    $('.al_box').addClass('on');
                });
            }
        });
    }

    function mainBtnAct(){

        $('.btn-tr-fd').click(function(){
            if($(this).hasClass("on") == true){
                treeOff();
            } else {
                treeOn();
            }
        });

        $('.all_menu').click(function(){
            if($('.btn-tr-fd').hasClass("on") == true){
                treeOff();
            } else {
                treeOn();
            }
        });

        $('.favorites').click(function(){
            if($('.main_fav_box').hasClass("on") == true){
                mainFavOff();
            } else {
                mainFavOn();
            }
        });

        $('.config').click(function(){
            if($('.main_config_box').hasClass("on") == true){
                mainCfgOff();
            } else {
                mainCfgOn();
            }
        });        

        function treeOff(){
            $('.dtl-tree').addClass("on");
            $('.content').addClass("on");
            $('.btn-tr-fd').removeClass("on");
            $('.all_menu').removeClass('on');
        }

        function treeOn(){
            $('.dtl-tree').removeClass("on");
            $('.content').removeClass("on")
            $('.btn-tr-fd').addClass("on");
            $('.all_menu').addClass('on');
            mainCfgOff();            
            mainFavOff();
        }

        function mainFavOn(){
            $('.main_fav_box').show(0,function(){
                $('.main_fav_box').addClass('on');
            });
            $('.favorites').addClass('on');
            treeOff();
            mainCfgOff();
        }

        function mainFavOff(){
            $('.main_fav_box').removeClass('on');            
            $('.favorites').removeClass('on');
            setTimeout(function() { 
                $('.main_fav_box').hide();
            }, 300);
        }

        function mainCfgOn(){
            $('.main_config_box').show(0,function(){
                $('.main_config_box').addClass('on');
            });            
            $('.config').addClass('on');
            treeOff();
            mainFavOff();
        }

        function mainCfgOff(){
            $('.main_config_box').removeClass('on');
            $('.config').removeClass('on');
            setTimeout(function() { 
                $('.main_config_box').hide();
            }, 300);
        }        
    }

    function themeCngAct(){
        $('.ipt_box.sel_thm > label').click(function(){
            if($('.ipt_box.sel_thm > label > input').is(':checked') == false){
                $('html').removeClass('dark');
                toastAct('테마가 Light 모드로<br />적용되었습니다.');
            } else {
                $('html').addClass('dark');
                toastAct('테마가 Dark 모드로<br />적용되었습니다.');
            }
        });        
    }

    function layoutAct(){
        $('.ipt_box.sel_lot > label').click(function(){
            if($('.ipt_box.sel_lot > label > input').is(':checked') == false){
                $('.content-form').removeClass('drr');
                toastAct('레이아웃이 1단으로<br />적용되었습니다.');
            } else {
                $('.content-form').addClass('drr');
                toastAct('레이아웃이 2단으로<br />적용되었습니다.');
            }
        });
    }

});