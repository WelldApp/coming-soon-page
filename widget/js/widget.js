document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  //const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  //newDiv.appendChild(newContent);

  newDiv.id = 'widget-container';
  newDiv.innerHTML = '<div class="widget-head" id="widget-head" onclick="widget_collapse();"><div class="widget-head-div"><img src="/imgs/icon.png" width="18"></div><div class="widget-head-div" id="w_hedaer_txt">Wallets</div><div class="widget-head-div" style="text-align: right;"><img src="/imgs/circle-info-solid.svg" style="cursor: pointer; text-align: right;" width="22" onclick="w_get_info();"></div></div>' ;
  newDiv.innerHTML += '<div class="widget-body" id="widget-body">Body</div>' ;
  newDiv.innerHTML += '<div class="widget-footer" id="widget-footer">Footer</div>' ;
  
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

  newDiv.className = 'widget' ;

  // Load CSS for the widget
  var element = document.createElement("link");
  element.setAttribute("rel", "stylesheet");
  element.setAttribute("type", "text/css");
  element.setAttribute("href", "https://www.welldapp.io/widget/css/widget.css");
  document.getElementsByTagName("head")[0].appendChild(element);
  widget_collapse();
  
}


function widget_collapse() {
  var w_container = document.getElementById("widget-container");	
  var w_header = document.getElementById("widget-head");	
  var w_body = document.getElementById("widget-body");
  var w_footer = document.getElementById("widget-footer");
  if (w_body.style.display === "none") {
    w_body.style.display = "block";
    w_footer.style.display = "block";
    w_header.style.borderRadius = "1em 1em 0em 0em";
    w_header.style.cursor = "s-resize";
    w_container.style.width = "18em";
  } else {
    w_body.style.display = "none";
    w_footer.style.display = "none";
    w_header.style.borderRadius = "1em";
    w_container.style.width = "10em";
    w_header.style.cursor = "n-resize";
  }
}

function w_get_info(){

}


