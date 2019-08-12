console.log(1);

///  find all function
const flagAndName = function flagAndName(countries) {
  const countryFlags = countries.map((country, index) => {
    const { name, flag } = country;
    return {
      name,
      flag
    };
  });
  countryFlags.map((flag, index) => {
    if (countryFlags.length < 2) {
      {
        $(".slideshow-arrow").hide();
      }
    } else {
      $(".slideshow-arrow").show();
    }
    let countryName = flag.name;
    let flagImg = flag.flag;
    let inactive = "inactive";
    let indicator = "inactive-indicator";
    if (index < 1) {
      inactive = "";
      indicator = "";
    }

    $("#indicator").append(
      ` <li class='slideshow-indicator ${indicator}'></li>`
    );
    $("#imgSlider").append(
      `<div class='che-slideshow-slide ${inactive}'><img src='${flagImg}'><div class='che-slideshow-caption'>${countryName}</div>`
    );
  });
};
