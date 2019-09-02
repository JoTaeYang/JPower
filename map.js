var jPower = {
    lat: 37.501281,
    lng: 126.787788
};
var map;
function navMap(controlDiv, map){
    var navUI = document.createElement('div');
    navUI.style.backgroundColor = '#fff';
    navUI.style.border = '2px solid #fff';
    navUI.style.borderRadius = '3px';
    navUI.style.boxShadow = '0 2px 6px rgba (0,0,0, .3)';
    navUI.style.cursor = 'pointer';
    navUI.style.marginBottom = '22px';
    navUI.style.textAlign = 'center';
    navUI.style.marginTop = '10px';
    navUI.style.marginLeft = '10px';
    navUI.style.width = '100px';
    navUI.title = '안녕하세요';
    controlDiv.appendChild (navUI);

    var navText = document.createElement ( 'a');
    navText.href = 'https://www.google.co.kr/maps/dir//37.5012556,126.7877908/@37.5014492,126.7875261,18.75z/data=!4m2!4m1!3e3?hl=ko';
    navText.style.color = 'black';
    navText.style.fontFamily = '로보 토, 아리 알, 산세 리프';
    navText.style.fontSize = '16px';
    navText.style.lineHeight = '38px';
    navText.style.paddingLeft = '5px';
    navText.style.paddingRight = '5px';
    navText.style.textDecoration = 'none';
    navText.innerHTML = '길 찾기';
    navUI.appendChild (navText); 

    navUI.addEventListener('click', function () {
        
    });
    
}
function initMap() {

    map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 18,
        center: jPower,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          위치: google.maps.ControlPosition.RIGHT_BOTTOM
        },
      });
    var marker = new google.maps.Marker({
      position: jPower,
      map: map,
      title: '춘의테크노파크 201동 1110호'
    });

    var centerControlDiv = document.createElement('div');
    var centerControl = new navMap(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls [google.maps.ControlPosition.LEFT_TOP].push(centerControlDiv);
}