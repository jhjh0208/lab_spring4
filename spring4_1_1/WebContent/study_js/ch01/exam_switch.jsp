<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/common/commonUIglobal.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Campatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<body>
	<script type="text/javascript">
		function test() {
			let site = prompt('어떤 사이트가 좋으니?', "");
			let url;
			switch (site) {
			case "네이버":
				url = "naver.com";
				break;
			case "구글":
				url = "google.com";
				break;
			case "다음":
				url = "daum.net";
				break;
			}
			if (url) {
				location.href = "http://" + url;
			}
		}
	</script>
</head>
</body>
여기
<script type="text/javascript">
	test();
</script>
<br> 저기
</html>