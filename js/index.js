$(document).ready(function() {
  var strimeri = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  var strimerionline = [];
  var strimerioffline = [];
  var strimerino = [];

  function always() {
    jQuery.each(strimeri, function(index, value) {
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + value + "/?callback=?", function(data) {
        if (data.status == "404") {
          strimerino.push(strimeri[index]);
        } else if (!data.stream) {
          strimerioffline.push(strimeri[index]);
        } else {
          strimerionline.push(strimeri[index]);
        }
      })
    })
  };

  function always2() {
    jQuery.each(strimeri, function(index, value) {
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + value + "/?callback=?", function(data) {
        if (data.status == "404") {
          $("#" + value + " .description").html("Does not exist");
          $("#" + value).addClass("novice");
          $("#" + value + " .title").html("<a href='https://twitch.tv/" + value + "' target='_blank'>" + value + "</a>");
        } else if (!data.stream) {
          $("#" + value + " .description").html("Offline");
          $("#" + value).addClass("red");
          $("#" + value + " .title").html("<a href='https://twitch.tv/" + value + "' target='_blank'>" + value + "</a>");
        } else {
          $("#" + value + " .description").html(data.stream.channel.status);
          $("#" + value).addClass("green");
          $("#" + value + " .title").html("<a href='https://twitch.tv/" + value + "' target='_blank'>" + value + "</a>");
        }

      })
    })
  };
  always();
  always2();
  $("#online").click(function() {
    jQuery.each(strimerioffline, function(index, value) {
      $("#" + value).hide();
    })
    jQuery.each(strimerionline, function(index, value) {
      $("#" + value).show();
    })
    jQuery.each(strimerino, function(index, value) {
      $("#" + value).hide();
    })
  })
  $("#all").click(function() {
    jQuery.each(strimeri, function(index, value) {
      $("#" + value).show();
    })
  })
  $("#offline").click(function() {
    jQuery.each(strimerino, function(index, value) {
      $("#" + value).hide();
    })
    jQuery.each(strimerionline, function(index, value) {
      $("#" + value).hide();
    })
    jQuery.each(strimerioffline, function(index, value) {
      $("#" + value).show();
    })
  })

})