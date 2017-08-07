var coronation1 = {
  modId: "coronation1",
  src: "images/coronation/coronation.jpg",
  alt: "King George VI- coronation portrait",
  figcaption: "His coronation was on May 12, 1937."
};
var coronation2 = {
  modId: "coronation2",
  src: "images/coronation/coronation2.jpg",
  alt: "King George VI sitting on the throne",
  figcaption: "1937 was known as the Year of Three Kings."
};

var coronation3 = {
  modId: "coronation3",
  src: "images/coronation/coronation3.jpg",
  alt: "coronation photo",
  figcaption: "Photograph from the coronation"
};

var coroScene = {
  modId: "coroScene",
  src: "images/coronation/coronationScene.jpg",
  alt: "Scene from the coronation",
  figcaption: "Scene from the coronation"
};

var withOrb = {
  modId: "withOrb",
  src: "images/coronation/withOrb.jpg",
  alt: "coronation robes with orb",
  figcaption: "Coronation painting with Orb"
};

var family1 = {
  modId: "family1",
  src: "images/family/family1.jfif",
  alt: "Pic of the royal family",
  figcaption: "Left to right: Queen Mary (wife), Princess Margaret (younger daughter), Pricess Elizabeth (elder daughter)."
};

var babyLilbeth = {
  modId: "babyLilbeth",
  src: "images/family/baby.jpg",
  alt: "The birth of Princess Elizabeth",
  figcaption: "The birth of princess Elizabeth"
};

var family2 ={
    modId: "family2",
    src: "images/family/family2.jpg",
    alt: "Royal family in a carriage",
    figcaption: "Royal family riding in a carriage"
}


var uniform1 = {
  modId: "uniform1",
  src: "images/military/uniformbw1.jfif",
  alt: "Wearing his uniform",
  figcaption: "He proved to be a strong leader during World War II."
};

var uniform2 = {
  modId: "uniform2",
  src: "images/military/uniformbw1.jpg",
  alt: "another pic in his uniform",
  figcaption: "Another picture of him in his uniform"
};

var uniform3 = {
  modId: "uniform3",
  src: "images/military/uniformColor1.jpg",
  alt: "Berestford paining",
  figcaption: "Painted by Frank Ernest Berestford"
};

var pics = [coronation1, coronation2, coronation3, coroScene, withOrb, family1, family2, babyLilbeth, uniform1, uniform2, uniform3];

var albums = [{
  title: "Coronation",
  btnId: "#coronation",
  pictures: [
    coronation1,
    coronation2,
    coronation3,
    coroScene,
    withOrb
  ]
}, {
  title: "Military Career",
  btnId: "#military",
  pictures: [
    uniform1,
    uniform2,
    uniform3
  ]
}, {
  title: "Family",
  btnId: "#family",
  pictures: [
    babyLilbeth,
    family1,
    family2
  ]
}];

var modSource = $("#modal-template").html();
var modTemplate = Handlebars.compile(modSource);

var carouselSource = $("#carousel-template").html();
var carouselTemplate = Handlebars.compile(carouselSource);


//showGallery();

$("#searchBtn").click(function() {
  $("#album").empty();
  $("#myCarousel").css("display", "none");
  var searchText = $('#searchBox').val();
  for (var i = 0; i < albums.length; i++) {
    for (var j = 0; j < albums[i].pictures.length; j++) {
      if (albums[i].pictures[j].figcaption.search(searchText) > -1 || albums[i].pictures[j].alt.search(searchText) > -1) {
        $("#album").append(modTemplate(albums[i].pictures[j]));
      }
    }
  }
});

//$("#gallery").click(showAll);
for(var i = 0; i < albums.length; i++){
    (function(i){
        $(albums[i].btnId).click(
            function(){
                $("#album").empty();
                $("#myCarousel").css("display", "none");
                albums[i].pictures = shuffle(albums[i].pictures);
                for(var j = 0; j < albums[i].pictures.length; j++){
                    $("#album").append(modTemplate(albums[i].pictures[j]));
                }
            }
        );
    })(i);
}

display("gallery");

$("#carousel").click(function(){
  display("gallry");
  //$("#myCarousel").css("display", "inherit");
});

$("#gallery").click(function(){
  display("gallery");
  //$("#myCarousel").css("display", "none");
});

function display(view) {
  $("#album").empty();
  pics = shuffle(pics);
  for (var i = 0; i < pics.length; i++) {
      (function(j) {
        if(view == "gallery"){
          $("#myCarousel").css("display", "none");
          $("#album").append(modTemplate(pics[j]));
        }
        else{
          $("#slides").append(carouselTemplate(pics[j]));
          $("#sliders").append('<li data-target="#myCarousel" data-slide-to="' + i + '"></li>');
          $("#myCarousel").css("display", "inherit");
        }
      })(i);
  }
  
  
}


//Using the Fisher-Yates shuffle algorithm

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}