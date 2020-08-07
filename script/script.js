/*팝업&모달*/
function goMarking() {
    alert("\"컨트롤키+D\"를 눌러 즐겨찾기에 추가해주세요.");
}

function goModal() {      //사용자정의 함수명
    document.getElementById("modalArea").style.display="block";
}

function popUpClose() {
    document.getElementById("modalArea").style.display="none";
}

/*개수, 가격관련*/

// 단가, 현재 결과화면에서는 34000원을 계속 유지하고 있음
unitCost = document.getElementById("unitPrice_01").innerText;

function fnCntUp() {
    /*수량 증가 시작*/
    var goodsCnt = document.getElementById("goodsCnt").value;
    goodsCnt = parseInt(goodsCnt);
    goodsCnt++;
    document.getElementById("goodsCnt").value = goodsCnt;
    /*수량 증가 끝*/

    /*상품 가격 동기화 시작*/
    var unitPrice_01; //상품 개별 옵션 가격
    unitPrice_01 = unitCost;
    unitPrice_01 = parseInt(unitPrice_01);
    unitPrice_01 *= goodsCnt;
    document.getElementById("unitPrice_01").innerText = unitPrice_01.toString();


    var totalPrice;
    totalPrice = unitPrice_01;
    totalPrice = parseInt(totalPrice);
    document.getElementById("totalPrice").innerText = totalPrice.toString();
    /*상품가격 동기화 끝*/
}

function fnCntDown() {
    /*수량 감소 시작*/
    var goodsCnt = document.getElementById("goodsCnt").value;
    goodsCnt = parseInt(goodsCnt);

    if (goodsCnt>1) {
        goodsCnt--;
        document.getElementById("goodsCnt").value = goodsCnt;
        /*상품 가격 동기화 시작*/
        var unitPrice_01; //상품 개별 옵션 가격
        unitPrice_01 = unitCost;
        unitPrice_01 = parseInt(unitPrice_01);
        var nowDisplayPrice = document.getElementById("unitPrice_01").innerText;
        nowDisplayPrice = parseInt(nowDisplayPrice);
        nowDisplayPrice -= unitCost;
        document.getElementById("unitPrice_01").innerText = nowDisplayPrice.toString();


        var totalPrice;
        var nowDisplayTotal = document.getElementById("totalPrice").innerText;
        nowDisplayTotal = parseInt(nowDisplayTotal);
        nowDisplayTotal -= unitCost;
        document.getElementById("totalPrice").innerText = nowDisplayTotal.toString();
        /*상품가격 동기화 끝*/
    } else {
        alert ("최소 수량은 1개입니다.");
        }  // 함수 즉시 종료(함수 내부에 있는 코드가 더이상 실행되지 않음)
    /*수량 감소 끝*/

}
