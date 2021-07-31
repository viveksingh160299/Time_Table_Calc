var myApp=angular.module("app",['ngAnimate','ngCookies']);
myApp.controller("controller",
function ($scope, $http, $cookies, $window){



/*------------------------------------------LIST OF COURses--------------------------------------------------*/

 var ch=['1 AA101 Essential Physical Activity 1 to 4 16 NA NA Dr. Purnendu Das'
,'2 AA102 National Sports Organization 1 to 4 16 NA NA Dr. Purnendu Das'
,'3 AA103 National Service Scheme 1 to 4 16 NA NA Dr. Pawan Kumar Mishra'
,'4 CS300 Principles of Programming Languages 6 16 https://iitbhilai.webex.com/meet/b203 A16 Dr. Subhajit Sidhanta'
,'5 CS301 Computer Networks 6 16 https://iitbhilai.webex.com/meet/b203 E16 Dr. Baswade Anand Madhavrao'
,'6 CS499 Thesis 0 to 24 16 NA NA DUGC EECS'
,'7 CS500 Science of Computation 3 13 https://iitbhilai.webex.com/meet/b202 E13 Dr. Rishi Ranjan Singh'
,'8 CS501 Computer Systems 3 46 https://iitbhilai.webex.com/meet/b202 E46 Dr. S K Subidh Ali'
,'9 CS502 Graph Theory and Applications 6 16 https://iitbhilai.webex.com/meet/b202 C16 Dr. Vinod Kumar Reddy'
,'10 CS516 Parallelization of Programs 6 16 https://iitbhilai.webex.com/meet/b102 G16 Dr. Vishwesh Jatala'
,'11 CS550 Machine Learning 6 16 https://iitbhilai.webex.com/meet/b203 B16 Dr. S K Subidh Ali'
,'12 CS553 Cryptography 6 16 https://iitbhilai.webex.com/meet/b302 D16 Dr. Dhiman Saha'
,'13 CS554 Blockchain Technology 6 16 https://iitbhilai.webex.com/meet/b304 F16 Dr. Souradyuti Paul'
,'14 CS599 Thesis 0 to 24 16 NA NA DPGC EECS'
,'15 CS613 Social and Complex Network Analysis 6 16 https://iitbhilai.webex.com/meet/b103 I16 Dr. Rishi Ranjan Singh'
,'16 CS795 Phd Candidacy 0 NA NA NA DPGC EECS'
,'17 CS799 Thesis 0 to 24 16 NA NA DPGC EECS'
,'18 CY501 Quantum Chemistry 6 16 https://iitbhilai.webex.com/meet/b203 K16 Dr. Rukmankesh'
,'19 CY502 Chemical Kinetics and Surface Science 4 36 https://iitbhilai.webex.com/meet/b203 G36 Dr. Satyajit Gupta'
,'20 CY503 Coordination Chemistry 6 16 https://iitbhilai.webex.com/meet/b204 A16 Dr. Raghavender Medishetty'
,'21 CY504 Chemistry of main group Elements 6 16 https://iitbhilai.webex.com/meet/b203 C16 Dr. Arup Mukherjee'
,'22 CY505 Organic Reactions and Reagents 6 16 https://iitbhilai.webex.com/meet/b302 E16 Dr. Ganapathy D, Dr. Sanjib Banerjee'
,'23 CY506 Inorganic Chemistry Practical 2 36 https://iitbhilai.webex.com/meet/b102 N36 Dr. Raghavender Medishetty, Dr. Arup Mukherjee'
,'24 CY513 Physical Chemistry Lab 2 36 NA O36 Dr. Suchetan Pal'
,'25 CY515 Computations in Chemistry 2 23 https://iitbhilai.webex.com/meet/b303 G23 Dr. Rukmankesh'
,'26 CY603 Organometallic Chemistry: Principles and Applications 6 16 https://iitbhilai.webex.com/meet/b302 F16 Dr. Arup Mukherjee'
,'27 CY605 Advanced Organic Chemistry 6 16 https://iitbhilai.webex.com/meet/b204 B16 Dr. Ganapathy D'
,'28 CY607 Interpretative Molecular Spectroscopy 6 16 https://iitbhilai.webex.com/meet/b303 D16 Dr. Suchetan Pal'
,'29 CY614 Biomaterials Science and Engineering 2 12 https://iitbhilai.webex.com/meet/b102 J12 Dr. Suchetan Pal'
,'30 CY699 Thesis 0 to 24 16 NA NA DPGC CY'
,'31 CY795 Phd Candidacy 0 NA NA NA DPGC CY'
,'32 CY799 Thesis 0 to 24 16 NA NA DPGC CY'
,'33 DS503 Advanced Data Analytics 6 16 https://iitbhilai.webex.com/meet/b103 H16 Dr. Gagan Raj Gupta'
,'34 DS601 Digital Image Processing 6 16 https://iitbhilai.webex.com/meet/b103 J16 Dr. Nitin Khanna'
,'35 EE226 Electrical Engineering Lab – I – Part II 1 56 NA Q56 Dr. Nikhil Chander'
,'36 EE301 Communication Systems 4 14 https://iitbhilai.webex.com/meet/b202 A14 Dr. Arzad Alam Kherani'
,'37 EE351 EE Lab-II (Communication Systems Lab) 2 36 NA P36 Dr. Prashant Agnihotri'
,'38 EE499 Thesis 0 to 24 16 NA NA DUGC EECS'
,'39 EE504 Design of Analog and Mixed Signal Circuits 6 16 https://iitbhilai.webex.com/meet/b104 H16 Dr. Avishek Adhikary'
,'40 EE509 Power Electronics 6 16 https://iitbhilai.webex.com/meet/b303 F16 Dr. Prashant Agnihotri'
,'41 EE526 Digital IC Design 6 16 https://iitbhilai.webex.com/meet/b102 C16 Dr. Kapil Jainwal'
,'42 EE543 Fundamentals of Mlops 2 34 https://iitbhilai.webex.com/meet/b202 D34 Dr. Arzad Alam Kherani, Dr. Subhajit Sidhanta'
,'43 EE599 Thesis 0 to 24 16 NA NA DPGC EECS'
,'44 EE601 Solar Photovoltaic Devices and Systems 6 16 https://iitbhilai.webex.com/meet/b104 I16 Dr. Nikhil Chander'
,'45 EE611 Introduction to Information Theory and Coding 6 16 https://iitbhilai.webex.com/meet/b302 B16 Dr. Sreejith T. V'
,'46 EE777 Mobile Communications Systems 6 16 https://iitbhilai.webex.com/meet/b303 E16 Dr. Arzad Alam Kherani'
,'47 EE795 Phd Candidacy 0 NA NA NA DPGC EECS'
,'48 EE799 Thesis 0 to 24 16 NA NA DPGC EECS'
,'49 IC300 Materials Chemistry III 2 12 https://iitbhilai.webex.com/meet/b202 D12 Dr. Satyajit Gupta'
,'50 IC601 Research Methodology 6 16 https://iitbhilai.webex.com/meet/b302 A16 Dr. Sanjib Banerjee'
,'51 LA795 Phd Candidacy 0 NA NA NA DPGC LA'
,'52 LA799 Thesis 0 to 24 16 NA NA DPGC LA'
,'53 LA325 Concepts Of Personality Psychology 2 34 https://iitbhilai.webex.com/meet/b104 L34 Dr. Anindita Ghosh'
,'54 LA347 Introduction to Organizational Behaviour 2 12 https://iitbhilai.webex.com/meet/b102 L12 Dr. Anindita Ghosh'
,'55 LA703 Positive Organizational Behaviour 6 16 TBA Dr. Anindita Ghosh'
,'56 LA322 Microeconomics 2 12 https://iitbhilai.webex.com/meet/b102 I12 Dr. Radeef Chundakkadan'
,'57 LA710 Modern Indian Literature: Currents and Countercurrents 6 16 https://iitbhilai.webex.com/meet/b102 F16 Dr. Anubhav Pradhan'
,'58 LA339 Financial Economics 2 34 https://iitbhilai.webex.com/meet/b202 I34 Dr. Radeef Chundakkadan'
,'59 LA360 Self and Society in Modern India 2 56 https://iitbhilai.webex.com/meet/b204 I56 Dr. Anubhav Pradhan'
,'60 LA323 Introduction to Popular Culture 2 12 https://iitbhilai.webex.com/meet/b203 D12 Dr. Sonal Jha'
,'61 LA337 Entrepreneurship and Startups 4 36 https://iitbhilai.webex.com/meet/b102 D36 Dr. Sitakanta Panda'
,'62 LA706 Development Economics 6 16 https://iitbhilai.webex.com/meet/b303 B16 Dr. Sitakanta Panda'
,'63 LA349 Contemporary Indian Cinema: Beyond Bollywood 2 34 https://iitbhilai.webex.com/meet/b203 D34 Dr. Sonal Jha'
,'64 LA707 Macroeconomics Theory 6 16 https://iitbhilai.webex.com/meet/b304 D16 Dr. Radeef Chundakkadan'
,'65 LA705 Cultural Studies: Theory and Practice 6 16 https://iitbhilai.webex.com/meet/b102 E16 Dr. Sonal Jha'
,'66 LA345 Introduction to Classical Theatre 2 56 https://iitbhilai.webex.com/meet/b102 L56 Dr. Thirthankar Chakraborty'
,'67 LA351 Elements of World Literature 2 34 https://iitbhilai.webex.com/meet/b202 L34 Dr. Thirthankar Chakraborty'
,'68 LA704 Literary Theory 6 16 https://iitbhilai.webex.com/meet/b302 C16 Dr. Thirthankar Chakraborty'
,'69 LA303 Chinese Language Beginner’s-1 1 11 https://iitbhilai.webex.com/meet/b202 K11 Ms Hao-Yu Lu'
,'70 LA311 Chinese Language Beginner’s-3 2 34 https://iitbhilai.webex.com/meet/b102 L34 Ms Hao-Yu Lu'
,'71 LA312 Chinese Language Beginner’s-4 2 56 https://iitbhilai.webex.com/meet/b202 K56 Ms Hao-Yu Lu'
,'72 LA315 Chinese Language Beginner’s-2 1 22 https://iitbhilai.webex.com/meet/b202 K22 Ms Hao-Yu Lu'
,'73 LA332 Chinese Culture 1 33 https://iitbhilai.webex.com/meet/b202 K33 Ms Hao-Yu Lu'
,'74 LA333 Chinese Calligraphy 1 55 https://iitbhilai.webex.com/meet/b104 L55 Ms Hao-Yu Lu'
,'75 LA798 Independent Study: Literary and Urban Studies 6 16 NA NA Dr. Anubhav Pradhan'
,'76 LA798 Independent Study: Literary and Cultural Studies 6 16 NA NA Dr. Thirthankar Chakraborty'
,'77 MA500 Real Analysis 6 16 https://iitbhilai.webex.com/meet/b303 C16 Dr. Avijit Pal'
,'78 MA501 Linear Algebra 6 16 https://iitbhilai.webex.com/meet/b303 A16 Dr. Arnab Patra'
,'79 MA502 Modern Algebra 4 14 https://iitbhilai.webex.com/meet/b202 B14 Dr. Anuj Jakhar'
,'80 MA503 Introduction to Probability Theory 4 14 https://iitbhilai.webex.com/meet/b207 E14 Dr. Lakshmi Kanta Patra'
,'81 MA504 Differential Equations 4 36 https://iitbhilai.webex.com/meet/b302 G36 Dr. Pawan Kumar Mishra'
,'82 MA509 Statistical Inference 6 16 https://iitbhilai.webex.com/meet/b302 H16 Dr. Kuldeep Kumar Kataria'
,'83 MA510 Elementary Number Theory 6 16 https://iitbhilai.webex.com/meet/b104 J16 Dr. Raj Kumar Mistri'
,'84 MA513 Introduction to Linear Regression and Experimental Design 6 16 https://iitbhilai.webex.com/meet/b103 L16 Dr. Lakshmi Kanta Patra'
,'85 MA604 Functional Analysis 6 16 https://iitbhilai.webex.com/meet/b103 F16 Dr. Parameshwary Dayal Srivastava'
,'86 MA605 Operations Research 4 14 https://iitbhilai.webex.com/meet/b204 D14 Dr. Arnab Patra'
,'87 MA606 Partial Differential Equations 6 16 https://iitbhilai.webex.com/meet/b103 E16 Dr. Pawan Kumar Mishra'
,'88 MA609 Numerical Optimization Techniques 2 56 https://iitbhilai.webex.com/meet/b202 D56 Dr. Asrifa Sultana'
,'89 MA616 Algebraic Number Theory 6 16 https://iitbhilai.webex.com/meet/b103 G16 Dr. Anuj Jakhar'
,'90 MA699 Project 24 16 NA NA DPGC MA'
,'91 MA795 Phd Candidacy 0 NA NA NA DPGC MA'
,'92 MA799 Thesis 0 to 24 16 NA NA DPGC MA'
,'93 ME333 Theory of Machines and Mechanism 6 16 https://iitbhilai.webex.com/meet/b304 A16 Dr. Purnendu Das'
,'94 ME371 Mechanical Engineering Labs-I 3 16 NA P36 Dr. Vijay Shantaram Duryodhan, Dr. Anshul Faye'
,'95 ME415 Introduction to Turbomachines 6 16 https://iitbhilai.webex.com/meet/b103 A16 Dr. Balkrishna Mehta'
,'96 ME499 Thesis 0 to 24 16 NA NA DUGC EECS'
,'97 ME512 Advanced Fluid Mechanics 6 16 https://iitbhilai.webex.com/meet/b304 B16 Dr. Vijay Shantaram Duryodhan'
,'98 ME514 Internal Combustion Engines Fundamental 6 16 https://iitbhilai.webex.com/meet/b207 C16 Dr. Pravesh Chandra Shukla'
,'99 ME531 Advanced Mechanics of Solids 6 16 https://iitbhilai.webex.com/meet/b103 C16 Dr. Anshul Faye'
,'100 ME551 Advanced Manufacturing Processes 6 16 https://iitbhilai.webex.com/meet/b104 E16 Dr. Soumya Gangopadhyay'
,'101 ME553 Advanced Materials and Processing 4 36 https://iitbhilai.webex.com/meet/b203 I36 Dr. Jose Immanuel R'
,'102 ME557 Laser Material Processing 6 16 https://iitbhilai.webex.com/meet/b104 G16 Dr. Kaushik Bandyopadhyay'
,'103 ME599 Thesis 0 to 24 16 NA NA DPGC ME'
,'104 ME601 Applied numerical methods 6 16 https://iitbhilai.webex.com/meet/b104 F16 Dr. Vijay Shantaram Duryodhan'
,'105 ME615 Computational Fluid Dynamics 6 16 https://iitbhilai.webex.com/meet/b103 D16 Dr. Nagesh Devidas Patil'
,'106 ME795 Phd Candidacy 0 NA NA NA DPGC ME'
,'107 ME798 Independent Study: Electronic Cooling Systems 6 16 NA NA Dr. Nagesh Devidas Patil'
,'108 ME799 Thesis 0 to 24 16 NA NA DPGC ME'
,'109 PH501 Classical Mechanics 6 16 https://iitbhilai.webex.com/meet/b104 A16 Dr. Sabyasachi Ghosh'
,'110 PH502 Quantum Mechanics-I 6 16 https://iitbhilai.webex.com/meet/b104 C16 Dr. Sabyasachi Ghosh'
,'111 PH503 Mathematical Physics 6 16 https://iitbhilai.webex.com/meet/btech_2020 E16 Dr. Sudhanwa Patra'
,'112 PH504 Computational Physics 6 16 https://iitbhilai.webex.com/meet/b202 G16 Dr. Sudhanwa Patra'
,'113 PH511 Atomic and Molecular Physics 6 16 https://iitbhilai.webex.com/meet/b103 B16 Dr. Mahavir Sharma'
,'114 PH512 Solid State Physics 6 16 https://iitbhilai.webex.com/meet/b104 D16 Dr. Sesha Pavan Kumar Vempati'
,'115 PH513 Experimental and Measurement Techniques 6 16 https://iitbhilai.webex.com/meet/b207 F16 Dr. Dhruv Pratap Singh'
,'116 PH604 Advanced Quantum Mechanics 4 14 https://iitbhilai.webex.com/meet/b102 H14 Dr. Sudhanwa Patra'
,'117 PH657 Feynman Diagram Calculation 2 56 https://iitbhilai.webex.com/meet/b303 H56 Dr. Sabyasachi Ghosh'
,'118 PH699 Project 24 16 NA NA DPGC PH'
,'119 PH795 Phd Candidacy 0 NA NA NA DPGC PH'
,'120 PH799 Thesis 0 to 24 16 NA NA DPGC PH'];


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





