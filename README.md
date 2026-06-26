<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Prep Expert Academy</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#f4f8fb;
color:#222;
}

header{
background:#0f172a;
color:white;
padding:18px 8%;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:1000;
}

.logo{
font-size:28px;
font-weight:700;
}

.logo span{
color:#38bdf8;
}

nav a{
color:white;
text-decoration:none;
margin-left:25px;
font-weight:500;
transition:.3s;
}

nav a:hover{
color:#38bdf8;
}

.hero{
display:flex;
justify-content:space-between;
align-items:center;
padding:80px 8%;
flex-wrap:wrap;
}

.hero-text{
max-width:550px;
}

.hero-text h1{
font-size:50px;
margin-bottom:20px;
}

.hero-text p{
font-size:18px;
line-height:1.8;
color:#555;
margin-bottom:30px;
}

.btn{
display:inline-block;
padding:14px 28px;
background:#0284c7;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:bold;
transition:.3s;
}

.btn:hover{
background:#0369a1;
}

.hero img{
width:450px;
max-width:100%;
}

.cards{
padding:70px 8%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:25px;
}

.card{
background:white;
padding:25px;
border-radius:15px;
box-shadow:0 8px 20px rgba(0,0,0,.08);
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

.card h3{
margin-bottom:10px;
}

footer{
background:#0f172a;
color:white;
text-align:center;
padding:25px;
margin-top:40px;
}

@media(max-width:900px){

.hero{
text-align:center;
}

.hero-text h1{
font-size:36px;
}

nav{
display:none;
}

}

</style>

</head>

<body>

<header>

<div class="logo">
Prep <span>Expert</span>
</div>

<nav>

<a href="#">Home</a>

<a href="#">Mock Test</a>

<a href="#">Notes</a>

<a href="#">PYQ</a>

<a href="#">Contact</a>

</nav>

</header>

<section class="hero">

<div class="hero-text">

<h1>India's Smart Learning Platform</h1>

<p>

Prepare for UKSSSC, NEET, CUET, JSSC and many more competitive exams with high quality mock tests, notes and previous year papers.

</p>

<a href="#" class="btn">

Start Learning

</a>

</div>

<div>

<img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" alt="Students">

</div>

</section>

<section class="cards">

<div class="card">

<h3>📚 Study Notes</h3>

<p>Simple notes with diagrams and explanations.</p>

</div>

<div class="card">

<h3>📝 Mock Tests</h3>

<p>Exam level practice with timer and analysis.</p>

</div>

<div class="card">

<h3>📄 Previous Papers</h3>

<p>Solve PYQs chapter-wise and subject-wise.</p>

</div>

</section>

<footer>

© 2026 Prep Expert Academy

</footer>

</body>
</html>
