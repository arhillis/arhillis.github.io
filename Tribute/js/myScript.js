 var modSource = $("#modal-template").html();
        var modTemplate = Handlebars.compile(modSource);

        var coronation1 = {
            modId: "coronation1",
            src: "images/coronation.jpg",
            alt: "King George VI- coronation portrait",
            figcaption: "His coronation was on May 12, 1937."
        }
        var coronation2 ={
            modId: "coronation2",
            src: "images/coronation2.jpg",
            alt: "King George VI sitting on the throne",
            figcaption: "1937 was known as the Year of Three Kings."
        };

        var coroScene = {
            modId: "coroScene",
            src: "images/coronationScene.jpg",
            alt: "Scene from the Coronation",
            figcaption: "Scene from the coronation"
        }
        var family = {
            modId: "family",
            src: "images/family1.jfif",
            alt: "Pic of the royal family",
            figcaption: "Left to right: Queen Mary (wife), Princess Margaret (younger daughter), Pricess Elizbeth (elder daughter)."
        };

        var babyLilbeth = {
            modId: "babyLilbeth",
            src: "images/baby.jpg",
            alt: "The birth of Princess Elizabeth",
            figcaption: "The birth of princess Elizabeth"
        };

        var uniform = {
            modId: "uniform",
            src: "images/uniformbw1.jfif",
            alt: "Wearing his uniform",
            figcaption: "He proved to be a strong leader during World War II."
        };

        var uniform2 = {
            modId: "uniform2",
            src: "images/uniformbw1.jpg",
            alt: "another pic in his uniform",
            figcaption: "Another picture of him in his uniform"
        };

        var pics = [coronation1, coronation2, coroScene, family, babyLilbeth, uniform, uniform2];

        for(var i = 0; i < pics.length; i++){
            (function(j){
                    $("#album").append(modTemplate(pics[j]));          
            })(i);
        }

        $("#searchBtn").click(function(){
            var searchText = $('searchBox').val();
            var results = {
                pics: pics.filter(function(d){
                    if(d.alt.search(searchText) > -1){
                        console.log(d.alt.search(searchText));
                    }
                    if(d.figcaption.search(searchText) > -1){
                        console.log(d.modId);
                    }
                }),
            };
        });