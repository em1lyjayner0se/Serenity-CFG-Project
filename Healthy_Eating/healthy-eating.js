var PotatoRating = raterJs( {
    element:document.querySelector("#PotatoRating"),
    rateCallback:function rateCallback(rating, done) {
      console.log(rating)
      done(); 
    }
});
PotatoRating.setRating(4.5)

var LentilRating = raterJs( {
  element:document.querySelector("#LentilRating"),
  rateCallback:function rateCallback(rating, done) {
    console.log(rating)
    done(); 
  }
});
LentilRating.setRating(4)



// var myRating = raterJs({/

//     // shows a rating tooltip
//     showToolTip: true,

//     // the number of stars
//     max: 5,

//     // star size
//     starSize: 16,

//     // text to show when disabled.
//     disableText: 'Thank you for your vote!',

//     // Text to show when hover over stars.
//     ratingText: '{rating}/{maxRating}',

//     // displayed while user is rating but done not called yet.
//     isBusyText: null,

//     // between 0 and 1
//     step: undefined,

//     // reverse the ratings
//     reverse: false,

//     // is readonly?
//     readOnly: false
    
// });