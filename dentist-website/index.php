<?php

// $conn = mysqli_connect('localhost','root','','contact_db') or die('connection failed');

// if(isset($_POST['submit'])){

//    $name = mysqli_real_escape_string($conn, $_POST['name']);
//    $email = mysqli_real_escape_string($conn, $_POST['email']);
//    $number = $_POST['number'];
//    $date = $_POST['date'];

//    $insert = mysqli_query($conn, "INSERT INTO `contact_form`(name, email, number, date) VALUES('$name','$email','$number','$date')") or die('query failed');

//    if($insert){
//       $message[] = 'appointment made successfully!';
//    }else{
//       $message[] = 'appointment failed';
//    }

// }

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>BluQuery</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

   <!-- bootstrap cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style1.css">

</head>
<body>
   
<!-- header section starts  -->

<header class="header fixed-top">

   <div class="container">

      <div class="row align-items-center justify-content-between">

         <a href="#home" class="logo">Blu<span>Query</span></a>

         <nav class="nav">
            <a href="#home">Home</a>
            <a href="#about">Sobre Nós</a>
            <a href="#services">Serviços</a>
            <a href="#reviews">Comentários</a>
            <a href="#contact">Contato</a>
         </nav>

         <a href="#contact" class="link-btn">Acesse nosso sistema</a>

         <div id="menu-btn" class="fas fa-bars"></div>

      </div>

   </div>

</header>

<!-- header section ends -->

<!-- home section starts  -->

<section class="home" id="home">

   <div class="container">

      <div class="row min-vh-100 align-items-center">
         <div class="content text-center text-md-left">
            <h3>Marque suas consultas sem problemas</h3>
            <p>Com um sistema fácil e intuitivo nós trazemos pra você o conforto e praticidade para marcar suas consultas online.</p>
            <a href="#contact" class="link-btn">Acesse nosso sistema</a>
         </div>
      </div>

   </div>

</section>

<!-- home section ends -->

<!-- about section starts  -->

<section class="about" id="about">

   <div class="container">

      <div class="row align-items-center">

         <div class="col-md-6 image">
            <img src="images/sobre-nos.png" class="w-100 mb-5 mb-md-0" alt="">
         </div>

         <div class="col-md-6 content">
            <span>Sobre Nós</span>
            <h3>Quem escolheu realmente cuidar da sua saúde de verdade.</h3>
            <p>Aqui na BluQuery somos apaixonados por saúde e bem estar. E pensando nisso decidimos criar um produto que não só trás um atendimento de qualidade como
               também preserva a sua saúde que é a nossa prioridade, sem burocracia ou fidelidade. Tudo pensado para facilitar a sua vida.
            </p>
            <a href="#contact" class="link-btn">Acesse nosso sistema</a>
         </div>

      </div>

   </div>

</section>

<!-- about section ends -->

<!-- services section starts  -->

<section class="services" id="services">

   <h1 class="heading">Nossos Serviços</h1>

   <div class="box-container container">

      <div class="box">
         <img src="images/icon-1.svg" alt="">
         <h3>Alignment specialist</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, non?</p>
      </div>

      <div class="box">
         <img src="images/icon-2.svg" alt="">
         <h3>Cosmetic dentistry</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, non?</p>
      </div>

      <div class="box">
         <img src="images/icon-3.svg" alt="">
         <h3>Oral hygiene experts</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima?</p>
      </div>

      <div class="box">
         <img src="images/icon-4.svg" alt="">
         <h3>Root canal specialist</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima?</p>
      </div>

      <div class="box">
         <img src="images/icon-5.svg" alt="">
         <h3>Live dental advisory</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima?</p>
      </div>

      <div class="box">
         <img src="images/icon-6.svg" alt="">
         <h3>Cavity inspection</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima?</p>
      </div>

   </div>

</section>

<!-- services section ends -->

<!-- reviews section starts  -->

<section class="reviews" id="reviews">

   <h1 class="heading"> Veja o que nossos clientes estão dizendo </h1>

   <div class="box-container container">

      <div class="box">
         <img src="images/guga.jpeg" alt="">
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, iure? Nemo est aspernatur voluptatum id, laboriosam asperiores iure omnis alias?</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Gugla Clake</h3>
         <span>satisfied client</span>
      </div>

      <div class="box">
         <img src="images/daniel.jpg" alt="">
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, iure? Nemo est aspernatur voluptatum id, laboriosam asperiores iure omnis alias?</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Daniel Fer</h3>
         <span>satisfied client</span>
      </div>

      <div class="box">
         <img src="images/joao.jpg" alt="">
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, iure? Nemo est aspernatur voluptatum id, laboriosam asperiores iure omnis alias?</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>João Dudu</h3>
         <span>satisfied client</span>
      </div>

   </div>

</section>

<!-- reviews section ends -->

<!-- contact section starts  -->

<section class="contact" id="contact">

   <h1 class="heading">Tem dúvidas? Entre em contato</h1>

   <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
      <?php 
         if(isset($message)){
            foreach($message as $message){
               echo '<p class="message">'.$message.'</p>';
            }
         }
      ?>
      <span>seu nome :</span>
      <input type="text" name="name" placeholder="Digite seu nome" class="box" required>
      <span>seu e-mail :</span>
      <input type="email" name="email" placeholder="Digite seu melhor e-mail" class="box" required>
      <span>seu número :</span>
      <input type="number" name="number" placeholder="Digite seu melhor número" class="box" required>
      <span>data da consulta :</span>
      <input type="datetime-local" name="date" class="box" required>
      <input type="submit" value="Enviar" name="submit" class="link-btn">
   </form>  

</section>

<!-- contact section ends -->

<!-- footer section starts  -->

<section class="footer">

   <div class="box-container container">

      <div class="box">
         <i class="fas fa-phone"></i>
         <h3>Número de telefone</h3>
         <p>+123-456-7890</p>
         <p>+111-222-3333</p>
      </div>
      
      <div class="box">
         <i class="fas fa-map-marker-alt"></i>
         <h3>Nosso endereço</h3>
         <p>R. Augusta, 973 - Consolação, São Paulo - SP, 01305-100</p>
      </div>

      <div class="box">
         <i class="fas fa-clock"></i>
         <h3>Horário de Funcionamento</h3>
         <p>09:00 - 18:00</p>
      </div>

      <div class="box">
         <i class="fas fa-envelope"></i>
         <h3>E-mail para contato</h3>
         <p>guglaclake@gmail.com</p>
         <p>danielfer@gmail.com</p>
      </div>

   </div>

   <div class="credit"> &copy; copyright @ <?php echo date('Y'); ?> by <span>BluQuery</span>  </div>

</section>

<!-- footer section ends -->










<!-- custom js file link  -->
<script src="js/script.js"></script>

</body>
</html>