<?php
	header("content-type:text/html;charset=utf-8");
	$phone=$_GET["lo_phone"];
	$psd=$_GET["lo_psd"];
	mysql_connect("127.0.0.1","root","root");
	mysql_select_db("zql");
	mysql_query("set names utf8");
	$sql="select * from `tab` where phone = '$phone'";
	$res=mysql_query($sql);
	$arr=mysql_fetch_assoc($res);
	if($arr){
		if($psd==$arr["psd"]){
			echo "<script>alert('登录成功');location.href='../index.html'</script>";
		}else{
			echo "<script>alert('密码错误');location.href='login.html'</script>";
		}
        
    }else{
         echo "<script>alert('登录失败');location.href='login.html'</script>";
    }	
?>