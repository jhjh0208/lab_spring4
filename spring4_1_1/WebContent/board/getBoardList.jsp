<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시판 구현 - [webapp]</title>
<%-- <jsp:include page="../common/commonUIglobal.jsp" flush="false"/> --%>
</head>
<body>
<table class="easyui-datagrid" data-options="title:'게시판',toolbar:'#tb_board'" style="width:500px;height:350px">
    <thead>
        <tr>
            <th data-options="field:'code'">Code</th>
            <th data-options="field:'name'">Name</th>
            <th data-options="field:'price'">Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td><td>name1</td><td>2323</td>
        </tr>
        <tr>
            <td>002</td><td>name2</td><td>4612</td>
        </tr>
    </tbody>	
</table>
    <div id="tb_board" style="padding:2px 5px;">
        <a href="#" class="easyui-linkbutton" iconCls="icon-search" plain="true">조회</a>
        <a href="#" class="easyui-linkbutton" iconCls="icon-add" plain="true">입력</a>
        <a href="#" class="easyui-linkbutton" iconCls="icon-edit" plain="true">수정</a>
        <a href="#" class="easyui-linkbutton" iconCls="icon-cancel" plain="true">삭제</a>
    </div>    
</body>
</html>