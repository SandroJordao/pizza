<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title>Jogo da Pizza</title>
		<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" media="screen">
		<link rel="stylesheet" type="text/css" href="css/alerts.css" media="screen">
		<link rel="stylesheet" type="text/css" href="css/style.css" media="screen">
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/jquery-ui.js"></script>
		<script type="text/javascript" src="js/alerts.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
	</head>
	<body>
		<div class="title">JOGO DA PIZZA</div>
		<div class="main">
			<div class="column">
				<div class="column-1">
					<div class="time">
						<div>TEMPO</div>
						<div id="clock">00:00</div>
						<div><i class="icon-infinity"></i></div>
					</div>
					<div>
						<div class="pizza pizza-background" id="pizza-6">
							<div class="slice slice-1">
								<img src="img/slice-1.png" />
							</div>
							<div class="slice slice-2">
								<img src="img/slice-2.png" />
							</div>
							<div class="slice slice-3">
								<img src="img/slice-3.png" />
							</div>
							<div class="slice slice-4">
								<img src="img/slice-4.png" />
							</div>
							<div class="slice slice-5">
								<img src="img/slice-5.png" />
							</div>
							<div class="slice slice-6">
								<img src="img/slice-6.png" />
							</div>
							<div class="slice slice-7">
								<img src="img/slice-7.png" />
							</div>
							<div class="slice-8">+1</div>
						</div>
					</div>
					<div>
						<div class="pizza pizza-background" id="pizza-5">
							<div class="slice slice-1">
								<img src="img/slice-1.png" />
							</div>
							<div class="slice slice-2">
								<img src="img/slice-2.png" />
							</div>
							<div class="slice slice-3">
								<img src="img/slice-3.png" />
							</div>
							<div class="slice slice-4">
								<img src="img/slice-4.png" />
							</div>
							<div class="slice slice-5">
								<img src="img/slice-5.png" />
							</div>
							<div class="slice slice-6">
								<img src="img/slice-6.png" />
							</div>
							<div class="slice slice-7">
								<img src="img/slice-7.png" />
							</div>
							<div class="slice-8">+1</div>
						</div>
					</div>
					<div class="actions">
						<div id="action-play"><i class="icon-play"></i></div>
						<div id="action-stop"><i class="icon-pause"></i></div>
						<div id="action-reload"><i class="icon-reload"></i></div>
					</div>
				</div>
				<div class="column-2">
					<div>
						<div class="pizza pizza-background" id="pizza-1">
							<div class="slice slice-1">
								<img src="img/slice-1.png" />
							</div>
							<div class="slice slice-2">
								<img src="img/slice-2.png" />
							</div>
							<div class="slice slice-3">
								<img src="img/slice-3.png" />
							</div>
							<div class="slice slice-4">
								<img src="img/slice-4.png" />
							</div>
							<div class="slice slice-5">
								<img src="img/slice-5.png" />
							</div>
							<div class="slice slice-6">
								<img src="img/slice-6.png" />
							</div>
							<div class="slice slice-7">
								<img src="img/slice-7.png" />
							</div>
							<div class="slice-8">+1</div>
						</div>
					</div>
					<div class="pizza-background">
						<div class="pizza-rand" id="pizza-rand">
							<div class="slice slice-1">
								<img src="img/slice-1.png" />
							</div>
							<div class="slice slice-2">
								<img src="img/slice-2.png" />
							</div>
							<div class="slice slice-3">
								<img src="img/slice-3.png" />
							</div>
							<div class="slice slice-4">
								<img src="img/slice-4.png" />
							</div>
							<div class="slice slice-5">
								<img src="img/slice-5.png" />
							</div>
							<div class="slice slice-6">
								<img src="img/slice-6.png" />
							</div>
							<div class="slice slice-7">
								<img src="img/slice-7.png" />
							</div>
						</div>
					</div>
					<div>
						<div class="pizza pizza-background" id="pizza-4">
							<div class="slice slice-1">
								<img src="img/slice-1.png" />
							</div>
							<div class="slice slice-2">
								<img src="img/slice-2.png" />
							</div>
							<div class="slice slice-3">
								<img src="img/slice-3.png" />
							</div>
							<div class="slice slice-4">
								<img src="img/slice-4.png" />
							</div>
							<div class="slice slice-5">
								<img src="img/slice-5.png" />
							</div>
							<div class="slice slice-6">
								<img src="img/slice-6.png" />
							</div>
							<div class="slice slice-7">
								<img src="img/slice-7.png" />
							</div>
							<div class="slice-8">+1</div>
						</div>
					</div>
				</div>
				<div class="column-3">
					<div class="score">
						<div><img src="img/pizza.png" /></div>
						<div>x <span id="score">0</span></div>
					</div>
					<div>
						<div class="pizza pizza-background" id="pizza-2">
							<div class="slice slice-1">
								<img src="img/slice-1.png" />
							</div>
							<div class="slice slice-2">
								<img src="img/slice-2.png" />
							</div>
							<div class="slice slice-3">
								<img src="img/slice-3.png" />
							</div>
							<div class="slice slice-4">
								<img src="img/slice-4.png" />
							</div>
							<div class="slice slice-5">
								<img src="img/slice-5.png" />
							</div>
							<div class="slice slice-6">
								<img src="img/slice-6.png" />
							</div>
							<div class="slice slice-7">
								<img src="img/slice-7.png" />
							</div>
							<div class="slice-8">+1</div>
						</div>
					</div>
					<div>
						<div class="pizza pizza-background" id="pizza-3">
							<div class="slice slice-1">
								<img src="img/slice-1.png" />
							</div>
							<div class="slice slice-2">
								<img src="img/slice-2.png" />
							</div>
							<div class="slice slice-3">
								<img src="img/slice-3.png" />
							</div>
							<div class="slice slice-4">
								<img src="img/slice-4.png" />
							</div>
							<div class="slice slice-5">
								<img src="img/slice-5.png" />
							</div>
							<div class="slice slice-6">
								<img src="img/slice-6.png" />
							</div>
							<div class="slice slice-7">
								<img src="img/slice-7.png" />
							</div>
							<div class="slice-8">+1</div>
						</div>
					</div>
					<div class="life">
						<div id="life-text">VIDAS</div>
						<div id="life-1"><img src="img/life-1.png" /></div>
						<div id="life-2"><img src="img/life-2.png" /></div>
						<div id="life-3"><img src="img/life-3.png" /></div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>