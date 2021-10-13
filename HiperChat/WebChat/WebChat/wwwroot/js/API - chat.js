$(function () {

    $("#Enviar").click(
        function () {

            var mensagem = $("#mensagem").val();

            var stringUrl = "api/Chat";

      

            $.ajax({
                type: "POST",
                url: stringUrl,
                async: false,
                data: { mensagem: mensagem },

                success: function (data) {


                    $("#displaymensagem").append('<div class="client-message message">' + mensagem + '</div>' + "\n");
                    $("#displaymensagem").append('<div class="bot-message message">' + data.resposta + '</div>' + "\n");
                  
                    $("#displaymensagem").scrollTop($("#displaymensagem").height() * 1000);

                    $("#mensagem").val("")
                    
                  
                }
            });


        }
    );

});