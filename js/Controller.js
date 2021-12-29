var myApp=angular.module("app",['ngAnimate','ngCookies']);
myApp.controller("controller",
function ($scope, $http, $cookies, $window){



/*------------------------------------------LIST OF COURses--------------------------------------------------*/

 var ch=['1 AA101 Essential Physical Activity 1 to 4 NA Dr. Purnendu Das'
,'2 AA102 National Sports Organization 1 to 4 NA Dr. Purnendu Das'
,'3 AA103 National Service Scheme 1 to 4 NA Dr. Pawan Kumar Mishra'
,'4 CA250 Professional Ethics 2 G56 203 Dr. Nagesh D. Patil'
,'5 CS101 Discrete Structures 4 I14 202 Dr. Barun Gorain'
,'6 CS200 Software Tool and Technologies Lab-II 4 K14 204 Dr. Amit Kumar Dhar Dr. Dhiman Saha'
,'7 CS203 Theory of Computation I 4 C14 107 Dr. Rishi Ranjan Singh Dr. Barun Gorain'
,'8 CS250 Operating Systems 4 H36 304 Dr. Anand M. Baswade'
,'9 CS251 Introduction to Language Processing 4 D14 102 Dr. Vishwesh Jatala'
,'10 CS252 Algorithms 4 F36 102 Dr. I. Vinod Kumar Reddy'
,'11 CS254 Database Management Systems 4 L14 103 Dr. Subhajit Sidhanta'
,'12 CS499 Thesis 6 to 24 NA DUGC EECS'
,'13 CS518 Simulation of Biology 2 F56 302 Dr. Arzad Alam Kherani Dr. Rishi Ranjan Singh Dr. Rukmankesh'
,'14 CS519 High Performance Computer Architecture 6 A16 103 Dr. Vishwesh Jatala'
,'15 CS552 Network Science 6 H16 102 Dr. Rishi Ranjan Singh'
,'16 CS559 Computer System Design 6 K16 102 Dr. Gagan Raj Gupta Dr. Subhajit Sidhanta'
,'17 CS599 Thesis 6 to 24 NA DPGC EECS'
,'18 CS607 Adversarial Machine Learning: Security and Privacy of ML 6 E16 202 Dr. SK Subidh Ali'
,'19 CS608 Advanced Graph Algorithms 6 C16 103 Dr. Vinod I Reddy'
,'20 CS614 Quantum Symmetric-key cryptoanalysis 6 I16 204 Dr. Dhiman Saha'
,'21 CS795 Phd Candidacy 0 NA DPGC-EECS'
,'22 CS799 Thesis 6 to 24 NA DPGC-EECS'
,'23 CY202 Applied Chemistry 2 B12 102 Dr. Arup Mukherjee'
,'24 CY203 An Introduction to Food Science and Technology 2 I34 102 Dr. Arup Mukherjee'
,'25 CY506 Inorganic Chemistry Practical 2 R14 CY Lab Dr. Arup Mukherjee Dr. Raghavender Medishetty'
,'26 CY507 Statistical Mechanics and Thermodynamics 4 I36 203 Dr. MD. Mehboob Alam'
,'27 CY508 Molecular Spectroscopy 4 H14 202 Dr. Satyajit Gupta'
,'28 CY509 Bioinorganic Chemistry 6 A16 202 Dr. Suchetan Pal'
,'29 CY510 Stereochemistry and Reaction Mechanism 6 K16 202 Dr. Ganapathy D'
,'30 CY511 Physical Organic Chemistry 2 D12 202 Dr. Sanjib Banerjee'
,'31 CY512 Thermal and Photochemical Reactions 4 D36 202 Dr. Raghavender Medishetty'
,'32 CY513 Physical Chemistry Lab 2 S14 CY Lab Dr. Md Mehboob Alam'
,'33 CY514 Organic Chemistry Lab 2 V36 CY Lab Dr. Ganapathy D Dr. Sanjib Banerjee'
,'34 CY608 Nanostructured Materials 2 F56 202 Dr. Satyajit Gupta'
,'35 CY610 Molecular Physical Chemistry for Engineers 2 B34 102 Dr. MD. Mehboob Alam'
,'36 CY613 Materials for Emerging Applications 2 I56 202 Dr. Sanjib Banerjee'
,'37 CY616 Molecular Geometry Predictions 2 L56 102 Dr. Md Mehboob Alam'
,'38 CY617 Introduction to Solar Energy Material 2 B56 102 Dr. Satyajit Gupta'
,'39 CY618 Bionanotechnology 2 F34 202 Dr. Suchetan Pal'
,'40 CY619 Industrial Inorganic Chemistry 2 F12 202 Dr. Raghavender Medishetty'
,'41 CY622 Introduction to Molecular Modeling 2 L12 102 Dr. Rukmankesh'
,'42 CY624 Chemistry of Heterocyclic compounds and natural products 6 C16 203 Dr. Ganapathy D'
,'43 CY626 Advanced Molecular Simulation – Underneath Theory and Practice 6 L16 302 Dr. MD. Mehboob Alam'
,'44 CY627 An Introduction to Catalyst Design: Function and Application 2 L34 102 Dr. Arup Mukherjee'
,'45 CY629 Introduction to Health, Safety and Environmental Practices 2 B12 202 Dr. Ganapathy D'
,'46 CY699 Thesis 18 NA DPGC CY'
,'47 CY795 Phd Candidacy 0 NA DPGC CY'
,'48 CY799 Thesis 6 to 24 NA DPGC CY'
,'49 DS201 Statistical Programming 4 H14 107 Dr. Nitin Khanna'
,'50 DS209 Information Security 4 D36 207 Dr. Souradyuti Paul'
,'51 DS250 Data Analytics and Visualization 6 I16 103 Dr. Gagan Raj Gupta'
,'52 DS251 Artificial Intelligence 6 F16 107 Dr. Soumajit Pramanik'
,'53 DS252 DSAI - Lab 2 Q36 EE Lab Dr. SK Subidh Ali'
,'54 DS501 Information Retrieval 6 B16 103 Dr. Soumyajit Pramanik'
,'55 DS599 Thesis 6 to 24 NA DPGC EECS'
,'56 DS602 Digital Speech Processing 6 A16 107 Dr. Anil Kumar Sao'
,'57 DS795 Phd Candidacy 0 NA DPGC EECS'
,'58 DS799 Thesis 6 to 24 NA DPGC EECS'
,'59 EE171 EE Independent Project 2 36 NA Dr. Nitin Khanna'
,'60 EE203 Embedded Systems 4 K14 203 Prof. Santosh Biswas'
,'61 EE204 Analog Circuits 6 L16 107 Dr. Nikhil Chander'
,'62 EE205 Power Engineering-I 6 D16 203 Dr. Prashant Agnihotri'
,'63 EE352 EE Lab 2 S14 EE Lab Dr. Sreejith T. V'
,'64 EE353 EE Lab 2 U36 EE Lab Dr. Nitin Khanna'
,'65 EE371 Independent Project 2 14 NA Dr. Anil Kumar Sao'
,'66 EE499 Thesis 6 to 24 NA DUGC EECS'
,'67 EE512 Advanced and Digital Control Systems 6 K16 103 Dr. Avishek Adhikari'
,'68 EE515 Wireless Communication Security With SDRS 3 B46 202 Dr. Arzad Alam Kherani'
,'69 EE521 Analog IC Design 6 L16 202 Dr. Kapil Jainwal'
,'70 EE529 Introduction to Wireless and Cellular Communications 6 H16 103 Dr. Sreejith T. V'
,'71 EE566 Math of TurnBased Strategy Games 3 A46 102 Dr. Arzad Alam Kherani'
,'72 EE567 Math of Machine Learning 3 A13 102 Dr. Arzad Alam Kherani'
,'73 EE599 Thesis 6 to 24 NA DPGC EECS'
,'74 EE605 Advanced Computer Networks 6 D16 103 Dr. Anand M. Baswade'
,'75 EE701 Wireless Mac Modeling 6 H16 302 Dr. Arzad Alam Kherani'
,'76 EE795 Phd Candidacy 0 NA DPGC EECS'
,'77 EE799 Thesis 6 to 24 NA DPGC EECS'
,'78 IC100 Introduction to Programming 6 J16, Q16 107, CC X16 107 Dr. Barun Gorain'
,'79 IC200 Introduction to Astronomy and Astrophysics 4 B14 207 X14 202, 203, 102 Dr. Mahavir Sharma'
,'80 IC250 Materials Chemistry 2 B56 207 X56 202, 203, 102 Dr. Arup Mukherjee'
,'81 IC601 Research Methodology 6 H16 204 Dr. Sanjib Banerjee'
,'82 LA303 Chinese Language Beginner’s 1 G11 202 Ms. Lu, Hao-Yu'
,'83 LA308 Positive Psychology 2 C12 202 Dr. Anindita Ghosh'
,'84 LA311 Chinese Language Beginner’s 2 G34 202 Ms. Lu, Hao-Yu'
,'85 LA313 Chinese Language Beginner’s 2 J12 202 Ms. Lu, Hao-Yu'
,'86 LA315 Chinese Language Beginner’s 1 G22 202 Ms. Lu, Hao-Yu'
,'87 LA324 Leadership: An Organizational Behaviour Perspective 2 J34 203 Dr. Anindita Ghosh'
,'88 LA326 Adaptation: Literature and Beyond 2 J56 202 Dr. Sonal Jha'
,'89 LA327 Introduction to Partition Literature 2 C34 202 Dr. Sonal Jha'
,'90 LA328 Economic Development in India 2 J56 203 Dr. Sitakanta Panda'
,'91 LA332 Chinese Culture 1 G55 202 Ms. Lu, Hao-Yu'
,'92 LA333 Chinese Calligraphy 1 J55 102 Ms. Lu, Hao-Yu'
,'93 LA354 Introduction to Postcolonial Literature 2 J12 203 Dr. Sonal Jha'
,'94 LA358 Game Theory 2 G34 203 Dr. Radeef Chundakkadan'
,'95 LA361 Introduction to Modern American Poetry 2 J34 202 Dr. Thirthankar Chakraborty'
,'96 LA362 Creative Writing: The Short Story 2 G56 302 Dr. Thirthankar Chakraborty'
,'97 LA795 Phd Candidacy 0 NA DPGC LA'
,'98 LA799 Thesis 6 to 24 NA DPGC LA'
,'99 MA505 Complex Analysis 6 A16 204 Dr. Lakshmi Kanta Patra'
,'100 MA506 Multi-Variable Calculus 4 E14 102 Dr. Anuj Jakhar'
,'101 MA507 Numerical Techniques 6 C16 102 Prof. P. D. Srivastava'
,'102 MA508 Topology 6 G16 204 Dr. Asrifa Sultana'
,'103 MA514 Analytic Number Theory 6 F16 103 Dr. Raj Kumar Mistri'
,'104 MA607 Fourier Analysis 6 I16 107 Dr. Avijit Pal'
,'105 MA611 Stochastic Processes 6 L16 303 Dr. Kuldeep Kumar Kataria'
,'106 MA618 Introduction to Spectral Theory 6 B16 204 Dr. Arnab Patra'
,'107 MA619 Advanced Algebraic Number Theory 6 H16 203 Dr. Anuj Jhakar'
,'108 MA699 Thesis 18 NA DPGC MA'
,'109 MA795 Phd Candidacy 0 NA DPGC MA'
,'110 MA799 Thesis 6 to 24 NA DPGC MA'
,'111 ME102 Engineering and Machine Drawing 3 S16 ME Lab Dr. Kaushik Bandyopadhayay'
,'112 ME151 Fundamentals of Metallurgy 3 I46 304 Dr. Rahul Jain'
,'113 ME213 Heat and Mass Transfer 6 L16 304 Dr. Udayraj'
,'114 ME232 Dynamics 6 H16 207 Dr. Anshul Faye'
,'115 ME334 Design of Machine Elements 6 A16 203 Dr. Purnendu Das'
,'116 ME352 Manufacturing Science 6 D16 107 Dr. Soumya Gangopadhyay Dr. Purnendu Das'
,'117 ME371 Mechanical Engineering Labs 3 S16 ME Lab Dr. Anshul Faye Dr. Vijay Shantaram Duryodhan'
,'118 ME372 Mechanical Engineering Labs 3 U16 ME Lab Dr. Rahul Jain Dr. Udayraj'
,'119 ME413 Refrigeration and Air-Conditioning 6 B16 203 Dr. Pravesh C. Shukla'
,'120 ME416 Power Plant Engineering 6 I16 207 Dr. Pravesh C. Shukla'
,'121 ME499 Thesis 6 to 24 NA DUGC ME'
,'122 ME513 Convective heat transfer 6 H16 303 Dr. Vijay S. Duryodhan'
,'123 ME555 The Science and Technology of Metal Forming 6 K16 302 Dr. Kaushik Bandyopadhayay'
,'124 ME556 Fluid Power Systems 4 E36 207 Dr. Jose Immanuel R.'
,'125 ME599 Thesis 6 to 24 NA DPGC ME'
,'126 ME613 Microfluidics 6 L16 203 Dr. Vijay S. Duryodhan'
,'127 ME616 Interfacial Transport Phenomena 6 F16 203 Dr. Nagesh Patil'
,'128 ME632 Fracture Mechanics 6 F16 204 Dr. Anshul Faye'
,'129 ME633 Finite Element Method 6 K16 107 Dr. Rahul Jain'
,'130 ME652 Automation 6 A16 207 Dr. Soumya Gangopadhyay'
,'131 ME653 Experimental Methods in Fluids and Thermal Science 6 K16 304 Dr. Balkrishna Mehta'
,'132 ME654 Advanced Materials - Development and Characterization 6 16 NA Dr. Jose Immanuel R.'
,'133 ME673 Computational Fluid Dynamics Laboratory 1 R34 CC Dr. Udayraj'
,'134 ME795 Phd Candidacy 0 NA DPGC ME'
,'135 ME799 Thesis 6 to 24 NA DPGC ME'
,'136 PH505 Electronics Laboratory 6 R16, I216 PH Lab Dr. Dhruv Singh'
,'137 PH506 Statistical Physics 6 L16 207 Dr. Sabyasachi Ghosh'
,'138 PH507 Quantum Mechanics 6 E16 204 Dr. Sesha Vempati'
,'139 PH509 Nuclear and Particle Physics 6 D16 204 Dr. Sudhanwa Patra'
,'140 PH510 Experimental Laboratory 6 T16, I116 PH Lab Dr. Sesha Vempati'
,'141 PH606 Particle Physics 6 F16 207 Dr. Sudhanwa Patra Dr. Sabyasachi Ghosh'
,'142 PH607 Relativistic matter at finite magnetic field 6 B16 107 Dr Sabyasachi Ghosh'
,'143 PH608 Physics of Galaxies and Interstellar Medium 6 E16 103 Dr. Mahavir Sharma'
,'144 PH699 Thesis 18 NA DPGC-PH'
,'145 PH795 Phd Candidacy 0 NA DPGC-PH'
,'146 PH799 Thesis 6 to 24 NA DPGC-PH'];


/*-----------------------------------------------------------------------------------------------------------*/





/*--------------------------------------BACKGROUND COLOR GRADIENT--------------------------------------------*/
/*    $scope.getBgImgObj= function(item){
        return {
            'background-image': "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,.95), rgba(0,0,0,.88))"
        }
    }       */
/*----------------------------------------------------------------------------------------*/





/*-----------------------------------VARIABLES--------------------------------------------*/
    $scope.monday_1=['A', 'R', 'R', '', 'M', 'M'];
    $scope.monday_2=['A', 'B', 'C', '', 'H', 'I'];
    $scope.tuesday_1=['D', 'S', 'S', '', 'N', 'N'];
    $scope.tuesday_2=['D', 'E', 'F', '', 'J', 'H'];
    $scope.wednesday_1=['G', 'T', 'T', '', 'O', 'O'];
    $scope.wednesday_2=['G', 'X', 'A', '', 'I', 'L'];
    $scope.thursday_1=['B', 'U', 'U', '', 'P', 'P'];
    $scope.thursday_2=['B', 'C', 'D', '', 'K', 'J'];
    $scope.friday_1=['E', 'V', 'V', '', 'Q', 'Q'];
    $scope.friday_2=['E', 'F', 'G', '', 'K', 'L'];

    $scope.monday=['----', '----', '----', '----', '----', '----'];
    $scope.tuesday=['----', '----', '----', '----', '----', '----'];
    $scope.wednesday=['----', '----', '----', '----', '----', '----'];
    $scope.thursday=['----', '----', '----', '----', '----', '----'];
    $scope.friday=['----', '----', '----', '----', '----', '----'];
  
    $scope.alpha=[
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', '']
    ];

    $scope.val=[0, 0, 0, 0, 0];
    $scope.value=0;
    var course_list=null;
/*----------------------------------------------------------------------------------------*/





/*------------------------FUNCTION THAT RETURNS MATCHED COURSE CODE-----------------------*/
function getcode(str){
var letternumber = /^[0-9a-zA-Z]+$/;
var valq="";
var res=[];
var code,ind=0; 


    for(var ui=0; ui<ch.length;ui++)
     {
         var temp = ch[ui].split(' ');
         for(var bi=0; bi<temp.length;bi++)
            res[ind++] = temp[bi];
     }

    var i=0;
    while(i<res.length)
       {
           if(!res[i].localeCompare(str))
           {

               j=i+1;
               while(j<res.length)
               {
                   var t1=false,t2=false,t3=true;
                 
                     if(res[j][0]=='N'&&res[j][1]=='A')
                       {
                         return res[j];
                       }

                   for(var u=0; u<res[j].length;u++)
                   {
                       code = res[j].charCodeAt(u);
                       if((code > 47 && code < 58))
                          {
                              t1 = true;
                          }
                       else if((code > 64 && code < 91))
                          {
                              t2 = true;
                          }
                       else
                          {
                              t3 = false;
                          }

                   }

                   if(t1 && t2 && t3)
                   {
                       i=res.length;
                       valq= valq + res[j];
                       break;
                   }
                   j++;
               }
           }
           i++;
         
       }


    var t1=false,t2=false,t3=true;
    for(var u=0; u<res[j+1].length;u++)
                   {
                       code = res[j+1].charCodeAt(u);
                       if((code > 47 && code < 58))
                          {
                              t1 = true;
                          }
                       else if((code > 64 && code < 91))
                          {
                              t2 = true;
                          }
                       else
                          {
                              t3 = false;
                          }

                   }

    if(t1 && t2 && t3)
    {
       valq= valq + res[j] + ',' + res[j+1];
     
    }

    return valq;
}
/*----------------------------------------------------------------------------------------*/





/*---------------------CHECKS IF ENTERED STRING IS IS VALID OR NOT------------------------*/
function validate(){

var str = document.getElementById("searchbar").value;
var t1=false,t2=false,t3=false, t4=false,x,y;

    for(var j=0; j<str.length;j++)
                   {
                       var code = str.charCodeAt(j);
                       x=44;                           //44 is ASCII code of comma.
                       y=32;                           //44 is ASCII code of space.

                       if((code > 47 && code < 58))
                          {
                              t1 = true;
                          }
                       else if((code > 64 && code < 91) || (code > 96 && code < 123))
                          {
                              t2 = true;
                          }
                       else if(code == x || code == y)
                          {
                              t3 = true;
                          }
                       else
                          {
                              t4 = true;
                          }

                   }

    if(t1 && t2 && !t4)
              {
                 return 1;
              }

    return 0;

}
/*----------------------------------------------------------------------------------------*/






/*-------------------------FUNCTION THAT HANDLES TABLE LIST DISPLAY-----------------------*/
    $scope.toggle = function(ind){

    $scope.val[ind]=!($scope.val[ind]);

         if(ind!=-1)
         {
           var final= [0, 0, 0, 0, 0];
           var j, i;
           for(j=0;j<5;j++)
           {
             for(i=j-1;i>=0;i--)
             {
               if($scope.val[i]==1)
               {
                   final[j-1]= j-1-i;
                   break;
               }
             }

             if(i==-1 && j!=0)
             final[j-1] = j;
             if(j==0)
             final[j] = j;
           }

           for(j=0;j<4;j++)
           {
               final[j]= 15*(final[j]);
               if(j==0)
               document.documentElement.style.setProperty('--a', final[j] + "%");
               if(j==1)
               document.documentElement.style.setProperty('--b', final[j] + "%");
               if(j==2)
               document.documentElement.style.setProperty('--c', final[j] + "%");
               if(j==3)
               document.documentElement.style.setProperty('--d', final[j] + "%");
           }


         }

         else
         {

           document.documentElement.style.setProperty('--a', 0 + "%");
           document.documentElement.style.setProperty('--b', 0 + "%");
           document.documentElement.style.setProperty('--c', 0 + "%");
           document.documentElement.style.setProperty('--d', 0 + "%");


           if($scope.val[0]==0 || $scope.val[1]==0 || $scope.val[2]==0 || $scope.val[3]==0 || $scope.val[4]==0 )
           {
               for(var i=0;i<5;i++)
                  $scope.val[i]=1;
           }

           else
           {
               for(var i=0;i<5;i++)
                  $scope.val[i]=0;
           }
         }

           $scope.value=!($scope.value);
    };
/*----------------------------------------------------------------------------------------*/

  
  
  
  
  
  
  
  
  
/*------------------------Function to check if courses clash or not-----------------------*/
$scope.clash = function(abc){

    var  code_list=abc.split(' ');
    var i,j;
  
    for(i=0;i<code_list.length;i++)
      {
        for(j=i+1;j<code_list.length;j++)
          {
            if(code_list[i][0]<=code_list[j][0] && code_list[i][1]>=code_list[j][0] )
              return 0;
            if(code_list[i][0]<=code_list[j][1] && code_list[i][1]>=code_list[j][0] )
              return 0;
          }
      }
  
    return 1;
} 
  
/*----------------------------------------------------------------------------------------*/   
  
  
 
 
 
 
 
 
 
 
  
  
/*---------------Function to show complete courses in the clicked button------------------*/
 $scope.show_it = function(abc){

 var aa1=parseInt(abc[0]);
 var aa2=parseInt(abc[1]);
   
 if($scope.alpha[aa1][aa2].length>20)  
   alert($scope.alpha[aa1][aa2]);  
   
} 
  
/*----------------------------------------------------------------------------------------*/ 

  
  
  




/*--------------------------------------Cookies-------------------------------------------*/
$scope.Getcookies = function(){

    course_list= $cookies.get('courselist');

    if(course_list!=null)
    $scope.dev();
}

$scope.Setcookies = function(stg){

   var now = new Date();
   var exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());

   $cookies.put("courselist", stg, {expires: exp});


}
/*----------------------------------------------------------------------------------------*/







/*---------------------------------CALCULATES TIME TABLE-----------------------------------*/
    $scope.dev = function(){

      var course_match="";
      var entered_str=null;
      var str1 = document.getElementById("searchbar").value;
      entered_str= str1.toUpperCase();
      var xy=validate();

      if(xy===1)
      {
          $scope.Setcookies(entered_str);
      }

      else
      {
       if(entered_str!="")
        window.alert("Invalid Course Code");

       entered_str= course_list;
       xy=1;
      }

      var clash=0, letter_1,letter_last, letter_second_last;



      if(xy===1 && entered_str!=null){

      $scope.monday=['----', '----', '----', '----', '----', '----'];
      $scope.tuesday=['----', '----', '----', '----', '----', '----'];
      $scope.wednesday=['----', '----', '----', '----', '----', '----'];
      $scope.thursday=['----', '----', '----', '----', '----', '----'];
      $scope.friday=['----', '----', '----', '----', '----', '----'];

      $scope.alpha=[
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', '']
    ];
        
      $scope.beta=[
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', ''],
                  ['', '', '', '', '', '']
    ];



         var entered_value= entered_str.split(',');
         var i=0,code;
         while(i<entered_value.length)
          {
           if( entered_value[i][0]===' '){
            entered_value[i] = entered_value[i].substring(1,entered_value[i].length);
          }
          i++;
         }

         i=0;
         while(i<entered_value.length)
          {
              var t1=false,t2=false,t3=true;

              for(var j=0; j<entered_value[i].length;j++)
                {
                       code = entered_value[i].charCodeAt(j);

                       if((code > 47 && code < 58))
                          {
                              t1 = true;
                          }
                       else if((code > 64 && code < 91))
                          {
                              t2 = true;
                          }
                       else
                          {
                              t3 = false;
                          }

               }

              if(t1 && t2 && t3)
                {
                  var get_val = getcode(entered_value[i]);
                  var result= get_val.split(",");

                  var i1=0;
                  while(i1<result.length){
                    
                  if(result[i1][0]=='N'&&result[i1][1]=='A')
                    break;

                  letter_1=result[i1][0];
                  if(i1===0)
                  {
                        letter_last=result[i1][result[i1].length-1];
                        letter_second_last=result[i1][result[i1].length-2];
                  }
                  else
                  {
                      letter_last="t";
                      letter_second_last="Tu";
                  }

                  for(var o=0;o<6;o++){



                       if( $scope.monday_1[o]==letter_1 || $scope.monday_2[o]==letter_1 )
                       {
                         if(i1===0)
                          $scope.beta[0][o]+=letter_second_last + letter_last + ' ';
                         
                          var compae=$scope.monday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.monday[o].substr(0,5);

                              if($scope.clash($scope.beta[0][o]) === 1)
                               {
                                    $scope.monday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                              if(letter_1==='X')
                                    $scope.monday[o]=$scope.monday[o] + ' (T)';
                          }
                          else
                               $scope.monday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';
                         
                          $scope.alpha[0][o]+=entered_value[i] + '(' + letter_second_last + letter_last + ')           ';
                          

                       }



                       if( $scope.tuesday_1[o]==letter_1 || $scope.tuesday_2[o]==letter_1 )
                       {
                         if(i1===0)
                          $scope.beta[1][o]+=letter_second_last + letter_last + ' ';
                         
                          var compae=$scope.tuesday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.tuesday[o].substr(0,5);

                              if($scope.clash($scope.beta[1][o]) === 1)
                               {
                                    $scope.tuesday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                           if(letter_1==='X')
                                    $scope.tuesday[o]=$scope.tuesday[o] + ' (T)';
                          }
                          else
                               $scope.tuesday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';
                         
                         $scope.alpha[1][o]+=entered_value[i] + '(' + letter_second_last + letter_last + ')       ';
                         
                         
                       }




                       if( $scope.wednesday_1[o]==letter_1 || $scope.wednesday_2[o]==letter_1 )
                       {
                         if(i1===0)
                          $scope.beta[2][o]+=letter_second_last + letter_last + ' ';
                         
                          var compae=$scope.wednesday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.wednesday[o].substr(0,5);

                              if($scope.clash($scope.beta[2][o]) === 1)
                               {
                                    $scope.wednesday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                              if(letter_1==='X')
                                    $scope.wednesday[o]=$scope.wednesday[o] + ' (T)';
                          }
                          else
                               $scope.wednesday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';
                         
                         $scope.alpha[2][o]+=entered_value[i] + '(' + letter_second_last + letter_last + ')       ';
                        

                       }




                       if( $scope.thursday_1[o]==letter_1 || $scope.thursday_2[o]==letter_1 )
                       {
                         if(i1===0)
                          $scope.beta[3][o]+=letter_second_last + letter_last + ' ';
                        
                          var compae=$scope.thursday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.thursday[o].substr(0,5);

                              if($scope.clash($scope.beta[3][o]) === 1)
                               {
                                    $scope.thursday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                              if(letter_1==='X')
                                    $scope.thursday[o]=$scope.thursday[o] + ' (T)';
                          }
                          else
                               $scope.thursday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';

                         $scope.alpha[3][o]+=entered_value[i] + '(' + letter_second_last + letter_last + ')       ';
                         

                          }


                       if( $scope.friday_1[o]==letter_1 || $scope.friday_2[o]==letter_1 )
                       {
                         if(i1===0)
                         $scope.beta[4][o]+=letter_second_last + letter_last + ' ';
                         
                         var compae=$scope.friday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.friday[o].substr(0,5);

                              if($scope.clash($scope.beta[4][o]) === 1 )
                               {
                                    $scope.friday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                           if(letter_1==='X')
                                    $scope.friday[o]=$scope.friday[o] + ' (T)';
                          }
                          else
                               $scope.friday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';
                         
                          $scope.alpha[4][o]+=entered_value[i] + '(' + letter_second_last + letter_last + ')       ';
                         

                       }



                  }
                  i1++;
                  }
                }

          i++;
        }

        if($scope.val[0]==0 || $scope.val[1]==0 || $scope.val[2]==0 || $scope.val[3]==0 || $scope.val[4]==0 )
             $scope.toggle('-1');

      }

    else{
        ;
      }

    if(clash===1){
         $scope.Setcookies("");

         $scope.monday=['----', '----', '----', '----', '----', '----'];
         $scope.tuesday=['----', '----', '----', '----', '----', '----'];
         $scope.wednesday=['----', '----', '----', '----', '----', '----'];
         $scope.thursday=['----', '----', '----', '----', '----', '----'];
         $scope.friday=['----', '----', '----', '----', '----', '----'];
      }

};
/*----------------------------------------------------------------------------------------*/


});





