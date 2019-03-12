<?php
	header("content-type:text/html;charset=utf-8");
	$phone=$_GET["phone"];
	$psd=$_GET["psd"];
	mysql_connect("127.0.0.1","root","root");
	mysql_select_db("zql");
	mysql_query("set names utf8");
	$sql="select * from `tab` where phone = '$phone'";
	$res=mysql_query($sql);
	$arr=mysql_fetch_assoc($res);
	if($arr){
        echo "<script>alert('用户已存在,重新注册');location.href='register.html'</script>";
    }else{
        $sql="insert into `tab` (phone,psd) values ('$phone','$psd')";
        $res=mysql_query($sql);
        if($res){
            echo "<script>alert('注册成功');location.href='login.html'</script>";
        }else{
            echo "<script>alert('注册失败');location.href='register.html'</script>";
        }
    }	
?>