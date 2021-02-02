<template>
<!-- Footer -->
	<section id="footer">
		<div class="container">
	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="https://www.facebook.com/MT10x10/"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="https://www.instagram.com/mt10x10/"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="https://line.me/ti/g2/X3878mSeMzAZFaPqgOu7oA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"><i class="fab fa-line"></i></a></li>
					</ul>
				</div>
				<hr>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                    <hr>
					<p class="copyright">© 2021 MT10x10 Cor.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank"></a></p>
				</div>
				<hr>
			</div>	
		</div>
	</section>
	<!-- ./Footer -->
</template>

<style>

/* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    font-family: "游明朝", YuMincho, "ヒラギノ明朝 ProN W3",
    "Hiragino Mincho ProN", "Sawarabi Mincho", "HG明朝E", "ＭＳ Ｐ明朝",
    "ＭＳ 明朝", serif !important;
}

section .section-title {
    text-align: center;
    color: rgba(0,0,0,.5);
    text-transform: uppercase;
}

#footer h5{
	padding-left: 10px;
    border-left: 3px solid #5a5757;
    padding-bottom: 6px;
    color:#ffffff;
}
#footer a {
     color: rgba(0,0,0,.5);
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:1.5rem;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
    color: rgba(0,0,0,.5);
}
#footer ul.social li a:hover{
    color: rgba(0,0,0,.5);
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}
.copyright{
    font-family: Lato,sans-serif;
    font-size: 1rem;
    text-align: center;
      color: rgba(0,0,0,.5);
    line-height: 1;
    margin-top: 15px;

}
@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}
</style>