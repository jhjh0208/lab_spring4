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
    </head>
    <body>
        <script type="text/javascript">
        let age = prompt('당신의 나이는?' ,0);
        if(age>=20){
            document.write("당신은 성인입니다.");
        }
        else{
            document.write("당신은 미성년자입니다.");
        }
        document.write(`${age}`);
        </script>
        저기
    </body>
</html>