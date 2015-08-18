window.onload = function(){

	var oMenu = document.querySelector(".menu");

	var oNav = document.querySelector("#nav");

	oMenu.onclick = function(){

		if(oNav.className == ""){

			oNav.className = "show";

		}else{

			oNav.className = "";

			oNavSub.className = "";

			oArrow.className = "fa fa-angle-down";

		};
		
	};

	var oSearchBox = document.querySelector("#search_box");

	var oSearch = document.querySelector(".search");

	oSearch.onclick = function(){

		if(oSearchBox.className == ""){

			oSearchBox.className = "show";

		}else{

			oSearchBox.className = "";
		};
	};

	var oNavSub = document.querySelector("#nav_sub");

	var oService = document.querySelector(".service");

	var oArrow = document.querySelector("#arrow");

	oService.onclick = function(){

		if(oNavSub.className == ""){

			oNavSub.className = "show";

			oNav.className = "show2";

			oArrow.className = "fa fa-angle-up";



		}else{

			oNavSub.className = "";

			oNav.className = "show";

			oArrow.className = "fa fa-angle-down";

		}
	};

	var oNabTabletSub = document.querySelector("#nav_tablet_sub");

	var oServiceTablet = document.querySelector(".service_tablet");

	var oArrowTablet = document.querySelector("#arrow_tablet");

	oServiceTablet.onclick = function(){

		if(oNabTabletSub.className == ""){

			oNabTabletSub.className = "show";

			oArrowTablet.className = "fa fa-angle-up";

		}else{

			oNabTabletSub.className = "";
			console.log("hi");
			oArrowTablet.className = "fa fa-angle-down";
		}

	};





}