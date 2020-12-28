var myApp=angular.module("app",['ngAnimate','ngCookies']);
myApp.controller("controller",
function ($scope, $http, $cookies, $window){



/*------------------------------------------LIST OF COURses--------------------------------------------------*/

 var ch=['1 AA101 Essential Physical Activity 1 NA NA Dr. Suchetan Pal'
,'2 AA102 National Sports Organization 1 to 4 NA NA Dr. Suchetan Pal'
,'3 AA103 National Service Scheme 1 to 4 NA NA Dr. Pawan Kumar Mishra'
,'4 IC105 Probability and Statistics 4 NA NA TBA Dr. Kuldeep Kumar Kataria'
,'5 IC250 Materials Chemistry II 2 B12 X112 https://iitbhilai.webex.com/meet/b107 Dr. Arup Mukherjee'
,'6 IC251 Basics of Bioinformatics 4 B36 X136 https://iitbhilai.webex.com/meet/b107 Dr. Rukmankesh'
,'7 IC601 Research Methodology 6 A16 https://iitbhilai.webex.com/meet/b103 Dr. Sanjib Banerjee'
,'8 CA250 Professional Ethics 2 K56 https://iitbhilai.webex.com/meet/b202 Dr. Nagesh D Patil'
,'9 CS101 Discrete Structures I 4 NA NA Dr. Barun Gorain'
,'10 CS102 Data Structures 4 NA NA Dr. Soumajit'
,'11 CS250 Operating Systems 4 D36 https://iitbhilai.webex.com/meet/b304 Dr. Amit Kumar Dhar'
,'12 CS251 Introduction to Language Processing 4 F14 https://iitbhilai.webex.com/meet/b303 Dr. Vishwesh Jatala'
,'13 CS252 Algorithms II 4 H36 https://iitbhilai.webex.com/meet/b104 Dr. I. Vinod Kumar Reddy'
,'14 CS253 Theory of Computation II 2 D12 https://iitbhilai.webex.com/meet/b304 Dr. Rishi Ranjan Singh'
,'15 CS254 Database Management Systems 4 L14 https://iitbhilai.webex.com/meet/b103 Dr. Subhajit Siddhanta'
,'16 CS499 Thesis (BTech) 6 to 24 NA NA DUGC EECS'
,'17 CS503 Lightweight Cryptography 6 L16 https://iitbhilai.webex.com/meet/b104 Dr. Dhiman Saha'
,'18 CS510 Approximation Algorithm 6 C16 https://iitbhilai.webex.com/meet/b304 Dr. Barun Gorain (IC) Dr. Amit Kumar Dhar'
,'19 CS511 Introduction to Formal Verification and Its Applications 6 E16 https://iitbhilai.webex.com/meet/b103 Prof. Santosh Biswas'
,'20 CS552 Network Science 6 I16 https://iitbhilai.webex.com/meet/b304 Dr. Rishi Ranjan Singh'
,'21 CS550 Machine Learning 6 H16 https://iitbhilai.webex.com/meet/b303 Dr. SK Subidh Ali'
,'22 CS599 Thesis (MTech) 6 to 24 NA NA DPGC EECS'
,'23 CS608 Advanced Graph Algorithms 6 A16 https://iitbhilai.webex.com/meet/b104 Dr. I. Vinod Kumar Reddy'
,'24 CS795 PhD Candidacy 0 NA NA DPGC EECS'
,'25 CS799 Thesis (PhD) 6 to 24 NA NA DPGC EECS'
,'26 CY201 Surface Phenomena and Electrochemistry 2 L56 https://iitbhilai.webex.com/meet/b103 Dr. Satyajit Gupta'
,'27 CY202 Applied Chemistry 2 L12 https://iitbhilai.webex.com/meet/b102 Dr. Arup Mukherjee'
,'28 CY203 An Introduction to Food Science and Technology 2 F56 https://iitbhilai.webex.com/meet/b304 Dr. Arup Mukherjee'
,'29 CY507 Statistical Mechanics and Thermodynamics 4 I36 https://iitbhilai.webex.com/meet/b202 Dr. Rukmankesh'
,'30 CY508 Molecular Spectroscopy 4 D14 https://iitbhilai.webex.com/meet/b303 Dr. Satyajit Gupta'
,'31 CY509 Bioinorganic Chemistry 6 A16 https://iitbhilai.webex.com/meet/b107 Dr. Suchetan Pal'
,'32 CY510 Stereochemistry and Reaction Mechanism 6 K16 https://iitbhilai.webex.com/meet/b203 Dr. Ganapathy D'
,'33 CY511 Physical Organic Chemistry 2 H56 https://iitbhilai.webex.com/meet/b304 Dr. Sanjib Banerjee'
,'34 CY512 Thermal and Photochemical Reactions 4 H14 https://iitbhilai.webex.com/meet/b304 Dr. Raghavendra Medishetty'
,'35 CY513 Physical Chemistry Practical 2 S36 NA Dr. Suchetan Pal (IC) Dr. Satyajit Gupta'
,'36 CY514 Organic Chemistry Practical 2 V14 NA Dr. Sanjib banerjee (IC) Dr. Ganapathy D'
,'37 CY604 Solid State Chemistry 4 L36 https://iitbhilai.webex.com/meet/b102 Dr. Raghavendra Medishetty'
,'38 CY617 Introduction to Solar Energy Material 2 F12 https://iitbhilai.webex.com/meet/b304 Dr. Satyajit Gupta'
,'39 CY622 Introduction to Molecular Modelling 2 F34 https://iitbhilai.webex.com/meet/b304 Dr. Rukmankesh'
,'40 CY623 Chemistry of life 6 C16 https://iitbhilai.webex.com/meet/b302 Dr. Suchetan Pal'
,'41 CY624 Chemistry of Heterocyclic Compounds and Natural Products 6 G16 https://iitbhilai.webex.com/meet/b107 Dr. Ganapathy D'
,'42 CY627 An Introduction to Catalyst Design: Function and Application 2 L34 https://iitbhilai.webex.com/meet/b302 Dr. Arup Mukherjee'
,'43 CY628 Nano-engineered Molecular Materials 6 E16 https://iitbhilai.webex.com/meet/b102 Dr. Sanjib Banerjee'
,'44 CY629 Introduction to health, Safety and Environmental Practices 2 C34 https://iitbhilai.webex.com/meet/b203 Dr. Ganapathy D'
,'45 CY699 Project 18 NA NA DPGC CY'
,'46 CY795 PhD Candidacy 0 NA NA DPGC CY'
,'47 CY799 Thesis 24 NA NA DPGC CY'
,'48 DS501 Information Retrieval 6 J16 https://iitbhilai.webex.com/meet/b303 Dr. Soumajit Pramanik'
,'49 EE126 EE Independent Project 1 NA NA Dr. Avishek Adhikary'
,'50 EE204 Analog Circuits 6 L16 https://iitbhilai.webex.com/meet/b107 Dr. Kapil Jainwal'
,'51 EE205 Power Engineering I 6 D16 https://iitbhilai.webex.com/meet/b302 Dr. Prashant Agnihotri'
,'52 EE208 Electrical Machines 4 K14 https://iitbhilai.webex.com/meet/b202 Dr. Arzad Alam Kherani'
,'53 EE226 Electrical Engineering Lab I 1 S56 NA Dr. Nikhil Chander'
,'54 EE251 Electrical Engineering Lab I 2 S36 NA Dr. Nikhil Chander'
,'55 EE326 Electrical Engineering Lab IV 1 U56 NA Dr. Arzad Alam Kherani'
,'56 EE328 Independent Project 1 NA NA Dr. Arzad Alam Kherani'
,'57 EE352 Electrical Engineering Lab III 2 S14 NA Dr. Kapil Jainwal'
,'58 EE353 Electrical Engineering Lab IV 2 U36 NA Dr. Arzad Alam Kherani'
,'59 EE371 Independent Project 2 NA NA Dr. Arzad Alam Kherani'
,'60 EE499 Thesis (BTech) 6 to 24 NA NA DUGC EECS'
,'61 EE529 Introduction to Wireless and Cellular Communications 6 L16 https://iitbhilai.webex.com/meet/b202 Dr. Sreejith T V'
,'62 EE599 Thesis (MTech) 6 to 24 NA NA DPGC EECS'
,'63 EE601 Solar Photovoltaic Devices and Systems 6 K16 https://iitbhilai.webex.com/meet/b204 Dr. Nikhil Chander'
,'64 EE605 Advanced Computer Networks 6 I16 https://iitbhilai.webex.com/meet/b303 Dr. Anand Baswade'
,'65 EE701 wireless mac modeling 6 J16 https://iitbhilai.webex.com/meet/b204 Dr. Arzad Alam Kherani'
,'66 EE795 PhD Candidacy 0 NA NA DPGC EECS'
,'67 EE799 Thesis 6 to 24 NA NA DPGC EECS'
,'68 LA303 Chinese Language Beginner’s -1 1 G11 https://iitbhilai.webex.com/meet/b102 Ms. Hao Yu Lu'
,'69 LA308 Positive Psychology 2 J12 https://iitbhilai.webex.com/meet/b202 Dr. Anindita Ghosh'
,'70 LA311 Chinese Language Beginner’s – 3 2 J34 https://iitbhilai.webex.com/meet/b103 Ms. Hao Yu Lu'
,'71 LA312 Chinese Language Beginner’s– 4 2 G56 https://iitbhilai.webex.com/meet/b102 Ms. Hao Yu Lu'
,'72 LA315 Chinese Language Beginner ‘s– 2 1 G22 https://iitbhilai.webex.com/meet/b102 Ms. Hao Yu Lu'
,'73 LA324 Leadership an Organizational Behaviour Perspective 2 J34 https://iitbhilai.webex.com/meet/b104 Dr. Anindita Ghosh'
,'74 LA326 Adaptation: Literature and Beyond 2 J12 https://iitbhilai.webex.com/meet/b203 Dr. Sonal Jha'
,'75 LA327 Introduction to Partition Literature 2 J34 https://iitbhilai.webex.com/meet/b202 Dr. Sonal Jha'
,'76 LA329 Selected Topics in Indian Economy 2 G34 https://iitbhilai.webex.com/meet/b102 Dr. Sitakanta Panda'
,'77 LA332 Chinese Culture 1 G44 https://iitbhilai.webex.com/meet/b304 Ms. Hao Yu Lu'
,'78 LA333 Chinese Calligraphy 1 J22 https://iitbhilai.webex.com/meet/b103 Ms. Hao Yu Lu'
,'79 LA328 Economic Development in India 2 G56 https://iitbhilai.webex.com/meet/b103 Dr. Sitakanta Panda'
,'80 LA344 Introduction to English Romantic Poetry 2 G34 https://iitbhilai.webex.com/meet/b103 Dr. Thirthankar Chakraborty'
,'81 LA351 Elements of World Literature 2 G12 https://iitbhilai.webex.com/meet/b103 Dr. Thirthankar Chakraborty'
,'82 LA352 Classics and Science 4 J36 https://iitbhilai.webex.com/meet/b203 Dr. Anubhav Pradhan'
,'83 LA353 Experiencing the Indian University 2 12 https://iitbhilai.webex.com/meet/b104 Dr. Anubhav Pradhan'
,'84 LA354 Introduction to Postcolonial Literature 2 J56 https://iitbhilai.webex.com/meet/b103 Dr. Sonal Jha'
,'85 LA355 Chinese Basic 4 1 J11 https://iitbhilai.webex.com/meet/b103 Ms. Hao Yu Lu'
,'86 LA356 Chinese Basic 5 1 G33 https://iitbhilai.webex.com/meet/b304 Ms. Hao Yu Lu'
,'87 LA357 Chinese Basic 6 1 J55 https://iitbhilai.webex.com/meet/b104 Ms. Hao Yu Lu'
,'88 LA358 Game Theory 2 G12 https://iitbhilai.webex.com/meet/b104 Dr. Radeef Chundakkadan'
,'89 LA359 Introduction to Corporate Finance 2 G34 https://iitbhilai.webex.com/meet/b104 Dr. Radeef Chundakkadan'
,'90 LA795 PhD Candidacy 0 NA NA DPGC LA'
,'91 LA799 Thesis 24 NA NA DPGC LA'
,'92 MA505 Complex Analysis 6 A16 https://iitbhilai.webex.com/meet/b207 Dr. Anuj Jakhar'
,'93 MA506 Multi-Variable Calculus 4 C14 https://iitbhilai.webex.com/meet/b303 Dr. Raj Kumar Mistri'
,'94 MA507 Numerical Techniques 6 E16 https://iitbhilai.webex.com/meet/b104 Prof. P. D. Srivastava'
,'95 MA508 Topology 6 G16 https://iitbhilai.webex.com/meet/b204 Dr. Asrifa Sultana'
,'96 MA606 Partial Differential Equations 6 K16 https://iitbhilai.webex.com/meet/b107 Dr. Pawan Kumar Mishra'
,'97 MA608 Martingale Theory 6 H16 https://iitbhilai.webex.com/meet/b302 Dr. Kuldeep Kumar Kataria'
,'98 MA610 Operator Theory 6 J16 https://iitbhilai.webex.com/meet/b304 Dr. Avijit Pal'
,'99 MA611 Stochastic Processes 6 L16 https://iitbhilai.webex.com/meet/b203 Dr. Kuldeep Kumar Kataria'
,'100 MA614 Introductory Additive Number Theory 6 B16 https://iitbhilai.webex.com/meet/b204 Dr. Raj Kumar Mistri'
,'101 MA699 Project 18 NA NA DPGC MA'
,'102 MA795 PhD Candidacy 0 NA NA DPGC MA'
,'103 MA799 Thesis 6 to 24 NA NA DPGC MA'
,'104 ME213 Heat and Mass Transfer 6 H16 https://iitbhilai.webex.com/meet/b202 Dr. Udayraj'
,'105 ME232 Dynamics 6 F16 https://iitbhilai.webex.com/meet/b302 Dr. Anshul Faye'
,'106 ME334 Design of Machine Elements 6 A16 https://iitbhilai.webex.com/meet/b204 Dr. Purnendu Das'
,'107 ME351 Metrology, Measurements and 4 K36 https://iitbhilai.webex.com/meet/b103 Dr. Jose Immanuel R'
,'108 ME352 Manufacturing Science II 6 D16 https://iitbhilai.webex.com/meet/b204 Dr. Soumya Gangopadhyay'
,'109 ME371 Mechanical Engineering Lab 1 3 S16 NA Dr. Anshul Faye (IC) Dr. Vijay S Duryodhan'
,'110 ME372 Mechanical Engineering Lab 2 3 U16 NA Dr. Rahul Jain Dr. Udayraj'
,'111 ME416 Power Plant Engineering 6 I16 https://iitbhilai.webex.com/meet/b302 Dr. Pravesh Shukla Dr. Balkrishna Mehta'
,'112 ME499 Thesis (BTech) 6 to 24 NA NA DUGC ME'
,'113 ME513 Convective Heat Transfer 6 H16 https://iitbhilai.webex.com/meet/b203 Dr. Vijay S Duryodhan (IC) Dr. Udayraj'
,'114 ME515 Engine Management System 6 B16 https://iitbhilai.webex.com/meet/b102 Dr. Pravesh Shukla'
,'115 ME556 Fluid Power Systems 4 H16 https://iitbhilai.webex.com/meet/b204 Dr. Jose Immanuel R'
,'116 ME558 Surface Engineering 6 L16 https://iitbhilai.webex.com/meet/b204 Dr. Purnendu (IC) Dr. Soumya Gangopadhyay'
,'117 ME599 Thesis (MTech) 6 to 24 NA NA DPGC ME'
,'118 ME613 Microfluidics 6 K16 https://iitbhilai.webex.com/meet/b104 Dr. Vijay S Duryodhan'
,'119 ME616 Interfacial Transport Phenomena 6 L16 https://iitbhilai.webex.com/meet/b303 Dr. Nagesh D. Patil'
,'120 ME632 Fracture Mechanics 6 B16 https://iitbhilai.webex.com/meet/b103 Dr. Anshul Faye'
,'121 ME633 Finite Element Methods 6 I16 https://iitbhilai.webex.com/meet/b204 Dr. Rahul Jain'
,'122 ME654 Advanced Materials - Development and Characterization 6 A16 https://iitbhilai.webex.com/meet/b102 Dr. Jose Immanuel R'
,'123 ME795 PhD Candidacy 0 NA NA DPGC ME'
,'124 ME799 Thesis (PhD) 6 to 24 NA NA DPGC ME'
,'125 PH205 Relativity 2 C56 https://iitbhilai.webex.com/meet/b203 Dr. Sabyasachi Ghosh'
,'126 PH505 Electronics Laboratory 6 I16 https://iitbhilai.webex.com/meet/b203 Dr. Dhriti S. Ghosh'
,'127 PH507 Quantum Mechanics-II 6 E16 https://iitbhilai.webex.com/meet/b204 Dr. Sesha P Vempati'
,'128 PH508 Electrodynamics 6 A16 https://iitbhilai.webex.com/meet/b304 Dr. Dhriti S. Ghosh'
,'129 PH509 Nuclear and Particle Physics 6 C16 https://iitbhilai.webex.com/meet/b204 Dr. Sudhanwa Patra'
,'130 PH510 Experimental Laboratory 6 X16, V16 NA Dr. Sesha P Vempati'
,'131 PH515 Semiconductors and Applications 6 B16 https://iitbhilai.webex.com/meet/b104 Dr. Dhriti S. Ghosh Dr. Dhruv P Singh Dr. Sesha P Vempati'
,'132 PH517 Astrophysics and Cosmology 6 H16 https://iitbhilai.webex.com/meet/b103 Dr. Mahavir Sharma'
,'133 PH605 Quantum Field Theory 6 F16 https://iitbhilai.webex.com/meet/b202 Dr. Sabyasachi Ghosh'
,'134 PH606 Particle Physics 6 D16 https://iitbhilai.webex.com/meet/b203 Dr. Sudhanwa Patra'
,'135 PH699 MSc(Project) 18 NA NA DPGC PH'
,'136 PH795 PhD Candidacy 0 NA NA DPGC PH'
,'137 PH798 Independent Study: High Energy Nuclear Physics 6 NA NA Dr. Sabyasachi Ghosh'
,'138 PH799 Thesis (Phd) 6 to 24 NA NA DPGC PH Sr. No. Course Cade Course Name Tutors Batch Dr. Suchetan Dr. Ganapathy D TBA Dr. Suchetan Pal TBA TBA'];


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





